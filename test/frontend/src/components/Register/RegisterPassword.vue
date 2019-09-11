<template>
  <div>
    <h2>비밀번호 입력하기</h2>
    <form @submit.prevent="onSubmit">
        <input placeholder="비밀번호를 입력해주세요" type="password" v-model="password">
        <input type="submit" value="Next" v-model="EmailMessage">
    </form>
  </div>
</template>

<script>
import loginService from '../../service/loginService.js'
import { mapState } from 'vuex'

export default {
  name: 'RegisterPassword',
  data () {
    return {
        password: '',
        EmailMessage: 'Next'
    }
  },
  computed: {
    ...mapState([
      'registerEmail'
    ]
    )
  },
  methods: {
      async onSubmit() {
          if(this.password.length < 4) {
              alert('비밀번호는 4자 이상이어야 합니다.')
              return
          }
          await loginService.signUp(this.registerEmail, this.password)
          loginService.verifyingEmail()
          this.$router.push({name: 'RegisterEmailCheck'})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
