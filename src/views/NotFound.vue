<template>
    <div class="notfound-page page-body">
        <div v-if="loadedPage == true" class="notfound-main-body">
          <h1>Not Found!</h1>
          <p>
          <!-- <a href="/">Go home?</a> -->
          </p>
          <div v-for="person in higlightletedPerson" :key="person.Name" class="missing-person-details">
            <p>Unfortunately we cant find the page you are looking for. Click <a href="/" class="link">here</a> to head back to a place more familiar.</p>
            <p>We also can't find {{ person.Name }} but the information we do have is below. If you can help please do and keep this person in your thoughts.</p>
            <div><img :src="person.Headshot" :alt="person.Name">
            <br/>
            <h1>{{ person.Name }}</h1></div>
            <div><span>DOB:</span> {{ person["Date(s) of Birth Used"] ? person["Date(s) of Birth Used"] : notAvailable}}</div>
            <div><span>Detals:</span> {{ person.Details ? person.Details : notAvailable }}</div>
            <div><span>Eyes:</span> {{ person.Eyes ? person.Eyes : notAvailable }}</div>
            <div><span>Hair:</span> {{ person.Hair ? person.Hair : notAvailable }}</div>
            <div><span>Height:</span> {{ person.Height ? person.Height : notAvailable }}</div>
            <div><span>Place Of Birth:</span> {{ person["Place of Birth"] ? person["Place of Birth"] : notAvailable }}</div>
            <div><span>Race:</span> {{ person.Race ? person.Race : notAvailable }}</div>
            <div><span>Sex:</span> {{ person.Sex ? person.Sex : notAvailable }}</div>
            <div><span>Submit A Tip:</span> {{ person["Submit a Tip"] ? person["Submit a Tip"] : notAvailable }}</div>
            <div><span>Weight:</span> {{ person.Weight ? person.Weight : notAvailable }}</div>
          </div>
        </div>
        <PageLoader v-if="pageLoader == true"/>
        <p v-if="apiTakesToLongToLoad">Unfortunately we cant find the page you are looking for. Click <a href="/" class="link">here</a> to head back to a place more familiar.</p>
    </div>
</template>

<script>
  import axios from "axios";
  import PageLoader from "@/components/PageLoader";

  export default {
    name: 'NotFound',
    components: {
      PageLoader
    },
    data: function() {
      return {
          missingpeopleurl: "https://fbi-missing-person-api.herokuapp.com/v1/all",
          missingpeople: null,
          notAvailable: "N/A",
          higlightletedPerson: [],
          pageLoader: true,
          loadedPage: false,
          apiTakesToLongToLoad: false,
          apiTries: 0
      }
    },
    methods: {
      getMissingPeople() {
        this.apiTries++;

        axios.get(this.missingpeopleurl)
        .then( res => {
          this.pageLoader = false;
          this.loadedPage = true;

          this.missingpeople = res.data;
          this.getRandomPerson(res.data);
        })
        .catch(err => {
          console.log(err);

          //My way of getting around Azures cold start for just this project, but need to just pay to have funtion keep api warm.
          if(this.apiTries <= 50) {
            this.getMissingPeople();
          } else {
            this.apiTakesToLongToLoad = true;
          }
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
