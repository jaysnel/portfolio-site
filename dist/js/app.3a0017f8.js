(function(e){function t(t){for(var i,o,l=t[0],r=t[1],c=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);m&&m(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},s=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=r;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("a",{staticClass:"nav-mobile-menu-icon",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.openAndCloseMobileNav()}}},[a("font-awesome-icon",{attrs:{icon:"bars",id:"mobile-menu-open"}}),a("font-awesome-icon",{attrs:{icon:"times",id:"mobile-menu-close"}})],1),a("div",{attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-home nav-item",attrs:{to:"/"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"home"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Home")])]),a("router-link",{staticClass:"nav-about nav-item",attrs:{to:"/about"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"user"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("About")])]),a("router-link",{staticClass:"nav-skills nav-item",attrs:{to:"/skills"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"tools"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Skills")])]),a("router-link",{staticClass:"nav-projects nav-item",attrs:{to:"/projects"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"scroll"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Portfolio")])]),a("router-link",{staticClass:"nav-contact nav-item",attrs:{to:"/contact"}},[a("span",{staticClass:"link-icon"},[a("font-awesome-icon",{attrs:{icon:"id-card"}})],1),a("span",{staticClass:"link-text",on:{click:function(t){return e.closeMobileNavOnNewPage()}}},[e._v("Contact")])])],1),a("router-view"),a("vue-particles",{attrs:{color:"#dedede",particleOpacity:1,particlesNumber:50,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1}})],1)},s=[],o={methods:{openAndCloseMobileNav:function(){var e=document.getElementById("nav"),t=document.getElementById("mobile-menu-open"),a=document.getElementById("mobile-menu-close");"flex"===e.style.display?(e.style.display="none",t.style.display="block",a.style.display="none"):(e.style.display="flex",t.style.display="none",a.style.display="block")},closeMobileNavOnNewPage:function(){var e=document.getElementById("nav"),t=document.getElementById("mobile-menu-open"),a=document.getElementById("mobile-menu-close");"flex"===e.style.display&&(e.style.display="none",t.style.display="block",a.style.display="none")}}},l=o,r=(a("034f"),a("2877")),c=Object(r["a"])(l,n,s,!1,null,null,null),m=c.exports,u=a("8c4f"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-page page-body"},[a("div",{staticClass:"HomeHero"},[a("div",{staticClass:"page-title home-title"},[a("span",[e._v("H")]),a("span",[e._v("i")]),a("span",[e._v(",")]),a("br"),a("span",[e._v("I")]),a("span",[e._v("'")]),a("span",[e._v("m")]),e._v(" "),a("span",[e._v("J")]),a("span",[e._v("a")]),a("span",[e._v("y")]),a("span",[e._v("l")]),a("span",[e._v("a")]),a("span",[e._v("n")]),e._v(" "),a("span",[e._v("S")]),a("span",[e._v("n")]),a("span",[e._v("e")]),a("span",[e._v("l")]),a("span",[e._v("s")]),a("span",[e._v("o")]),a("span",[e._v("n")]),a("span",[e._v(",")]),a("br"),a("span",[e._v("S")]),a("span",[e._v("o")]),a("span",[e._v("f")]),a("span",[e._v("t")]),a("span",[e._v("w")]),a("span",[e._v("a")]),a("span",[e._v("r")]),a("span",[e._v("e")]),e._v(" "),a("span"),a("span",[e._v("E")]),a("span",[e._v("n")]),a("span",[e._v("g")]),a("span",[e._v("i")]),a("span",[e._v("n")]),a("span",[e._v("e")]),a("span",[e._v("e")]),a("span",[e._v("r")]),a("span",[e._v(".")])]),a("div",{staticClass:"sub-title"},[e._v("Front End Developer / Blockchain Enthusiast")])])])}],v={name:"Home"},h=v,g=Object(r["a"])(h,p,d,!1,null,null,null),_=g.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about-page page-body"},[i("div",{staticClass:"About-Hero"},[i("h1",{staticClass:"page-title about-title"},[e._v("About Me")]),e._m(0),i("div",{staticClass:"about-me-social-icons"},[i("span",[i("a",{attrs:{href:"https://www.linkedin.com/in/jaylansnelson/",title:"LinkedIn",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"linkedin"}}})],1)]),i("span",[i("a",{attrs:{href:"https://github.com/jaysnel/",title:"Github",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"github"}}})],1)]),i("span",[i("a",{attrs:{href:"https://jaylanthedev.medium.com/",title:"Blog",target:"_blank"}},[i("font-awesome-icon",{attrs:{icon:{prefix:"fa",iconName:"pencil-alt"}}})],1)]),i("span",[i("a",{attrs:{target:"_blank",href:a("dcc2")}},[e._v("Resume")])])])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about-me-description"},[a("p",[e._v(" My name is Jaylan Snelson and I'm a 28 year old Front End Engineer. ")]),a("p",[e._v(" I describe myself as a passionate developer on a lifelong learning path. ")]),a("p",[e._v(" In my free time you can find me traveling, training in Brazilian jiu jitsu or keeping up to date with the newest crypto news. ")]),a("p",[e._v(" This also isn't the only place on the web where you can find me, here is a few more along with my work history. Talk to you soon! ")])])}],y={name:"AboutMain",data:function(){return{pdfLink:a("dcc2")}}},k=y,C=Object(r["a"])(k,f,b,!1,null,null,null),w=C.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"skills-page page-body"},[a("div",{staticClass:"Skills-Hero"},[a("h1",{staticClass:"page-title skills-title"},[e._v("Skills")]),a("div",{staticClass:"skills-list"},[a("ul",[a("li",[e._v("HTML"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"html5"}}})],1),a("li",[e._v("CSS"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"css3-alt"}}})],1),a("li",[e._v("SASS"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"sass"}}})],1),a("li",[e._v("JS"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"js"}}})],1),a("li",[e._v("Vue.js"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"vuejs"}}})],1),a("li",[e._v("Node.js"),a("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"node"}}})],1),a("li",[e._v("React.js")]),a("li",[e._v("Tailwind")]),a("li",[e._v("MongoDB")]),a("li",[e._v("Solidity")]),a("li",[e._v("Hardhat")]),a("li",[e._v("Ethers.js")])])])])])},N=[],j={name:"Skills"},S=j,P=Object(r["a"])(S,E,N,!1,null,null,null),x=P.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"projects-page page-body"},[e._m(0),a("div",{staticClass:"project-full-list"},e._l(e.projectData,(function(t){return a("div",{key:t.id,staticClass:"project-container"},[a("h2",[e._v(e._s(t.name))]),a("div",{staticClass:"project-links"},[a("a",{staticClass:"link",attrs:{href:t.projecturl,title:t.linkName,target:"_blank"}},[e._v(e._s(t.linkName))]),t.originalurl?a("a",{staticClass:"link",attrs:{href:t.originalurl,title:t.originalurlname,target:"_blank"}},[e._v(e._s(t.originalurlname))]):e._e(),t.additionalurl?a("a",{staticClass:"link",attrs:{href:t.additionalurl,title:t.additionalurlname,target:"_blank"}},[e._v(e._s(t.additionalurlname))]):e._e()]),t.imageurl?a("img",{attrs:{src:t.imageurl}}):e._e(),e._m(1,!0),a("div",{staticClass:"project-tools"},e._l(t.tools,(function(t){return a("div",{key:t},[e._v(e._s(t))])})),0),t.details?a("p",[e._v(e._s(t.details))]):e._e()])})),0)])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Portolio-Hero"},[a("h1",{staticClass:"page-title projects-title"},[e._v("Portfolio")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("strong",[e._v("Tools Used:")])])}],T=a("e64c"),A={data:function(){return{projectData:T}}},I=A,L=Object(r["a"])(I,M,O,!1,null,null,null),B=L.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact-page page-body"},[e.formProcessing?a("div",[a("PageLoader")],1):e._e(),e.showForm?a("div",{staticClass:"Contact-Hero"},[a("h1",{staticClass:"page-title contact-title"},[e._v("Contact Me")]),a("form",{staticClass:"form-contact-message",attrs:{action:"",method:"post",name:"form"}},[a("label",{attrs:{for:"Name"}},[e._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-styling",attrs:{type:"text",name:"Name",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("label",{attrs:{for:"Email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-styling",attrs:{type:"text",name:"Email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{attrs:{for:"Message"}},[e._v("Message:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-styling",attrs:{type:"text",name:"Message",placeholder:"Message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),a("div",{staticClass:"form-captcha-validation"},[e._v("Security Check "+e._s(e.randomNumberOne)+" + "+e._s(e.randomNumberTwo)+": "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.validationCheck,expression:"validationCheck"}],attrs:{type:"text"},domProps:{value:e.validationCheck},on:{input:function(t){t.target.composing||(e.validationCheck=t.target.value)}}})]),a("div",{staticClass:"errors"},[e.missingNameErr?a("p",[e._v(e._s(e.missingName))]):e._e(),e.missingEmailErr?a("p",[e._v(e._s(e.missingEmail))]):e._e(),e.missingMessageErr?a("p",[e._v(e._s(e.missingMessage))]):e._e(),e.missingSecurityCheckErr?a("p",[e._v(e._s(e.missingSecurityCheck))]):e._e(),e.wrongSecurityCheckErr?a("p",[e._v(e._s(e.wrongSecurityCheck))]):e._e()]),a("button",{on:{click:function(t){return e.sendEmail()}}},[e._v("Send Message")])]):e._e(),e.thankYouScreen?a("div",[a("h2",[e._v("Thank you!")]),a("p",[e._v("I will be in touch as soon as I can!")])]):e._e()])},H=[],U=(a("b0c0"),a("bc3a")),$=a.n(U),R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Page-Loader"},[a("div",{staticClass:"hollowLoader"},[a("div",{staticClass:"largeBox"}),a("div",{staticClass:"smallBox"})])])}],V={name:"PageLoader"},W=V,J=Object(r["a"])(W,R,F,!1,null,null,null),Y=J.exports,z={components:{PageLoader:Y},name:"Contact",data:function(){return{name:"",email:"",message:"",emailjsapiurl:"https://api.emailjs.com/api/v1.0/email/send",emailServiceId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SERVICE_ID,emailTemplateId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_TEMPLATE_ID,emailUserId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_USER_ID,randomNumberOne:null,randomNumberTwo:null,validationAnswer:null,validationCheck:null,valid:!0,missingName:"Your nameless huh?",missingEmail:"No email? How am I suppossed to get back to you?",missingMessage:"No message detected. What did you want to say?",missingSecurityCheck:"Security check is missing.",wrongSecurityCheck:"Double check your math my friend. Wrong answer to security check.",missingNameErr:!1,missingEmailErr:!1,missingMessageErr:!1,missingSecurityCheckErr:!1,wrongSecurityCheckErr:!1,showForm:!0,formProcessing:!1,thankYouScreen:!1}},methods:{securityCheckData:function(){var e=Math.floor(Math.random()*Math.floor(10)),t=Math.floor(Math.random()*Math.floor(10));this.randomNumberOne=e,this.randomNumberTwo=t,this.validationAnswer=this.randomNumberOne+this.randomNumberTwo},formValidationCheck:function(){return this.missingNameErr=!1,this.missingEmailErr=!1,this.missingMessageErr=!1,this.missingSecurityCheckErr=!1,this.wrongSecurityCheckErr=!1,this.valid=!0,null!=this.name&&""!=this.name||(this.valid=!1,this.missingNameErr=!0),null!=this.email&&""!=this.email||(this.valid=!1,this.missingEmailErr=!0),null!=this.message&&""!=this.message||(this.valid=!1,this.missingMessageErr=!0),null==this.validationCheck||""==this.validationCheck?(this.valid=!1,this.missingSecurityCheckErr=!0):this.validationCheck!=this.validationAnswer&&(this.valid=!1,this.wrongSecurityCheckErr=!0),this.valid},sendEmail:function(){var e=this,t=this.formValidationCheck();if(!t)return!1;this.showForm=!1,this.formProcessing=!0;var a=this.emailjsapiurl,i=this.emailServiceId,n=this.emailTemplateId,s=this.emailUserId,o={from_name:this.name,reply_to:this.email,message:this.message},l={service_id:i,template_id:n,user_id:s,template_params:o};$.a.post(a,l).then((function(t){console.log(t),e.showForm=!1,e.formProcessing=!1,e.thankYouScreen=!0})).catch((function(t){console.log(t),e.showForm=!0,e.formProcessing=!1}))}},mounted:function(){this.securityCheckData()}},G=z,Z=Object(r["a"])(G,D,H,!1,null,null,null),q=Z.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notfound-page page-body"},[1==e.loadedPage?a("div",{staticClass:"notfound-main-body"},[a("h1",[e._v("Not Found!")]),a("p"),e._l(e.higlightletedPerson,(function(t){return a("div",{key:t.Name,staticClass:"missing-person-details"},[e._m(0,!0),a("p",[e._v("We also can't find "+e._s(t.Name)+" but the information we do have is below. If you can help please do and keep this person in your thoughts.")]),a("div",[a("img",{attrs:{src:t.Headshot,alt:t.Name}}),a("br"),a("h1",[e._v(e._s(t.Name))])]),a("div",[a("span",[e._v("DOB:")]),e._v(" "+e._s(t["Date(s) of Birth Used"]?t["Date(s) of Birth Used"]:e.notAvailable))]),a("div",[a("span",[e._v("Detals:")]),e._v(" "+e._s(t.Details?t.Details:e.notAvailable))]),a("div",[a("span",[e._v("Eyes:")]),e._v(" "+e._s(t.Eyes?t.Eyes:e.notAvailable))]),a("div",[a("span",[e._v("Hair:")]),e._v(" "+e._s(t.Hair?t.Hair:e.notAvailable))]),a("div",[a("span",[e._v("Height:")]),e._v(" "+e._s(t.Height?t.Height:e.notAvailable))]),a("div",[a("span",[e._v("Place Of Birth:")]),e._v(" "+e._s(t["Place of Birth"]?t["Place of Birth"]:e.notAvailable))]),a("div",[a("span",[e._v("Race:")]),e._v(" "+e._s(t.Race?t.Race:e.notAvailable))]),a("div",[a("span",[e._v("Sex:")]),e._v(" "+e._s(t.Sex?t.Sex:e.notAvailable))]),a("div",[a("span",[e._v("Submit A Tip:")]),e._v(" "+e._s(t["Submit a Tip"]?t["Submit a Tip"]:e.notAvailable))]),a("div",[a("span",[e._v("Weight:")]),e._v(" "+e._s(t.Weight?t.Weight:e.notAvailable))])])}))],2):e._e(),1==e.pageLoader?a("PageLoader"):e._e(),e.apiTakesToLongToLoad?a("p",[e._v("Unfortunately we cant find the page you are looking for. Click "),a("a",{staticClass:"link",attrs:{href:"/"}},[e._v("here")]),e._v(" to head back to a place more familiar.")]):e._e()],1)},Q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Unfortunately we cant find the page you are looking for. Click "),a("a",{staticClass:"link",attrs:{href:"/"}},[e._v("here")]),e._v(" to head back to a place more familiar.")])}],X={name:"NotFound",components:{PageLoader:Y},data:function(){return{missingpeopleurl:"https://fbi-missing-person-api.herokuapp.com/v1/all",missingpeople:null,notAvailable:"N/A",higlightletedPerson:[],pageLoader:!0,loadedPage:!1,apiTakesToLongToLoad:!1,apiTries:0}},methods:{getMissingPeople:function(){var e=this;this.apiTries++,$.a.get(this.missingpeopleurl).then((function(t){e.pageLoader=!1,e.loadedPage=!0,e.missingpeople=t.data,e.getRandomPerson(t.data)})).catch((function(t){console.log(t),e.apiTries<=50?e.getMissingPeople():e.apiTakesToLongToLoad=!0}))},getRandomPerson:function(e){var t=Math.floor(Math.random()*Math.floor(e.length));this.higlightletedPerson.push(e[t]),console.log(e[t])}},mounted:function(){this.getMissingPeople()}},ee=X,te=Object(r["a"])(ee,K,Q,!1,null,null,null),ae=te.exports;i["a"].use(u["a"]);var ie=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:w},{path:"/skills",name:"Skills",component:x},{path:"/projects",name:"projects",component:B},{path:"/contact",name:"Contact",component:q},{path:"*",name:"Not Found",component:ae}],ne=new u["a"]({mode:"history",routes:ie}),se=ne,oe=a("98c9"),le=a("ecee"),re=a("f2d1"),ce=a("c074"),me=a("ad3d");le["c"].add(ce["i"],ce["f"],ce["d"],ce["k"],ce["j"],ce["e"],ce["b"],ce["h"],re["h"],re["e"],re["b"],ce["c"],re["c"],re["a"],re["g"],re["d"],re["i"],re["f"],ce["g"],ce["a"]),i["a"].component("font-awesome-icon",me["a"]),i["a"].use(oe["a"],$.a),i["a"].config.productionTip=!1,new i["a"]({router:se,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,a){},dcc2:function(e,t,a){e.exports=a.p+"738c2bcca162dc0fcfd4f0ea96475857.pdf"},e64c:function(e){e.exports=JSON.parse('[{"id":1,"name":"Missing Person Web Scraper/Database/API","projecturl":"https://github.com/jaysnel/fbi-missing-person-db","originalurl":"","originalurlname":"","additionalurl":"https://github.com/jaysnel/fbi-missing-person-api","additionalurlname":"API Code","imageurl":"","linkName":"Database Code","tools":["node.js","express.js","google-puppeteer","mongodb","azure"],"details":""},{"id":2,"name":"Web3 Global Passport Concept","projecturl":"https://global-passport.herokuapp.com/","originalurl":"https://github.com/jaysnel/global-travel-passport-ui-web3","originalurlname":"UI Code","additionalurl":"https://github.com/jaysnel/global-travel-passport-web3","additionalurlname":"Contract Code","imageurl":"","linkName":"UI","tools":["Solidity","ethers.js","react.js"],"details":""},{"id":3,"name":"Simple NFT Creator","projecturl":"https://github.com/jaysnel/js-nft","originalurl":"","originalurlname":"","additionalurl":"","additionalurlname":"","imageurl":"","linkName":"Github Code","tools":["Solidty","Hardhat","OpenZeppelin"],"details":""},{"id":4,"name":"Cowfish Redesign","projecturl":"https://cowfish-design.herokuapp.com/","originalurl":"https://www.thecowfish.com/","originalurlname":"Original","additionalurl":"","additionalurlname":"","imageurl":"","linkName":"Redesign","tools":["html","css","js","vue.js"],"details":"The site was good, just thought it could use a little refresh!"}]')}});
//# sourceMappingURL=app.3a0017f8.js.map