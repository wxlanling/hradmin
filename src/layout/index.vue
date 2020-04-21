<template>
  <div>
    <el-container style="min-height: 980px;">
      <!-- 侧边栏 -->
      <el-aside width="250px">
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <!-- 右边头部 -->
        <el-header>
          <newheader></newheader>
        </el-header>
        <!-- 右边内容 -->
        <el-main>
          <rtab></rtab>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import rtab from '@/components/routerTab/index'
import sidebar from "./sidebar/index";
import newheader from './head/index'
export default {
  name: "layout",
  components: {
    sidebar,
    newheader,
    rtab
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
/* .el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}  */
.el-header{
  padding: 0;
}
</style>