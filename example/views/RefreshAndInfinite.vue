<template>
  <div class="wrapper">
    <nav-bar title="Refresh & Infinite"></nav-bar>
    <scroller
      :on-refresh="refresh"
      :on-infinite="infinite"
      class="margin-t-h"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="onItemClick(index, item)"
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
    for (let i = 1; i <= 20; i++) {
      this.items.push(i + ' - item of list, Refresh and Infinite.')
    }

    this.top = 1
    this.bottom = 20
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        let start = this.top - 1
        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + ' - item of list, Refresh and Infinite.')
        }
        this.top = this.top - 10
        done()
      }, 1500)
    },
    infinite(done) {
      console.log('infinite called..')
      setTimeout(() => {
        let start = this.bottom + 1

        for (let i = start; i < start + 10; i++) {
          this.items.push(i + ' - item of list, Refresh and Infinite.')
        }

        this.bottom = this.bottom + 10

        done()
      }, 1500)
    },
    onItemClick(index, item) {
      console.log(index)
    }
  }
}
</script>
