!function(){function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"===typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"===typeof t||"function"===typeof t}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){t.wholeText!==(e=""+e)&&(t.data=e)}let g;function m(t){g=t}const b=[],y=[],w=[],v=[],$=Promise.resolve();let E=!1;function k(t){w.push(t)}let _=!1;const x=new Set;function C(){if(!_){_=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];m(e),A(e.$$)}for(b.length=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];x.has(e)||(x.add(e),e())}w.length=0}while(b.length);for(;v.length;)v.pop()();E=!1,_=!1,x.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const T=new Set;const I=[],R=({data:t})=>t&&"RECIPE"===t.messageType,S={subscribe:function(e,n=t){let o;const r=[];function a(t){if(s(e,t)&&(e=t,o)){const t=!I.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),I.push(n,e)}if(t){for(let t=0;t<I.length;t+=2)I[t][0](I[t+1]);I.length=0}}}return{set:a,update(t){a(t(e))},subscribe(s,l=t){const i=[s,l];return r.push(i),1===r.length&&(o=n(a)||t),s(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}({title:"Test",directions:["1. Preheat oven to 375°F.","2. Toss yams with the oil, salt and chili powder.","3. Spread yams on parchment paper on a baking sheet and bake until tender. Check at 20 minutes and go from there.","4. Rinse the asparagus spears and break the tough ends off on the bottom.","5. Line a roasting pan with parchment. Arrange the asparagus spears in a single layer.","6. Drizzle with olive oil and rub the spears to coat. Sprinkle with salt, pepper, and minced garlic, and rub over the asparagus spears to evenly distribute.","7. Roast at 375°F for 10 minutes, more or less, depending on your particular oven and how thick the spears are, until the asparagus are lightly browned and tender when you pierce them with a fork.","8. Drizzle with lemon juice.","9. Turn oven to 350°F.","10. Add 1 tablespoon of olive oil into pan and add the onions. Cook until translucent, around 6 minutes.","11. Add 1/2 teaspoon smoked paprika, 1/2 teaspoon pepper, 1/2 teaspoon sea salt, and cilantro.","12. Add broccoli to the pan and saute until well flavored and cooked through.","13. Add garlic, chopped asparagus, roasted yam, tamari, lemon zest, oregano and onion powder. Mix thoroughly then add spinach and allow to wilt. At this point taste and season as you desire.","14. In a separate bowl scramble eggs well then add to vegetables and stir thoroughly.","15. Put into the oven and bake. Check at 20. Will take up to 30-35."],ingredients:["150 mls raw honey 50 mls raw honey 50 mls raw honey50 mls raw honey","150 mls hot water"]},t=>{window.addEventListener("message",e=>{if(R(e)&&":SET_RECIPE"===e.data.type){const n={title:e.data.recipe.title,directions:(e.data.recipe.directions||"").split(/↵|\n/g),ingredients:(e.data.recipe.ingredients||"").split(/↵|\n/g)};t(n)}})}).subscribe};function N(t,e,n){const o=t.slice();return o[1]=e[n],o}function P(t,e,n){const o=t.slice();return o[4]=e[n],o}function z(t){let e,n,o=t[4]+"";return{c(){e=u("li"),n=d(o),h(e,"class","svelte-1125pam")},m(t,o){l(t,e,o),a(e,n)},p(t,e){1&e&&o!==(o=t[4]+"")&&f(n,o)},d(t){t&&i(e)}}}function L(t){let e,n,o=t[1]+"";return{c(){e=u("li"),n=d(o),h(e,"class","svelte-1125pam")},m(t,o){l(t,e,o),a(e,n)},p(t,e){1&e&&o!==(o=t[1]+"")&&f(n,o)},d(t){t&&i(e)}}}function O(e){let n,o,r,s,g,m,b,y,w,v,$,E,k,_,x,C,A=e[0].title+"",T=e[0].ingredients,I=[];for(let t=0;t<T.length;t+=1)I[t]=z(P(e,T,t));let R=e[0].directions,S=[];for(let t=0;t<R.length;t+=1)S[t]=L(N(e,R,t));return{c(){n=u("main"),o=u("label"),o.textContent="MIKAELA REUBEN | RECIPES",r=p(),s=u("h3"),g=d(A),m=p(),b=u("div"),y=u("div"),w=u("h4"),w.textContent="INGREDIENTS:",v=p(),$=u("ul");for(let t=0;t<I.length;t+=1)I[t].c();E=p(),k=u("div"),_=u("h4"),_.textContent="DIRECTIONS:",x=p(),C=u("ul");for(let t=0;t<S.length;t+=1)S[t].c();h(o,"class","owner svelte-1125pam"),h(s,"class","title svelte-1125pam"),h(w,"class","font_4 svelte-1125pam"),h($,"class","font_8 svelte-1125pam"),h(y,"class","ingredients svelte-1125pam"),h(_,"class","font_4 svelte-1125pam"),h(C,"class","font_8 svelte-1125pam"),h(k,"class","directions svelte-1125pam"),h(b,"class","container svelte-1125pam"),h(n,"class","svelte-1125pam")},m(t,e){l(t,n,e),a(n,o),a(n,r),a(n,s),a(s,g),a(n,m),a(n,b),a(b,y),a(y,w),a(y,v),a(y,$);for(let t=0;t<I.length;t+=1)I[t].m($,null);a(b,E),a(b,k),a(k,_),a(k,x),a(k,C);for(let t=0;t<S.length;t+=1)S[t].m(C,null)},p(t,[e]){if(1&e&&A!==(A=t[0].title+"")&&f(g,A),1&e){let n;for(T=t[0].ingredients,n=0;n<T.length;n+=1){const o=P(t,T,n);I[n]?I[n].p(o,e):(I[n]=z(o),I[n].c(),I[n].m($,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=T.length}if(1&e){let n;for(R=t[0].directions,n=0;n<R.length;n+=1){const o=N(t,R,n);S[n]?S[n].p(o,e):(S[n]=L(o),S[n].c(),S[n].m(C,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=R.length}},i:t,o:t,d(t){t&&i(n),c(I,t),c(S,t)}}}function j(e,n,o){let r;return e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(S,t=>o(0,r=t))),[r]}window.addEventListener("message",t=>{if(R(t)&&":RECIPE_PRINT"===t.data.type){const t=document.querySelector("print-page");document.body.appendChild(t),setTimeout(()=>{window.print()},500)}});class D extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(1),n.on_destroy=n.fragment=null,n.ctx=[])}(this),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(a){super(),function(s,a,l,c,u,d,p=[-1]){const h=g;m(s);const f=a.props||{},y=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:p};let w=!1;if(y.ctx=l?l(s,f,(t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&u(y.ctx[t],y.ctx[t]=o)&&(y.bound[t]&&y.bound[t](o),w&&function(t,e){-1===t.$$.dirty[0]&&(b.push(t),E||(E=!0,$.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e}):[],y.update(),w=!0,o(y.before_update),y.fragment=!!c&&c(y.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);y.fragment&&y.fragment.l(t),t.forEach(i)}else y.fragment&&y.fragment.c();a.intro&&(v=s.$$.fragment)&&v.i&&(T.delete(v),v.i(void 0)),function(t,n,s){const{fragment:a,on_mount:l,on_destroy:i,after_update:c}=t.$$;a&&a.m(n,s),k(()=>{const n=l.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(k)}(s,a.target,a.anchor),C()}var v;m(h)}(this,a,j,O,s,{})}}class M extends HTMLElement{connectedCallback(){this.dispatchEvent.bind(this),new D({target:this,props:{}})}}const F=Object.assign(document.createElement("link"),{href:"https://sergkornienko.github.io/print-page-component/bundle.css",rel:"stylesheet"});document.head.appendChild(F),window.customElements.define("print-page",M)}();
//# sourceMappingURL=bundle.js.map
