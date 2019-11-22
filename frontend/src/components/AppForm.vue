<template>
    <section>
        <b-steps
            v-model="activeStep"
            animated
            has-navigation
            >

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
                <h1 class="title has-text-centered">Finish</h1>
                Wow thank you for going through the whole thing. This doesn't work yet though so sorry for wasting your time.
            </b-step-item>

            <template
                slot="navigation"
                slot-scope="{previous, next}">
                <b-button
                    outlined
                    type="is-danger"
                    icon-pack="fas"
                    icon-left="backward"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    Previous
                </b-button>
                <b-button
                    outlined
                    type="is-success"
                    icon-pack="fas"
                    icon-right="forward"
                    :disabled="next.disabled"
                    @click.prevent="next.action">
                    Next
                </b-button>
            </template>
        </b-steps>
    </section>
</template>

<script>
import Step1 from './AppFormSteps/Step1';
import Step2 from './AppFormSteps/Step2';
import Step3 from './AppFormSteps/Step3';
import Step4 from './AppFormSteps/Step4';
    export default {
        components: {
            Step1, 
            Step2,
            Step3,
            Step4
        },
        data() {
            return {
                activeStep: 0,
                showSocial: false,
                isAnimated: true,
                hasNavigation: true,
                customNavigation: false,
                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                isStepsClickable: false,
                isProfileSuccess: false
            }
        }
    }
</script>