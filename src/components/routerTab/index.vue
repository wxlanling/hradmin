<template>
  <div class="tab">
    <div class="newdiv">
      <span v-for="(item,i) in routerlist" :key="i" class="newtab">
        <router-link :to="item.path" style="text-decoration: none;color:">
          {{item.meta.title}}
          <span @click="del(i)" v-show="i>0" track-by="$index">
            <i class="el-icon-close" style="padding-left:10px;"></i>
          </span>
        </router-link>
      </span>
    </div>
    <!-- 456大师 -->
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "routerTab",
  data() {
    return{
          routerlist: []
    }
  },
  methods: {
    getrouter() {
      var newrouter = this.$route.matched.filter(v => {
        return v.meta.title != null;
      });
      this.routerlist.push(...newrouter);
      console.log(this.routerlist);
    },
    del(i) {
      this.routerlist.splice(i, 1);
    }
  },
  watch: {
    $route(to, from,next) {
      console.log(to);
      console.log(from)
      console.log(next)
      this.getrouter();
    }
  },
  mounted() {
    this.getrouter();
//     var ary = new Array("11", "222", "33", "111", "22");
//     for(var i = 0; i < nary.length - 1; i++) {
//     if(nary[i] == nary[i + 1]) {
//         alert("重复内容：" + nary[i]);
//     }
// }
//    axios.get('api/admin/goods').then(res=>{
//        console.log(res);
//    })
  }
};
</script>
<style scoped>
.tab{
    /* background: red; */
    height: 35px;
    border-bottom:1px solid #333333 ;
}
.newtab {
  display: inline;
  background: white;
  margin-right: 20px;
  padding: 3px 15px;
  text-decoration: none;
  font-size: 13px;
  color: black;
  border: 1px solid slategray;
}
.router-link-active {
}
</style>