<template>
  <div class="login--wrapper">
     <el-table
      :data="admins"
      style="width: 100%">
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
        prop="creator"
        label="创建人">
      </el-table-column>
      <el-table-column
      label="操作"
      width="230">
      <template slot-scope="scope">
        <div class="flex">
          <el-button @click="handleEdit(scope.row, 'detail')" type="success" size="small">查看</el-button>
          <el-button type="primary" size="small" @click="handleEdit(scope.row, 'edit')">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </div>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAllAdmins, deleteAdminById } from 'services'
import { success, info } from 'tool'
export default {
  name: 'Login',
  data() {
    return {
      admins: []
    }
  },
  created() {
    this.refreshAdmins()
  },
  methods: {
    refreshAdmins() {
      getAllAdmins().then(res => {
        this.admins = res
      }).catch(err => {
        console.log(err)
        // this.$message
      })
    },
    handleEdit(row, type) {
      console.log(type)
    },
    handleDelete(row) {
      const ok = () => {
        this.$message({
          message: '删除成功',
          type: 'success',
        })
        deleteAdminById({
          id: row.id
        }).then(res => {
          this.refreshAdmins()
        }).catch(err => {
          console.log(err)
        })
      }
      this.$confirm('确定要删除吗？')
      .then(_ => {
        ok();
      })
      .catch(_ => this.$message('取消操作'));
    }
  }
}
</script>

<style lang="stylus">
</style>
