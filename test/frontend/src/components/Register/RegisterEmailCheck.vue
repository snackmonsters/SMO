<template>
  <div>
    <h2>이메일 주소를</h2>
    <h2>입력해주세요</h2>
    <form @submit="onSubmit">
        <input placeholder="이메일을 입력해주세요" type="email" v-model="emailaddress">
        <input type="submit" value="Next">
    </form>
    <h2 v-bind="EmailMessage"></h2>
  </div>
</template>

<script>
// import loginService from '../../service/loginService.js'

export default {
  name: 'RegisterEmail',
  data () {
    return {
        emailaddress: '',
        EmailMessage: '',
    }
  },
  methods: {
      onsubmit() {
          if (emailaddress != '') {
              loginService.postUser(this.emailaddress)
              this.EmailMessage = '이메일을 확인해주세요'
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
