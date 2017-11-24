<template>
  <div id="app">
    <navbar></navbar>
    <div class="container" style="margin-top: 50px;">
      <router-view></router-view>
    </div>
    <footer-web></footer-web>
  </div>
</template>

<script>
import navbar from './components/navBar'
import footerWeb from './components/footer'

export default {
  components: {
    navbar,
    footerWeb
  },
  name: 'app'
}
</script>

<style>
</style>
