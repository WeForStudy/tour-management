<template>
  <div class="list--wrapper both--100">
     <el-table
      :data="orders"
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

      <!-- <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="编号：">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="用户编号：">
            <span>{{ props.row.userId }}</span>
          </el-form-item>
          <el-form-item label="向导编号：">
            <span>{{ props.row.guiderId }}</span>
          </el-form-item>
          <el-form-item label="总金额：">
            <span>{{ props.row.totalMoney | filterMoney}}</span>
          </el-form-item>
          <el-form-item label="订单时间：">
            <span>{{ props.row.orderTime }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column> -->
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="用户编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="guiderId"
        label="向导编号">
      </el-table-column>
      <el-table-column
        prop="totalMoney"
        label="总金额">
      </el-table-column>
      <el-table-column
        prop="orderTime"
        label="订单时间">
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
import { getAllOrders, deleteOrderById } from 'services'
import { filterMoney } from 'tool/filters'
export default {
  name: 'OrderList',
  data() {
    return {
      orders: []
    }
  },
  created() {
    this.refreshOrders()
  },
  methods: {
    refreshOrders() {
      getAllOrders().then(res => {
        this.orders = res
      }).catch(err => {
        this.$message.error(err.message || err || '网络异常')
      })
    },
    handleEdit(row, type) {
      if (type === 'edit') {
        this.$router.push({name: 'updateo', query: { id: row.id }})
      }
    },
    handleDelete(row) {
      const ok = () => {
        this.$message({
          message: '删除成功',
          type: 'success',
        })
        deleteOrderById({
          id: row.id
        }).then(res => {
          this.refreshOrders()
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
    filterMoney,
  },
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
