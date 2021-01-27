<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/img/logo.png">
    <HelloWorld msg="Welcome to My JS Boilerplate."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
