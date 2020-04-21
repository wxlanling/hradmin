<template>
  <div>
    <div>
      <div class="newlogin">
        <h1 class="title">管理系统</h1>
        <div class="login_onw">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name" placeholder="用户名"  suffix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" placeholder="密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      rules: {
        //效验
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        //   alert("submit!");
        this.$router.push('/')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.newlogin {
  width: 500px;
  background: blue;
  height: 400px;
  margin: 150px auto;
  text-align: center;
  padding-right: 40px;
}
.title {
  font-size: 30px;
  padding-top: 60px;
}
.login_onw {
  padding-top:40px;
}
</style>