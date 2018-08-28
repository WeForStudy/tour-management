<template>
  <el-menu :default-active="activeRoute" class="el-menu-vertical-demo"  :collapse="slide.isCollapse" :router="true" :show-timeout="100" :hide-timeout="100">
    <template v-for="item in list">
      <el-menu-item v-if="!item.children" :key="item.name" :index="item.name" >
         <i :class="'el-icon-'+item.icon"></i>
         <span slot="title">{{item.text}}</span>
      </el-menu-item>
      <el-submenu v-else :key="item.name" :index="item.name">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.text}}</span>
        </template>
          <el-menu-item v-for="(child) in item.children" :key="child.name" :index="child.name" >
            {{child.text}}
          </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
import { mapState } from "vuex";
import { get } from "storage";
import { ADMIN_KEY } from "storage/keys";
import { AdminTypes } from "enum";
export default {
  data() {
    return {
      sliderList: [
        {
          name: "dashboard",
          text: "首页",
          path: "dashboard",
          icon: "menu"
        },
        {
          name: "admin",
          text: "管理员模块",
          icon: "news",
          children: [
            {
              name: "alist",
              text: "管理员列表",
              path: "alist"
            },
            {
              name: "adda",
              text: "新添管理员",
              path: "adda"
            }
            //  {
            //   name: 'updatea',
            //   text: '修改管理员',
            //   path: 'updatea',
            // },
          ]
        },
        {
          name: "guide",
          text: "导游模块",
          icon: "service",
          children: [
            {
              name: "glist",
              text: "导游列表",
              path: "glist"
            },
            {
              name: "addg",
              text: "新添导游",
              path: "addg"
            }
          ]
        },
        {
          name: "order",
          text: "订单模块",
          icon: "tickets",
          children: [
            {
              name: "olist",
              text: "订单列表",
              path: "olist"
            },
            {
              name: "addo",
              text: "新添订单",
              path: "addo"
            }
          ]
        }
      ]
    };
  },
  computed: {
    activeRoute() {
      return this.$route.name;
    },
    ...mapState(["slide"]),
    list() {
      const admin = get(ADMIN_KEY, window.sessionStorage);
      const { type } = admin;
      if (type === AdminTypes.NORMAL.value)
        return this.sliderList.filter((item, index) => item.name !== "admin");
      else return this.sliderList;
    }
  }
};
</script>
<style lang="stylus" scoped>
.el-menu-vertical-demo {
  border: none;
}
</style>
