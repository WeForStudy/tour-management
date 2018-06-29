<template>
  <el-menu :default-active="activeRoute" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="slide.isCollapse" :router="true">
    <template v-for="item in sliderList">
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
import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        sliderList: [

          { 
            name: 'dashboard',
            text: '首页',
            path: 'dashboard',
            icon: 'menu',
          },
          {
            name: 'guide',
            text: '导游模块',
            icon: 'edit',            
            children: [
              { 
                name: 'glist',
                text: '导游列表', 
                path: 'glist', 
              },
            ],
          },
          {
            name: 'user',
            text: '用户模块',
            icon: 'edit',            
            children: [
              { 
                name: 'ulist',
                text: '用户列表', 
                path: 'ulist', 
              },
            ],
          },
         
        ]
      }
    },
    computed: {
      activeRoute() {
        return this.$route.path.slice(1)
      },
      ...mapState([
        'slide'
      ])
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      // routerClick(path) {
      //   this.$router.push({ path })
      // }
    }
  }
</script>
<style lang="stylus" scoped>
.el-menu-vertical-demo {
  border none
}
</style>
