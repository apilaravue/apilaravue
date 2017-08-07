<template>
  <div id="app">
    <auth-header v-if="$auth.isAuthenticated()"></auth-header>
    <guest-header v-if="!$auth.isAuthenticated()"></guest-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AuthHeader from './components/app/AuthHeader.vue';
import GuestHeader from './components/app/GuestHeader.vue';
import AppFooter from './components/app/Footer.vue';
export default {
  components: {
    'auth-header': AuthHeader,
    'guest-header': GuestHeader,
    'app-footer': AppFooter
  },
  sockets:{
    // connect: function(){
    //   console.log('socket connected')
    // },
    // customEmit: function(val){
    //   console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    // },
    message(data){
      // let message = JSON.parse(data)
      console.log(data)
    }
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
