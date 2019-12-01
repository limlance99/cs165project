<template>
  <div id="app">
    <section class="hero is-primary">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">CS165 Project: Driver's License Businesses Database</a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <Home />
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li>
                <b-navbar-item tag="router-link" to="/businesses">Businesses</b-navbar-item>
              </li>
              <!-- <li>
               <b-navbar-item tag="router-link" to="/routes">
                API
                </b-navbar-item>
              </li> -->
              <li>
                <b-navbar-item tag="router-link" to="/people">People</b-navbar-item>
              </li>
              <li>
                <b-navbar-item tag="router-link" to="/applynow">Apply Now</b-navbar-item>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    Home: () => import('./views/Home'),
  },
  computed: {
    ...mapGetters(["apiRoutes"])
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: rgb(110, 156, 1);
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary-invert;
$link-invert: $primary-invert;
$link-focus-border: $primary;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
