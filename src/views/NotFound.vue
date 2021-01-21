<template>
    <div class="notfound-page page-body">
        <h1>Not Found!</h1>
        <p>
        <!-- <a href="/">Go home?</a> -->
        </p>
        <div v-for="person in higlightletedPerson" :key="person.Name">
          <div>DOB: {{ person["Date(s) of Birth Used"]}}</div>
          <div>Detals: {{ person.Details }}</div>
          <div>Eyes: {{ person.Eyes }}</div>
          <div>Hair: {{ person.Hair }}</div>
          <div>Headshot: {{ person.Headshot }}</div>
          <div>Height: {{ person.Height }}</div>
          <div>Name: {{ person.Name }}</div>
          <div>Place Of Birth: {{ person["Place of Birth"] }}</div>
          <div>Race: {{ person.Race }}</div>
          <div>Sex: {{ person.Sex }}</div>
          <div>Submit A Tip: {{ person["Submit a Tip"] }}</div>
          <div>Weight: {{ person.Weight }}</div>
        </div>
        <p>{{ missingpeople }}</p>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'NotFound',
    data: function() {
      return {
          missingpeopleurl: "https://fbimissingpersonapi.azurewebsites.net/v1/all",
          missingpeople: null,
          higlightletedPerson: []
      }
    },
    methods: {
      async getMissingPeople() {
        await axios.get(this.missingpeopleurl)
        .then( res => {
          console.log(res.data);

          this.missingpeople = res.data;
          this.getRandomPerson(res.data);
        })
        .catch(err => {
          console.log(err);
        })
      },
      getRandomPerson(person) {
        let randomNumber = Math.floor(Math.random() * Math.floor(person.length));
        this.higlightletedPerson.push(person[randomNumber]);

        console.log(person[randomNumber]);
      }
    },
    mounted() {
      this.getMissingPeople();
    }
  }

</script>