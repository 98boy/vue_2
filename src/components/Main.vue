<template>
  <div class="row">
    <h2 v-if="isFirst">初次见面请多关照</h2>
    <h2 v-else-if="isLoading">发送请求中，请稍后...</h2>
    <h2 v-else-if="errMsg">请求出错，{{errMsg}}.请重新发送请求</h2>
    <div v-else class="card" v-for="(user, index) in users" :key="user.user_name">
      <a :href="user.user_url" target="_blank">
        <img :src="user.user_img" style="width: 100px" />
      </a>
      <p class="card-text">{{user.user_name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 导入axios
import axios from "axios";
// 导入vue-resource
import VueResource from "vue-resource";
import Vue from "vue";
// 声明使用插件
Vue.use(VueResource);
export default {
  mounted() {
    // 绑定异步操作

    this.$bus.$on("searchAjax", this.searchAjax);
  },
  data() {
    return {
      // 第一次显示页面
      isFirst: true,
      // 正在发送请求
      isLoading: false,
      // 出错后保存的信息
      errMsg: "",
      // 成功后保存的信息
      users: []
    };
  },
  methods: {
    // axios使用
    // searchAjax(searchName) {
    //   // 发送请求前
    //   (this.isFirst = false), (this.isLoading = true);
    //   axios({
    //     url: "https://api.github.com/search/users",
    //     method: "GET",
    //     params: {
    //       q: searchName
    //     }
    //   })
    //     .then(response => {
    //       // 请求成功
    //       this.isLoading = false;
    //       response.data.items.forEach(item => {
    //         let user_name = item.login;
    //         let user_img = item.avatar_url;
    //         let user_url = item.url;
    //         let obj = {
    //           user_name,
    //           user_img,
    //           user_url
    //         };
    //         this.users.push(obj);
    //       });
    //     })
    //     .catch(error => {
    //       // 请求失败
    //       this.errMsg = error.message;
    //       this.isLoading = false;
    //     });
    // }

    //axios和await async的使用
    async searchAjax(searchName) {
      //发送请求的时候我们把页面切换成正在发送请求的页面
      this.isFirst = false;
      this.isLoading = true;

      try {
        let response = await axios({
          url: "https://api.github.com/search/users",
          // url: "http://localhost:4000/user/info",
          method: "GET",
          params: {
            q: searchName
          }
        });
        this.isLoading = false;
        //items 第一条信息就是一个用户信息 是一个对象
        response.data.items.forEach(item => {
          //从每个获取到的数据当中过滤我要的数据
          let user_name = item.login;
          let user_img = item.avatar_url;
          let user_url = item.url;
          //把我要的数据组装成一个对象
          let obj = {
            user_name,
            user_img,
            user_url
          };
          //把数据对象给放到我的数据当中
          this.users.push(obj);
        });
      } catch (error) {
        this.errMsg = error.message; //axios错误信息是message
        this.isLoading = false;
      }
    }

    // vue-resource 插件的使用
    // searchAjax(searchName) {
    //   // 发送请求前
    //   (this.isFirst = false), (this.isLoading = true);
    //   this.$http({
    //     url: "https://api.github.com/search/users",
    //     method: "GET",
    //     params: {
    //       q: searchName
    //     }
    //   })
    //     .then(response => {
    //       // 请求成功
    //       this.isLoading = false;
    //       response.data.items.forEach(item => {
    //         let user_name = item.login;
    //         let user_img = item.avatar_url;
    //         let user_url = item.url;
    //         let obj = {
    //           user_name,
    //           user_img,
    //           user_url
    //         };
    //         this.users.push(obj);
    //       });
    //     })
    //     .catch(error => {
    //       // 请求失败
    //       this.errMsg = error.statusText;
    //       this.isLoading = false;
    //     });
    // }
  }
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
