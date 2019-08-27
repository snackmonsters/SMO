import axios from 'axios'

const BASE_URL = '/api'

const postUserEmail = (email) => {
  return axios.post(BASE_URL + '/registeremail', {
    params: {
      'uid': email
    }
  })
}

const getUser = (email) => {
  return axios.get(BASE_URL + '/email', {
    params: {email: email}
  }).then(response => { console.log(response) }).catch(
    response => { console.log(response) })
}

const getUsers = () => {
  return axios.get(BASE_URL + '/email')
}

export default {
  async postUser (email) {
    var newEmail = await getUser(email)
    console.log(getUsers())
    if (!newEmail) {
      const emailfinished = await postUserEmail(email)
      return emailfinished
    }

    return false
  }

}
