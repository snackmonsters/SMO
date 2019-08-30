<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/template/Header'

export default {
  name: 'App',
  components: {
    'main-header' : Header,
  }
}
</script>
