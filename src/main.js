import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub, faHtml5, faCss3Alt, faSass, faJs, faVuejs, faNode } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faTools,  faIdCard, faBriefcase, faThList, faCode, faScroll, faBars, faTimes, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faTimes, faPencilAlt,
  faHome, faUser, faTools, faIdCard, faBriefcase, faThList, faTwitter, faLinkedin, faGithub, faCode, faHtml5, faCss3Alt, faSass, faJs, faVuejs, faNode, faScroll, faBars );
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueParticles, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// using this to try and prevent cold start on azure because I dont want to pay to keep api warm...going to try something different as this causes an unexpected erro on first load.
// export let fullListOfMissingPeople = [];
// router.beforeEach((to, from, next) => {

//   if(fullListOfMissingPeople.length == 0) {
//     axios.get("https://fbimissingpersonapi.azurewebsites.net/v1/all/")
//         .then( res => {
//           fullListOfMissingPeople = res.data;
//           console.log(fullListOfMissingPeople);
//           next();
//         })
//         .catch(err => {
//           console.log(err);
//           next();
//         })
//   }
//   else {
//     console.log("data full");
//     next();
//   }
// })