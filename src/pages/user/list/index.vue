<template>
  <div class="list--wrapper both--100">
     <el-table
      :data="users"
      height="100%"
      style="width: 100%">
      <!-- address
      balance
      cardNo
      createTime
      extraInfo
      id
      name
      password
      phone
      status -->

      <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="编号：">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="姓名：">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="手机：">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="密码：">
            <span>{{ props.row.password | filterPassword}}</span>
          </el-form-item>
          <el-form-item label="创建时间：">
            <span>{{ props.row.createTime }}</span>
          </el-form-item>
          <el-form-item label="余额：">
            <span>{{ props.row.balance | filterMoney }}</span>
          </el-form-item>
          <el-form-item label="地址：">
            <span>{{ props.row.addrsss | filterCarNo }}</span>
          </el-form-item>
           <el-form-item label="身份证号：">
            <span>{{ props.row.carNo | filterCarNo }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
      label="操作"
      width="230">
      <template slot-scope="scope">
        <div class="flex">
          <!-- <el-button @click="handleEdit(scope.row, 'detail')" type="text" size="small" class="text--success">查看</el-button> -->
          <el-button type="text" size="small" @click="handleEdit(scope.row, 'edit')" class="text--primary">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row)" class="text--danger">删除</el-button>
        </div>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllUsers, deleteUserById } from 'services'
import { filterMoney, filterPassword, filterCarNo } from 'tool/filters'
export default {
  name: 'adminList',
  data() {
    return {
      users: []
    }
  },
  created() {
    this.refreshUsers()
  },
  methods: {
    refreshUsers() {
      getAllUsers().then(res => {
        this.users = res
      }).catch(err => {
        this.$message.error(err.message || err || '网络异常')
      })
    },
    handleEdit(row, type) {
      if (type === 'edit') {
        this.$router.push({name: 'updatea', query: { id: row.id }})
      }
    },
    handleDelete(row) {
      const ok = () => {
        this.$message({
          message: '删除成功',
          type: 'success',
        })
        deleteUserById({
          id: row.id
        }).then(res => {
          this.refreshUsers()
        }).catch(err => {
          this.$message.error(err.message || err || '删除失败')
        })
      }
      this.$confirm('确定要删除吗？')
      .then(_ => {
        ok();
      })
      .catch(_ => this.$message('取消操作'));
    }
  },
  filters: {
    filterPassword,
    filterMoney,
    filterCarNo,
  }
}
</script>

<style lang="stylus" scoped>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
