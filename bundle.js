!function(){function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"===typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"===typeof t||"function"===typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){t.wholeText!==(e=""+e)&&(t.data=e)}let g;function m(t){g=t}const b=[],$=[],y=[],E=[],v=Promise.resolve();let _=!1;function w(t){y.push(t)}let k=!1;const x=new Set;function q(){if(!k){k=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];m(e),C(e.$$)}for(b.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];x.has(e)||(x.add(e),e())}y.length=0}while(b.length);for(;E.length;)E.pop()();_=!1,k=!1,x.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const z=new Set;const I=[],T=({data:t})=>t&&"RECIPE"===t.messageType,N={subscribe:function(e,n=t){let o;const r=[];function s(t){if(i(e,t)&&(e=t,o)){const t=!I.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),I.push(n,e)}if(t){for(let t=0;t<I.length;t+=2)I[t][0](I[t+1]);I.length=0}}}return{set:s,update(t){s(t(e))},subscribe(i,l=t){const c=[i,l];return r.push(c),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}({title:"Test",directions:["1. Soak goji berries in water while you prepare the rest, and until they have softened.","2. Boil water."],ingredients:["150 mls raw honey","150 mls hot water"]},t=>{window.addEventListener("message",e=>{if(T(e)&&":SET_RECIPE"===e.data.type){const n={title:e.data.recipe.title,directions:e.data.recipe.directions.split(/↵|\n/g),ingredients:e.data.recipe.ingredients.split(/↵|\n/g)};t(n)}})}).subscribe};function R(t,e,n){const o=t.slice();return o[1]=e[n],o}function S(t,e,n){const o=t.slice();return o[4]=e[n],o}function A(t){let e,n,o=t[4]+"";return{c(){e=a("li"),n=f(o),h(e,"class","svelte-ki2zoq")},m(t,o){l(t,e,o),s(e,n)},p(t,e){1&e&&o!==(o=t[4]+"")&&p(n,o)},d(t){t&&c(e)}}}function P(t){let e,n,o=t[1]+"";return{c(){e=a("li"),n=f(o),h(e,"class","svelte-ki2zoq")},m(t,o){l(t,e,o),s(e,n)},p(t,e){1&e&&o!==(o=t[1]+"")&&p(n,o)},d(t){t&&c(e)}}}function O(e){let n,o,r,i,g,m,b,$,y,E,v,_,w,k,x,q,C=e[0].title+"",z=e[0].ingredients,I=[];for(let t=0;t<z.length;t+=1)I[t]=A(S(e,z,t));let T=e[0].directions,N=[];for(let t=0;t<T.length;t+=1)N[t]=P(R(e,T,t));return{c(){n=a("main"),o=a("label"),o.textContent="MIKAELA REUBEN | RECIPES",r=d(),i=a("h3"),g=f(C),m=d(),b=a("div"),$=a("div"),y=a("h4"),y.textContent="INGREDIENTS:",E=d(),v=a("ul");for(let t=0;t<I.length;t+=1)I[t].c();_=d(),w=a("div"),k=a("h4"),k.textContent="DIRECTIONS:",x=d(),q=a("ul");for(let t=0;t<N.length;t+=1)N[t].c();h(o,"class","owner svelte-ki2zoq"),h(i,"class","title svelte-ki2zoq"),h(y,"class","font_4 svelte-ki2zoq"),h(v,"class","font_8 svelte-ki2zoq"),h($,"class","ingredients"),h(k,"class","font_4 svelte-ki2zoq"),h(q,"class","font_8 svelte-ki2zoq"),h(w,"class","directions svelte-ki2zoq"),h(b,"class","container svelte-ki2zoq"),h(n,"class","svelte-ki2zoq")},m(t,e){l(t,n,e),s(n,o),s(n,r),s(n,i),s(i,g),s(n,m),s(n,b),s(b,$),s($,y),s($,E),s($,v);for(let t=0;t<I.length;t+=1)I[t].m(v,null);s(b,_),s(b,w),s(w,k),s(w,x),s(w,q);for(let t=0;t<N.length;t+=1)N[t].m(q,null)},p(t,[e]){if(1&e&&C!==(C=t[0].title+"")&&p(g,C),1&e){let n;for(z=t[0].ingredients,n=0;n<z.length;n+=1){const o=S(t,z,n);I[n]?I[n].p(o,e):(I[n]=A(o),I[n].c(),I[n].m(v,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=z.length}if(1&e){let n;for(T=t[0].directions,n=0;n<T.length;n+=1){const o=R(t,T,n);N[n]?N[n].p(o,e):(N[n]=P(o),N[n].c(),N[n].m(q,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=T.length}},i:t,o:t,d(t){t&&c(n),u(I,t),u(N,t)}}}function j(e,n,o){let r;return e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(N,t=>o(0,r=t))),[r]}window.addEventListener("message",t=>{if(T(t)&&":RECIPE_PRINT"===t.data.type){const t=document.querySelector("print-page");document.body.appendChild(t),window.print()}});class L extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(1),n.on_destroy=n.fragment=null,n.ctx=[])}(this),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(s){super(),function(i,s,l,u,a,f,d=[-1]){const h=g;m(i);const p=s.props||{},$=i.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d};let y=!1;if($.ctx=l?l(i,p,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&a($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),y&&function(t,e){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,v.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(i,t)),e}):[],$.update(),y=!0,o($.before_update),$.fragment=!!u&&u($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(c)}else $.fragment&&$.fragment.c();s.intro&&(E=i.$$.fragment)&&E.i&&(z.delete(E),E.i(void 0)),function(t,n,i){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,i),w(()=>{const n=l.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(w)}(i,s.target,s.anchor),q()}var E;m(h)}(this,s,j,O,i,{})}}class B extends HTMLElement{connectedCallback(){this.dispatchEvent.bind(this),new L({target:this,props:{}})}}const M=Object.assign(document.createElement("link"),{href:"https://sergkornienko.github.io/print-page-component/bundle.css",rel:"stylesheet"});document.head.appendChild(M),window.customElements.define("print-page",B)}();
//# sourceMappingURL=bundle.js.map
