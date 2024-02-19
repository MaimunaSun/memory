(function(){"use strict";var e={3925:function(e,a,t){var r=t(3751),o=t(641);const n={id:"app"},l={class:"layout"};function s(e,a,t,r,s,i){const c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.Lk)("div",l,[(0,o.bF)(c)])])}var i={name:"App"},c=t(6262);const p=(0,c.A)(i,[["render",s]]);var d=p,m=t(5220);const u=e=>((0,o.Qi)("data-v-7ff7704a"),e=e(),(0,o.jt)(),e),y={class:"start-page"},v={class:"sapphire-layout"},f={class:"secondary-layout"},h=u((()=>(0,o.Lk)("h1",{class:"welcome-heading"},"Welcome to Memory Game",-1)));function b(e,a,t,r,n,l){const s=(0,o.g2)("MemoryHeading"),i=(0,o.g2)("PlayerNameModal");return(0,o.uX)(),(0,o.CE)("div",y,[(0,o.bF)(s,{text:"Memory"}),(0,o.Lk)("div",v,[(0,o.Lk)("div",f,[h,(0,o.Lk)("button",{class:"start-button",onClick:a[0]||(a[0]=(...e)=>l.showModal&&l.showModal(...e))},"Start Game")])]),n.showPlayerNameModal?((0,o.uX)(),(0,o.Wv)(i,{key:0,onSubmit:l.handleNamesSubmit},null,8,["onSubmit"])):(0,o.Q3)("",!0)])}t(4114);var g=t(33);const N={class:"memory-heading"};function k(e,a,t,r,n,l){return(0,o.uX)(),(0,o.CE)("h1",N,(0,g.v_)(t.text),1)}var L={props:{text:{type:String,required:!0}}};const x=(0,c.A)(L,[["render",k],["__scopeId","data-v-b29fe992"]]);var _=x;const C={class:"modal"};function E(e,a,t,n,l,s){return(0,o.uX)(),(0,o.CE)("div",C,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>l.player1Name=e),placeholder:"Enter Player 1 Name"},null,512),[[r.Jo,l.player1Name]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>l.player2Name=e),placeholder:"Enter Player 2 Name"},null,512),[[r.Jo,l.player2Name]]),(0,o.Lk)("button",{onClick:a[2]||(a[2]=(...e)=>s.submit&&s.submit(...e))},"Submit")])}var w={data(){return{player1Name:"",player2Name:""}},methods:{submit(){this.$emit("submit",{player1Name:this.player1Name,player2Name:this.player2Name})}}};const M=(0,c.A)(w,[["render",E],["__scopeId","data-v-541cd891"]]);var S=M,P={components:{MemoryHeading:_,PlayerNameModal:S},data(){return{showPlayerNameModal:!1}},methods:{showModal(){this.showPlayerNameModal=!0},handleNamesSubmit(e){this.showPlayerNameModal=!1,this.$router.push({name:"Welcome",query:{player1Name:e.player1Name,player2Name:e.player2Name}})}}};const O=(0,c.A)(P,[["render",b],["__scopeId","data-v-7ff7704a"]]);var A=O,j=t.p+"img/player1.25c2ba4b.jpg",F=t.p+"img/player2.fe70e303.jpg";const G=e=>((0,o.Qi)("data-v-512463c6"),e=e(),(0,o.jt)(),e),X={class:"welcome-container"},$={class:"welcome-page"},q={class:"secondary-box"},I=G((()=>(0,o.Lk)("h2",{class:"secondary-heading"},"Are you ready to play?",-1))),B=G((()=>(0,o.Lk)("div",{class:"player-images"},[(0,o.Lk)("img",{src:j,alt:"Player 1",class:"player-image"}),(0,o.Lk)("img",{src:F,alt:"Player 2",class:"player-image"})],-1))),H={class:"player-inputs"};function W(e,a,t,n,l,s){const i=(0,o.g2)("ExitButton"),c=(0,o.g2)("MemoryHeading");return(0,o.uX)(),(0,o.CE)("div",X,[(0,o.Lk)("div",$,[(0,o.bF)(i),(0,o.bF)(c,{text:"Memory"}),(0,o.Lk)("div",q,[I,B,(0,o.Lk)("div",H,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>l.player1Name=e),placeholder:"Enter Player 1 Name",class:"name-input"},null,512),[[r.Jo,l.player1Name]]),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>l.player2Name=e),placeholder:"Enter Player 2 Name",class:"name-input"},null,512),[[r.Jo,l.player2Name]])]),(0,o.Lk)("button",{onClick:a[2]||(a[2]=(...e)=>s.startGame&&s.startGame(...e)),class:"play-button"},"Let's Play")])])])}function J(e,a,t,r,n,l){return(0,o.uX)(),(0,o.CE)("button",{class:"exit-button",onClick:a[0]||(a[0]=(...e)=>l.exit&&l.exit(...e))},"Exit")}var Q={methods:{exit(){this.$router.push({name:"Start"})}}};const U=(0,c.A)(Q,[["render",J],["__scopeId","data-v-1011be86"]]);var V=U,T={components:{MemoryHeading:_,ExitButton:V},data(){return{player1Name:"",player2Name:""}},created(){const{player1Name:e,player2Name:a}=this.$route.query;this.player1Name=e,this.player2Name=a},methods:{startGame(){this.$root.gameStarted=!0,this.$router.push({name:"GameBoard",query:{player1Name:this.player1Name,player2Name:this.player2Name}})}}};const z=(0,c.A)(T,[["render",W],["__scopeId","data-v-512463c6"]]);var D=z;const K=e=>((0,o.Qi)("data-v-393d382d"),e=e(),(0,o.jt)(),e),R={class:"game-board"},Y={class:"game-board-layout"},Z={class:"box-layout left"},ee={class:"player-details"},ae=K((()=>(0,o.Lk)("img",{src:j,alt:"Player 1",class:"player-image"},null,-1))),te={class:"player-name"},re={class:"player-score"},oe={class:"box-layout middle"},ne={class:"box-layout right"},le={class:"player-details"},se=K((()=>(0,o.Lk)("img",{src:F,alt:"Player 2",class:"player-image"},null,-1))),ie={class:"player-name"},ce={class:"player-score"};function pe(e,a,t,r,n,l){const s=(0,o.g2)("ExitButton"),i=(0,o.g2)("MemoryHeading"),c=(0,o.g2)("CardOne");return(0,o.uX)(),(0,o.CE)("div",R,[(0,o.bF)(s),(0,o.bF)(i,{text:"Memory"}),(0,o.Lk)("div",Y,[(0,o.Lk)("div",Z,[(0,o.Lk)("div",ee,[ae,(0,o.Lk)("div",te,(0,g.v_)(n.player1Name),1),(0,o.Lk)("div",re,"Score: "+(0,g.v_)(n.player1Score),1)])]),(0,o.Lk)("div",oe,[(0,o.bF)(c)]),(0,o.Lk)("div",ne,[(0,o.Lk)("div",le,[se,(0,o.Lk)("div",ie,(0,g.v_)(n.player2Name),1),(0,o.Lk)("div",ce,"Score: "+(0,g.v_)(n.player2Score),1)])])])])}var de=t.p+"img/club.8543f465.png";const me=(0,o.Fv)('<div class="front" data-v-0979af4f><div class="card-content" data-v-0979af4f><div class="letter" data-v-0979af4f>A</div><img src="'+de+'" alt="Club" class="suit-image" data-v-0979af4f></div></div><div class="back" data-v-0979af4f></div>',2),ue=[me];function ye(e,a,t,r,n,l){return(0,o.uX)(),(0,o.CE)("div",{class:(0,g.C4)({card:!0,flipped:n.flipped}),onClick:a[0]||(a[0]=(...e)=>l.flipCard&&l.flipCard(...e))},ue,2)}var ve={data(){return{flipped:!1}},methods:{flipCard(){this.flipped=!this.flipped}}};const fe=(0,c.A)(ve,[["render",ye],["__scopeId","data-v-0979af4f"]]);var he=fe,be={components:{MemoryHeading:_,ExitButton:V,CardOne:he},data(){return{player1Name:"",player2Name:"",player1Score:0,player2Score:0}},created(){const{player1Name:e,player2Name:a}=this.$route.query;this.player1Name=e,this.player2Name=a}};const ge=(0,c.A)(be,[["render",pe],["__scopeId","data-v-393d382d"]]);var Ne=ge;const ke=(0,m.aE)({history:(0,m.LA)(),routes:[{path:"/",name:"Start",component:A},{path:"/welcome",name:"Welcome",component:D},{path:"/game",name:"GameBoard",component:Ne,meta:{requiresGameStarted:!0}}]});ke.beforeEach(((e,a,t)=>{e.meta.requiresGameStarted&&ke.app&&ke.app.$root&&!ke.app.$root.gameStarted?t({name:"Welcome"}):t()}));var Le=ke;(0,r.Ef)(d).use(Le).mount("#app")}},a={};function t(r){var o=a[r];if(void 0!==o)return o.exports;var n=a[r]={exports:{}};return e[r].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,r,o,n){if(!r){var l=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],n=e[p][2];for(var s=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(t.O).every((function(e){return t.O[e](r[i])}))?r.splice(i--,1):(s=!1,n<l&&(l=n));if(s){e.splice(p--,1);var c=o();void 0!==c&&(a=c)}}return a}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var o,n,l=r[0],s=r[1],i=r[2],c=0;if(l.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(i)var p=i(t)}for(a&&a(r);c<l.length;c++)n=l[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(p)},r=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(3925)}));r=t.O(r)})();
//# sourceMappingURL=app.085b296d.js.map