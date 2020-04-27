<template>
  <div class="entrance" @click="$router.push({ path: '/home' })">
    <!-- <back-ground/> -->

    <div class="content">
      <div id="title"></div>
      <div id="one"></div>
      <!-- <div class="home-header"></div>
      <div class="home-body">
        <div class="introduce">开启数据管理之路！</div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Types from '../../types/index'
import { init } from 'ityped'

@Component
export default class Home extends Vue {
  protected Configuration1: Types.Configuration = {
    strings: ['Welcome to skyClub...'],
    typeSpeed: 100,
    backSpeed: 0,
    startDelay: 0,
    backDelay: 0,
    loop: false,
    showCursor: true,
    placeholder: false,
    disableBackTyping: false,
    cursorChar: '',
  }
  protected Configuration2: Types.Configuration = {
    strings: ['Click your here...', 'and Enjoy!'],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 500,
    backDelay: 500,
    loop: false,
    showCursor: true,
    placeholder: false,
    disableBackTyping: false,
    cursorChar: '',
  }
  mounted(): void {
    init('#title', this.Configuration1)
    init('#one', this.Configuration2)
  }
}
</script>
<style lang="less" scoped>
.entrance {
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000;
  cursor: pointer;
  color: #fff;

  .content {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000;

    font-size: 26px;
    font-weight: bold;
    text-align: center;
    // padding-top: 5%;

    #title,
    #one {
      height: 30px;
      padding: 10px;
    }

    .home-logo {
      width: 220px;
      border-radius: 50%;
      animation: mylogo 3s;
      -moz-animation: mylogo 3s; /* Firefox */
      -webkit-animation: mylogo 3s; /* Safari and Chrome */
      -o-animation: mylogo 3s; /* Opera */
      animation-iteration-count: infinite;
    }

    .home-header {
      .link {
        display: block;
      }
    }

    .home-body {
      padding-top: 20px;

      .list {
        .link {
          display: inline-block;
          padding: 20px;
          color: #409eff;
          min-width: 80px;
          text-decoration: none;
        }
      }

      .introduce {
        padding-top: 20px;
        margin-top: 40px;
        font-size: 30px;
        color: #fff;
      }
    }
  }
}
</style>
