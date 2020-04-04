<template>
  <div class="hello">
      <div class="signin-up-bg">
          <div class="rightHalf">
              <div class="position-relative">
                  <div class="login-form">
                      <h2 class="text-center mb-4">
                          <img src="../assets/hilogo2.png" srcset="../assets/logo_cat.jpg" alt="CodeLab">
                      </h2>

                      <h1>COVID-19 Food distribution inventory</h1>

                      <div class="form-group">
                          <input type="text" class="" id="exampleNIC" placeholder="NIC of receiver" v-model="nic">
                      </div>

                      <div class="form-group clearfix">
                          <button type="submit" class="btn-red" @click="send_inventory">Check inventory</button>
                      </div>

                      <div class="form-divider"></div>

                      <div class="text-center mt-5 mb-5">
                          <router-link class="btn-link text-capitalize f12" to="/">Add person in inventory</router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script >
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import { variables } from '../constants/systemConstants'

import helpermixins from '../mixins/helperMixins'

export default {

  computed: {
    ...mapGetters(['getUser'])
  },
  components: {

  },

  props: ['msg'],

  data () {
    return {
      nic: '',
      days: 1
    }
  },

  created () {

  },

  watch: {

  },
  mixins: [helpermixins],

  methods: {

    ...mapActions(['nullUserObj']),

    send_inventory () {
      const app = this
      this.loading = true

      axios.post('/search', { nic: this.nic }).then(res => {
        app.makeToast(variables.success, 'User added ', 'User success')
      }
        // eslint-disable-next-line
      ).catch(error => {
        app.makeToast(variables.danger, 'user cannot  be added ', 'User error')
      }
      )
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
