<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">{{count}}</button>
    <button @click="incrementAsync">{{count}}</button>
    <p>4倍的count {{currentCount}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions, mapGettters, mapMutations, mapState } from "vuex";
export default {
  // methods: {
  //   increment() {
  //     this.$store.commit("increment");
  //   },
  //   decrement() {
  //     this.$store.commit("decrement");
  //   },
  //   incrementIfOdd() {
  //     this.$store.dispatch("incrementIfOdd");
  //   },
  //   incrementAsync() {
  //     this.$store.dispatch("incrementAsync");
  //   }
  // },

  // 简便写法
  methods: {
    ...mapMutations(["increment", "decrement"]),
    ...mapActions(["incrementAsync"]),
    ...mapActions({ incrementIfOdd: "IncrementIfOdd" })
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState(["count"]),
    // currentCount() {
    //   return this.$store.getters.currentCount;
    // }
    ...mapState(["currentCount"])
  }
};
</script>

<style scoped>
</style>
