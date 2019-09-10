<template>
  <div>
    <h2>이메일 인증을 완료해주세요!</h2>
    <br/>
    <h3>{{RegisterEmail}}</h3>
    
    <h3>이메일로 받으신 인증을 완료해주세요.</h3>
    <br/>
    <h4>이메일을 아직 못 받으셨다구요? 상단에 이메일이 제대로 입력돼있는지 확인하거나 스팸 메일을 확인해보세요.</h4>

  </div>
</template>

<script>
// import loginService from '../../service/loginService.js'
import { mapState } from 'vuex'
import store from '../../store'

export default {
  name: 'RegisterEmail',
  store,
  data () {
    return {
        emailaddress: '',
        EmailMessage: '',
    }
  },
  computed: {
    ...mapState(
      'registerEmail'
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
