<template>
  <section class="login">
    <!-- <canvas id="sakura"></canvas> -->
    <canvas id="matrix" height="943" width="1920"></canvas>
    <!-- 登录 -->
    <transition
      mode="out-in"
      name="custom-classes-transition"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated flipOutY"
    >
      <section v-show="loginShow" class="model">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>欢迎登录</span>
          </div>
          <div style="margin-top: 20px">
            <el-form label-width="80px" :model="userForm">
              <el-form-item label="邮箱">
                <el-input
                  type="text"
                  v-model="userForm.email"
                  placeholder="请输入邮箱"
                ></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  type="password"
                  v-model="userForm.password"
                  placeholder="请输入密码"
                  autocomplete="new-password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="goLogin">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </section>
    </transition>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Types from '../../../types/index'

@Component
export default class LoginNav extends Vue {
  protected userForm: Types.UserItem = {
    email: '',
    password: '',
  }
  protected form: any = {
    email: '',
    name: '',
    password: '',
  }
  protected loginShow: boolean = false
  protected timer: any = null

  protected goLogin(): void {
    this.$api
      .login(this.userForm)
      .then((req: Types.InterfaceData) => {
        const { code, data } = req
        if (code === 0) {
          this.$router.push({ path: '/' })
        } else {
          this.$message.error(data)
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  register() {
    this.$api
      .register(this.form)
      .then((req: Types.InterfaceData) => {
        const { code, data } = req
        console.log(data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  initbackground() {
    this.$nextTick(() => {
      //文字
      var txts: any = '0123456789!@#$%^&*()~_+℃☆○※'
      //转为数组
      txts = txts.split('')
      var matrix: any = document.getElementById('matrix')
      var context = matrix.getContext('2d')
      matrix.height = window.innerHeight
      matrix.width = window.innerWidth
      var drop: any = []
      var font_size = 16
      var columns = matrix.width / font_size
      for (var i = 0; i < columns; i++) drop[i] = 1

      function drawMatrix() {
        context.fillStyle = 'rgba(0, 0, 0, 0.09)'
        context.fillRect(0, 0, matrix.width, matrix.height)

        context.fillStyle = 'green'
        context.font = font_size + 'px'
        for (var i = 0; i < columns; i++) {
          //随机取要输出的文字
          var text = txts[Math.floor(Math.random() * txts.length)]
          //输出文字，注意坐标的计算
          context.fillText(
            text,
            i * font_size,
            drop[i] * font_size
          ) /*get 0 and 1*/

          if (
            drop[i] * font_size > (matrix.height * 2) / 3 &&
            Math.random() > 0.95
          )
            /*reset*/
            drop[i] = 0
          drop[i]++
        }
      }
      setTimeout(() => {
        this.loginShow = true
      }, 800)

      const timer = setInterval(drawMatrix, 33)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
    })
  }
  mounted() {
    this.initbackground()
    window.addEventListener('resize', this.initbackground)
  }
  destroyed() {
    window.removeEventListener('resize', this.initbackground, true)
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000;

  .model {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 40%;
    margin: -15% 0 0 -20%;
    color: #fff;
    z-index: 10000;
    // /deep/ .el-card {
    //   background-color: #000;
    //   border-color: #000;
    //   color: #fff;
    // }
  }
}
</style>
