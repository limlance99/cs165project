<template>
  <section>
    <div class="columns is-desktop">
      <div class="column">
        <b-field label="Civil Status">
          <b-select>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widow/er">Widow/er</option>
            <option value="Separated">Separated</option>
          </b-select>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Hair">
          <b-select>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="Blonde">Blonde</option>
            <option value="Gray">Gray</option>
          </b-select>
        </b-field>
      </div>

      <div class="column">
        <b-field label="Eyes">
          <b-select>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="Gray">Gray</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Built">
          <b-select>
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Heavy">Heavy</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Complexion">
          <b-select>
            <option value="Light">Light</option>
            <option value="Medium">Fair</option>
            <option value="Heavy">Dark</option>
          </b-select>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>