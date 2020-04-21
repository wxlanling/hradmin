<template>
  <el-menu
    router
    class="el-menu-vertical-demo"
    unique-opened
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="min-height: 980px;"
     :default-active="$route.path"
  >
    <el-menu-item index="/home">
      <i class="el-icon-setting"></i>
      <span slot="title">管理首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>机构</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/medicalexaminationcenter/index">体检中心</el-menu-item>
        <el-menu-item index="/brand/index">品牌</el-menu-item>
        <el-submenu index="2-1">
          <template slot="title">
             <!-- <i class="el-icon-location"></i> -->
            供应商
            </template>
          <el-menu-item index="/channel/index">体检</el-menu-item>
          <el-menu-item index="/Other/index">其他</el-menu-item>
        </el-submenu>
        <el-menu-item index="/Label/index">标签</el-menu-item>
        <el-menu-item index="/service/index">服务配置</el-menu-item>
        <el-menu-item index="/region/index">地区管理</el-menu-item>
        <el-menu-item index="/holiday/index">节假日</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>产品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/classify/index">产品配置</el-menu-item>
        <el-menu-item index="/setmealList/index">套餐列表</el-menu-item>
        <el-menu-item index="/productLabel/index">标签</el-menu-item>
        <el-menu-item index="/characteristic/index">特点</el-menu-item>
        <el-menu-item index="/Intendedfor/index">适用人群</el-menu-item>
        <el-menu-item index="/notice/index">体检须知</el-menu-item>
        <el-menu-item index="/purchaseGi/index">采购管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <!-- <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>项目</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/newproject/index">项目</el-menu-item>
        <el-menu-item index="/projectclassify/index">项目分类</el-menu-item>
        <el-menu-item index="/projectindex/index">指标</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->

    <!-- <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>订单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/orderlist/index">订单列表</el-menu-item>
        <el-menu-item index="/orderclassify/index">项目分类</el-menu-item>
        <el-menu-item index="5-3">指标</el-menu-item>
      </el-menu-item-group>
    </el-submenu> -->
  </el-menu>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>
<style scoped>

</style>