<template>
  <div>
  <section class="section">
    <BusinessList />
  </section>
  </div>
</template>

<script>
import BusinessList from '../components/BusinessList';
export default {
  name: "home",
  components: {
      BusinessList
  }
};
</script>
