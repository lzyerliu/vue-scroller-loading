<template>
  <div class="nav-bar">
    <div class="btn-back" @click="back">
      <img class="arrow-back" src="../assets/back.png">
    </div>

    <div class="title" v-if="title">
      {{title}}
    </div>
  </div>
</template>
<style>
  .nav-bar {
    width: 100%;
    height: 45px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    position: relative;
    z-index: 2019;
  }

  .nav-bar .btn-back {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .nav-bar .arrow-back {
    width: 22px;
    float: left;
    margin-top: 11px;
    padding: 0 10px;
  }

  .nav-bar .title {
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 45px;
    color: #222;
    font-weight: bold;
  }
</style>

<script>
  export default {
    props: {
      title: {
        type: String
      },

      backTo: {
        type: String,
        default: '/'
      }
    },

    methods: {
      back () {
        this.$router.push(this.backTo)
      }
    }
  }
</script>
