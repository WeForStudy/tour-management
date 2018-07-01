<template>
  <div class="add--wrapper both--100 flex--bcenter">
     <div class="box">
       <h2 class="form--title">{{title}}</h2>
       <el-form :model="models" status-icon :rules="rules" ref="form" class="add--form" label-width="80px">
        <el-form-item prop="account" class="width--100" label="编号">
          <el-input  v-model="models.id" auto-complete="off" placeholder="编号" :disabled="true">
            <i slot="prefix" class="el-input__icon el-icon-menu"></i>
            </el-input>
        </el-form-item>
        <el-form-item prop="account" class="width--100" label="账号">
          <el-input  v-model="models.account" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="el-input__icon el-icon-info"></i>
            </el-input>
        </el-form-item>
        <el-form-item prop="name" class="width--100" label="姓名"> 
          <el-input v-model="models.name" auto-complete="off" placeholder="姓名">
            <i slot="prefix" class="el-input__icon el-icon-news"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="phone" class="width--100" label="手机号"> 
          <el-input v-model="models.phone" auto-complete="off" placeholder="手机号">
            <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" class="width--100" label="密码"> 
          <el-input type="password" v-model="models.password" auto-complete="off" placeholder="密码" :disabled="true">
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="paswword" class="width--100" label="创建时间"> 
          <el-input v-model="models.createTime" auto-complete="off" placeholder="密码" :disabled="true">
            <i slot="prefix" class="el-input__icon el-icon-date"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="width--100" prop="type"  label="类别">
          <el-select v-model="models.type" placeholder="请选择管理员类别" class="width--100">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.key"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item  class="width--100 flex flex--space--around">
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
          <el-button type="normal" @click="cancel()">取消</el-button>
          <el-button type="danger" @click="reset()">重置密码</el-button>
        </el-form-item>
      </el-form>
     </div>
    </div>
</template>

<script>
import { updateAdmin, singleAdmin } from 'services'
import { AdminTypes } from 'enum'
export default {
    created() {
      const { id } = this.$route.query
      this.refreshModels(id)
      this.types = Object.keys(AdminTypes).map(item => AdminTypes[item])
    },
    data() {
      const validateAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      return {
        models: {
          id: '',
          account: '',
          name: '',
          phone: '',
          password: '',
          type: AdminTypes.NORMAL.value,
        },
        types: [],
        rules: {
          account: [
            { trigger: 'blur', required: true, message: '账号不能为空' }
          ],
          phone: [
            { trigger: 'blur', required: true, message: '手机号不能为空' }
          ],
          name: [
            { trigger: 'blur', required: true, message: '姓名不能为空' }
          ],
          password: [
            { trigger: 'blur', required: true, message: '密码不能为空' }
          ],

        }
      };
    },
    methods: {
      refreshModels(id) {
        singleAdmin({id}).then(res => {
          this.models = res
        }).catch(err => {
          this.$message.error(err.message || err || '网络异常')
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            updateAdmin({
              ...this.models,
            }).then(res => {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
              this.$refs[formName].clearValidate()
              const { id } = this.$route.query
              this.refreshModels(id)
            }).catch(
              err => {
              this.$message.error(err.message || err || '添加失败')
            })
          } else {
            this.$message.error('提交错误')
            return false;
          }
        });
      },
      reset() {
        const params = {
          ...this.models,
          password: '123456'
        }

        const ok = () => {
          updateAdmin(params).then(res => {
            this.$message({
              message: '重置成功',
              type: 'success'
            })
            const { id } = this.$route.query
            this.refreshModels(id)
          }).catch(err => {
            this.$message.error(err.message || err || '添加失败')
          })
        }
        this.$confirm('确定要重置吗？').then(_ => {
          ok();
        }).catch(_ => this.$message('取消操作'));
      },
      cancel() {
        this.$router.go(-1)
      }
    },
    computed: {
      title() {
        return '修改管理员'
      }
    }
  }
</script>

<style lang="stylus" scoped>
.box {
  width 400px
  .form--title {
    font-size 30px
    text-align center
    margin-bottom 30px
  }
}

</style>
