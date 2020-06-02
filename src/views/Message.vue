<template>
  <div role="tabpanel" class="tab-panel active" id="Message">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in messages" :key="item.id">
        <!-- <router-link :to="'/home/message/info'+item.id+'?msgContent='+item.content">{{item.content}}</router-link> -->
        <router-link
          :to="{name:'msgInfo',params:{msgId:item.id},query:{msgContent:item.content}}"
        >{{item.content}}</router-link>
        <!-- <a href="##">{{ item.content }}</a> -->
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      messages: [
        { id: 1, content: "msgOne" },
        { id: 2, content: "msgTwo" },
        { id: 3, content: "msgThree" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
