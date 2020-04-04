<template>
  <div id="app">

      <router-view></router-view>

  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class App extends Vue {}
</script>

<style lang="less">

    @import '~bootstrap/dist/css/bootstrap.css';
    @import '~bootstrap-vue/dist/bootstrap-vue.min.css';

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #app img
    {
        height: 300px;
        width: 300px;
    }
    #app h4
    {
        float: right;
        margin: 10px;
    }
</style>
