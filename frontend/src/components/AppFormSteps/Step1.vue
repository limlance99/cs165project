<template>
  <section>
    <b-field label="Full Name">
      <b-input maxlength="100"></b-input>
    </b-field>

    <b-field label="Present Address">
      <b-input maxlength="100"></b-input>
    </b-field>

    <div class="columns is-desktop">
      <div class="column">
        <b-field label="Tel/CP Number">
          <b-input maxlength="100"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="TIN">
          <b-input maxlength="12"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Height (in cm)">
          <b-input maxlength="6"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Weight (in kg)">
          <b-input maxlength="6"></b-input>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Gender">
          <b-select>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </b-select>
        </b-field>
      </div>
    </div>

    <div class="columns is-desktop">
      <div class="column">
        <b-field label="Birth Date">
          <b-datepicker placeholder="Click to select..." icon="calendar-today"></b-datepicker>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Nationality">
          <b-input maxlength="50"></b-input>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>