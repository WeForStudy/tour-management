<template>
  <div class="add--wrapper both--100 flex--bcenter">
     <div class="box auto--margin">
       <h2 class="form--title">{{title}}</h2>
       <el-form :model="models" status-icon :rules="rules" ref="form" class="add--form">
        <el-form-item prop="name" class="width--100"> 
          <el-input v-model="models.name" auto-complete="off" placeholder="姓名">
            <i slot="prefix" class="el-input__icon el-icon-news"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="phone" class="width--100"> 
          <el-input v-model="models.phone" auto-complete="off" placeholder="手机号">
            <i slot="prefix" class="el-input__icon el-icon-mobile-phone"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" class="width--100"> 
          <el-input type="password" v-model="models.password" auto-complete="off" placeholder="密码">
            <i slot="prefix" class="el-input__icon el-icon-edit"></i>
          </el-input>
        </el-form-item>
        <el-form-item  class="width--100 flex--space--around">
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
          <el-button type="normal" @click="cancel()">取消</el-button>
          <el-button type="danger" @click="reset('form')">清空</el-button>
        </el-form-item>
      </el-form>
     </div>
    </div>
</template>

<script>
import { addGuider } from 'services'
export default {
    created() {
    },
    data() {
      return {
        models: {
          name: '',
          phone: '',
          password: '',
        },
        rules: {
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            addGuider({
              ...this.models,
            }).then(res => {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
              this.reset('form')
            }).catch(err => {
              this.$message.error(err.message || err || '添加失败')
            })
          } else {
            this.$message.error('提交错误')
            return false;
          }
        });
      },
      reset(val) {
        this.$refs[val].resetFields();
      },
      cancel() {
        this.$router.go(-1)
      }
    },
    computed: {
      title() {
        return '添加向导'
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
