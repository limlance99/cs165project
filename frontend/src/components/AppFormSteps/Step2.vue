<template>
  <section>
    <div class="columns is-desktop">
      <div class="column">
        <b-field label="Type of Application">
          <b-select>
            <option value="New">New</option>
            <option value="Delinquent/Dormant License">Delinquent/Dormant License</option>
            <option value="Prof to Non-Prof">Prof to Non-Prof</option>
            <option value="Non-Prof to Prof">Non-Prof to Prof</option>
            <option value="Foreign LIC. Conversion">Foreign LIC. Conversion</option>
            <option value="Renewal">Renewal</option>
            <option value="Additional Restriction Code">Additional Restriction Code</option>
            <option value="Duplicate">Duplicate</option>
            <option value="Revision of Records">Revision of Records</option>
          </b-select>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Type of License Applied For">
          <b-select>
            <option value="Student Permit">Student Permit</option>
            <option value="Non-Professional">Non-Professional</option>
            <option value="Professional">Professional</option>
            <option value="Conductor">Conductor</option>
          </b-select>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Educational Attainment">
          <b-select>
            <option value="Informal Schooling">Informal Schooling</option>
            <option value="Elementary">Elementary</option>
            <option value="High School">High School</option>
            <option value="Vocational">Vocational</option>
            <option value="College">College</option>
            <option value="Post Graduate">Post Graduate</option>
          </b-select>
        </b-field>
      </div>
      
    </div>

    <div class="columns is-desktop">
      <div class="column">
        <b-field label="Driving Skill Acquired or will be Acquired Through">
          <b-select>
            <option value="Driving School">Driving School</option>
            <option value="Licensed Private Person">Licensed Private Person</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Blood Type">
          <b-input maxlength="5"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Organ Donor">
          <b-select>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </b-select>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>