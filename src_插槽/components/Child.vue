<template>
  <div>
    <p>固定不变的</p>
    <!-- 匿名插槽 -->
    <slot>傻子</slot>
    <!-- 具名插槽 -->
    <slot name="aa">4AM</slot>
    <ul>
      <li v-for="person in persons" :key="person.id">
        <slot name="uu" :person="person">{{person.name}}</slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      persons: [
        { id: 1, name: "xixi" },
        { id: 1, name: "haha" },
        { id: 1, name: "hehe" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
