<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in news" :key="item.id">
        <!-- <router-link to="/home/message/info">{{item.content}}</router-link> -->
        {{ item.content}}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          @click="handlerJump(item)"
        >{{item.id}}</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      news: [
        { id: 1, content: "newsOne" },
        { id: 2, content: "newsTwo" },
        { id: 3, content: "newsThree" }
      ]
    };
  },
  methods: {
    //   手动处理代码路径跳转
    handlerJump(n) {
      // this.$router.push('/home/news/info'+ n.id + '?newsContent='+n.content)//路由路径path
      //push方法会保存历史记录
      // this.$router.push({
      //   name: "newsInfo",
      //   params: { newsId: n.id },
      //   query: { newsContent: n.content }
      // }); //路由路径path
      //replace不会
      this.$router.replace({
        name: "newsInfo",
        params: { newsId: n.id },
        query: { newsContent: n.content }
      }); //路由路径path
    }
  }
};
</script>

<style scoped>
</style>
