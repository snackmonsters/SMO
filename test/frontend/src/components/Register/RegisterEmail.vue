<template>
  <div>
    <h2>이메일 주소를</h2>
    <h2>입력해주세요</h2>
    <form>
        <input placeholder="이메일을 입력해주세요" type="email" v-model="emailaddress">
        <input type="button" value="Next" v-model="EmailMessage" v-on:click="onSubmit">
    </form>
  </div>
</template>

<script>
import loginService from '../../service/loginService.js'

export default {
  name: 'RegisterEmail',
  data () {
    return {
        emailaddress: '',
        EmailMessage: 'Next'
    }
  },
  methods: {
      onSubmit() {
          if (this.emailaddress != '') {
              this.EmailMessage = '이메일을 확인해주세요'
              loginService.postUser(this.emailaddress)
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
