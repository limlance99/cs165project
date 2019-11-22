<template>
  <div>
  <section class="section">
    <div class="container">
      <h1 class="title">Businesses</h1>
      <h2 class="subtitle">
        This section shows a table containing all the businesses in the database. Users can add, delete, and update these businesses.
      </h2>
      <BusinessList />
    </div>
  </section>
  </div>
</template>

<script>
import BusinessList from '../components/BusinessList';
export default {
  name: "Businesses",
  components: {
      BusinessList
  }
};
</script>
