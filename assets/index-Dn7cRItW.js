var Ne=Object.defineProperty;var Ae=(r,e,t)=>e in r?Ne(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var $=(r,e,t)=>(Ae(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))_(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&_(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();var W,p,xe,P,ne,we,J,A={},ke=[],Fe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function H(r,e){for(var t in e)r[t]=e[t];return r}function $e(r){var e=r.parentNode;e&&e.removeChild(r)}function De(r,e,t){var _,n,o,s={};for(o in e)o=="key"?_=e[o]:o=="ref"?n=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?W.call(arguments,2):t),typeof r=="function"&&r.defaultProps!=null)for(o in r.defaultProps)s[o]===void 0&&(s[o]=r.defaultProps[o]);return O(r,s,_,n,null)}function O(r,e,t,_,n){var o={type:r,props:e,key:t,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++xe,__i:-1,__u:0};return n==null&&p.vnode!=null&&p.vnode(o),o}function M(r){return r.children}function R(r,e){this.props=r,this.context=e}function E(r,e){if(e==null)return r.__?E(r.__,r.__i+1):null;for(var t;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null)return t.__e;return typeof r.type=="function"?E(r):null}function Ce(r){var e,t;if((r=r.__)!=null&&r.__c!=null){for(r.__e=r.__c.base=null,e=0;e<r.__k.length;e++)if((t=r.__k[e])!=null&&t.__e!=null){r.__e=r.__c.base=t.__e;break}return Ce(r)}}function oe(r){(!r.__d&&(r.__d=!0)&&P.push(r)&&!j.__r++||ne!==p.debounceRendering)&&((ne=p.debounceRendering)||we)(j)}function j(){var r,e,t,_,n,o,s,l,u;for(P.sort(J);r=P.shift();)r.__d&&(e=P.length,_=void 0,o=(n=(t=r).__v).__e,l=[],u=[],(s=t.__P)&&((_=H({},n)).__v=n.__v+1,p.vnode&&p.vnode(_),te(s,_,n,t.__n,s.ownerSVGElement!==void 0,32&n.__u?[o]:null,l,o??E(n),!!(32&n.__u),u),_.__v=n.__v,_.__.__k[_.__i]=_,He(l,_,u),_.__e!=o&&Ce(_)),P.length>e&&P.sort(J));j.__r=0}function Me(r,e,t,_,n,o,s,l,u,c,f){var i,d,a,b,k,g=_&&_.__k||ke,m=e.length;for(t.__d=u,Ie(t,e,g),u=t.__d,i=0;i<m;i++)(a=t.__k[i])!=null&&typeof a!="boolean"&&typeof a!="function"&&(d=a.__i===-1?A:g[a.__i]||A,a.__i=i,te(r,a,d,n,o,s,l,u,c,f),b=a.__e,a.ref&&d.ref!=a.ref&&(d.ref&&re(d.ref,null,a),f.push(a.ref,a.__c||b,a)),k==null&&b!=null&&(k=b),65536&a.__u||d.__k===a.__k?(b||d.__e!=u||(u=E(d)),u=Se(a,u,r)):typeof a.type=="function"&&a.__d!==void 0?u=a.__d:b&&(u=b.nextSibling),a.__d=void 0,a.__u&=-196609);t.__d=u,t.__e=k}function Ie(r,e,t){var _,n,o,s,l,u=e.length,c=t.length,f=c,i=0;for(r.__k=[],_=0;_<u;_++)s=_+i,(n=r.__k[_]=(n=e[_])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?O(null,n,null,null,null):ee(n)?O(M,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?O(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=r,n.__b=r.__b+1,l=qe(n,t,s,f),n.__i=l,o=null,l!==-1&&(f--,(o=t[l])&&(o.__u|=131072)),o==null||o.__v===null?(l==-1&&i--,typeof n.type!="function"&&(n.__u|=65536)):l!==s&&(l===s+1?i++:l>s?f>u-s?i+=l-s:i--:l<s?l==s-1&&(i=l-s):i=0,l!==_+i&&(n.__u|=65536))):(o=t[s])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==r.__d&&(r.__d=E(o)),Q(o,o,!1),t[s]=null,f--);if(f)for(_=0;_<c;_++)(o=t[_])!=null&&!(131072&o.__u)&&(o.__e==r.__d&&(r.__d=E(o)),Q(o,o))}function Se(r,e,t){var _,n;if(typeof r.type=="function"){for(_=r.__k,n=0;_&&n<_.length;n++)_[n]&&(_[n].__=r,e=Se(_[n],e,t));return e}r.__e!=e&&(t.insertBefore(r.__e,e||null),e=r.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function qe(r,e,t,_){var n=r.key,o=r.type,s=t-1,l=t+1,u=e[t];if(u===null||u&&n==u.key&&o===u.type&&!(131072&u.__u))return t;if(_>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||l<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&n==u.key&&o===u.type)return s;s--}if(l<e.length){if((u=e[l])&&!(131072&u.__u)&&n==u.key&&o===u.type)return l;l++}}return-1}function ie(r,e,t){e[0]==="-"?r.setProperty(e,t??""):r[e]=t==null?"":typeof t!="number"||Fe.test(e)?t:t+"px"}function U(r,e,t,_,n){var o;e:if(e==="style")if(typeof t=="string")r.style.cssText=t;else{if(typeof _=="string"&&(r.style.cssText=_=""),_)for(e in _)t&&e in t||ie(r.style,e,"");if(t)for(e in t)_&&t[e]===_[e]||ie(r.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in r||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),r.l||(r.l={}),r.l[e+o]=t,t?_?t.u=_.u:(t.u=Date.now(),r.addEventListener(e,o?le:se,o)):r.removeEventListener(e,o?le:se,o);else{if(n)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in r)try{r[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?r.removeAttribute(e):r.setAttribute(e,t))}}function se(r){if(this.l){var e=this.l[r.type+!1];if(r.t){if(r.t<=e.u)return}else r.t=Date.now();return e(p.event?p.event(r):r)}}function le(r){if(this.l)return this.l[r.type+!0](p.event?p.event(r):r)}function te(r,e,t,_,n,o,s,l,u,c){var f,i,d,a,b,k,g,m,x,S,D,N,_e,I,G,w=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),o=[l=e.__e=t.__e]),(f=p.__b)&&f(e);e:if(typeof w=="function")try{if(m=e.props,x=(f=w.contextType)&&_[f.__c],S=f?x?x.props.value:f.__:_,t.__c?g=(i=e.__c=t.__c).__=i.__E:("prototype"in w&&w.prototype.render?e.__c=i=new w(m,S):(e.__c=i=new R(m,S),i.constructor=w,i.render=Le),x&&x.sub(i),i.props=m,i.state||(i.state={}),i.context=S,i.__n=_,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=H({},i.__s)),H(i.__s,w.getDerivedStateFromProps(m,i.__s))),a=i.props,b=i.state,i.__v=e,d)w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(w.getDerivedStateFromProps==null&&m!==a&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,S),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,S)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(i.props=m,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(q){q&&(q.__=e)}),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,S),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(a,b,k)})}if(i.context=S,i.props=m,i.__P=r,i.__e=!1,N=p.__r,_e=0,"prototype"in w&&w.prototype.render){for(i.state=i.__s,i.__d=!1,N&&N(e),f=i.render(i.props,i.state,i.context),I=0;I<i._sb.length;I++)i.__h.push(i._sb[I]);i._sb=[]}else do i.__d=!1,N&&N(e),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++_e<25);i.state=i.__s,i.getChildContext!=null&&(_=H(H({},_),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(k=i.getSnapshotBeforeUpdate(a,b)),Me(r,ee(G=f!=null&&f.type===M&&f.key==null?f.props.children:f)?G:[G],e,t,_,n,o,s,l,u,c),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),g&&(i.__E=i.__=null)}catch(q){e.__v=null,u||o!=null?(e.__e=l,e.__u|=u?160:32,o[o.indexOf(l)]=null):(e.__e=t.__e,e.__k=t.__k),p.__e(q,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Ue(t.__e,e,t,_,n,o,s,u,c);(f=p.diffed)&&f(e)}function He(r,e,t){e.__d=void 0;for(var _=0;_<t.length;_++)re(t[_],t[++_],t[++_]);p.__c&&p.__c(e,r),r.some(function(n){try{r=n.__h,n.__h=[],r.some(function(o){o.call(n)})}catch(o){p.__e(o,n.__v)}})}function Ue(r,e,t,_,n,o,s,l,u){var c,f,i,d,a,b,k,g=t.props,m=e.props,x=e.type;if(x==="svg"&&(n=!0),o!=null){for(c=0;c<o.length;c++)if((a=o[c])&&"setAttribute"in a==!!x&&(x?a.localName===x:a.nodeType===3)){r=a,o[c]=null;break}}if(r==null){if(x===null)return document.createTextNode(m);r=n?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,m.is&&m),o=null,l=!1}if(x===null)g===m||l&&r.data===m||(r.data=m);else{if(o=o&&W.call(r.childNodes),g=t.props||A,!l&&o!=null)for(g={},c=0;c<r.attributes.length;c++)g[(a=r.attributes[c]).name]=a.value;for(c in g)a=g[c],c=="children"||(c=="dangerouslySetInnerHTML"?i=a:c==="key"||c in m||U(r,c,null,a,n));for(c in m)a=m[c],c=="children"?d=a:c=="dangerouslySetInnerHTML"?f=a:c=="value"?b=a:c=="checked"?k=a:c==="key"||l&&typeof a!="function"||g[c]===a||U(r,c,a,g[c],n);if(f)l||i&&(f.__html===i.__html||f.__html===r.innerHTML)||(r.innerHTML=f.__html),e.__k=[];else if(i&&(r.innerHTML=""),Me(r,ee(d)?d:[d],e,t,_,n&&x!=="foreignObject",o,s,o?o[0]:t.__k&&E(t,0),l,u),o!=null)for(c=o.length;c--;)o[c]!=null&&$e(o[c]);l||(c="value",b!==void 0&&(b!==r[c]||x==="progress"&&!b||x==="option"&&b!==g[c])&&U(r,c,b,g[c],!1),c="checked",k!==void 0&&k!==r[c]&&U(r,c,k,g[c],!1))}return r}function re(r,e,t){try{typeof r=="function"?r(e):r.current=e}catch(_){p.__e(_,t)}}function Q(r,e,t){var _,n;if(p.unmount&&p.unmount(r),(_=r.ref)&&(_.current&&_.current!==r.__e||re(_,null,e)),(_=r.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){p.__e(o,e)}_.base=_.__P=null,r.__c=void 0}if(_=r.__k)for(n=0;n<_.length;n++)_[n]&&Q(_[n],e,t||typeof r.type!="function");t||r.__e==null||$e(r.__e),r.__=r.__e=r.__d=void 0}function Le(r,e,t){return this.constructor(r,t)}function Oe(r,e,t){var _,n,o,s;p.__&&p.__(r,e),n=(_=typeof t=="function")?null:t&&t.__k||e.__k,o=[],s=[],te(e,r=(!_&&t||e).__k=De(M,null,[r]),n||A,A,e.ownerSVGElement!==void 0,!_&&t?[t]:n?null:e.firstChild?W.call(e.childNodes):null,o,!_&&t?t:n?n.__e:e.firstChild,_,s),He(o,r,s)}W=ke.slice,p={__e:function(r,e,t,_){for(var n,o,s;e=e.__;)if((n=e.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(r)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(r,_||{}),s=n.__d),s)return n.__E=n}catch(l){r=l}throw r}},xe=0,R.prototype.setState=function(r,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof r=="function"&&(r=r(H({},t),this.props)),r&&H(t,r),r!=null&&this.__v&&(e&&this._sb.push(e),oe(this))},R.prototype.forceUpdate=function(r){this.__v&&(this.__e=!0,r&&this.__h.push(r),oe(this))},R.prototype.render=M,P=[],we=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,J=function(r,e){return r.__v.__b-e.__v.__b},j.__r=0;var X,v,K,ce,Y=0,Pe=[],V=[],y=p,ue=y.__b,ae=y.__r,fe=y.diffed,he=y.__c,de=y.unmount,pe=y.__;function Re(r,e){y.__h&&y.__h(v,r,Y||e),Y=0;var t=v.__H||(v.__H={__:[],__h:[]});return r>=t.__.length&&t.__.push({__V:V}),t.__[r]}function L(r){return Y=1,Ve(Ee,r)}function Ve(r,e,t){var _=Re(X++,2);if(_.t=r,!_.__c&&(_.__=[t?t(e):Ee(void 0,e),function(l){var u=_.__N?_.__N[0]:_.__[0],c=_.t(u,l);u!==c&&(_.__N=[c,_.__[1]],_.__c.setState({}))}],_.__c=v,!v.u)){var n=function(l,u,c){if(!_.__c.__H)return!0;var f=_.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!o||o.call(this,l,u,c);var i=!1;return f.forEach(function(d){if(d.__N){var a=d.__[0];d.__=d.__N,d.__N=void 0,a!==d.__[0]&&(i=!0)}}),!(!i&&_.__c.props===l)&&(!o||o.call(this,l,u,c))};v.u=!0;var o=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(l,u,c){if(this.__e){var f=o;o=void 0,n(l,u,c),o=f}s&&s.call(this,l,u,c)},v.shouldComponentUpdate=n}return _.__N||_.__}function Be(){for(var r;r=Pe.shift();)if(r.__P&&r.__H)try{r.__H.__h.forEach(B),r.__H.__h.forEach(Z),r.__H.__h=[]}catch(e){r.__H.__h=[],y.__e(e,r.__v)}}y.__b=function(r){v=null,ue&&ue(r)},y.__=function(r,e){r&&e.__k&&e.__k.__m&&(r.__m=e.__k.__m),pe&&pe(r,e)},y.__r=function(r){ae&&ae(r),X=0;var e=(v=r.__c).__H;e&&(K===v?(e.__h=[],v.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=V,t.__N=t.i=void 0})):(e.__h.forEach(B),e.__h.forEach(Z),e.__h=[],X=0)),K=v},y.diffed=function(r){fe&&fe(r);var e=r.__c;e&&e.__H&&(e.__H.__h.length&&(Pe.push(e)!==1&&ce===y.requestAnimationFrame||((ce=y.requestAnimationFrame)||je)(Be)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==V&&(t.__=t.__V),t.i=void 0,t.__V=V})),K=v=null},y.__c=function(r,e){e.some(function(t){try{t.__h.forEach(B),t.__h=t.__h.filter(function(_){return!_.__||Z(_)})}catch(_){e.some(function(n){n.__h&&(n.__h=[])}),e=[],y.__e(_,t.__v)}}),he&&he(r,e)},y.unmount=function(r){de&&de(r);var e,t=r.__c;t&&t.__H&&(t.__H.__.forEach(function(_){try{B(_)}catch(n){e=n}}),t.__H=void 0,e&&y.__e(e,t.__v))};var me=typeof requestAnimationFrame=="function";function je(r){var e,t=function(){clearTimeout(_),me&&cancelAnimationFrame(e),setTimeout(r)},_=setTimeout(t,100);me&&(e=requestAnimationFrame(t))}function B(r){var e=v,t=r.__c;typeof t=="function"&&(r.__c=void 0,t()),v=e}function Z(r){var e=v;r.__c=r.__(),v=e}function Ee(r,e){return typeof e=="function"?e(r):e}var ze=0;function h(r,e,t,_,n,o){var s,l,u={};for(l in e)l=="ref"?s=e[l]:u[l]=e[l];var c={type:r,props:u,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ze,__i:-1,__u:0,__source:n,__self:o};if(typeof r=="function"&&(s=r.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return p.vnode&&p.vnode(c),c}function Te({variable:r,setVariable:e,validator:t}){return h(M,{children:[h("input",{type:"text",value:r.join(" "),onChange:_=>{let n=_.target.value;t&&!t(n)||(n=n.split(" "),n.every(o=>!Number.isNaN(Number(o)))&&e(n.map(o=>Number(o))))}}),h("br",{})]})}function We({variable:r,setVariable:e}){const t=Array.from({length:r.length},(_,n)=>r[n]);return h(M,{children:t.map((_,n)=>h(Te,{variable:_,setVariable:o=>{t[n]=o,e(t)}}))})}function Ge({variable:r,values:e,handler:t,setVariable:_}){return h("select",{onChange:n=>{const o=Number(n.target.value);t(o),_(o)},children:e.map(n=>h("option",{value:n,selected:n===r,children:n}))})}function Ke({id:r,variable:e,setVariable:t}){return h(M,{children:[h("input",{type:"checkbox",id:r,onClick:_=>{const n=_.target.checked;t(n?[...e,r]:e.filter(o=>o!==r))}}),h("label",{for:r,children:r})]})}const T=class T{constructor(e,t,_=-e-t){$(this,"cords");if(e+t+_!==0)throw"q + r + s must be 0";this.cords=[e,t,_]}static direction(e){for(;e>5;)e-=6;return T.directions[e]}static round(e){let t=0,_=0,n=0;return e=e.map((o,s)=>{const l=Math.abs((o=Math.round(o))-e[s]);return l>_&&([t,_]=[s,l]),n+=o,o}),e[t]-=n,e}equals(e){return this.cords.every((t,_)=>t===e.cords[_])}add(e){return this.cords.map((t,_)=>t+e[_])}subtract(e){return this.cords.map((t,_)=>t-e[_])}neighbor(e){return this.add(T.direction(e))}len(){return this.cords.reduce((e,t)=>e+Math.abs(t),0)/2}distance(e){return new T(...this.subtract(e)).len()}lerp(e,t){return this.cords.map((_,n)=>_*(1-t)+e[n]*t)}scale(e){return this.cords.map(t=>t*e)}};$(T,"directions",[[1,0,-1],[1,-1,0],[0,-1,1],[-1,0,1],[-1,1,0],[0,1,-1]]);let F=T;class C{constructor(e,t){this.x=e,this.y=t}toString(){return`${this.x},${this.y}`}add(e){return new C(this.x+e.x,this.y+e.y)}subtract(e){return new C(this.x+e.x,this.y+e.y)}multiply(e){return new C(this.x*e.x,this.y*e.y)}divide(e){return new C(this.x/e.x,this.y/e.y)}}class ve{constructor(e,t,_,n,o){this.fx=e,this.fy=t,this.bq=_,this.br=n,this.start_angle=o}}class z{constructor(e,t,_){this.o=e,this.size=t,this.root=_}hexToPixel(e){const[t,_]=[this.o.fx,this.o.fy].map(n=>n[0]*e.cords[0]+n[1]*e.cords[1]);return this.root.add(this.size.multiply(new C(t,_)))}pixelToHex(e){e=e.subtract(this.root).divide(this.size);const[t,_]=[this.o.bq,this.o.br].map(n=>n[0]*e.x+n[1]*e.y);return F.round([t,_,-t-_])}hexCornerOffset(e){const t=2*Math.PI*(this.o.start_angle-e)/6;return this.size.multiply(new C(Math.cos(t),Math.sin(t)))}polygonCorners(e){let t="";const _=this.hexToPixel(e);for(let n=0;n<6;n++)t+=`${_.add(this.hexCornerOffset(n))} `;return t.trimEnd()}}$(z,"pointy",new ve([Math.sqrt(3),Math.sqrt(3)/2],[0,3/2],[Math.sqrt(3)/3,-1/3],[0,2/3],.5)),$(z,"flat",new ve([3/2,0],[Math.sqrt(3)/2,Math.sqrt(3)],[2/3,0],[-1/3,Math.sqrt(3)/3],0));class ye extends F{constructor(){super(...arguments);$(this,"number",0);$(this,"resource","desert")}}class be{constructor(e){$(this,"midRow");this.board=e,this.midRow=Math.floor(this.board.length/2)}static makeBoard(e){const t=[];for(let _=0;_<2*e+1;_++)t.push(Array.from({length:2*e+1-Math.abs(e-_)},(n,o)=>new F(o+Math.max(0,e-_),_)));return t}cordsToIndex(e){if(e.reduce((_,n)=>_+n)!==0)throw"q + r + s must be 0";const t=e[1]<this.midRow?e[0]-this.midRow+e[1]:e[0];return[e[1],t]}getHex(e,t,_=-e-t){const n=this.cordsToIndex([e,t,_])[1];return this.board[t]&&this.board[t][n]?this.board[t][n]:!1}corners(){const e=this.board.length-1;return[`${e} 0`,`${e} ${this.board[0].length}`,`${this.midRow} ${this.board[this.midRow].length-1}`,`0 ${this.board[0].length}`,"0 0",`${this.midRow} 0`]}inwardSpiral(e,t=4){let _=[e];const n=(this.board.length-1)/2+1;for(let o=0;o<n;o++)for(let s=0;s<6;s++){let l=e;for(;(l=this.getHex(...l.neighbor(t)))&&_.every(u=>u.cords.some((c,f)=>c!==l.cords[f]));)e=l,_.push(e);t++}return _}}class ge extends be{constructor(t,_,n){super(n);$(this,"pointMapping",{5:[5,2,6,3,8,10,9,12,11,4,8,10,9,4,5,6,3,11],6:[2,5,4,6,3,9,8,11,11,10,6,3,8,4,8,10,11,12,10,5,4,9,5,9,12,3,2,6],7:[2,5,4,6,3,9,8,11,11,10,6,3,8,4,8,10,11,12,10,5,4,9,5,9,12,3,2,6,3,4,6,5,9,8,10]});this.board=n;const o=this.board[this.midRow].length;if(!this.pointMapping[o])return;this.corners().includes(t.join(" "))||(t=[0,0]);const s=this.board[t[0]][t[1]],l=this.inwardSpiral(s,this.corners().indexOf(t.join(" ")));let u=0;for(let c of l)_.every(f=>f.some((i,d)=>i!==this.cordsToIndex(c.cords)[d]))&&this.pointMapping[o][u]&&(c.number=this.pointMapping[o][u++])}static makeBoard(t){const _=[];if(t>6&&t%2===1){for(let o of be.makeBoard(Math.floor(t/2)))_.push(o.map(s=>new ye(...s.cords)));return _}const n=2*t-5;for(let o=0;o<n;o++){const s=(n-1)/2-o;_.push(Array.from({length:t-Math.abs(s)},(l,u)=>new ye(u+Math.max(0,s),o)))}return _}buildSpots(){let t=new Set;for(let n of this.board)for(let o of n)for(let s=0;s<6;s++){const l=[o.number];for(let c of[s,s+1]){const f=this.getHex(...o.neighbor(c));f&&l.push(f.number)}l.sort((c,f)=>c-f);const u=l.join(" ");t.has(u)||t.add(u)}t=Array.from(t).map(n=>n.split(" ").map(o=>Number(o)));const _=[];for(let n of t){let o="";const s=+(n.reduce((l,u)=>(o+=`${u} `,u?l+6-Math.abs(u-7):0),0)/36*100).toFixed(2);_.push([o.trimEnd(),s])}return _.sort((n,o)=>o[1]-n[1]),_}}function Je({catan:r}){const e={wood:"#7B863D",clay:"#F6A173",wheat:"#F0D86E",sheep:"#7FCC19",stone:"#9098A3",desert:"#ECC9AF"},t=(r.field.board.length-3)*-8.75,_=new z(z.pointy,new C(20,20),new C(t,20)),n=Math.sqrt(3)*20*r.field.board[r.field.midRow].length,o=30*r.field.board.length+10;return h(M,{children:["The Catan board:",h("br",{}),h("svg",{width:n,height:o,xmlns:"http://www.w3.org/2000/svg",children:r.field.board.map(s=>s.map(l=>{const u=_.polygonCorners(l),c=_.hexToPixel(l);return h("g",{children:[h("polygon",{fill:e[l.resource],points:u}),h("text",{x:c.x,y:c.y+10,children:l.number})]})}))}),h("br",{}),"Top buildable spots:",r.buildSpots.map(s=>h("div",{children:[s.join(" - "),h("br",{})]},s[0]))]})}class Qe{constructor({pointA:e,deserts:t,players:_}){$(this,"field");$(this,"buildSpots");const n=Math.max(Math.ceil(_/2)+3,5);this.field=new ge(e,t,ge.makeBoard(n)),this.buildSpots=this.field.buildSpots()}}function Xe(){const[r,e]=L([0,0]),[t,_]=L([[2,2]]),[n,o]=L(3),[s,l]=L([]),u=new Qe({pointA:r,deserts:t,players:n,extensions:s});return h(M,{children:["Point A",h("br",{}),h(Te,{variable:r,setVariable:e,validator:c=>u.field.corners().includes(c)}),"Desert indexes",h("br",{}),h(We,{variable:t,setVariable:_}),"Players: ",h(Ge,{variable:n,values:[2,3,4,5,6,7,8],setVariable:o,handler:c=>c>4?_(Array(2).fill(t[0])):_(t.slice(0,1))}),h("br",{}),"Extensions:",h("br",{}),["ck","sf"].map(c=>h(Ke,{id:c,variable:s,setVariable:l},c)),h("br",{}),h("br",{}),h(Je,{catan:u})]})}Oe(h(Xe,{}),document.getElementById("app"));