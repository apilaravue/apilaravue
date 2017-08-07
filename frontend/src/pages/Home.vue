<template>
  <div id="home">
    <h1>Home here!</h1>
  </div>
</template>
<script>
import swal from 'sweetalert'
export default {
  name: "home",
  data: function data() {
    return {

    }
  },
  methods: {
    sweetalert(){
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      });
    }
  },
  mounted() {
    this.sweetalert()
    this.$http.get('api/redis/kamgasimojunior_data_manhere')
  }
}
</script>
<style lang="css">
</style>
