<template>
  <div class="list--wrapper both--100">
     <el-table
      :data="admins"
      height="100%"
      style="width: 100%">
      <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="编号：">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="姓名：">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="账号：">
            <span>{{ props.row.account }}</span>
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
          <el-form-item label="创建人：">
            <span>{{ props.row.creator }}</span>
          </el-form-item>
          <el-form-item label="类型：">
            <span>{{ props.row.type | filterAdminTypes }}</span>
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
        prop="creator"
        label="创建人">
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
import { getAllAdmins, deleteAdminById } from 'services'
import { filterAdminTypes, filterPassword } from 'tool/filters'
export default {
  name: 'adminList',
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
        deleteAdminById({
          id: row.id
        }).then(res => {
          this.refreshAdmins()
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
    filterAdminTypes,
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
