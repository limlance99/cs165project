<template>
  <section>
    <b-table
      :data="data"
      ref="table"
      :loading="tableLoading"
      
      backend-sorting
        :default-sort-direction="defaultSortOrder"
        :default-sort="[sortField, sortOrder]"
        @sort="onSort"
    >
      <template slot-scope="props">
        <b-table-column field="fullname" label="Name" sortable>
          {{ props.row.fullname }}
        </b-table-column>

        <b-table-column field="licenseno" label="License Number" sortable>{{ props.row.licenseno }}</b-table-column>

        <b-table-column field="businessname" label="Business" sortable>{{ props.row.businessname }}</b-table-column>

        <b-table-column
          field="businessno"
          label="Business Contact Number"
        >{{ props.row.businessno }}</b-table-column>
      </template>


      <template slot="empty">
        <p v-if="tableLoading">Loading...</p>
        <p v-else>{{DetailMessage}}</p>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      data: [],
      tableLoading: false,
      defaultSortOrder: 'desc',
      sortField: 'fullname',
      sortOrder: 'desc',
      DetailMessage: "Nothing Here"
    };
  },
  computed: {
    ...mapGetters(["ListofPeople"])
  },
  methods: {
    ...mapActions(["fetchTable"]),

    async onSort(field, order) {
      this.sortField = field;
      this.sortOrder = order;
      this.tableLoading = true;
      var details = {
        table: "people",
        field,
        order
      };
      await this.fetchTable(details);
      this.data = this.ListofPeople;
      this.tableLoading = false;
    }
  },

  async mounted() {
    this.tableLoading = true;
    var details = {
      table: "people",
      field: this.sortField,
      order: this.sortOrder
    };
    let status = await this.fetchTable(details);
    switch(status) {
      case 500:
        this.data = this.ListofPeople;
        break;
      case 409:
        this.data = [];
        this.DetailMessage = "Nothing Here";
        break;
      default:
        this.data = [];
        this.DetailMessage = "Could not connect to the database.";
    }
    this.tableLoading = false;
  }
};
</script>
