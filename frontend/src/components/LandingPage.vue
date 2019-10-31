<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center" class="grey lighten-5" style="height: 300px;">
          <v-card class="ma-3 pa-6" outlined>
            <v-card-title>Hello,</v-card-title>
            <v-card-subtitle>this is my current CS165 project.</v-card-subtitle>
            <v-card-content>
              <p>I don't have much yet as of now, but be sure to check back soon once I finish this thing.</p>
              <p>
                In the mean time, I've finished testing out the database connection stuff and added links to retrieve them, so
                try checking those out.
              </p>
            </v-card-content>
            <v-card-actions>
              <v-btn to="/routes" text>show forms</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>
