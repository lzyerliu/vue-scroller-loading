<template>
  <div class="wrapper">
    <scroller>
      <h1 class="plugin-name">Vue Scroller Loading</h1>
      <p class="for-vue-js">Vue.js 2.0</p>

      <router-link class="row grey-bg f-row f-justify-between f-align-center" tag="label" to="/refreshAndInfinite">
        <span>Refresh & Infinite</span>
        <img src="../assets/arrow_right.png" class="arrow-right">
      </router-link>
      <router-link class="row f-row f-justify-between f-align-center" tag="label" to="/loadMoreAndNoData">
        <span>LoadMore & NoData</span>
        <img src="../assets/arrow_right.png" class="arrow-right">
      </router-link>
      <router-link class="row grey-bg f-row f-justify-between f-align-center" tag="label" to="/customSpinner">
        <span>Custom & Spinner</span>
        <img src="../assets/arrow_right.png" class="arrow-right">
      </router-link>
    </scroller>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="css" scoped>
  .plugin-name{
    margin: 60px 0 0;
    font-size: 26px;
    text-align: center;
    color: #333;
  }
  .for-vue-js{
    margin-bottom: 42px;
    text-align: center;
    color: #666;
  }

</style>
