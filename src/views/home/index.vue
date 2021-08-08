<template>
  <!--    首页-->
  <!-- <div class="home"> -->
  <!-- <headerNav class="header"></headerNav> -->
  <div class="container">
    <!-- <el-aside class="aside"> -->
    <div class="aside">
      <headerNav></headerNav>
    </div>
    <!-- </el-aside> -->
    <div class="main">
      <router-view class="content"></router-view>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import headerNav from '../other/header'

@Component({ components: { headerNav } })
export default class Home extends Vue {}
</script>
<style lang="less">
// .home {
//   overflow: auto;
//   position: relative;
//   background-color: #eeeeee;
//   height: 100%;
//   .header {
//     position: fixed;
//     top: 0;
//     width: 100%;
//   }
//   .content {
//     width: 100%;
//   }
// }
// .aside {
//   height: calc(100vh);
//   position: sticky;
//   top: 0;
//   left: 0;
//   background-color: #545c64;
// }
.container {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  // .aside {
  // }
  .main {
    height: 100%;
    flex: 1;
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    overflow: auto;
  }
}
</style>
