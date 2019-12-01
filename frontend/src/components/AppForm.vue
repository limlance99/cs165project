<template>
  <section>
    <b-steps v-model="activeStep" animated has-navigation>
      <b-step-item label="Step 1" :type="{'is-success': isProfileSuccess}">
        <h1 class="title has-text-centered">Basic Information</h1>
        <Step1 />
      </b-step-item>

      <b-step-item label="Step 2">
        <h1 class="title has-text-centered">Application Details</h1>
        <Step2 />
      </b-step-item>

      <b-step-item label="Step 3">
        <h1 class="title has-text-centered">Personal Details</h1>
        <Step3 />
      </b-step-item>

      <b-step-item label="Step 4">
        <h1 class="title has-text-centered">Extra Background</h1>
        <Step4 />
      </b-step-item>

      <b-step-item label="Finish" disabled>
        <section class="section">
          <div class="container">
            <h1 class="title has-text-centered">Hello</h1>
            <h2 class="subtitle">Nothing happened :((</h2>
            <p>Wow thank you for going through the whole thing. This doesn't work yet though so sorry for wasting your time.</p>
          </div>
        </section>
      </b-step-item>

      <template slot="navigation" slot-scope="{previous, next}">
        <div class="buttons">
          <b-button
            outlined
            type="is-danger"
            :disabled="previous.disabled"
            @click.prevent="previous.action"
          >Previous</b-button>

          <b-button
            outlined
            type="is-success"
            :disabled="next.disabled"
            @click.prevent="next.action"
          >Next</b-button>
        </div>
      </template>
    </b-steps>
  </section>
</template>

<script>
export default {
  components: {
    Step1: () => import("./AppFormSteps/Step1"),
    Step2: () => import("./AppFormSteps/Step2"),
    Step3: () => import("./AppFormSteps/Step3"),
    Step4: () => import("./AppFormSteps/Step4")
  },
  data() {
    return {
      activeStep: 0,
      showSocial: false,
      isAnimated: true,
      hasNavigation: true,
      customNavigation: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isStepsClickable: false,
      isProfileSuccess: false
    };
  }
};
</script>