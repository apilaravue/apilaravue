<template>
  <div id="auth-header">
    <h1>Auth Header Here!</h1>
  </div>
</template>
<script>
export default {
  name: "auth-header",
  data: function data() {
    return {

    }
  },
  methods: {
    setAuth() {
      this.$http.get('api/user')
          .then(function(response) {
            this.$auth.setAuthUser(response)
            console.log(this.$auth.getAuthUser())
          })
    }
  },
  mounted(){
    this.setAuth()
  }
}
</script>
<style lang="css">
</style>
