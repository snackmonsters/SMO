import axios from 'axios'
import firebaseService from './firebaseService'

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
  signUp (email, password, name) {
    if (email.length < 4) {
      alert('Please enter an email address.')
      return
    }
    if (password.length < 4) {
      alert('Please enter a password.')
      return
    }

    if (name.length < 4) {
      alert('Please enter name')
      return
    }

    // Sign in with email and pass.
    // [START createwithemail]
    return firebaseService.firebase.auth().createUserWithEmailAndPassword(email, password).then(function (data) {
      data.user.updateProfile({
        displayName: name
      })
      var date = data.user.metadata.creationTime
      /*
        백엔드에서 유저 등록을 위한 코드
      */
      return data.user
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.')
      } else {
        alert(errorMessage)
      }
      console.log(error)
      // [END_EXCLUDE]
    })
  },

  signIn (email, password) {
    return firebaseService.firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.')
      } else {
        alert(errorMessage)
      }
      // [END_EXCLUDE]
    })
  },

  async signInWith (service) {
    let provider = null
    switch (service) {
      case 'Google':
        provider = new firebaseService.firebase.auth.GoogleAuthProvider()
        break
      case 'Facebook':
        provider = new firebaseService.firebase.auth.FacebookAuthProvider()
        break
      case 'Github':
        provider = new firebaseService.firebase.auth.GithubAuthProvider()
        break
      case 'Anonymous':
        return firebaseService.firebase.auth().signInAnonymously().then(function () {
          return true
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // ...
          console.error('[anonymous] Login Error]', error)
          return false
        })
    }

    const signInResult = await firebaseService.firebase.auth().signInWithPopup(provider).then(async function (result) {
      const user = result.user

      // 백엔드에서 존재하는 유저인지 확인한다.
      const isExist = await firestore.collection('users').doc(user.uid).get().then(function (doc) {
        return doc.exists
      })

      if (!isExist) {
        // 유효하지 않은 사용자라고 리턴
      }
      return true
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      if (errorCode == 'auth/account-exists-with-different-credential') {
        alert('이미 가입되어있는 이메일입니다.')
      }
      console.error('[Login Error]', error)
      // ...
      return false
    })

    return signInResult
  }
}
