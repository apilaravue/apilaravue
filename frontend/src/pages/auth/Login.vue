<template>
  <div id="login">
    <h1>Login Here!</h1>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function data() {
    return {
      oauth: {
        email: 'kamgasimojunior@gmail.com',
        password: 'secret'
      }
    }
  },
  methods: {
    login() {
      var data = {
        client_id: this.$_connection.client_id,
        client_secret: this.$_connection.client_secret,
        grant_type: 'password',
        username: this.oauth.email,
        password: this.oauth.password
      }

      this.$http.post('oauth/token', data)
          .then(response => {
            this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
            // this.$router.push('/home')
            window.location = '/home'
          })
    }
  },
  mounted(){
    this.login()
  }
}
</script>
<style lang="css">
</style>
