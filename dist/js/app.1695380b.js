(function(e){function t(t){for(var n,o,l=t[0],r=t[1],c=t[2],m=0,p=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"2c10":function(e,t,a){e.exports=a.p+"24944fb8fb2f5725ab0a8954a9e35fcc.pdf"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("a",{staticClass:"nav-mobile-menu-icon",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.openAndCloseMobileNav()}}},[a("font-awesome-icon",{attrs:{icon:"bars",id:"mobile-menu-open"}}),a("font-awesome-icon",{attrs:{icon:"times",id:"mobile-menu-close"}})],1),a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-home nav-item",attrs:{to:"/"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"home"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Home")])]),a("router-link",{staticClass:"nav-about nav-item",attrs:{to:"/about"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"user"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("About")])]),a("router-link",{staticClass:"nav-skills nav-item",attrs:{to:"/skills"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"tools"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Skills")])]),a("router-link",{staticClass:"nav-projects nav-item",attrs:{to:"/projects"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"scroll"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Projects")])]),a("router-link",{staticClass:"nav-contact nav-item",attrs:{to:"/contact"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"id-card"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Contact")])])],1),a("router-view"),a("vue-particles",{attrs:{color:"#dedede",particleOpacity:1,particlesNumber:50,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1}})],1)},i=[],o={methods:{openAndCloseMobileNav:function(){var e=document.getElementById("nav"),t=document.getElementById("mobile-menu-open"),a=document.getElementById("mobile-menu-close");"flex"===e.style.display?(e.style.display="none",t.style.display="block",a.style.display="none"):(e.style.display="flex",t.style.display="none",a.style.display="block")},closeMobileNavOnNewPage:function(){var e=document.getElementById("nav"),t=document.getElementById("mobile-menu-open"),a=document.getElementById("mobile-menu-close");"flex"===e.style.display&&(e.style.display="none",t.style.display="block",a.style.display="none")}}},l=o,r=(a("034f"),a("2877")),c=Object(r["a"])(l,s,i,!1,null,null,null),u=c.exports,m=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-page page-body"},[a("HomeHero")],1)},d=[],v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"HomeHero"},[a("div",{staticClass:"page-title home-title"},[a("span",[e._v("H")]),a("span",[e._v("i")]),a("span",[e._v(",")]),a("br"),a("span",[e._v("I")]),a("span",[e._v("'")]),a("span",[e._v("m")]),e._v(" "),a("span",[e._v("J")]),a("span",[e._v("a")]),a("span",[e._v("y")]),a("span",[e._v("l")]),a("span",[e._v("a")]),a("span",[e._v("n")]),e._v(" "),a("span",[e._v("S")]),a("span",[e._v("n")]),a("span",[e._v("e")]),a("span",[e._v("l")]),a("span",[e._v("s")]),a("span",[e._v("o")]),a("span",[e._v("n")]),a("span",[e._v(",")]),a("br"),a("span",[e._v("W")]),a("span",[e._v("e")]),a("span",[e._v("b")]),e._v(" "),a("span",[e._v("D")]),a("span",[e._v("e")]),a("span",[e._v("v")]),a("span",[e._v("e")]),a("span",[e._v("l")]),a("span",[e._v("o")]),a("span",[e._v("p")]),a("span",[e._v("e")]),a("span",[e._v("r")]),a("span",[e._v(".")])]),a("div",{staticClass:"sub-title"},[e._v("Front End Developer / Tech Enthusiast")])])}],f={name:"HomeHero"},g=f,_=Object(r["a"])(g,v,h,!1,null,null,null),b=_.exports,y={name:"Home",components:{HomeHero:b}},k=y,C=Object(r["a"])(k,p,d,!1,null,null,null),w=C.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about-page page-body"},[a("AboutMain")],1)},E=[],N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"About-Hero"},[a("h1",{staticClass:"page-title about-title"},[e._v("About Me")]),e._m(0),a("div",{staticClass:"about-me-social-icons"},[a("span",[a("a",{attrs:{href:"https://twitter.com/jaylanthedev",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"twitter"}}})],1)]),a("span",[a("a",{attrs:{href:"https://www.linkedin.com/in/jaylansnelson/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"linkedin"}}})],1)]),a("span",[a("a",{attrs:{href:"https://github.com/jaysnel/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"github"}}})],1)]),a("span",[a("a",{staticClass:"button",attrs:{href:e.pdfLink,target:"_blank"}},[e._v("Resume")])])])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about-me-description"},[a("p",[e._v(" My name is Jaylan Snelson and I'm a 26 year old Front End Developer based wherever I can find work. :) ")]),a("p",[e._v(" I describe myself as a passionate developer on a lifelong learning path. ")]),a("p",[e._v(" In my free time you can find me playing chess, learning about security, excercising or just relaxing around the house with the dog. ")]),a("p",[e._v(" This also isn't the only place on the web where you can find me, here is a few more along with my work history. Talk to you soon! ")])])}],S={name:"AboutMain",data:function(){return{pdfLink:a("2c10")}}},M=S,P=Object(r["a"])(M,N,x,!1,null,null,null),O=P.exports,T={components:{AboutMain:O}},A=T,H=Object(r["a"])(A,j,E,!1,null,null,null),I=H.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"skills-page page-body"},[a("Skills")],1)},B=[],L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Skills-Hero"},[a("h1",{staticClass:"page-title skills-title"},[e._v("Skills")]),a("div",{staticClass:"skills-list"},[a("ul",[a("li",[e._v("HTML"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"html5"}}})],1),a("li",[e._v("CSS"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"css3-alt"}}})],1),a("li",[e._v("SASS"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"sass"}}})],1),a("li",[e._v("JS"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"js"}}})],1),a("li",[e._v("Vue.js"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"vuejs"}}})],1),a("li",[e._v("Node.js"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"node"}}})],1),a("li",[e._v("MongoDB")]),a("li",[e._v("Sitecore")]),a("li",[e._v("Photoshop")]),a("li",[e._v("UX")]),a("li",[e._v("Bootstrap")])])])])},D=[],J={name:"Skills"},W=J,R=Object(r["a"])(W,L,D,!1,null,null,null),U=R.exports,F={components:{Skills:U}},q=F,z=Object(r["a"])(q,$,B,!1,null,null,null),V=z.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects-page page-body"},[a("ProjectsMain"),a("div",{staticClass:"project-full-list"},e._l(e.projectData,(function(t){return a("div",{key:t.id,staticClass:"project-container"},[a("h2",[e._v(e._s(t.name))]),a("div",{staticClass:"project-links"},[a("a",{staticClass:"link",attrs:{href:t.projecturl,target:"_blank"}},[e._v(e._s(t.linkName))]),t.originalurl?a("a",{staticClass:"link",attrs:{href:t.originalurl,target:"_blank"}},[e._v(e._s(t.originalurlname))]):e._e(),t.additionalurl?a("a",{staticClass:"link",attrs:{href:t.additionalurl,target:"_blank"}},[e._v(e._s(t.additionalurlname))]):e._e()]),t.imageurl?a("img",{attrs:{src:t.imageurl}}):e._e(),e._m(0,!0),a("div",{staticClass:"project-tools"},e._l(t.tools,(function(t){return a("div",{key:t},[e._v(e._s(t))])})),0),t.details?a("p",[e._v(e._s(t.details))]):e._e()])})),0)],1)},K=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("strong",[e._v("Tools Used:")])])}],X=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Portolio-Hero"},[a("h1",{staticClass:"page-title projects-title"},[e._v("Projects")])])}],Q={name:"ProjectsMain"},Z=Q,ee=Object(r["a"])(Z,X,G,!1,null,null,null),te=ee.exports,ae=a("e64c"),ne={components:{ProjectsMain:te},data:function(){return{projectData:ae}}},se=ne,ie=Object(r["a"])(se,Y,K,!1,null,null,null),oe=ie.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact-page page-body"},[a("Contact")],1)},re=[],ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Contact-Hero"},[a("h1",{staticClass:"page-title contact-title"},[e._v("Contact Me")]),a("form",{staticClass:"form-contact-message",attrs:{action:"",method:"post",name:"form"}},[a("label",{attrs:{for:"Name"}},[e._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-styling",attrs:{type:"text",name:"Name",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",{attrs:{for:"Email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-styling",attrs:{type:"text",name:"Email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"Message"}},[e._v("Message:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-styling",attrs:{type:"text",name:"Message",placeholder:"Message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),a("div",{staticClass:"form-captcha-validation"},[e._v("Security Check "+e._s(e.randomNumberOne)+" + "+e._s(e.randomNumberTwo)+": "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.validationCheck,expression:"validationCheck"}],attrs:{type:"text"},domProps:{value:e.validationCheck},on:{input:function(t){t.target.composing||(e.validationCheck=t.target.value)}}})]),a("div",{staticClass:"errors"},[e.missingNameErr?a("p",[e._v(e._s(e.missingName))]):e._e(),e.missingEmailErr?a("p",[e._v(e._s(e.missingEmail))]):e._e(),e.missingMessageErr?a("p",[e._v(e._s(e.missingMessage))]):e._e(),e.missingSecurityCheckErr?a("p",[e._v(e._s(e.missingSecurityCheck))]):e._e(),e.wrongSecurityCheckErr?a("p",[e._v(e._s(e.wrongSecurityCheck))]):e._e()]),a("button",{on:{click:function(t){return e.sendEmail()}}},[e._v("Send Message")])])},ue=[],me=(a("b0c0"),a("bc3a")),pe=a.n(me),de={name:"Contact",data:function(){return{name:"",email:"",message:"",emailjsapiurl:"https://api.emailjs.com/api/v1.0/email/send",emailServiceId:"service_qam7ri8",emailTemplateId:"template_f00vqx4",emailUserId:"user_LTR0ONldICJMKqhOxpYig",randomNumberOne:null,randomNumberTwo:null,validationAnswer:null,validationCheck:null,valid:!0,missingName:"Your nameless huh?",missingEmail:"No email? How am I suppossed to get back to you?",missingMessage:"No message detected. What did you want to say?",missingSecurityCheck:"Security check is missing.",wrongSecurityCheck:"Double check your math my friend. Wrong answer to security check.",missingNameErr:!1,missingEmailErr:!1,missingMessageErr:!1,missingSecurityCheckErr:!1,wrongSecurityCheckErr:!1}},methods:{securityCheckData:function(){var e=Math.floor(Math.random()*Math.floor(10)),t=Math.floor(Math.random()*Math.floor(10));this.randomNumberOne=e,this.randomNumberTwo=t,this.validationAnswer=this.randomNumberOne+this.randomNumberTwo},formValidationCheck:function(){return this.missingNameErr=!1,this.missingEmailErr=!1,this.missingMessageErr=!1,this.missingSecurityCheckErr=!1,this.wrongSecurityCheckErr=!1,this.valid=!0,null!=this.name&&""!=this.name||(this.valid=!1,this.missingNameErr=!0),null!=this.email&&""!=this.email||(this.valid=!1,this.missingEmailErr=!0),null!=this.message&&""!=this.message||(this.valid=!1,this.missingMessageErr=!0),null==this.validationCheck||""==this.validationCheck?(this.valid=!1,this.missingSecurityCheckErr=!0):this.validationCheck!=this.validationAnswer&&(this.valid=!1,this.wrongSecurityCheckErr=!0),this.valid},sendEmail:function(){var e=this.formValidationCheck();if(!e)return!1;var t=this.emailjsapiurl,a=this.emailServiceId,n=this.emailTemplateId,s=this.emailUserId,i={from_name:this.name,reply_to:this.email,message:this.message},o={service_id:a,template_id:n,user_id:s,template_params:i};pe.a.post(t,o).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},mounted:function(){this.securityCheckData()}},ve=de,he=Object(r["a"])(ve,ce,ue,!1,null,null,null),fe=he.exports,ge={components:{Contact:fe}},_e=ge,be=Object(r["a"])(_e,le,re,!1,null,null,null),ye=be.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notfound-page page-body"},[1==e.loadedPage?a("div",{staticClass:"notfound-main-body"},[a("h1",[e._v("Not Found!")]),a("p"),e._l(e.higlightletedPerson,(function(t){return a("div",{key:t.Name,staticClass:"missing-person-details"},[e._m(0,!0),a("p",[e._v("We also can't find "+e._s(t.Name)+" but the information we do have is below. If you can help please do and keep this person in your thoughts.")]),a("div",[a("img",{attrs:{src:t.Headshot,alt:t.Name}}),a("br"),a("h1",[e._v(e._s(t.Name))])]),a("div",[a("span",[e._v("DOB:")]),e._v(" "+e._s(t["Date(s) of Birth Used"]?t["Date(s) of Birth Used"]:e.notAvailable))]),a("div",[a("span",[e._v("Detals:")]),e._v(" "+e._s(t.Details?t.Details:e.notAvailable))]),a("div",[a("span",[e._v("Eyes:")]),e._v(" "+e._s(t.Eyes?t.Eyes:e.notAvailable))]),a("div",[a("span",[e._v("Hair:")]),e._v(" "+e._s(t.Hair?t.Hair:e.notAvailable))]),a("div",[a("span",[e._v("Height:")]),e._v(" "+e._s(t.Height?t.Height:e.notAvailable))]),a("div",[a("span",[e._v("Place Of Birth:")]),e._v(" "+e._s(t["Place of Birth"]?t["Place of Birth"]:e.notAvailable))]),a("div",[a("span",[e._v("Race:")]),e._v(" "+e._s(t.Race?t.Race:e.notAvailable))]),a("div",[a("span",[e._v("Sex:")]),e._v(" "+e._s(t.Sex?t.Sex:e.notAvailable))]),a("div",[a("span",[e._v("Submit A Tip:")]),e._v(" "+e._s(t["Submit a Tip"]?t["Submit a Tip"]:e.notAvailable))]),a("div",[a("span",[e._v("Weight:")]),e._v(" "+e._s(t.Weight?t.Weight:e.notAvailable))])])}))],2):e._e(),1==e.pageLoader?a("PageLoader"):e._e(),e.apiTakesToLongToLoad?a("p",[e._v("Unfortunately we cant find the page you are looking for. Click "),a("a",{staticClass:"link",attrs:{href:"/"}},[e._v("here")]),e._v(" to head back to a place more familiar.")]):e._e()],1)},Ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Unfortunately we cant find the page you are looking for. Click "),a("a",{staticClass:"link",attrs:{href:"/"}},[e._v("here")]),e._v(" to head back to a place more familiar.")])}],we=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},je=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Page-Loader"},[a("div",{staticClass:"hollowLoader"},[a("div",{staticClass:"largeBox"}),a("div",{staticClass:"smallBox"})])])}],Ee={name:"PageLoader"},Ne=Ee,xe=Object(r["a"])(Ne,we,je,!1,null,null,null),Se=xe.exports,Me={name:"NotFound",components:{PageLoader:Se},data:function(){return{missingpeopleurl:"https://fbimissingpersonapi.azurewebsites.net/v1/all/",missingpeople:null,notAvailable:"N/A",higlightletedPerson:[],pageLoader:!0,loadedPage:!1,apiTakesToLongToLoad:!1,apiTries:0}},methods:{getMissingPeople:function(){var e=this;this.apiTries++,pe.a.get(this.missingpeopleurl).then((function(t){e.pageLoader=!1,e.loadedPage=!0,e.missingpeople=t.data,e.getRandomPerson(t.data)})).catch((function(t){console.log(t),e.apiTries<=50?e.getMissingPeople():e.apiTakesToLongToLoad=!0}))},getRandomPerson:function(e){var t=Math.floor(Math.random()*Math.floor(e.length));this.higlightletedPerson.push(e[t]),console.log(e[t])}},mounted:function(){this.getMissingPeople()}},Pe=Me,Oe=Object(r["a"])(Pe,ke,Ce,!1,null,null,null),Te=Oe.exports;n["a"].use(m["a"]);var Ae=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:I},{path:"/skills",name:"Skills",component:V},{path:"/projects",name:"projects",component:oe},{path:"/contact",name:"Contact",component:ye},{path:"*",name:"Not Found",component:Te}],He=new m["a"]({routes:Ae}),Ie=He,$e=a("98c9"),Be=a("ecee"),Le=a("f2d1"),De=a("c074"),Je=a("ad3d");Be["c"].add(De["h"],De["d"],De["j"],De["i"],De["e"],De["b"],De["g"],Le["h"],Le["e"],Le["b"],De["c"],Le["c"],Le["a"],Le["g"],Le["d"],Le["i"],Le["f"],De["f"],De["a"]),n["a"].component("font-awesome-icon",Je["a"]),n["a"].use($e["a"],pe.a),n["a"].config.productionTip=!1,new n["a"]({router:Ie,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,a){},e64c:function(e){e.exports=JSON.parse('[{"id":1,"name":"Sports Business Journal (Currently Employed)","projecturl":"https://www.sportsbusinessdaily.com/Journal.aspx","originalurl":"","originalurlname":"","additionalurl":"","additionalurlname":"","imageurl":"","linkName":"SBJ Website","tools":["html","css","js","vue.js","C#","Sitecore"],"details":""},{"id":2,"name":"Cowfish Redesign","projecturl":"https://cowfish-design.herokuapp.com/","originalurl":"https://www.thecowfish.com/","originalurlname":"Original","additionalurl":"","additionalurlname":"","imageurl":"","linkName":"Redesign","tools":["html","css","js","vue.js"],"details":"The site was good, just thought it could use a little refresh!"},{"id":3,"name":"Missing Person Web Scraper/Database/API","projecturl":"https://github.com/jaysnel/fbi-missing-person-db","originalurl":"","originalurlname":"","additionalurl":"https://github.com/jaysnel/fbi-missing-person-api","additionalurlname":"API Code","imageurl":"","linkName":"Database Code","tools":["node.js","express.js","google-puppeteer","mongodb","azure"],"details":""}]')}});
//# sourceMappingURL=app.1695380b.js.map