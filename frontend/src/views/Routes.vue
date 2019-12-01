<template>
  <div>
    <div class="section">
      <b-field label="Select a table">
        <b-select v-model="selectedTable">
          <option v-for="(route, key) in apiRoutes" :value="route.link" :key="key">{{ route.title }}</option>
        </b-select>
      </b-field>
        
      <div class="section">
        <p v-show="selectedTable != ''">Executing query: SELECT * FROM {{selectedTable}};</p>
      </div>
      <div class="section">
        <b-loading :active.sync="isLoading"></b-loading>
        <h3 class="subtitle" v-show="jsons.length > 0">Results</h3>
        <p v-for="(json, key) in jsons" :key="key">{{json}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["link"],
 
  data: () => {
    return {
      jsons: [],
      selectedTable: "",
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["apiRoutes", "allTheData"]),
  },
  methods: {
    ...mapActions(["fetchTable"]),
  },
  watch: {
    async selectedTable() {
      this.isLoading = true;
      await this.fetchTable(this.selectedTable);
      this.jsons = this.allTheData;
      this.isLoading = false;
    }
  }
};
</script>