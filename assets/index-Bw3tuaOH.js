var Ce=Object.defineProperty;var Ne=(_,e,t)=>e in _?Ce(_,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):_[e]=t;var S=(_,e,t)=>(Ne(_,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var q,p,be,P,_e,ye,G,T={},ge=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function H(_,e){for(var t in e)_[t]=e[t];return _}function ke(_){var e=_.parentNode;e&&e.removeChild(_)}function Te(_,e,t){var n,r,o,s={};for(o in e)o=="key"?n=e[o]:o=="ref"?r=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?q.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)s[o]===void 0&&(s[o]=_.defaultProps[o]);return U(_,s,n,r,null)}function U(_,e,t,n,r){var o={type:_,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++be,__i:-1,__u:0};return r==null&&p.vnode!=null&&p.vnode(o),o}function M(_){return _.children}function V(_,e){this.props=_,this.context=e}function C(_,e){if(e==null)return _.__?C(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?C(_):null}function xe(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return xe(_)}}function ne(_){(!_.__d&&(_.__d=!0)&&P.push(_)&&!B.__r++||_e!==p.debounceRendering)&&((_e=p.debounceRendering)||ye)(B)}function B(){var _,e,t,n,r,o,s,l,u;for(P.sort(G);_=P.shift();)_.__d&&(e=P.length,n=void 0,o=(r=(t=_).__v).__e,l=[],u=[],(s=t.__P)&&((n=H({},r)).__v=r.__v+1,p.vnode&&p.vnode(n),Z(s,n,r,t.__n,s.ownerSVGElement!==void 0,32&r.__u?[o]:null,l,o??C(r),!!(32&r.__u),u),n.__v=r.__v,n.__.__k[n.__i]=n,Se(l,n,u),n.__e!=o&&xe(n)),P.length>e&&P.sort(G));B.__r=0}function we(_,e,t,n,r,o,s,l,u,c,f){var i,d,a,y,w,g=n&&n.__k||ge,m=e.length;for(t.__d=u,Ae(t,e,g),u=t.__d,i=0;i<m;i++)(a=t.__k[i])!=null&&typeof a!="boolean"&&typeof a!="function"&&(d=a.__i===-1?T:g[a.__i]||T,a.__i=i,Z(_,a,d,r,o,s,l,u,c,f),y=a.__e,a.ref&&d.ref!=a.ref&&(d.ref&&ee(d.ref,null,a),f.push(a.ref,a.__c||y,a)),w==null&&y!=null&&(w=y),65536&a.__u||d.__k===a.__k?(y||d.__e!=u||(u=C(d)),u=$e(a,u,_)):typeof a.type=="function"&&a.__d!==void 0?u=a.__d:y&&(u=y.nextSibling),a.__d=void 0,a.__u&=-196609);t.__d=u,t.__e=w}function Ae(_,e,t){var n,r,o,s,l,u=e.length,c=t.length,f=c,i=0;for(_.__k=[],n=0;n<u;n++)s=n+i,(r=_.__k[n]=(r=e[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?U(null,r,null,null,null):Y(r)?U(M,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?U(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=_,r.__b=_.__b+1,l=De(r,t,s,f),r.__i=l,o=null,l!==-1&&(f--,(o=t[l])&&(o.__u|=131072)),o==null||o.__v===null?(l==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):l!==s&&(l===s+1?i++:l>s?f>u-s?i+=l-s:i--:l<s?l==s-1&&(i=l-s):i=0,l!==n+i&&(r.__u|=65536))):(o=t[s])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==_.__d&&(_.__d=C(o)),K(o,o,!1),t[s]=null,f--);if(f)for(n=0;n<c;n++)(o=t[n])!=null&&!(131072&o.__u)&&(o.__e==_.__d&&(_.__d=C(o)),K(o,o))}function $e(_,e,t){var n,r;if(typeof _.type=="function"){for(n=_.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=_,e=$e(n[r],e,t));return e}_.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function De(_,e,t,n){var r=_.key,o=_.type,s=t-1,l=t+1,u=e[t];if(u===null||u&&r==u.key&&o===u.type&&!(131072&u.__u))return t;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||l<e.length;){if(s>=0){if((u=e[s])&&!(131072&u.__u)&&r==u.key&&o===u.type)return s;s--}if(l<e.length){if((u=e[l])&&!(131072&u.__u)&&r==u.key&&o===u.type)return l;l++}}return-1}function re(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||Ee.test(e)?t:t+"px"}function I(_,e,t,n,r){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof n=="string"&&(_.style.cssText=n=""),n)for(e in n)t&&e in t||re(_.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||re(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?n?t.u=n.u:(t.u=Date.now(),_.addEventListener(e,o?ie:oe,o)):_.removeEventListener(e,o?ie:oe,o);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function oe(_){if(this.l){var e=this.l[_.type+!1];if(_.t){if(_.t<=e.u)return}else _.t=Date.now();return e(p.event?p.event(_):_)}}function ie(_){if(this.l)return this.l[_.type+!0](p.event?p.event(_):_)}function Z(_,e,t,n,r,o,s,l,u,c){var f,i,d,a,y,w,g,m,k,$,A,E,te,D,z,x=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),o=[l=e.__e=t.__e]),(f=p.__b)&&f(e);e:if(typeof x=="function")try{if(m=e.props,k=(f=x.contextType)&&n[f.__c],$=f?k?k.props.value:f.__:n,t.__c?g=(i=e.__c=t.__c).__=i.__E:("prototype"in x&&x.prototype.render?e.__c=i=new x(m,$):(e.__c=i=new V(m,$),i.constructor=x,i.render=Ie),k&&k.sub(i),i.props=m,i.state||(i.state={}),i.context=$,i.__n=n,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),x.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=H({},i.__s)),H(i.__s,x.getDerivedStateFromProps(m,i.__s))),a=i.props,y=i.state,i.__v=e,d)x.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==a&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,$),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,$)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(i.props=m,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(F){F&&(F.__=e)}),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,$),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(a,y,w)})}if(i.context=$,i.props=m,i.__P=_,i.__e=!1,E=p.__r,te=0,"prototype"in x&&x.prototype.render){for(i.state=i.__s,i.__d=!1,E&&E(e),f=i.render(i.props,i.state,i.context),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[]}else do i.__d=!1,E&&E(e),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++te<25);i.state=i.__s,i.getChildContext!=null&&(n=H(H({},n),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(w=i.getSnapshotBeforeUpdate(a,y)),we(_,Y(z=f!=null&&f.type===M&&f.key==null?f.props.children:f)?z:[z],e,t,n,r,o,s,l,u,c),i.base=e.__e,e.__u&=-161,i.__h.length&&s.push(i),g&&(i.__E=i.__=null)}catch(F){e.__v=null,u||o!=null?(e.__e=l,e.__u|=u?160:32,o[o.indexOf(l)]=null):(e.__e=t.__e,e.__k=t.__k),p.__e(F,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Fe(t.__e,e,t,n,r,o,s,u,c);(f=p.diffed)&&f(e)}function Se(_,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)ee(t[n],t[++n],t[++n]);p.__c&&p.__c(e,_),_.some(function(r){try{_=r.__h,r.__h=[],_.some(function(o){o.call(r)})}catch(o){p.__e(o,r.__v)}})}function Fe(_,e,t,n,r,o,s,l,u){var c,f,i,d,a,y,w,g=t.props,m=e.props,k=e.type;if(k==="svg"&&(r=!0),o!=null){for(c=0;c<o.length;c++)if((a=o[c])&&"setAttribute"in a==!!k&&(k?a.localName===k:a.nodeType===3)){_=a,o[c]=null;break}}if(_==null){if(k===null)return document.createTextNode(m);_=r?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,m.is&&m),o=null,l=!1}if(k===null)g===m||l&&_.data===m||(_.data=m);else{if(o=o&&q.call(_.childNodes),g=t.props||T,!l&&o!=null)for(g={},c=0;c<_.attributes.length;c++)g[(a=_.attributes[c]).name]=a.value;for(c in g)a=g[c],c=="children"||(c=="dangerouslySetInnerHTML"?i=a:c==="key"||c in m||I(_,c,null,a,r));for(c in m)a=m[c],c=="children"?d=a:c=="dangerouslySetInnerHTML"?f=a:c=="value"?y=a:c=="checked"?w=a:c==="key"||l&&typeof a!="function"||g[c]===a||I(_,c,a,g[c],r);if(f)l||i&&(f.__html===i.__html||f.__html===_.innerHTML)||(_.innerHTML=f.__html),e.__k=[];else if(i&&(_.innerHTML=""),we(_,Y(d)?d:[d],e,t,n,r&&k!=="foreignObject",o,s,o?o[0]:t.__k&&C(t,0),l,u),o!=null)for(c=o.length;c--;)o[c]!=null&&ke(o[c]);l||(c="value",y!==void 0&&(y!==_[c]||k==="progress"&&!y||k==="option"&&y!==g[c])&&I(_,c,y,g[c],!1),c="checked",w!==void 0&&w!==_[c]&&I(_,c,w,g[c],!1))}return _}function ee(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(n){p.__e(n,t)}}function K(_,e,t){var n,r;if(p.unmount&&p.unmount(_),(n=_.ref)&&(n.current&&n.current!==_.__e||ee(n,null,e)),(n=_.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){p.__e(o,e)}n.base=n.__P=null,_.__c=void 0}if(n=_.__k)for(r=0;r<n.length;r++)n[r]&&K(n[r],e,t||typeof _.type!="function");t||_.__e==null||ke(_.__e),_.__=_.__e=_.__d=void 0}function Ie(_,e,t){return this.constructor(_,t)}function Le(_,e,t){var n,r,o,s;p.__&&p.__(_,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,o=[],s=[],Z(e,_=(!n&&t||e).__k=Te(M,null,[_]),r||T,T,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?q.call(e.childNodes):null,o,!n&&t?t:r?r.__e:e.firstChild,n,s),Se(o,_,s)}q=ge.slice,p={__e:function(_,e,t,n){for(var r,o,s;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(_)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(_,n||{}),s=r.__d),s)return r.__E=r}catch(l){_=l}throw _}},be=0,V.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof _=="function"&&(_=_(H({},t),this.props)),_&&H(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),ne(this))},V.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),ne(this))},V.prototype.render=M,P=[],ye=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G=function(_,e){return _.__v.__b-e.__v.__b},B.__r=0;var J,v,R,se,Q=0,He=[],O=[],b=p,le=b.__b,ce=b.__r,ue=b.diffed,ae=b.__c,fe=b.unmount,de=b.__;function Ue(_,e){b.__h&&b.__h(v,_,Q||e),Q=0;var t=v.__H||(v.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:O}),t.__[_]}function L(_){return Q=1,Ve(Me,_)}function Ve(_,e,t){var n=Ue(J++,2);if(n.t=_,!n.__c&&(n.__=[t?t(e):Me(void 0,e),function(l){var u=n.__N?n.__N[0]:n.__[0],c=n.t(u,l);u!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.u)){var r=function(l,u,c){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!o||o.call(this,l,u,c);var i=!1;return f.forEach(function(d){if(d.__N){var a=d.__[0];d.__=d.__N,d.__N=void 0,a!==d.__[0]&&(i=!0)}}),!(!i&&n.__c.props===l)&&(!o||o.call(this,l,u,c))};v.u=!0;var o=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(l,u,c){if(this.__e){var f=o;o=void 0,r(l,u,c),o=f}s&&s.call(this,l,u,c)},v.shouldComponentUpdate=r}return n.__N||n.__}function Oe(){for(var _;_=He.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(j),_.__H.__h.forEach(X),_.__H.__h=[]}catch(e){_.__H.__h=[],b.__e(e,_.__v)}}b.__b=function(_){v=null,le&&le(_)},b.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),de&&de(_,e)},b.__r=function(_){ce&&ce(_),J=0;var e=(v=_.__c).__H;e&&(R===v?(e.__h=[],v.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=O,t.__N=t.i=void 0})):(e.__h.forEach(j),e.__h.forEach(X),e.__h=[],J=0)),R=v},b.diffed=function(_){ue&&ue(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(He.push(e)!==1&&se===b.requestAnimationFrame||((se=b.requestAnimationFrame)||je)(Oe)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==O&&(t.__=t.__V),t.i=void 0,t.__V=O})),R=v=null},b.__c=function(_,e){e.some(function(t){try{t.__h.forEach(j),t.__h=t.__h.filter(function(n){return!n.__||X(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],b.__e(n,t.__v)}}),ae&&ae(_,e)},b.unmount=function(_){fe&&fe(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{j(n)}catch(r){e=r}}),t.__H=void 0,e&&b.__e(e,t.__v))};var he=typeof requestAnimationFrame=="function";function je(_){var e,t=function(){clearTimeout(n),he&&cancelAnimationFrame(e),setTimeout(_)},n=setTimeout(t,100);he&&(e=requestAnimationFrame(t))}function j(_){var e=v,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),v=e}function X(_){var e=v;_.__c=_.__(),v=e}function Me(_,e){return typeof e=="function"?e(_):e}const N=class N{constructor(e,t,n=-e-t){S(this,"cords");if(e+t+n!==0)throw"q + r + s must be 0";this.cords=[e,t,n]}static direction(e){for(;e>5;)e-=6;return N.directions[e]}static round(e){let t=0,n=0,r=0;return e=e.map((o,s)=>{const l=Math.abs((o=Math.round(o))-e[s]);return l>n&&([t,n]=[s,l]),r+=o,o}),e[t]-=r,e}equals(e){return this.cords.every((t,n)=>t===e.cords[n])}add(e){return this.cords.map((t,n)=>t+e[n])}subtract(e){return this.cords.map((t,n)=>t-e[n])}neighbor(e){return this.add(N.direction(e))}len(){return this.cords.reduce((e,t)=>e+Math.abs(t),0)/2}distance(e){return new N(...this.subtract(e)).len()}lerp(e,t){return this.cords.map((n,r)=>n*(1-t)+e[r]*t)}scale(e){return this.cords.map(t=>t*e)}};S(N,"directions",[[1,0,-1],[1,-1,0],[0,-1,1],[-1,0,1],[-1,1,0],[0,1,-1]]);let W=N;class pe extends W{constructor(){super(...arguments);S(this,"number",0);S(this,"resource","desert")}}class me{constructor(e){this.board=e}static makeBoard(e){const t=[];for(let n=0;n<2*e+1;n++)t.push(Array.from({length:2*e+1-Math.abs(e-n)},(r,o)=>new W(o+Math.max(0,e-n),n)));return t}cordsToIndex(e){if(e.reduce((r,o)=>r+o)!==0)throw"q + r + s must be 0";const t=Math.floor(this.board.length/2),n=e[1]<t?e[0]-t+e[1]:e[0];return[e[1],n]}getHex(e,t,n=-e-t){const r=this.cordsToIndex([e,t,n])[1];return this.board[t]&&this.board[t][r]?this.board[t][r]:!1}corners(){const e=Math.floor(this.board.length/2),t=this.board.length-1;return[`${t} 0`,`${t} ${this.board[0].length}`,`${e} ${this.board[e].length-1}`,`0 ${this.board[0].length}`,"0 0",`${e} 0`]}inwardSpiral(e,t=4){let n=[e];const r=(this.board.length-1)/2+1;for(let o=0;o<r;o++)for(let s=0;s<6;s++){let l=e;for(;(l=this.getHex(...l.neighbor(t)))&&n.every(u=>u.cords.some((c,f)=>c!==l.cords[f]));)e=l,n.push(e);t++}return n}}class ve extends me{constructor(t,n,r){super(r);S(this,"pointMapping",{5:[5,2,6,3,8,10,9,12,11,4,8,10,9,4,5,6,3,11],6:[2,5,4,6,3,9,8,11,11,10,6,3,8,4,8,10,11,12,10,5,4,9,5,9,12,3,2,6],7:[2,5,4,6,3,9,8,11,11,10,6,3,8,4,8,10,11,12,10,5,4,9,5,9,12,3,2,6,3,4,6,5,9,8,10]});this.board=r;const o=this.board[Math.floor(this.board.length/2)].length;if(!this.pointMapping[o])return;this.corners().includes(t.join(" "))||(t=[0,0]);const s=this.board[t[0]][t[1]],l=this.inwardSpiral(s,this.corners().indexOf(t.join(" ")));let u=0;for(let c of l)n.every(f=>f.some((i,d)=>i!==this.cordsToIndex(c.cords)[d]))&&this.pointMapping[o][u]&&(c.number=this.pointMapping[o][u++])}static makeBoard(t){const n=[];if(t>6&&t%2===1){for(let o of me.makeBoard(Math.floor(t/2)))n.push(o.map(s=>new pe(...s.cords)));return n}const r=2*t-5;for(let o=0;o<r;o++){const s=(r-1)/2-o;n.push(Array.from({length:t-Math.abs(s)},(l,u)=>new pe(u+Math.max(0,s),o)))}return n}buildSpots(){let t=new Set;for(let r=0;r<this.board.length;r++)for(let o=0;o<this.board[r].length;o++)for(let s=0;s<6;s++){const l=[this.board[r][o].number];for(let c of[s,s+1]){const f=this.getHex(...this.board[r][o].neighbor(c));f&&l.push(f.number)}l.sort((c,f)=>c-f);const u=l.join(" ");t.has(u)||t.add(u)}t=Array.from(t).map(r=>r.split(" ").map(o=>Number(o)));const n=[];for(let r of t){let o="";const s=+(r.reduce((l,u)=>(o+=`${u} `,u?l+6-Math.abs(u-7):0),0)/36*100).toFixed(2);n.push([o.trimEnd(),s])}return n.sort((r,o)=>o[1]-r[1]),n}}var Be=0;function h(_,e,t,n,r,o){var s,l,u={};for(l in e)l=="ref"?s=e[l]:u[l]=e[l];var c={type:_,props:u,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Be,__i:-1,__u:0,__source:r,__self:o};if(typeof _=="function"&&(s=_.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return p.vnode&&p.vnode(c),c}function We({catan:_}){return h("div",{className:"card",children:["The Catan board:",_.field.board.map(e=>{const t=e.map(n=>n.number).join(" ");return h("div",{children:[t,h("br",{})]},t)}),h("br",{}),"Top buildable spots:",_.buildSpots.map(e=>h("div",{children:[e.join(" - "),h("br",{})]},e[0]))]})}class qe{constructor({pointA:e,deserts:t,players:n}){S(this,"field");S(this,"buildSpots");const r=Math.max(Math.ceil(n/2)+3,5);this.field=new ve(e,t,ve.makeBoard(r)),this.buildSpots=this.field.buildSpots()}}function Pe({variable:_,setVariable:e,validator:t}){return h(M,{children:[h("input",{type:"text",value:_.join(" "),onChange:n=>{let r=n.target.value;t&&!t(r)||(r=r.split(" "),r.every(o=>!Number.isNaN(Number(o)))&&e(r.map(o=>Number(o))))}}),h("br",{})]})}function ze({variable:_,setVariable:e}){const t=Array.from({length:_.length},(n,r)=>_[r]);return h(M,{children:t.map((n,r)=>h(Pe,{variable:n,setVariable:o=>{t[r]=o,e(t)}}))})}function Re({variable:_,values:e,handler:t,setVariable:n}){return h("select",{onChange:r=>{const o=Number(r.target.value);t(o),n(o)},children:e.map(r=>h("option",{value:r,selected:r===_,children:r}))})}function Ge({id:_,variable:e,setVariable:t}){return h(M,{children:[h("input",{type:"checkbox",id:_,onClick:n=>{const r=n.target.checked;t(r?[...e,_]:e.filter(o=>o!==_))}}),h("label",{for:_,children:_})]})}function Ke(){const[_,e]=L([0,0]),[t,n]=L([[2,2]]),[r,o]=L(3),[s,l]=L([]),u=new qe({pointA:_,deserts:t,players:r,extensions:s});return h(M,{children:["Point A",h("br",{}),h(Pe,{variable:_,setVariable:e,validator:c=>u.field.corners().includes(c)}),"Desert indexes",h("br",{}),h(ze,{variable:t,setVariable:n}),"Players: ",h(Re,{variable:r,values:[2,3,4,5,6,7,8],setVariable:o,handler:c=>c>4?n(Array(2).fill(t[0])):n(t.slice(0,1))}),h("br",{}),"Extensions:",h("br",{}),["ck","sf"].map(c=>h(Ge,{id:c,variable:s,setVariable:l},c)),h(We,{catan:u})]})}Le(h(Ke,{}),document.getElementById("app"));