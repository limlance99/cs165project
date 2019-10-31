<template>
  <div id="about">
    <h1>API routes</h1>
    <ul>
      <li v-for="link in links" :key="link">
        <a :href="link.link" target="_blank">{{link.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Routes",
  data: () => {
    return {
      links: [
        {
          link: "https://cs165lim.herokuapp.com/api/restrictions",
          title: "Restrictions"
        },
        {
          link: "https://cs165lim.herokuapp.com/api/conditions",
          title: "Conditions"
        },
        {
          link: "https://cs165lim.herokuapp.com/api/resandconds",
          title: "Res and Conds"
        },
        {
          link: "http://cs165lim.herokuapp.com/api/bodytype",
          title: "Body Type"
        },

        {
          link: "https://cs165lim.herokuapp.com/api/personaldetails",
          title: "Personal Details"
        },
        {
          link: "https://cs165lim.herokuapp.com/api/familyrelations",
          title: "Family Relations"
        },
        {
          link: "https://cs165lim.herokuapp.com/api/nationality",
          title: "Nationality"
        },
        {
          link: "https://cs165lim.herokuapp.com/api/personinformation",
          title: "Person Information"
        },
        {
          link: "https://cs165lim.herokuapp.com/api/businesses",
          title: "Businesses"
        },
        {
          link: "https://cs165lim.herokuapp.com/api/civilstatus",
          title: "CivilStatus"
        },
        { link: "https://cs165lim.herokuapp.com/api/dlaf", title: "DLAF" }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
