<template>
  <section>
    <b-field :label-position="labelPosition" label="Birthplace">
      <b-input maxlength="100"></b-input>
    </b-field>

    <div class="columns is-desktop">
      <div class="column">
        <b-field :label-position="labelPosition" label="Father's Name">
          <b-input maxlength="100"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field :label-position="labelPosition" label="Mother's Name">
          <b-input maxlength="100"></b-input>
        </b-field>
      </div>
    </div>

    <b-field :label-position="labelPosition" label="Spouse">
      <b-input maxlength="100"></b-input>
    </b-field>

    <b-field :label-position="labelPosition" label="Business" grouped :loading="namesLoading">
      <b-select>
        <option v-for="name in ListofBusinessNames" :key="name" :value="name">{{name}}</option>
      </b-select>
      <p class="control">
        <b-button @click="isComponentModalActive=true">Your Business not here?</b-button>
      </p>
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
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AddBusiness: () => import("../AddBusiness")
  },
  computed: {
    ...mapGetters(["ListofBusinessNames"])
  },
  data() {
    return {
      businesses: [],
      isComponentModalActive: false,
      labelPosition: "on-border",
      namesLoading: false,
    };
  },
  methods: {
    ...mapActions(["fetchTable"])
  },
  async mounted() {
    this.namesLoading = true;
    var details = {
      table: "businesses",
      field: "businessname",
      order: "asc"
    }
    await this.fetchTable(details);
    this.namesLoading = false;
  }
};
</script>