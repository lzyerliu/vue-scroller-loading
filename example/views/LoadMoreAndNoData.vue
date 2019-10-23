<template>
  <div>
    <nav-bar title="LoadMore & NoData"></nav-bar>
    <scroller
      :on-infinite="infinite"
      ref="my_scroller"
    >
      <div class="l-height"></div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="row"
        :class="{'grey-bg': index % 2 == 0}"
      >
        <span>{{ item }}</span>
      </div>
    </scroller>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      items: []
    }
  },
  computed: {},
  created() {},
  mounted() {
    for (let i = 0; i <= 20; i++) {
      this.items.push(i + ' - item of list, Loadmore And Nodata.')
    }
    this.top = 1
    this.bottom = 20
  },
  methods: {
    infinite(done) {
      console.log('infinite called..')
      if (this.bottom >= 40) {
        setTimeout(() => {
          done(true)
        }, 1500)
        return
      }

      setTimeout(() => {
        let start = this.bottom + 1
        for (let i = start; i < start + 10; i++) {
          this.items.push(i + ' - item of list, Loadmore And Nodata.')
        }
        this.bottom = this.bottom + 10
        setTimeout(() => {
          done()
        }, 0)
      }, 1500)
    }
  }
}
</script>
<style lang="css">
  .l-height{
    height: 45px;
  }
</style>
