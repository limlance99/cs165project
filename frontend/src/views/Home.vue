<template>
  <div class="home">
    <section class="hero is-primary-inverted">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <header class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <h1 class="navbar-item">CS165 Project: Driver's License Businesses Database</h1>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <section class="section">
          <div class="container">
            <h1 class="title">Hello</h1>
            <h2 class="subtitle">Welcome to my CS165 project.</h2>
            <p>The purpose of this simple website is to simulate a way for people to add to a list of businesses in a database.</p>
          </div>
        </section>
      </div>
      <div class="hero-foot">
        <b-tabs type="is-toggle" expanded>
          <b-tab-item label="Businesses">
            <Businesses />
          </b-tab-item>

          <b-tab-item label="People">
            <People />
          </b-tab-item>
          <b-tab-item label="Apply Now">
            <ApplyNow />
          </b-tab-item>
          <b-tab-item label="API" tag="router-link" to="/routes"><Routes /></b-tab-item>
        </b-tabs>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    Businesses: () => import("./Businesses"),
    People: () => import("./People"),
    ApplyNow: () => import("./ApplyNow"),
    Routes: () => import("./Routes")
  }
};
</script>
