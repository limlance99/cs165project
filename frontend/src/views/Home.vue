<template>
  <div class="home">
    <!-- <img alt="yo" src="../assets/turtle.jpg"> -->
    <LandingPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'home',
  components: {
    LandingPage
  }
}
</script>
