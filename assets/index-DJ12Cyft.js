var De=Object.defineProperty;var Fe=(n,e,t)=>e in n?De(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var M=(n,e,t)=>(Fe(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const _ of r)if(_.type==="childList")for(const l of _.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const _={};return r.integrity&&(_.integrity=r.integrity),r.referrerPolicy&&(_.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?_.credentials="include":r.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function o(r){if(r.ep)return;r.ep=!0;const _=t(r);fetch(r.href,_)}})();var G,v,xe,E,_e,ke,Q,D={},Me=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function P(n,e){for(var t in e)n[t]=e[t];return n}function Ce(n){var e=n.parentNode;e&&e.removeChild(n)}function qe(n,e,t){var o,r,_,l={};for(_ in e)_=="key"?o=e[_]:_=="ref"?r=e[_]:l[_]=e[_];if(arguments.length>2&&(l.children=arguments.length>3?G.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(_ in n.defaultProps)l[_]===void 0&&(l[_]=n.defaultProps[_]);return L(n,l,o,r,null)}function L(n,e,t,o,r){var _={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++xe,__i:-1,__u:0};return r==null&&v.vnode!=null&&v.vnode(_),_}function C(n){return n.children}function V(n,e){this.props=n,this.context=e}function N(n,e){if(e==null)return n.__?N(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?N(n):null}function $e(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return $e(n)}}function ie(n){(!n.__d&&(n.__d=!0)&&E.push(n)&&!z.__r++||_e!==v.debounceRendering)&&((_e=v.debounceRendering)||ke)(z)}function z(){var n,e,t,o,r,_,l,s,c;for(E.sort(Q);n=E.shift();)n.__d&&(e=E.length,o=void 0,_=(r=(t=n).__v).__e,s=[],c=[],(l=t.__P)&&((o=P({},r)).__v=r.__v+1,v.vnode&&v.vnode(o),te(l,o,r,t.__n,l.ownerSVGElement!==void 0,32&r.__u?[_]:null,s,_??N(r),!!(32&r.__u),c),o.__v=r.__v,o.__.__k[o.__i]=o,Pe(s,o,c),o.__e!=_&&$e(o)),E.length>e&&E.sort(Q));z.__r=0}function Se(n,e,t,o,r,_,l,s,c,u,h){var i,d,a,p,x,y=o&&o.__k||Me,m=e.length;for(t.__d=c,Ie(t,e,y),c=t.__d,i=0;i<m;i++)(a=t.__k[i])!=null&&typeof a!="boolean"&&typeof a!="function"&&(d=a.__i===-1?D:y[a.__i]||D,a.__i=i,te(n,a,d,r,_,l,s,c,u,h),p=a.__e,a.ref&&d.ref!=a.ref&&(d.ref&&ne(d.ref,null,a),h.push(a.ref,a.__c||p,a)),x==null&&p!=null&&(x=p),65536&a.__u||d.__k===a.__k?(p||d.__e!=c||(c=N(d)),c=He(a,c,n)):typeof a.type=="function"&&a.__d!==void 0?c=a.__d:p&&(c=p.nextSibling),a.__d=void 0,a.__u&=-196609);t.__d=c,t.__e=x}function Ie(n,e,t){var o,r,_,l,s,c=e.length,u=t.length,h=u,i=0;for(n.__k=[],o=0;o<c;o++)l=o+i,(r=n.__k[o]=(r=e[o])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?L(null,r,null,null,null):ee(r)?L(C,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?L(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=n,r.__b=n.__b+1,s=Oe(r,t,l,h),r.__i=s,_=null,s!==-1&&(h--,(_=t[s])&&(_.__u|=131072)),_==null||_.__v===null?(s==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):s!==l&&(s===l+1?i++:s>l?h>c-l?i+=s-l:i--:s<l?s==l-1&&(i=s-l):i=0,s!==o+i&&(r.__u|=65536))):(_=t[l])&&_.key==null&&_.__e&&!(131072&_.__u)&&(_.__e==n.__d&&(n.__d=N(_)),Y(_,_,!1),t[l]=null,h--);if(h)for(o=0;o<u;o++)(_=t[o])!=null&&!(131072&_.__u)&&(_.__e==n.__d&&(n.__d=N(_)),Y(_,_))}function He(n,e,t){var o,r;if(typeof n.type=="function"){for(o=n.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=n,e=He(o[r],e,t));return e}n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Oe(n,e,t,o){var r=n.key,_=n.type,l=t-1,s=t+1,c=e[t];if(c===null||c&&r==c.key&&_===c.type&&!(131072&c.__u))return t;if(o>(c!=null&&!(131072&c.__u)?1:0))for(;l>=0||s<e.length;){if(l>=0){if((c=e[l])&&!(131072&c.__u)&&r==c.key&&_===c.type)return l;l--}if(s<e.length){if((c=e[s])&&!(131072&c.__u)&&r==c.key&&_===c.type)return s;s++}}return-1}function se(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Re.test(e)?t:t+"px"}function U(n,e,t,o,r){var _;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||se(n.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||se(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")_=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in n||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+_]=t,t?o?t.u=o.u:(t.u=Date.now(),n.addEventListener(e,_?ce:le,_)):n.removeEventListener(e,_?ce:le,_);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,t))}}function le(n){if(this.l){var e=this.l[n.type+!1];if(n.t){if(n.t<=e.u)return}else n.t=Date.now();return e(v.event?v.event(n):n)}}function ce(n){if(this.l)return this.l[n.type+!0](v.event?v.event(n):n)}function te(n,e,t,o,r,_,l,s,c,u){var h,i,d,a,p,x,y,m,b,$,q,A,re,I,X,k=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),_=[s=e.__e=t.__e]),(h=v.__b)&&h(e);e:if(typeof k=="function")try{if(m=e.props,b=(h=k.contextType)&&o[h.__c],$=h?b?b.props.value:h.__:o,t.__c?y=(i=e.__c=t.__c).__=i.__E:("prototype"in k&&k.prototype.render?e.__c=i=new k(m,$):(e.__c=i=new V(m,$),i.constructor=k,i.render=Le),b&&b.sub(i),i.props=m,i.state||(i.state={}),i.context=$,i.__n=o,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=P({},i.__s)),P(i.__s,k.getDerivedStateFromProps(m,i.__s))),a=i.props,p=i.state,i.__v=e,d)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&m!==a&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,$),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,$)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(i.props=m,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(O){O&&(O.__=e)}),q=0;q<i._sb.length;q++)i.__h.push(i._sb[q]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,$),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(a,p,x)})}if(i.context=$,i.props=m,i.__P=n,i.__e=!1,A=v.__r,re=0,"prototype"in k&&k.prototype.render){for(i.state=i.__s,i.__d=!1,A&&A(e),h=i.render(i.props,i.state,i.context),I=0;I<i._sb.length;I++)i.__h.push(i._sb[I]);i._sb=[]}else do i.__d=!1,A&&A(e),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++re<25);i.state=i.__s,i.getChildContext!=null&&(o=P(P({},o),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(x=i.getSnapshotBeforeUpdate(a,p)),Se(n,ee(X=h!=null&&h.type===C&&h.key==null?h.props.children:h)?X:[X],e,t,o,r,_,l,s,c,u),i.base=e.__e,e.__u&=-161,i.__h.length&&l.push(i),y&&(i.__E=i.__=null)}catch(O){e.__v=null,c||_!=null?(e.__e=s,e.__u|=c?160:32,_[_.indexOf(s)]=null):(e.__e=t.__e,e.__k=t.__k),v.__e(O,e,t)}else _==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Ue(t.__e,e,t,o,r,_,l,c,u);(h=v.diffed)&&h(e)}function Pe(n,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)ne(t[o],t[++o],t[++o]);v.__c&&v.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(_){_.call(r)})}catch(_){v.__e(_,r.__v)}})}function Ue(n,e,t,o,r,_,l,s,c){var u,h,i,d,a,p,x,y=t.props,m=e.props,b=e.type;if(b==="svg"&&(r=!0),_!=null){for(u=0;u<_.length;u++)if((a=_[u])&&"setAttribute"in a==!!b&&(b?a.localName===b:a.nodeType===3)){n=a,_[u]=null;break}}if(n==null){if(b===null)return document.createTextNode(m);n=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,m.is&&m),_=null,s=!1}if(b===null)y===m||s&&n.data===m||(n.data=m);else{if(_=_&&G.call(n.childNodes),y=t.props||D,!s&&_!=null)for(y={},u=0;u<n.attributes.length;u++)y[(a=n.attributes[u]).name]=a.value;for(u in y)a=y[u],u=="children"||(u=="dangerouslySetInnerHTML"?i=a:u==="key"||u in m||U(n,u,null,a,r));for(u in m)a=m[u],u=="children"?d=a:u=="dangerouslySetInnerHTML"?h=a:u=="value"?p=a:u=="checked"?x=a:u==="key"||s&&typeof a!="function"||y[u]===a||U(n,u,a,y[u],r);if(h)s||i&&(h.__html===i.__html||h.__html===n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(i&&(n.innerHTML=""),Se(n,ee(d)?d:[d],e,t,o,r&&b!=="foreignObject",_,l,_?_[0]:t.__k&&N(t,0),s,c),_!=null)for(u=_.length;u--;)_[u]!=null&&Ce(_[u]);s||(u="value",p!==void 0&&(p!==n[u]||b==="progress"&&!p||b==="option"&&p!==y[u])&&U(n,u,p,y[u],!1),u="checked",x!==void 0&&x!==n[u]&&U(n,u,x,y[u],!1))}return n}function ne(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(o){v.__e(o,t)}}function Y(n,e,t){var o,r;if(v.unmount&&v.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||ne(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){v.__e(_,e)}o.base=o.__P=null,n.__c=void 0}if(o=n.__k)for(r=0;r<o.length;r++)o[r]&&Y(o[r],e,t||typeof n.type!="function");t||n.__e==null||Ce(n.__e),n.__=n.__e=n.__d=void 0}function Le(n,e,t){return this.constructor(n,t)}function Ve(n,e,t){var o,r,_,l;v.__&&v.__(n,e),r=(o=typeof t=="function")?null:t&&t.__k||e.__k,_=[],l=[],te(e,n=(!o&&t||e).__k=qe(C,null,[n]),r||D,D,e.ownerSVGElement!==void 0,!o&&t?[t]:r?null:e.firstChild?G.call(e.childNodes):null,_,!o&&t?t:r?r.__e:e.firstChild,o,l),Pe(_,n,l)}G=Me.slice,v={__e:function(n,e,t,o){for(var r,_,l;e=e.__;)if((r=e.__c)&&!r.__)try{if((_=r.constructor)&&_.getDerivedStateFromError!=null&&(r.setState(_.getDerivedStateFromError(n)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,o||{}),l=r.__d),l)return r.__E=r}catch(s){n=s}throw n}},xe=0,V.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof n=="function"&&(n=n(P({},t),this.props)),n&&P(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ie(this))},V.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ie(this))},V.prototype.render=C,E=[],ke=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q=function(n,e){return n.__v.__b-e.__v.__b},z.__r=0;var F,g,J,ue,W=0,Ee=[],B=[],w=v,ae=w.__b,he=w.__r,fe=w.diffed,de=w.__c,pe=w.unmount,me=w.__;function oe(n,e){w.__h&&w.__h(g,n,W||e),W=0;var t=g.__H||(g.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:B}),t.__[n]}function H(n){return W=1,Be(Te,n)}function Be(n,e,t){var o=oe(F++,2);if(o.t=n,!o.__c&&(o.__=[t?t(e):Te(void 0,e),function(s){var c=o.__N?o.__N[0]:o.__[0],u=o.t(c,s);c!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=g,!g.u)){var r=function(s,c,u){if(!o.__c.__H)return!0;var h=o.__c.__H.__.filter(function(d){return!!d.__c});if(h.every(function(d){return!d.__N}))return!_||_.call(this,s,c,u);var i=!1;return h.forEach(function(d){if(d.__N){var a=d.__[0];d.__=d.__N,d.__N=void 0,a!==d.__[0]&&(i=!0)}}),!(!i&&o.__c.props===s)&&(!_||_.call(this,s,c,u))};g.u=!0;var _=g.shouldComponentUpdate,l=g.componentWillUpdate;g.componentWillUpdate=function(s,c,u){if(this.__e){var h=_;_=void 0,r(s,c,u),_=h}l&&l.call(this,s,c,u)},g.shouldComponentUpdate=r}return o.__N||o.__}function je(n,e){var t=oe(F++,3);!w.__s&&Ne(t.__H,e)&&(t.__=n,t.i=e,g.__H.__h.push(t))}function ze(n){return W=5,We(function(){return{current:n}},[])}function We(n,e){var t=oe(F++,7);return Ne(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function Ke(){for(var n;n=Ee.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(j),n.__H.__h.forEach(Z),n.__H.__h=[]}catch(e){n.__H.__h=[],w.__e(e,n.__v)}}w.__b=function(n){g=null,ae&&ae(n)},w.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),me&&me(n,e)},w.__r=function(n){he&&he(n),F=0;var e=(g=n.__c).__H;e&&(J===g?(e.__h=[],g.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=B,t.__N=t.i=void 0})):(e.__h.forEach(j),e.__h.forEach(Z),e.__h=[],F=0)),J=g},w.diffed=function(n){fe&&fe(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ee.push(e)!==1&&ue===w.requestAnimationFrame||((ue=w.requestAnimationFrame)||Ge)(Ke)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==B&&(t.__=t.__V),t.i=void 0,t.__V=B})),J=g=null},w.__c=function(n,e){e.some(function(t){try{t.__h.forEach(j),t.__h=t.__h.filter(function(o){return!o.__||Z(o)})}catch(o){e.some(function(r){r.__h&&(r.__h=[])}),e=[],w.__e(o,t.__v)}}),de&&de(n,e)},w.unmount=function(n){pe&&pe(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{j(o)}catch(r){e=r}}),t.__H=void 0,e&&w.__e(e,t.__v))};var ye=typeof requestAnimationFrame=="function";function Ge(n){var e,t=function(){clearTimeout(o),ye&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,100);ye&&(e=requestAnimationFrame(t))}function j(n){var e=g,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),g=e}function Z(n){var e=g;n.__c=n.__(),g=e}function Ne(n,e){return!n||n.length!==e.length||e.some(function(t,o){return t!==n[o]})}function Te(n,e){return typeof e=="function"?e(n):e}var Xe=0;function f(n,e,t,o,r,_){var l,s,c={};for(s in e)s=="ref"?l=e[s]:c[s]=e[s];var u={type:n,props:c,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Xe,__i:-1,__u:0,__source:r,__self:_};if(typeof n=="function"&&(l=n.defaultProps))for(s in l)c[s]===void 0&&(c[s]=l[s]);return v.vnode&&v.vnode(u),u}function Ae({variable:n,setVariable:e,validator:t}){return f(C,{children:[f("input",{type:"text",value:n.join(" "),onChange:o=>{let r=o.target.value;t&&!t(r)||(r=r.split(" "),r.every(_=>!Number.isNaN(Number(_)))&&e(r.map(_=>Number(_))))}}),f("br",{})]})}function Je({variable:n,setVariable:e}){const t=Array.from({length:n.length},(o,r)=>n[r]);return f(C,{children:t.map((o,r)=>f(Ae,{variable:o,setVariable:_=>{t[r]=_,e(t)}}))})}function Qe({variable:n,values:e,handler:t,setVariable:o}){return f("select",{onChange:r=>{const _=Number(r.target.value);t(_),o(_)},children:e.map(r=>f("option",{value:r,selected:r===n,children:r}))})}function Ye({id:n,variable:e,setVariable:t}){return f(C,{children:[f("input",{type:"checkbox",id:n,onClick:o=>{const r=o.target.checked;t(r?[...e,n]:e.filter(_=>_!==n))}}),f("label",{for:n,children:n})]})}function Ze({open:n,setOpen:e,children:t}){const o=ze(null);function r(_){_.key==="Escape"&&e(!1)}return je(()=>{const _=o.current;_&&(n?_.showModal():_.close())},[n]),f("dialog",{ref:o,onKeyDown:r,children:[f("button",{class:"modal-close-btn",onClick:()=>e(!1),children:"X"}),t]})}const T=class T{constructor(e,t,o=-e-t){M(this,"cords");if(e+t+o!==0)throw"q + r + s must be 0";this.cords=[e,t,o]}static direction(e){for(;e>5;)e-=6;return T.directions[e]}static round(e){let t=0,o=0,r=0;return e=e.map((_,l)=>{const s=Math.abs((_=Math.round(_))-e[l]);return s>o&&([t,o]=[l,s]),r+=_,_}),e[t]-=r,e}equals(e){return this.cords.every((t,o)=>t===e.cords[o])}add(e){return this.cords.map((t,o)=>t+e[o])}subtract(e){return this.cords.map((t,o)=>t-e[o])}neighbor(e){return this.add(T.direction(e))}len(){return this.cords.reduce((e,t)=>e+Math.abs(t),0)/2}distance(e){return new T(...this.subtract(e)).len()}lerp(e,t){return this.cords.map((o,r)=>o*(1-t)+e[r]*t)}scale(e){return this.cords.map(t=>t*e)}};M(T,"directions",[[1,0,-1],[1,-1,0],[0,-1,1],[-1,0,1],[-1,1,0],[0,1,-1]]);let R=T;class S{constructor(e,t){this.x=e,this.y=t}toString(){return`${this.x},${this.y}`}add(e){return new S(this.x+e.x,this.y+e.y)}subtract(e){return new S(this.x+e.x,this.y+e.y)}multiply(e){return new S(this.x*e.x,this.y*e.y)}divide(e){return new S(this.x/e.x,this.y/e.y)}}class ve{constructor(e,t,o,r,_){this.fx=e,this.fy=t,this.bq=o,this.br=r,this.start_angle=_}}class K{constructor(e,t,o){this.o=e,this.size=t,this.root=o}hexToPixel(e){const[t,o]=[this.o.fx,this.o.fy].map(r=>r[0]*e.cords[0]+r[1]*e.cords[1]);return this.root.add(this.size.multiply(new S(t,o)))}pixelToHex(e){e=e.subtract(this.root).divide(this.size);const[t,o]=[this.o.bq,this.o.br].map(r=>r[0]*e.x+r[1]*e.y);return R.round([t,o,-t-o])}hexCornerOffset(e){const t=2*Math.PI*(this.o.start_angle-e)/6;return this.size.multiply(new S(Math.cos(t),Math.sin(t)))}polygonCorners(e){let t="";const o=this.hexToPixel(e);for(let r=0;r<6;r++)t+=`${o.add(this.hexCornerOffset(r))} `;return t.trimEnd()}}M(K,"pointy",new ve([Math.sqrt(3),Math.sqrt(3)/2],[0,3/2],[Math.sqrt(3)/3,-1/3],[0,2/3],.5)),M(K,"flat",new ve([3/2,0],[Math.sqrt(3)/2,Math.sqrt(3)],[2/3,0],[-1/3,Math.sqrt(3)/3],0));class be extends R{constructor(){super(...arguments);M(this,"number",0);M(this,"resource","desert")}}class ge{constructor(e){M(this,"midRow");this.board=e,this.midRow=Math.floor(this.board.length/2)}static makeBoard(e){const t=[],o=2*e+1;for(let r=0;r<o;r++)t.push(Array.from({length:o-Math.abs(e-r)},(_,l)=>new R(l+Math.max(0,e-r),r)));return t}cordsToIndex(e){if(e.reduce((o,r)=>o+r)!==0)throw"q + r + s must be 0";const t=e[1]<this.midRow?e[0]-this.midRow+e[1]:e[0];return[e[1],t]}getHex(e,t,o=-e-t){const r=this.cordsToIndex([e,t,o])[1];return this.board[t]&&this.board[t][r]?this.board[t][r]:!1}corners(){const e=this.board[0].length-1,t=this.board.length-1;return[`${t} 0`,`${t} ${e}`,`${this.midRow} ${this.board[this.midRow].length-1}`,`0 ${e}`,"0 0",`${this.midRow} 0`]}inwardSpiral(e,t=4){let o=[e];const r=(this.board.length-1)/2+1;for(let _=0;_<r;_++)for(let l=0;l<6;l++){let s=e;for(;(s=this.getHex(...s.neighbor(t)))&&o.every(c=>c.cords.some((u,h)=>u!==s.cords[h]));)e=s,o.push(e);t++}return o}}class we extends ge{constructor(t,o,r,_){super(r);M(this,"hexes");M(this,"pointMapping",{5:[5,2,6,3,8,10,9,12,11,4,8,10,9,4,5,6,3,11],6:[2,5,4,6,3,9,8,11,11,10,6,3,8,4,8,10,11,12,10,5,4,9,5,9,12,3,2,6],7:[2,5,4,6,3,9,8,11,11,10,6,3,8,4,8,10,11,12,10,5,4,9,5,9,12,3,2,6,3,4,6,5,9,8,10]});this.pointA=t,this.deserts=o,this.board=r;const l=t.join(" ");this.corners().includes(l)||(t=[0,0]),this.hexes=this.inwardSpiral(this.board[t[0]][t[1]],this.corners().indexOf(l));const s=this.board[this.midRow].length;if(!this.pointMapping[s])return;let c=0;for(const u of this.hexes)o.every(h=>h.some((i,d)=>i!==this.cordsToIndex(u.cords)[d]))&&this.pointMapping[s][c]&&(u.resource=_[c]||"desert",u.number=this.pointMapping[s][c++])}static makeBoard(t){const o=[];if(t>6&&t%2===1){for(const _ of ge.makeBoard(Math.floor(t/2)))o.push(_.map(l=>new be(...l.cords)));return o}const r=2*t-5;for(let _=0;_<r;_++){const l=(r-1)/2-_;o.push(Array.from({length:t-Math.abs(l)},(s,c)=>new be(c+Math.max(0,l),_)))}return o}randomise(){const t={5:{wood:4,clay:3,wheat:4,sheep:4,stone:3},6:{wood:6,clay:5,wheat:6,sheep:6,stone:5},7:{wood:8,clay:6,wheat:7,sheep:8,stone:6}},o=[],r=this.board[this.midRow].length;for(const[s,c]of Object.entries(t[r]))for(let u=0;u<c;u++)o.push(s);for(let s=o.length-1;s>0;s--){const c=Math.floor(Math.random()*(s+1));[o[s],o[c]]=[o[c],o[s]]}const _=this.corners()[Math.floor(Math.random()*6)],l=[];for(let s=0;s<this.deserts.length;s++)l.push([Math.floor(Math.random()*this.board.length)]),l[s].push(Math.floor(Math.random()*this.board[l[s][0]].length));return[_.split(" ").map(s=>Number(s)),l,o]}buildSpots(){let t=new Set;for(const r of this.hexes)for(let _=0;_<6;_++){const l=[r.number];for(const c of[_,_+1]){const u=this.getHex(...r.neighbor(c));u&&l.push(u.number)}l.sort((c,u)=>c-u);const s=l.join(" ");t.has(s)||t.add(s)}t=Array.from(t).map(r=>r.split(" ").map(_=>Number(_)));const o=[];for(const r of t){let _="";const l=+(r.reduce((s,c)=>(_+=`${c} `,c?s+6-Math.abs(c-7):0),0)/.36).toFixed(2);o.push([_.trimEnd(),l])}return o.sort((r,_)=>_[1]-r[1]),o}}function et({catan:n,HexModal:e}){const t={wood:"#7B863D",clay:"#F6A173",wheat:"#F0D86E",sheep:"#7FCC19",stone:"#9098A3",desert:"#ECC9AF"},o=(n.field.midRow-1)*Math.sqrt(3)*-10,r=new K(K.pointy,new S(20,20),new S(o,20)),_=Math.sqrt(3)*20*n.field.board[n.field.midRow].length,l=30*n.field.board.length+10,[s,c]=H(!1),[u,h]=H([0,0]),[i,d]=H(0);let a=0;return f(C,{children:[f(e,{open:s,setOpen:c,cords:u,hexNum:i}),f("svg",{width:_,height:l,xmlns:"http://www.w3.org/2000/svg",children:n.field.hexes.map(p=>{const x=r.polygonCorners(p),y=r.hexToPixel(p),m=p.number?a++:0;return f("g",{onClick:()=>{d(m),h(n.field.cordsToIndex(p.cords)),c(!0)},children:[f("polygon",{fill:t[p.resource],points:x}),f("text",{fill:[6,8].includes(p.number)?"red":"white",x:y.x,y:y.y+10,children:p.number})]})})}),f("br",{}),"Top buildable spots:",n.buildSpots.map(p=>f("div",{children:[p.join(" - "),f("br",{})]},p[0]))]})}class tt{constructor({pointA:e,deserts:t,players:o,resources:r}){M(this,"field");M(this,"buildSpots");const _=Math.max(Math.ceil(o/2)+3,5);this.field=new we(e,t,we.makeBoard(_),r),this.buildSpots=this.field.buildSpots()}}function nt(){const[n,e]=H([0,0]),[t,o]=H([[2,2]]),[r,_]=H(3),[l,s]=H([]),[c,u]=H([]),h=new tt({pointA:n,deserts:t,players:r,resources:l,extensions:c});function i({open:d,setOpen:a,cords:p,hexNum:x}){return f(Ze,{open:d,setOpen:a,children:[h.field.corners().includes(p.join(" "))&&p.some((y,m)=>y!==h.field.pointA[m])&&f(C,{children:[f("button",{type:"button",onClick:()=>e(p),children:"Set as point A"}),f("br",{})]}),t.map((y,m)=>p.some((b,$)=>b!==y[$])&&f(C,{children:[f("button",{type:"button",onClick:()=>o(t.length>1?[y,p]:[p]),children:["Set as desert ",m+1]}),f("br",{})]})),f("br",{}),t.every(y=>y.some((m,b)=>m!==p[b]))&&["wood","clay","wheat","sheep","stone"].map(y=>y!==h.field.board[p[0]][p[1]].resource&&f(C,{children:[f("button",{type:"button",onClick:()=>{const m=[...l];m[x]=y,s(m)},children:["Change to ",y]}),f("br",{})]}))]})}return f(C,{children:[f("button",{type:"button",onClick:()=>{const[d,a,p]=h.field.randomise();e(d),o(a),s(p)},children:"Randomise"}),f("br",{}),"Point A",f("br",{}),f(Ae,{variable:n,setVariable:e,validator:d=>h.field.corners().includes(d)}),"Desert indexes",f("br",{}),f(Je,{variable:t,setVariable:o}),"Players: ",f(Qe,{variable:r,values:[2,3,4,5,6,7,8],setVariable:_,handler:d=>{d>4?o(Array(2).fill(t[0])):o(t.slice(0,1)),s([])}}),f("br",{}),"Extensions:",f("br",{}),["ck","sf"].map(d=>f(Ye,{id:d,variable:c,setVariable:u},d)),f("br",{}),f("br",{}),f(et,{catan:h,HexModal:i})]})}Ve(f(nt,{}),document.getElementById("app"));