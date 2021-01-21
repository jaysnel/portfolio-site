import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub, faHtml5, faCss3Alt, faSass, faJs, faVuejs, faNode } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faTools,  faIdCard, faBriefcase, faThList, faCode, faScroll} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faUser, faTools, faIdCard, faBriefcase, faThList, faTwitter, faLinkedin, faGithub, faCode, faHtml5, faCss3Alt, faSass, faJs, faVuejs, faNode, faScroll );
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
