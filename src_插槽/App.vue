<template>
  <div>
    <!-- 第一次使用 -->
    <Child>
      <!-- 默认插槽 -->
      <template>
        <h2>永远永远</h2>
        <span>妖妖</span>
      </template>
      <!-- 具名插槽 -->
      <p slot="aa">具名内容</p>
    </Child>
    <!-- 第二次使用 -->
    <Child>
      <!-- template 可以省略不写
      <a href="###">韦神韦神</a>-->

      <!-- 作用域插槽 -->
      <!-- 子传父 -->
      <span slot-scope="slotProps" v-show="isShow" slot="uu">√{{slotProps.person.name}}</span>
    </Child>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "@/components/Child";
export default {
  components: {
    Child
  },
  data() {
    return {
      isShow: fales
    };
  }
};
</script>

<style scoped>
</style>
