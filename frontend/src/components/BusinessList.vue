<template>
  <div>
    <b-field>
      <b-button
        type="is-dark"
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
      <AddBusiness></AddBusiness>
    </b-modal>
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
                      type="is-danger"
                      @click="removeBusiness(props.row.businessname)"
                    >Delete</b-button>
                  </b-field>
                  <b-field position="is-right">
                    <p class="control">
                      <b-button
                        type="is-success"
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
          <p v-if="tableLoading">
                    Loading...
                </p>
                <p v-else>
                    Nothing here.
                </p>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddBusiness from "./AddBusiness";
export default {
  components: {
    AddBusiness
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
      NumberError: false
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
    }
  },
  async mounted() {
    await this.fetchTable("businesses");
    this.data = this.ListofBusinesses;
    this.tableLoading = false;
  }
};
</script>
