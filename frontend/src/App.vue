<template>
  <div id="app">
    <section class="hero is-primary is-small">
      <div class="hero-head">
        <header class="navbar">
          <b-navbar type="is-primary">
            <template slot="brand">
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                  :src="logo"
                  alt="LOGO"
                />
              </b-navbar-item>
            </template>
            <template slot="start">
              <b-navbar-item tag="router-link" to="/businesses">Businesses</b-navbar-item>
              <b-navbar-item tag="router-link" to="/people">People</b-navbar-item>
              <b-navbar-item tag="router-link" to="/applynow">Apply Now</b-navbar-item>
              <b-navbar-item tag="router-link" to="/routes">Database</b-navbar-item>
            </template>

            <template slot="end"></template>
          </b-navbar>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <section class="section">
          <div class="container">
            <h1 class="title has-text-centered">Driver's License Application: The Website</h1>
            <h2 class="subtitle has-text-centered">An easy way to apply for a Driver's License.</h2>
          </div>
        </section>
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/lto.png")
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #0038A8;
$primary-invert: findColorInvert($primary);

$whoabackground: #CE1126;
$whoabackground-invert: findColorInvert($whoabackground);

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
  ),
  "whoabackground": (
    $whoabackground,
    $whoabackground-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// $table-color: $whoabackground-invert;
// $table-background-color: $whoabackground;
// $table-cell-border: 1px solid $whoabackground-invert;
// $table-cell-heading-color: $whoabackground;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
