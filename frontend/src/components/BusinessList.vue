<template>
  <div>
    <b-field>
      <b-button
        type="is-primary-inverted"
        outlined
        expanded
        @click="isComponentModalActive = true"
      >Add a new Business</b-button>
    </b-field>
    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      :can-cancel="[true, false, false]"
      aria-role="dialog"
      aria-modal
    >
      <AddBusiness />
    </b-modal>
    <section>
      <b-table
        :data="data"
        ref="table"
        detailed
        :show-detail-icon="false"
        detail-key="businessname"
        @details-open="(row) => closeOtherDetails(row)"
        :loading="tableLoading"
        :opened-detailed="openedDetails"
        backend-sorting
        :default-sort-direction="defaultSortOrder"
        :default-sort="[sortField, sortOrder]"
        @sort="onSort"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
      >
        <template slot-scope="props">
          <b-table-column field="businessname" label="Name" sortable>{{ props.row.businessname }}</b-table-column>

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
            <b-loading :active.sync="editLoading"></b-loading>
            <div class="media-content">
              <div class="content">
                <b-field
                  label="Contact Number"
                  :type="{'is-danger' : NumberError}"
                  :message="{'Please input numbers only.': NumberError}"
                >
                  <b-input v-model="updatedNumber" maxlength="20"></b-input>
                </b-field>

                <b-field label="Address">
                  <b-input v-model="updatedAddress" maxlength="100"></b-input>
                </b-field>

                <b-field grouped>
                  <b-field>
                    <b-button
                      type="is-primary-inverted"
                      @click="removeBusiness(props.row.businessname)"
                    >Delete</b-button>
                  </b-field>
                  <b-field position="is-right">
                    <p class="control">
                      <b-button
                        type="is-primary"
                        :disabled="(updatedNumber == props.row.businessno && updatedAddress == props.row.businessadd) || NumberError"
                        @click="updateBusiness(props.row.businessname)"
                      >Save Changes</b-button>
                    </p>
                  </b-field>
                </b-field>
              </div>
            </div>
          </article>
        </template>

        <template slot="empty">
          <p v-if="tableLoading">Loading...</p>
          <p v-else>{{DetailMessage}}</p>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AddBusiness: () => import("./AddBusiness")
  },
  data() {
    return {
      data: [],
      isComponentModalActive: false,
      openedDetails: [],
      tableLoading: true,
      updatedNumber: "",
      updatedAddress: "",
      editLoading: false,
      NumberError: false,
      defaultSortOrder: "desc",
      sortField: "businessname",
      sortOrder: "desc",
      sortIcon: "menu-up",
      sortIconSize: "is-small",
      DetailMessage: "Nothing Here."
    };
  },
  computed: {
    ...mapGetters(["ListofBusinesses"])
  },
  watch: {
    updatedNumber(newVal) {
      if (newVal != "") {
        this.NumberError = !newVal.match(/^[0-9]+$/);
      } else {
        this.NumberError = false;
      }
    }
  },
  methods: {
    ...mapActions(["fetchTable", "putBusiness", "deleteBusiness"]),
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
    print(thing) {
      console.log(thing);
    },

    closeOtherDetails(row) {
      this.openedDetails = [row.businessname];
      this.$buefy.toast.open(`Loading ${row.businessname}`);
      this.editLoading = true;
      this.updatedNumber = row.businessno;
      this.updatedAddress = row.businessadd;
      this.editLoading = false;
    },

    async updateBusiness(businessname) {
      this.tableLoading = true;
      var updatedVersion = {
        businessname: businessname.trim(),
        businessno: this.updatedNumber.trim(),
        businessadd: this.updatedAddress.trim()
      };
      await this.putBusiness(updatedVersion);
      this.openedDetails = [];
      this.data = this.ListofBusinesses;
      this.tableLoading = false;
      this.$buefy.toast.open(`${businessname} has been updated!`);
    },

    async removeBusiness(businessname) {
      this.tableLoading = true;
      await this.deleteBusiness(businessname);
      this.data = this.ListofBusinesses;
      this.tableLoading = false;
      this.$buefy.toast.open(`successfully deleted ${businessname}!`);
    },

    async onSort(field, order) {
      this.sortField = field;
      this.sortOrder = order;
      this.tableLoading = true;
      var details = {
        table: "businesses",
        field,
        order
      };
      await this.fetchTable(details);
      this.data = this.ListofBusinesses;
      this.tableLoading = false;
    }
  },
  async mounted() {
    this.tableLoading = true;
    var details = {
      table: "businesses",
      field: this.sortField,
      order: this.sortOrder
    };
    let status = await this.fetchTable(details);
    switch(status) {
      case 500:
        this.data = this.ListofBusinesses;
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
