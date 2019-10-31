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
  margin: 0;
  padding: 0;
}

li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border: none;
}

li a {
  text-decoration: none;
  color: #000;
  display: block;
  width: 200px;

  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}

li a:hover {
  font-size: 30px;
  background: #f6f6f6;
}
</style>
