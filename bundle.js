!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e){t.appendChild(e)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function m(t){p=t}const g=[],b=[],$=[],E=[],y=Promise.resolve();let w=!1;function v(t){$.push(t)}let x=!1;const _=new Set;function C(){if(!x){x=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];m(e),k(e.$$)}for(g.length=0;b.length;)b.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];_.has(e)||(_.add(e),e())}$.length=0}while(g.length);for(;E.length;)E.pop()();w=!1,x=!1,_.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const T=new Set;function I(t,e){-1===t.$$.dirty[0]&&(g.push(t),w||(w=!0,y.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(r,i,c,l,u,f,d=[-1]){const h=p;m(r);const g=i.props||{},b=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d};let $=!1;if(b.ctx=c?c(r,g,(t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&u(b.ctx[t],b.ctx[t]=o)&&(b.bound[t]&&b.bound[t](o),$&&I(r,t)),e}):[],b.update(),$=!0,o(b.before_update),b.fragment=!!l&&l(b.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);b.fragment&&b.fragment.l(t),t.forEach(a)}else b.fragment&&b.fragment.c();i.intro&&((E=r.$$.fragment)&&E.i&&(T.delete(E),E.i(y))),function(t,n,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,r),v(()=>{const n=c.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(v)}(r,i.target,i.anchor),C()}var E,y;m(h)}const P=[];function R(e,n=t){let o;const s=[];function i(t){if(r(e,t)&&(e=t,o)){const t=!P.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),P.push(n,e)}if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(r,c=t){const a=[r,c];return s.push(a),1===s.length&&(o=n(i)||t),r(e),()=>{const t=s.indexOf(a);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}const N=({data:t})=>t&&"RECIPE"===t.messageType,S={subscribe:R({title:"VEGETABLE FRITTATA",ingredients:"150 mls raw honey\n\n  150 mls hot water\n\n  1 tablesoon lemon juice (approx. 1 lemon)\n  1/8 cup of goji berries\n  3 cups of fresh picked blackberries",directions:"1. Cut the top off of the coconut, drain milk and scoop out meat.\n  2. Dice mushrooms and coconut meat into small pieces.\n  3. Boil 4 cups of water.\n  4. Once the water is boiling, turn off heat and soak noodles until the noodles are cooked, strain and rinse with cold water and let dry.\n  5. Add the ginger, lime juice, fish sauce, and toasted sesame oil to a bowl with coconut and mushrooms.\n  6. Peel the carrot skin off, then continue to peel the rest of the carrot into thin slices.\n  7. Peel the outside of the cucumber and continue to peel pieces until you reach the fleshy inside.\n  8. Put the strained noodles into the bowl and cut into smaller pieces with scissors.\n  9. Stir all ingredients together and add more sesame, lime, or fish sauce to taste.\n  10. Cut the avocado into thin pieces.\n  11. Chop spinach into thin strips."},t=>window.addEventListener("message",(t=>e=>{N(e)&&":SET_RECIPE"===e.data.type&&t(e.data.recipe)})(t))).subscribe};function j(e){let n,o,s,r,i,p,m,g,b,$,E,y,w,v,x,_,C,k,T=e[0].title+"",I=e[0].ingredients+"",A=e[0].directions+"";return{c(){n=l("main"),o=l("label"),o.textContent="MIKAELA REUBEN | RECIPES",s=f(),r=l("h3"),i=u(T),p=f(),m=l("div"),g=l("div"),b=l("h4"),b.textContent="INGREDIENTS:",$=f(),E=l("p"),y=u(I),w=f(),v=l("div"),x=l("h4"),x.textContent="DIRECTIONS:",_=f(),C=l("p"),k=u(A),d(o,"class","owner svelte-110rf0s"),d(r,"class","title svelte-110rf0s"),d(b,"class","svelte-110rf0s"),d(E,"class","svelte-110rf0s"),d(g,"class","ingredients"),d(x,"class","svelte-110rf0s"),d(C,"class","svelte-110rf0s"),d(v,"class","directions svelte-110rf0s"),d(m,"class","container svelte-110rf0s"),d(n,"class","font_8 svelte-110rf0s")},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),c(n,o),c(n,s),c(n,r),c(r,i),c(n,p),c(n,m),c(m,g),c(g,b),c(g,$),c(g,E),c(E,y),c(m,w),c(m,v),c(v,x),c(v,_),c(v,C),c(C,k)},p(t,[e]){1&e&&T!==(T=t[0].title+"")&&h(i,T),1&e&&I!==(I=t[0].ingredients+"")&&h(y,I),1&e&&A!==(A=t[0].directions+"")&&h(k,A)},i:t,o:t,d(t){t&&a(n)}}}function O(t,e,n){let o;return i(t,S,t=>n(0,o=t)),[o]}window.addEventListener("message",t=>{N(t)&&":RECIPE_PRINT"===t.data.type&&window.print()});class L extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),A(this,t,O,j,r,{})}}class B extends HTMLElement{connectedCallback(){this.dispatchEvent.bind(this);new L({target:this,props:{}})}}const D=Object.assign(document.createElement("link"),{href:"https://sergkornienko.github.io/print-page-component/bundle.css",rel:"stylesheet"});document.head.appendChild(D),window.customElements.define("print-page",B)}();
//# sourceMappingURL=bundle.js.map