(function(){"use strict";var t={1397:function(t,n,s){var o=s(5130),e=s(6768);function i(t,n,s,o,i,a){const l=(0,e.g2)("router-view");return(0,e.uX)(),(0,e.Wv)(l)}var a={name:"App"},l=s(1241);const u=(0,l.A)(a,[["render",i]]);var c=u,r=s(973),m=s(4232);const k={class:"inner"},h={class:"section intro-section"},d={class:"contents-box"},v={class:"middle-main-box"},p={class:"level-item"},f={class:"number"},g={class:"button-box"},b={key:0,class:"section game-section no-button-box"},L={class:"contents-box"},C={class:"top-text-box"},x={class:"current-stage"},_={class:"main-title"},G={class:"main-title_desc"},y={class:"middle-main-box"},O={class:"time-box"},W={class:"color-red"},E={class:"white-box"},X={class:"count-box"},j={class:"bubble-box"},w={key:0},M={key:1},T={key:2},R={key:3},A=["src"],Q={key:1,class:"section result-section"},S={class:"contents-box"},I={class:"top-text-box"},N={class:"current-stage"},H={class:"result-img"},P=["src"],F={class:"button-box"},q={key:2,class:"section result-section"},z={class:"contents-box"},B={class:"top-text-box"},D={class:"current-stage"},J={key:0,class:"main-title_desc"},K={key:1,class:"main-title_desc"},U={class:"result-img"},V=["src"],Y={class:"button-box"},Z={key:3,class:"section result-section"},$={class:"contents-box"},tt={class:"top-text-box"},nt={class:"result-img"},st=["src"],ot={class:"button-box"};function et(t,n,i,a,l,u){return(0,e.uX)(),(0,e.CE)("div",k,[(0,e.bo)((0,e.Lk)("section",h,[(0,e.Lk)("div",d,[n[6]||(n[6]=(0,e.Lk)("div",{class:"top-text-box"},[(0,e.Lk)("p",{class:"main-title"},[(0,e.eW)("제한 시간 내에"),(0,e.Lk)("br"),(0,e.eW)("노출되는 이미지를 연타하여 "),(0,e.Lk)("br"),(0,e.eW)("주어진 숫자를 만들어보세요!")]),(0,e.Lk)("p",{class:"main-title_desc"},"시간 내에 숫자를 초과해도 탈락!!")],-1)),(0,e.Lk)("div",v,[(0,e.Lk)("div",p,[(0,e.Lk)("span",f,(0,m.v_)(l.level),1),n[5]||(n[5]=(0,e.Lk)("span",{class:"text"},"단계",-1))])])]),(0,e.Lk)("div",g,[(0,e.Lk)("button",{onClick:n[0]||(n[0]=t=>u.gameStart(t)),"data-setting":"init",class:"button"},"게임 시작!")])],512),[[o.aG,1==l.step]]),2==l.step?((0,e.uX)(),(0,e.CE)("section",b,[(0,e.Lk)("div",L,[(0,e.Lk)("div",C,[(0,e.Lk)("strong",x,(0,m.v_)(l.level)+" 단계",1),(0,e.Lk)("p",_,[(0,e.eW)("아래 "+(0,m.v_)(l.buttonName)+"를 연타해서 ",1),n[7]||(n[7]=(0,e.Lk)("br",null,null,-1)),(0,e.eW)("숫자 "+(0,m.v_)(l.goalCount)+"를 만들어보세요!",1)]),(0,e.Lk)("p",G,"제한 시간 "+(0,m.v_)(l.duration)+"초!!",1)]),(0,e.Lk)("div",y,[(0,e.Lk)("div",O,[(0,e.Lk)("p",null,[n[8]||(n[8]=(0,e.eW)("남은 시간 ")),(0,e.Lk)("strong",W,(0,m.v_)(l.duration-l.currentTime)+"초",1)])]),(0,e.Lk)("div",E,[(0,e.Lk)("div",X,[n[9]||(n[9]=(0,e.Lk)("span",null,"현재까지 누른 횟수",-1)),(0,e.Lk)("strong",null,(0,m.v_)(l.count),1)]),(0,e.Lk)("div",j,[l.count==l.goalCount?((0,e.uX)(),(0,e.CE)("p",w,n[10]||(n[10]=[(0,e.eW)("숫자를 다 맞췄어요! "),(0,e.Lk)("br",null,null,-1),(0,e.eW)("제한 시간까지 잠시만 기다려주세요.")]))):l.count>=l.goalCount-10?((0,e.uX)(),(0,e.CE)("p",M,"거의 다왔어요! "+(0,m.v_)(l.goalCount-l.count)+"개만 더!",1)):l.count>l.goalCount/2?((0,e.uX)(),(0,e.CE)("p",T,"절반 왔어요. 조금만 힘내세요!")):((0,e.uX)(),(0,e.CE)("p",R,"여기를 클릭하세요. 화이팅!!"))]),(0,e.Lk)("button",{onClick:n[1]||(n[1]=t=>u.counter()),class:"event-button"},[(0,e.Lk)("img",{src:s(3009),alt:"{{buttonName}}"},null,8,A)])])])])])):(0,e.Q3)("",!0),"3_success"==l.step?((0,e.uX)(),(0,e.CE)("section",Q,[(0,e.Lk)("div",S,[(0,e.Lk)("div",I,[(0,e.Lk)("strong",N,(0,m.v_)(l.level-1)+" 단계",1),n[11]||(n[11]=(0,e.Lk)("p",{class:"main-title"},"성공!!",-1)),n[12]||(n[12]=(0,e.Lk)("p",{class:"main-title_desc"},[(0,e.eW)("축하합니다. "),(0,e.Lk)("br"),(0,e.eW)("다음단계로 넘어갑니다.")],-1)),(0,e.Lk)("div",H,[(0,e.Lk)("img",{src:s(8461),alt:"성공"},null,8,P)])])]),(0,e.Lk)("div",F,[(0,e.Lk)("button",{onClick:n[2]||(n[2]=t=>u.gameStart(t)),"data-setting":"success",class:"button"},"다음 단계로!")])])):(0,e.Q3)("",!0),"3_fail"==l.step?((0,e.uX)(),(0,e.CE)("section",q,[(0,e.Lk)("div",z,[(0,e.Lk)("div",B,[(0,e.Lk)("strong",D,(0,m.v_)(l.level)+" 단계",1),n[13]||(n[13]=(0,e.Lk)("p",{class:"main-title"},"실패...",-1)),"numberOut"==l.failReason?((0,e.uX)(),(0,e.CE)("p",J,"숫자를 초과하였습니다.")):"timeOut"==l.failReason?((0,e.uX)(),(0,e.CE)("p",K,"시간을 초과하였습니다.")):(0,e.Q3)("",!0),(0,e.Lk)("div",U,[(0,e.Lk)("img",{src:s(9638),alt:"실패"},null,8,V)])])]),(0,e.Lk)("div",Y,[(0,e.Lk)("button",{onClick:n[3]||(n[3]=t=>u.gameStart(t)),"data-setting":"fail",class:"button"},"다시 시작!")])])):(0,e.Q3)("",!0),"final_success"==l.step?((0,e.uX)(),(0,e.CE)("section",Z,[(0,e.Lk)("div",$,[(0,e.Lk)("div",tt,[n[14]||(n[14]=(0,e.Lk)("p",{class:"main-title"},"최종 성공!!",-1)),n[15]||(n[15]=(0,e.Lk)("p",{class:"main-title_desc"},[(0,e.eW)("와.우. 정말 대단해요!"),(0,e.Lk)("br"),(0,e.eW)("진심으로 축하드립니다.")],-1)),(0,e.Lk)("div",nt,[(0,e.Lk)("img",{src:s(7858),alt:"최종 성공"},null,8,st)])])]),(0,e.Lk)("div",ot,[(0,e.Lk)("button",{onClick:n[4]||(n[4]=t=>u.goMain(t)),class:"button"},"메인으로 이동")])])):(0,e.Q3)("",!0)])}var it={name:"HelloWorld",data(){return{step:1,level:1,failReason:null,count:0,minGoalCount:25,maxGoalCount:50,lastGoalCount:0,goalCount:0,duration:25,currentTime:0,buttonName:"강아지"}},mounted(){this.goalCount=Math.floor(Math.random()*(this.maxGoalCount-this.minGoalCount)+this.minGoalCount)},methods:{gameStart(t){this.step=2;let n=setInterval((()=>{this.currentTime++,this.currentTime===this.duration?(clearInterval(n),this.count===this.goalCount?(this.step="3_success",this.level++,this.failReason=null,this.duration=this.duration-2,this.lastGoalCount=this.goalCount,this.minGoalCount=this.lastGoalCount,this.maxGoalCount=this.maxGoalCount+5,this.duration<3&&(this.step="final_success")):(this.step="3_fail",this.failReason="timeOut")):this.currentTime<this.duration&&this.count>this.goalCount&&(clearInterval(n),this.step="3_fail",this.failReason="numberOut")}),1e3);"init"!==t.target.getAttribute("data-setting")&&(this.count=0,this.currentTime=0,this.failReason=null,"success"==t.target.getAttribute("data-setting")&&(this.goalCount=Math.floor(Math.random()*(this.maxGoalCount-this.minGoalCount)+this.minGoalCount)))},counter(){this.count++},goMain(){this.step=1,this.level=1,this.failReason=null,this.count=0,this.minGoalCount=25,this.maxGoalCount=50,this.lastGoalCount=0,this.goalCount=Math.floor(Math.random()*(this.maxGoalCount-this.minGoalCount)+this.minGoalCount),this.duration=22,this.currentTime=0}}};const at=(0,l.A)(it,[["render",et]]);var lt=at;const ut=[{path:"/",name:"HelloWorld",component:lt}],ct=(0,r.aE)({history:(0,r.LA)("click-game"),routes:ut});var rt=ct;const mt=(0,o.Ef)(c);mt.use(rt),mt.mount("#app")},3009:function(t,n,s){t.exports=s.p+"img/click-target-img01.5caf4066.jpg"},7858:function(t,n,s){t.exports=s.p+"img/final-success-img.71e04831.jpg"},8461:function(t,n,s){t.exports=s.p+"img/success-img.de6e614a.jpg"},9638:function(t,n,s){t.exports=s.p+"img/fail-img.73d92715.jpg"}},n={};function s(o){var e=n[o];if(void 0!==e)return e.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(n,o,e,i){if(!o){var a=1/0;for(r=0;r<t.length;r++){o=t[r][0],e=t[r][1],i=t[r][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){t.splice(r--,1);var c=e();void 0!==c&&(n=c)}}return n}i=i||0;for(var r=t.length;r>0&&t[r-1][2]>i;r--)t[r]=t[r-1];t[r]=[o,e,i]}}(),function(){s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,{a:n}),n}}(),function(){s.d=function(t,n){for(var o in n)s.o(n,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){s.p="/click-game/"}(),function(){var t={524:0};s.O.j=function(n){return 0===t[n]};var n=function(n,o){var e,i,a=o[0],l=o[1],u=o[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(e in l)s.o(l,e)&&(s.m[e]=l[e]);if(u)var r=u(s)}for(n&&n(o);c<a.length;c++)i=a[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(r)},o=self["webpackChunkclick_game"]=self["webpackChunkclick_game"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(1397)}));o=s.O(o)})();
//# sourceMappingURL=app.8020818c.js.map