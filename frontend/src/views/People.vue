<template>
  <div>
  <section class="section">
    <div class="container">
      <h1 class="title">People</h1>
      <h2 class="subtitle">
        This section shows a table containing all the people in the database with their respective license number, place of work, and their work contact number.
      </h2>
      <PeopleList />
    </div>
  </section>
  </div>
</template>
<script>
import PeopleList from '../components/PeopleList';
export default {
  name: "People",
  components: {
      PeopleList
  }
};
</script>
