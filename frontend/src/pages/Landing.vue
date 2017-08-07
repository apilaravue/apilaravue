<template>
  <div id="Landing">
    <h1>Landing Here!</h1>
  </div>
</template>
<script>
export default {
  name: "Landing",
  data() {
    return {

    }
  },
  methods: {
    test() {
      this.$http.get('api/test')
          .then(function(response) {
            console.log(response)
            // alert('ok')
          })
    }
  },
  mounted(){
    this.test()
  }
}
</script>
<style lang="css">
</style>
