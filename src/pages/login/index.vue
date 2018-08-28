<template>
  <div class="login--wrapper both--100">
    <div class="box auto--margin">
      <div class="login--hint">
        <h2 class="login--title">导游中心管理系统</h2>
        <div class="login--tip">账号密码登陆</div>
      </div>
      <el-form :model="models" status-icon :rules="rules" ref="form" class="login--form">
        <el-form-item prop="account" class="width--100">
          <el-input v-model="models.account" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="el-input__icon el-icon-info"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" class="width--100">
          <el-input type="password" v-model="models.password" auto-complete="off" placeholder="密码">
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="width--100">
          <el-button type="primary" @click="submitForm('form')" class="both--100">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import { onLogin, getPublicKey, RSALogin } from "services";
import { set } from "storage";
import { ADMIN_KEY } from "storage/keys";
import { mapActions, mapState } from "vuex";
import NodeRSA from 'node-rsa';
export default {
  data() {
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    return {
      models: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ trigger: "blur", required: true, message: "账号不能为空" }],

        password: [{ trigger: "blur", required: true, message: "密码不能为空" }]
      },
      publicKey: undefined,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 判断是否有公钥存储，如果没有，则需要向服务端请求，一般存在sessionStorage/其他数据载体
          if (!this.publicKey) {

            // 向服务端发送请求，获得公钥
            await getPublicKey()
              .then(res => {
                this.publicKey = res
              })
              .catch(err => {
                this.$message.error(err.message || err || "网络错误");
            });
          }
          // 对数据进行加密，并获得加密后的数据
          const entryptData =  this.entryptData(this.models)
          
          // 拿到加密后的数据调用登录接口
          await RSALogin(
            entryptData,
          ).then(res => {
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            set(ADMIN_KEY, res, window.sessionStorage)
            this.login(res)
            this.$router.push({name: 'dashboard'})
          }).catch(err => {
             this.$message.error(err.message || err || '登录失败')
          })
        } else {
          this.$message.error("提交错误");
          return false;
        }
      });
    },
    entryptData(props) {
      // 生成RSA对象
      const RSAkey = new NodeRSA({ b: 512 })
      // 导入公钥
      RSAkey.importKey(this.publicKey)
      console.log('数据对象加密前：', props)
      const afterEncrypt = Object.keys(props).reduce((init, key) => {
        
        const item = props[key]
        console.log('字段加密前：', item)

        const entryptItem = RSAkey.encrypt(item, 'base64')
        console.log('字段加密后：', entryptItem)

        init[key] = entryptItem
        return init
      }, {})
      console.log('数据对象加密后：', afterEncrypt)
      return afterEncrypt
    },
    ...mapActions(["login"])
  }
};
</script>

<style lang="stylus" scoped>
.login--wrapper {
  .box {
    width: 400px;
    margin-top: 170px;
  }

  .login--hint {
    .login--title {
      text-align: center;
      font-size: 40px;
      margin-bottom: 20px;
    }

    .login--tip {
      text-align: center;
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
}

.login--form {
  flex-direction: column;
}
</style>
