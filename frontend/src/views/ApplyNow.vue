<template>
  <div>
  <section class="section">
    <div class="container">
      <h1 class="title">Driver's License Application Form</h1>
      <AppForm />
    </div>
  </section>
  </div>
</template>

<script>
import AppForm from '../components/AppForm';
export default {
  name: "ApplyNow",
  components: {
      AppForm
  }
};
</script>
