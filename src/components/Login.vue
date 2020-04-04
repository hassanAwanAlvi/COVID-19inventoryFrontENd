<template>
    <div class="signin-up-bg">
        <div class="rightHalf">
            <div class="position-relative">
                <!--login form-->
                <div class="login-form">
                    <h2 class="text-center mb-4">
                        <img src="../assets/hilogo2.png" srcset="../assets/hilogo2.png" alt="CodeLab">
                    </h2>

                    <div class="form-group">
                        <input type="email" class="" id="exampleInputEmail1" placeholder="Enter email" v-model="email">
                    </div>
                    <div class="form-group mb-4">
                        <input type="password" class="" id="exampleInputPassword1" placeholder="Enter Password" v-model="password">
                    </div>

                    <div class="form-group clearfix">
                        <!--<router-link to="/forgot-password"><a href="#" class="float-left forgot-link my-2">Forgot Password ?</a></router-link>-->
                        <button type="submit" class="btn-red" @click="login_button_click">LOGIN</button>
                    </div>

                    <div class="form-divider"></div>

                    <!--<a href="#" class="btn btn-facebook btn-pill text-uppercase"><i class="fa fa-facebook-square"></i> Login with facebook</a>-->
                    <div class="text-center mt-5 mb-5">
                        <router-link class="btn-link text-capitalize f12" to="/signup">Create New Account</router-link>
                    </div>
                    <!--        </form>-->
                </div>
                <!--/login form-->
            </div>
        </div>
    </div>

</template>

<script>

import { mapActions } from 'vuex'
import { variables } from '../constants/systemConstants'
import helpermixins from '../mixins/helperMixins'

export default {
  components: {

  },
  data () {
    return {

      email: '',
      password: '',
      //   email: 'hassanalvi@gmail.com',
      // password: 'alvi@12345',
      notification_tag: 'Login TubeC'
    }
  },

  mounted () {
  },
  mixins: [helpermixins],

  created () {
  },
  methods: {
    ...mapActions(['changeUser']),
    login_button_click () {
      const app = this

      if (this.email === '') {
        app.makeToast(variables.warning, 'Please add your email', app.notification_tag)
        return
      }

      if (!this.validEmail(this.email)) {
        app.makeToast(variables.warning, 'Invalid email', app.notification_tag)
        return
      }

      if (this.password === '') {
        app.makeToast(variables.warning, 'Please enter the password', app.notification_tag)
        return
      }

      this.$auth.login({
        params: {
          email: app.email,
          password: app.password
        },
        success: function (res) {
          app.$auth.fetch().then(
            function (res) {
              app.changeUser(res.data)
            }
          )
        },
        error: function (resp) {
          app.makeToast(variables.danger, resp.response.data.error, 'Login error')
        },
        rememberMe: true,
        redirect: '/'
      })
    }

  },
  watch: {
  }
}
</script>

<style>

    input
    {
        width: 20%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .btn-red
    {
        width: 20%;
        background-color: #ae3440;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

</style>
