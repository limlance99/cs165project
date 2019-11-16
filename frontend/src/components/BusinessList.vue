<template>
  <div>
    <b-field>
      <b-button type="is-dark" outlined expanded>Add a new Business</b-button>
    </b-field>
    <section>
      <b-table
        :data="data"
        ref="table"
        detailed
        detail-key="businessname"
        @details-open="(row) => closeOtherDetails(row)"
        :loading="tableLoading"
        :opened-detailed="openedDetails"
      >
        <template slot-scope="props">
          <b-table-column field="businessname" label="Name">{{ props.row.businessname }}</b-table-column>

          <b-table-column field="businessno" label="Contact Number">
            <template>{{ props.row.businessno }}</template>
          </b-table-column>

          <b-table-column field="businessadd" label="Company Address">{{ props.row.businessadd }}</b-table-column>

          <b-table-column>
            <template v-if="openedDetails[0] == props.row.businessname">
              <b-button @click="toggle(props.row)">Close</b-button>
            </template>
            <template v-else>
              <b-button @click="toggle(props.row)">Edit</b-button>
            </template>
          </b-table-column>
        </template>

        <template slot="detail" slot-scope="props">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ props.row.businessname }}</strong>
                </p>
                  Reminder to add an update and delete feature.
              </div>
            </div>
          </article>
        </template>

        <template slot="empty">
          <p>Nothing Here.</p>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      data: [
        {
          businessname: "Jollibee",
          businessno: "123123123",
          businessadd: "15 Palm Drive, QC"
        }
      ],
      openedDetails: [],
      tableLoading: true
    };
  },
  computed: {
    ...mapGetters(["allTheData"])
  },
  methods: {
    ...mapActions(["fetchTable"]),
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
    print(thing) {
      console.log(thing);
    },
    closeOtherDetails(row) {
        this.$buefy.toast.open(`Loading ${row.businessname}`);
        this.openedDetails = [row.businessname]
    }
  },
  async mounted() {
    await this.fetchTable("businesses");
    this.data = this.allTheData;
    this.tableLoading = false;
  }
};
</script>
