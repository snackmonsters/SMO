<template>
  <div>
    <h2>이메일 주소를</h2>
    <h2>입력해주세요</h2>
    <form @submit.prevent="onSubmit">
        <input placeholder="이메일을 입력해주세요" type="email" v-model="emailaddress">
        <input type="button" value="Next" v-model="EmailMessage">
    </form>
  </div>
</template>

<script>
import loginService from '../../service/loginService.js'
import { mapGetters } from 'vuex'

export default {
  name: 'RegisterEmail',
  data () {
    return {
        emailaddress: '',
        EmailMessage: 'Next'
    }
  },
  computed: {
    ...mapGetters(
      'setRegisterEmail'
    )
  },
  methods: {
      onSubmit() {
          this.setRegisterEmail(this.emailaddress)
          this.$router.push({name: 'registeremailcheck', params: { id: this.id }})
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
