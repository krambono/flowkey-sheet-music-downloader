var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){t.value=null==e?"":e}function g(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e)return void(i.selected=!0)}}function p(t,e,n){t.classList[n?"add":"remove"](e)}let $;function v(t){$=t}function b(){if(!$)throw new Error("Function called outside component initialization");return $}function y(){const t=b();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach((e=>{e.call(t,o)}))}}}const x=[],w=[],_=[],k=[],E=Promise.resolve();let C=!1;function L(t){_.push(t)}let R=!1;const S=new Set;function P(){if(!R){R=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];v(e),T(e.$$)}for(v(null),x.length=0;w.length;)w.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];S.has(e)||(S.add(e),e())}_.length=0}while(x.length);for(;k.length;)k.pop()();C=!1,R=!1,S.clear()}}function T(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const A=new Set;function X(t,e){t&&t.i&&(A.delete(t),t.i(e))}function j(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push((()=>{A.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function z(t){t&&t.c()}function O(t,n,s){const{fragment:l,on_mount:c,on_destroy:r,after_update:a}=t.$$;l&&l.m(n,s),L((()=>{const n=c.map(e).filter(o);r?r.push(...n):i(n),t.$$.on_mount=[]})),a.forEach(L)}function B(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(x.push(t),C||(C=!0,E.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,o,s,l,c,a,u=[-1]){const d=$;v(e);const f=o.props||{},m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(m.ctx=s?s(e,f,((t,n,...i)=>{const o=i.length?i[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),h&&G(e,t)),n})):[],m.update(),h=!0,i(m.before_update),m.fragment=!!l&&l(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(r)}else m.fragment&&m.fragment.c();o.intro&&X(e.$$.fragment),O(e,o.target,o.anchor),P()}v(d)}class q{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(t){return new Promise((function(e,n){const i=Object.assign(document.createElement("img"));function o(){i.onload=null,i.onerror=null}i.onload=function(){o(),e(i)},i.onerror=function(){o(),n(new Error('Failed to load the image "'+t+'"'))},i.src=t,i.crossOrigin="anonymous"}))}function M(t){let e;return{c(){e=a("p"),e.textContent="The URL is not valid",m(e,"class","help is-danger is-size-6 mb-2")},m(t,n){c(t,e,n)},d(t){t&&r(e)}}}function U(t){let e;return{c(){e=a("p"),e.textContent="An error occurred",m(e,"class","help is-danger is-size-6 mb-2")},m(t,n){c(t,e,n)},d(t){t&&r(e)}}}function D(t){let e;return{c(){e=a("p"),e.textContent="Done.",m(e,"class","help is-success is-size-6 mb-2")},m(t,n){c(t,e,n)},d(t){t&&r(e)}}}function I(e){let n,o,s,g,$,v,b,y,x,w,_,k,E,C,L,R,S,P,T,A,X,j,z,O,B,G=!e[1]&&""!==e[0]&&M(),N=e[2]&&U(),q=e[3]&&D();return{c(){n=a("section"),o=a("h1"),o.textContent="Get Flowkey URL",s=d(),g=a("hr"),$=d(),v=a("div"),b=a("div"),y=a("div"),y.textContent='Go to a lesson or a song on Flowkey\'s website. The sheet music at the bottom of the page is actually a set of\n        images. Right click on one of these images and select "Copy image address". Paste the result below :',x=d(),w=a("div"),_=a("label"),_.textContent="URL",k=d(),E=a("div"),C=a("input"),L=d(),G&&G.c(),R=d(),N&&N.c(),S=d(),q&&q.c(),P=d(),T=a("button"),A=u("Load images"),j=d(),z=a("div"),z.innerHTML='<div class="is-flex is-justify-content-center"><img class="image" src="flowkey-screen.png" alt=""/></div>',m(o,"class","title"),m(y,"class","block"),m(_,"class","label is-medium"),m(_,"for","url"),m(C,"id","url"),m(C,"class","input is-medium"),m(C,"type","text"),m(C,"placeholder","https://flowkeycdn.com/sheets/XXXXXXXX/150/5.png"),p(C,"is-success",e[1]&&""!==e[0]),p(C,"is-danger",!e[1]&&""!==e[0]||e[2]),m(E,"class","control"),T.disabled=X=!e[1],m(T,"class","button is-primary mt-3"),p(T,"is-loading",e[4]),m(w,"class","field"),m(b,"class","column is-three-fifths"),m(z,"class","column"),m(v,"class","columns"),m(n,"class","section is-size-5")},m(t,i){c(t,n,i),l(n,o),l(n,s),l(n,g),l(n,$),l(n,v),l(v,b),l(b,y),l(b,x),l(b,w),l(w,_),l(w,k),l(w,E),l(E,C),h(C,e[0]),l(w,L),G&&G.m(w,null),l(w,R),N&&N.m(w,null),l(w,S),q&&q.m(w,null),l(w,P),l(w,T),l(T,A),l(v,j),l(v,z),O||(B=[f(C,"input",e[8]),f(C,"input",e[6]),f(T,"click",e[5])],O=!0)},p(t,[e]){1&e&&C.value!==t[0]&&h(C,t[0]),3&e&&p(C,"is-success",t[1]&&""!==t[0]),7&e&&p(C,"is-danger",!t[1]&&""!==t[0]||t[2]),t[1]||""===t[0]?G&&(G.d(1),G=null):G||(G=M(),G.c(),G.m(w,R)),t[2]?N||(N=U(),N.c(),N.m(w,S)):N&&(N.d(1),N=null),t[3]?q||(q=D(),q.c(),q.m(w,P)):q&&(q.d(1),q=null),2&e&&X!==(X=!t[1])&&(T.disabled=X),16&e&&p(T,"is-loading",t[4])},i:t,o:t,d(t){t&&r(n),G&&G.d(),N&&N.d(),q&&q.d(),O=!1,i(B)}}}function H(t,e,n){var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function l(t){try{r(i.next(t))}catch(t){s(t)}}function c(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,c)}r((i=i.apply(t,e||[])).next())}))};const o=y();let s=[],l="",c="",r=!1,a=!1,u=!1;let d=!1;return t.$$.update=()=>{128&t.$$.dirty&&o("images",s),1&t.$$.dirty&&n(1,r=function(t){const e=/^(https:\/\/flowkeycdn.com\/sheets\/.*\/150\/)(\d+.png)$/.exec(t);return!!e&&(l=e[1],!0)}(c)),1&t.$$.dirty&&n(2,a=!1)},[c,r,a,u,d,function(){return i(this,void 0,void 0,(function*(){n(4,d=!0),n(7,s=yield async function(t){const e=[];let n=0;for(;;){const i=[];for(let o=5*n;o<5*(n+1);o++){const n=F(t+`${o}.png`).then((t=>{e[o]=t}));i.push(n)}if((await Promise.allSettled(i)).some((t=>"rejected"==t.status)))break;n++}return e}(l)),0===s.length?n(2,a=!0):n(3,u=!0),n(4,d=!1)}))},function(){n(2,a=!1),n(3,u=!1)},s,function(){c=this.value,n(0,c)}]}class J extends q{constructor(t){super(),N(this,t,H,I,s,{})}}function K(t,e,n){const i=t.slice();return i[20]=e[n],i}function Q(t){let e,n,i,o=t[20]+"";return{c(){e=a("option"),n=u(o),e.__value=i=t[20],e.value=e.__value},m(t,i){c(t,e,i),l(e,n)},p(t,s){32&s&&o!==(o=t[20]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,o),32&s&&i!==(i=t[20])&&(e.__value=i,e.value=e.__value)},d(t){t&&r(e)}}}function V(e){let n,o,s,$,v,b,y,x,w,_,k,E,C,L,R,S,P,T,A,X,j,z,O,B,G,N,q,F,M,U,D,I,H,J,V,W,Y,Z,tt,et,nt,it,ot=e[5],st=[];for(let t=0;t<ot.length;t+=1)st[t]=Q(K(e,ot,t));return{c(){n=a("section"),o=a("h1"),o.textContent="Generate the sheet music",s=d(),$=a("hr"),v=d(),b=a("div"),y=a("div"),x=a("div"),w=a("label"),w.textContent="Title",_=d(),k=a("div"),E=a("input"),L=d(),R=a("div"),S=a("div"),P=a("label"),P.textContent="Subtitle",T=d(),A=a("div"),X=a("input"),z=d(),O=a("div"),B=a("label"),B.textContent="Number of images per row",G=d(),N=a("div"),q=a("select");for(let t=0;t<st.length;t+=1)st[t].c();var t,i,l;U=d(),D=a("div"),I=a("button"),H=u("Generate"),V=d(),W=a("button"),Y=u("Download as PNG"),tt=d(),et=a("div"),et.innerHTML='<div id="canvas-container" class="box svelte-77eyrq"><canvas id="canvas"></canvas></div>',m(o,"class","title"),m(w,"class","label is-medium"),m(w,"for","title"),m(E,"id","title"),m(E,"class","input is-medium"),m(E,"type","text"),m(E,"placeholder","Ode to joy"),E.disabled=C=!e[0].length,m(k,"class","control"),m(x,"class","field"),m(y,"class","column"),m(P,"class","label is-medium"),m(P,"for","subtitle"),m(X,"id","subtitle"),m(X,"class","input is-medium"),m(X,"type","text"),m(X,"placeholder","Beethoven"),X.disabled=j=!e[0].length,m(A,"class","control"),m(S,"class","field"),m(R,"class","column"),m(b,"class","columns"),m(B,"class","label is-medium"),m(B,"for","imagesPerRow"),m(q,"id","imagesPerRow"),q.disabled=F=!e[0].length,m(N,"class","select"),m(O,"class","field mb-5"),m(I,"class","button is-primary"),I.disabled=J=!e[0].length,m(W,"class","button is-primary ml-2"),W.disabled=Z=!e[3],m(D,"class","is-flex"),m(et,"class","mt-6 svelte-77eyrq"),t="overflow",i="auto",et.style.setProperty(t,i,l?"important":""),p(et,"display-none",!e[3]),m(n,"class","section is-size-5")},m(t,i){c(t,n,i),l(n,o),l(n,s),l(n,$),l(n,v),l(n,b),l(b,y),l(y,x),l(x,w),l(x,_),l(x,k),l(k,E),h(E,e[1]),l(b,L),l(b,R),l(R,S),l(S,P),l(S,T),l(S,A),l(A,X),h(X,e[2]),l(n,z),l(n,O),l(O,B),l(O,G),l(O,N),l(N,q);for(let t=0;t<st.length;t+=1)st[t].m(q,null);g(q,e[4].toString()),l(n,U),l(n,D),l(D,I),l(I,H),l(D,V),l(D,W),l(W,Y),l(n,tt),l(n,et),nt||(it=[f(E,"input",e[9]),f(X,"input",e[10]),f(q,"change",e[7]),f(I,"click",e[6]),f(W,"click",e[8])],nt=!0)},p(t,[e]){if(1&e&&C!==(C=!t[0].length)&&(E.disabled=C),2&e&&E.value!==t[1]&&h(E,t[1]),1&e&&j!==(j=!t[0].length)&&(X.disabled=j),4&e&&X.value!==t[2]&&h(X,t[2]),32&e){let n;for(ot=t[5],n=0;n<ot.length;n+=1){const i=K(t,ot,n);st[n]?st[n].p(i,e):(st[n]=Q(i),st[n].c(),st[n].m(q,null))}for(;n<st.length;n+=1)st[n].d(1);st.length=ot.length}1&e&&F!==(F=!t[0].length)&&(q.disabled=F),48&e&&M!==(M=t[4].toString())&&g(q,t[4].toString()),1&e&&J!==(J=!t[0].length)&&(I.disabled=J),8&e&&Z!==(Z=!t[3])&&(W.disabled=Z),8&e&&p(et,"display-none",!t[3])},i:t,o:t,d(t){t&&r(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(st,t),nt=!1,i(it)}}}let W=100;function Y(t,e,n){let i,o,s,{images:l=[]}=e,c=!1,r=0,a=0,u=150,d="",f="",m=2,h=[];var g;function p(){if(!l.length||!s||!i)return;const t=Math.ceil(l.length/m);u=d||f?150:0,r=l[0].width*m+W,a=l[0].height*t+30*(t-1)+u+W,i.width=r,i.height=a,s.style.width=r+"px",s.style.height=a+"px",n(3,c=!0),function(){o.clearRect(0,0,r,a),o.fillStyle="white",o.fillRect(0,0,r,a);let t=0,e=u+50;for(const[n,i]of l.entries())n%m==0&&(t=50),n%m==0&&0!=n&&(e+=i.height+30),o.drawImage(i,t,e),t+=i.width}(),$(d,f)}function $(t,e){c&&(!t&&!e&&0!==u||(t||e)&&0===u?p():(o.clearRect(0,0,r,u),o.textBaseline="middle",o.textAlign="center",o.fillStyle="black",t&&(o.font="bold 48px serif",o.fillText(t,r/2,50)),e&&(o.font="30px serif",o.fillText(e,r/2,100))))}return g=()=>{s=document.getElementById("canvas-container"),i=document.getElementById("canvas"),o=i.getContext("2d")},b().$$.on_mount.push(g),t.$$set=t=>{"images"in t&&n(0,l=t.images)},t.$$.update=()=>{var e;7&t.$$.dirty&&(n(5,(e=l.length,h=0===e?[]:1===e?[1]:[2,e,...Array.from(Array(l.length-1).keys()).map((t=>t+1)).filter((t=>2!=t))])),$(d,f))},[l,d,f,c,m,h,p,function(t){n(4,m=+t.target.value),c&&p()},function(){const t=document.createElement("a");t.href=i.toDataURL("image/png"),t.download=d&&f?`${d} - ${f}`:d||f?d||f:"my-sheet",t.download+=".png",t.click()},function(){d=this.value,n(1,d)},function(){f=this.value,n(2,f)}]}class Z extends q{constructor(t){super(),N(this,t,Y,V,s,{images:0})}}function tt(t){let e,n,i,o,s,u;return i=new J({}),i.$on("images",t[1]),s=new Z({props:{images:t[0]}}),{c(){e=a("section"),n=a("div"),z(i.$$.fragment),o=d(),z(s.$$.fragment),m(n,"class","container"),m(e,"class","section")},m(t,r){c(t,e,r),l(e,n),O(i,n,null),l(n,o),O(s,n,null),u=!0},p(t,[e]){const n={};1&e&&(n.images=t[0]),s.$set(n)},i(t){u||(X(i.$$.fragment,t),X(s.$$.fragment,t),u=!0)},o(t){j(i.$$.fragment,t),j(s.$$.fragment,t),u=!1},d(t){t&&r(e),B(i),B(s)}}}function et(t,e,n){let i=[];return[i,function(t){n(0,i=t.detail)}]}return new class extends q{constructor(t){super(),N(this,t,et,tt,s,{})}}({target:document.querySelector("svelte-app")})}();
//# sourceMappingURL=bundle.js.map