function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",m=f.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??$)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,m?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=t=>t,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+U,k=`<${P}>`,O=document,M=()=>O.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,D=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,F=/"/g,j=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,G=O.createTreeWalker(O,129);function Y(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=N;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(o.lastIndex=h,l=o.exec(s),null!==l);)h=o.lastIndex,o===N?"!--"===l[1]?o=V:void 0!==l[1]?o=D:void 0!==l[2]?(j.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=L):void 0!==l[3]&&(o=L):o===L?">"===l[0]?(o=r??N,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?L:'"'===l[3]?F:z):o===F||o===z?o=L:o===V||o===D?o=N:(o=L,r=void 0);const d=o===L&&t[e+1].startsWith("/>")?" ":"";n+=o===N?s+k:c>=0?(i.push(a),s.slice(0,c)+C+s.slice(c)+U+d):s+U+(-2===c?e:d)}return[Y(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=J(t,e);if(this.el=K.createElement(l,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[n++],s=i.getAttribute(t).split(U),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?et:"?"===o[1]?st:"@"===o[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(U)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(U),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],M()),G.nextNode(),a.push({type:2,index:++r});i.append(t[e],M())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(U,t+1));)a.push({type:7,index:r}),t+=U.length-1}r++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===B)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=R(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);G.currentNode=i;let r=G.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=G.nextNode(),n++)}return G.currentNode=O,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),R(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=X(this,i[s+o],e,o),a===B&&(a=this._$AH[o]),n||=!R(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class it extends tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===B)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(K,Q),(w.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Q(e.insertBefore(M(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const lt=ot.litElementPolyfillSupport;lt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},dt=(t=ht,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function ut(t){return pt({...t,state:!0,attribute:!1})}const ft=o`
  :host {
    display: block;
    transition: transform 0.2s ease;
  }

  :host(:hover) {
    transform: translateY(-2px);
  }

  ha-card {
    overflow: hidden;
    position: relative;
    padding: 0;
    background: var(--card-background-color);
  }

  /* Animated mesh gradient background layer */
  .card-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: radial-gradient(
      ellipse at 20% 30%,
      color-mix(in srgb, var(--uv-color, #4caf50) 18%, transparent),
      transparent 60%
    ),
    radial-gradient(
      ellipse at 80% 70%,
      color-mix(in srgb, var(--uv-color, #4caf50) 10%, transparent),
      transparent 50%
    );
    animation: meshShift 12s ease-in-out infinite alternate;
    pointer-events: none;
  }

  @keyframes meshShift {
    0% {
      filter: hue-rotate(0deg) brightness(1.0);
      opacity: 0.7;
    }
    33% {
      filter: hue-rotate(12deg) brightness(1.04);
      opacity: 0.9;
    }
    66% {
      filter: hue-rotate(-8deg) brightness(0.96);
      opacity: 0.75;
    }
    100% {
      filter: hue-rotate(0deg) brightness(1.0);
      opacity: 0.7;
    }
  }

  /* Card inner layout */
  .card-inner {
    position: relative;
    z-index: 1;
    padding: 16px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  /* Sun arc header */
  .sun-arc-wrapper {
    width: 100%;
    max-width: 280px;
    margin-bottom: 4px;
  }

  .sun-arc {
    width: 100%;
    overflow: visible;
  }

  .sun-track {
    stroke: rgba(255, 255, 255, 0.15);
    stroke-width: 1.5;
    fill: none;
    stroke-linecap: round;
  }

  .sun-dot {
    fill: #FFC107;
    filter: drop-shadow(0 0 4px #FFC107) drop-shadow(0 0 8px rgba(255, 193, 7, 0.5));
    animation: sunFloat 3s ease-in-out infinite;
  }

  @keyframes sunFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  /* Card name */
  .card-name {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
    align-self: flex-start;
    width: 100%;
    text-align: center;
  }

  /* Orb container (holds ripple rings + orb) */
  .orb-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    margin: 8px 0 16px;
  }

  /* Ripple rings */
  .ripple-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid var(--uv-color-alpha, rgba(76, 175, 80, 0.3));
    width: 100%;
    height: 100%;
    animation: rippleOut 3s ease-out infinite;
    pointer-events: none;
  }

  .ripple-ring:nth-child(1) {
    animation-delay: 0s;
  }

  .ripple-ring:nth-child(2) {
    animation-delay: 1s;
  }

  .ripple-ring:nth-child(3) {
    animation-delay: 2s;
  }

  @keyframes rippleOut {
    0% {
      transform: scale(0.85);
      opacity: 0.7;
    }
    100% {
      transform: scale(2.0);
      opacity: 0;
    }
  }

  /* The orb itself */
  .orb {
    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background: radial-gradient(
      circle at 38% 35%,
      color-mix(in srgb, var(--uv-color, #4caf50) 40%, white 60%),
      color-mix(in srgb, var(--uv-color, #4caf50) 85%, black 15%)
    );
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--uv-color, #4caf50) 60%, transparent 40%),
      0 0 24px 6px var(--uv-color-alpha, rgba(76, 175, 80, 0.35)),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
    animation: glowPulse 4s ease-in-out infinite;
    z-index: 1;
    cursor: default;
    user-select: none;
  }

  .orb.orb-entering {
    animation: orbScaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, glowPulse 4s ease-in-out 0.6s infinite;
  }

  .orb.orb-pulsing {
    animation: brightnessPulse 0.5s ease-out forwards, glowPulse 4s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow:
        0 0 0 2px color-mix(in srgb, var(--uv-color, #4caf50) 60%, transparent 40%),
        0 0 24px 6px var(--uv-color-alpha, rgba(76, 175, 80, 0.35)),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
    50% {
      box-shadow:
        0 0 0 2px color-mix(in srgb, var(--uv-color, #4caf50) 60%, transparent 40%),
        0 0 48px 16px var(--uv-color-alpha, rgba(76, 175, 80, 0.35)),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
  }

  @keyframes orbScaleIn {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
    to {
      transform: scale(1.0);
      opacity: 1;
    }
  }

  @keyframes brightnessPulse {
    0% { filter: brightness(1); }
    30% { filter: brightness(1.5); }
    100% { filter: brightness(1); }
  }

  /* UV number inside orb */
  .uv-number {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  .uv-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  /* Stats row */
  .stats-row {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stat-chip {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    min-width: 72px;
    flex: 1;
    max-width: 120px;
  }

  .stat-label {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  .stat-value {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .stat-value.highlight {
    color: var(--uv-color, var(--primary-color));
  }

  /* Error state */
  .error-state {
    justify-content: center;
    padding: 24px 20px;
    gap: 6px;
    min-height: 120px;
  }

  .error-icon {
    font-size: 1.8rem;
    color: var(--error-color, #f44336);
    line-height: 1;
  }

  .error-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .error-body {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    font-family: monospace;
  }
`,gt={LOW:{label:"Low",min:0,max:2,color:"#4CAF50"},MODERATE:{label:"Moderate",min:3,max:5,color:"#FFC107"},HIGH:{label:"High",min:6,max:7,color:"#FF9800"},VERY_HIGH:{label:"Very High",min:8,max:10,color:"#F44336"},EXTREME:{label:"Extreme",min:11,max:1/0,color:"#9C27B0"}};function _t(t){const e=Math.max(0,t);return e<=2?gt.LOW:e<=5?gt.MODERATE:e<=7?gt.HIGH:e<=10?gt.VERY_HIGH:gt.EXTREME}function mt(t,e,s){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:s}))}let vt=class extends at{setConfig(t){this._config=t}_entityChanged(t,e){if(!this._config)return;const s=t.detail.value;mt(this,"config-changed",{config:{...this._config,[e]:s||void 0}})}_toggleChanged(t,e){if(!this._config)return;const s=t.target.checked;mt(this,"config-changed",{config:{...this._config,[e]:s}})}_nameChanged(t){if(!this._config)return;const e=t.detail.value;mt(this,"config-changed",{config:{...this._config,name:e||void 0}})}render(){if(!this.hass||!this._config)return I``;const t=this._config;return I`
      <div class="editor-row">
        <div class="section-title">Required</div>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${t.uv_index_entity??""}"
          .includeDomains="${["sensor"]}"
          label="UV Index Entity"
          @value-changed="${t=>this._entityChanged(t,"uv_index_entity")}"
        ></ha-entity-picker>

        <div class="section-title">Optional Stats</div>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${t.max_uv_entity??""}"
          .includeDomains="${["sensor"]}"
          label="Max UV Today Entity"
          @value-changed="${t=>this._entityChanged(t,"max_uv_entity")}"
        ></ha-entity-picker>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${t.safe_exposure_entity??""}"
          .includeDomains="${["sensor"]}"
          label="Safe Exposure Time Entity"
          @value-changed="${t=>this._entityChanged(t,"safe_exposure_entity")}"
        ></ha-entity-picker>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${t.protection_from_entity??""}"
          .includeDomains="${["sensor"]}"
          label="Protection From Entity"
          @value-changed="${t=>this._entityChanged(t,"protection_from_entity")}"
        ></ha-entity-picker>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${t.protection_till_entity??""}"
          .includeDomains="${["sensor"]}"
          label="Protection Till Entity"
          @value-changed="${t=>this._entityChanged(t,"protection_till_entity")}"
        ></ha-entity-picker>

        <div class="section-title">Display</div>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${t.uv_level_entity??""}"
          .includeDomains="${["sensor"]}"
          label="UV Level Label Entity (optional)"
          @value-changed="${t=>this._entityChanged(t,"uv_level_entity")}"
        ></ha-entity-picker>

        <ha-textfield
          label="Card Name (optional)"
          .value="${t.name??""}"
          @value-changed="${this._nameChanged}"
        ></ha-textfield>

        <ha-formfield label="Show Sun Arc">
          <ha-switch
            .checked="${!1!==t.show_sun_arc}"
            @change="${t=>this._toggleChanged(t,"show_sun_arc")}"
          ></ha-switch>
        </ha-formfield>
      </div>
    `}};vt.styles=o`
    .editor-row {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 0;
    }

    .section-title {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
      margin: 8px 0 4px;
    }

    ha-entity-picker,
    ha-textfield {
      width: 100%;
    }

    ha-formfield {
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
  `,t([pt({attribute:!1})],vt.prototype,"hass",void 0),t([ut()],vt.prototype,"_config",void 0),vt=t([ct("uv-card-editor")],vt);let yt=class extends at{constructor(){super(...arguments),this._displayedUV=0,this._targetUV=0,this._countUpRaf=0,this._isFirstRender=!0,this._lastColor=""}static getGridOptions(){return{grid_rows:4,grid_columns:6,grid_min_rows:3,grid_max_rows:8,grid_min_columns:3,grid_max_columns:12}}static getConfigElement(){return document.createElement("uv-card-editor")}static getStubConfig(t){return{type:"custom:uv-card",uv_index_entity:Object.keys(t.states).find(t=>t.startsWith("sensor.")&&(t.includes("uv_index")||t.includes("current_uv")))??"sensor.current_uv_index",show_sun_arc:!0}}setConfig(t){if(!t.uv_index_entity)throw new Error("uv_index_entity is required");this._config={show_sun_arc:!0,...t}}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this._countUpRaf)}updated(t){super.updated(t);const e=_t(this._targetUV).color;if(e!==this._lastColor){this._lastColor=e;const t=Math.round(71.4).toString(16).padStart(2,"0");this.style.setProperty("--uv-color",e),this.style.setProperty("--uv-color-alpha",e+t)}if(t.has("hass")&&this._config){const t=this._getUVFromHass();if(t!==this._targetUV){const e=this._targetUV;if(this._targetUV=t,this._isFirstRender){this._isFirstRender=!1;const e=this.shadowRoot?.querySelector(".orb");e&&(e.classList.add("orb-entering"),e.addEventListener("animationend",()=>e.classList.remove("orb-entering"),{once:!0})),this._triggerCountUp(0,t,!1)}else this._triggerCountUp(e,t,!0)}}}_getUVFromHass(){if(!this.hass||!this._config?.uv_index_entity)return 0;const t=this.hass.states[this._config.uv_index_entity]?.state,e=parseFloat(t??"0");return isNaN(e)?0:e}_triggerCountUp(t,e,s){cancelAnimationFrame(this._countUpRaf);const i=performance.now(),r=n=>{const o=Math.min((n-i)/700,1),a=1-Math.pow(1-o,3);this._displayedUV=t+(e-t)*a,o<1?this._countUpRaf=requestAnimationFrame(r):(this._displayedUV=e,s&&this._triggerBrightnessPulse())};this._countUpRaf=requestAnimationFrame(r)}_triggerBrightnessPulse(){const t=this.shadowRoot?.querySelector(".orb");t&&(t.classList.remove("orb-pulsing"),t.offsetWidth,t.classList.add("orb-pulsing"),t.addEventListener("animationend",()=>t.classList.remove("orb-pulsing"),{once:!0}))}_renderSunArc(){if(!this._config?.show_sun_arc)return"";const t=this.hass?.states["sun.sun"];if(!t)return"";let e=.5;try{const s="above_horizon"===t.state,i=new Date(t.attributes.next_rising),r=new Date(t.attributes.next_setting),n=s?new Date(i.getTime()-864e5):i,o=s?r:new Date(r.getTime()-864e5),a=Date.now(),l=o.getTime()-n.getTime(),c=a-n.getTime();e=Math.max(0,Math.min(1,c/l))}catch{}const s=Math.PI-e*Math.PI,i=(100+86*Math.cos(s)).toFixed(2),r=(52-86*Math.sin(s)).toFixed(2);return I`
      <div class="sun-arc-wrapper">
        <svg
          class="sun-arc"
          viewBox="0 0 200 58"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path class="sun-track" d="M 14 52 A 86 86 0 0 1 186 52" />
          <circle class="sun-dot" cx="${i}" cy="${r}" r="7" />
        </svg>
      </div>
    `}_deriveStats(){const t=this.hass,e=this._config,s=_t(this._targetUV),i=e.max_uv_entity?t?.states[e.max_uv_entity]?.state??"—":"—",r=e.safe_exposure_entity?t?.states[e.safe_exposure_entity]?.state??"—":"—",n=e.protection_from_entity?t?.states[e.protection_from_entity]?.state??"":"",o=e.protection_till_entity?t?.states[e.protection_till_entity]?.state??"":"";return{maxUV:i,safeExposure:r,protWindow:n&&o?`${n} – ${o}`:n||o||"—",uvLevel:s}}render(){if(!this._config||!this.hass)return I`<ha-card><div class="card-inner"></div></ha-card>`;const t=this.hass.states[this._config.uv_index_entity];if(!t)return I`
        <ha-card>
          <div class="card-inner error-state">
            <span class="error-icon">⚠</span>
            <span class="error-title">Entity not found</span>
            <span class="error-body">${this._config.uv_index_entity}</span>
          </div>
        </ha-card>
      `;if("unavailable"===t.state||"unknown"===t.state)return I`
        <ha-card>
          <div class="card-inner error-state">
            <span class="error-icon">⚠</span>
            <span class="error-title">UV data unavailable</span>
            <span class="error-body">${t.state}</span>
          </div>
        </ha-card>
      `;const{maxUV:e,safeExposure:s,protWindow:i,uvLevel:r}=this._deriveStats(),n=this._displayedUV.toFixed(1),o=this._config.name??"";return I`
      <ha-card>
        <div class="card-bg" aria-hidden="true"></div>
        <div class="card-inner">
          ${o?I`<div class="card-name">${o}</div>`:""}
          ${this._renderSunArc()}
          <div class="orb-container">
            <div class="ripple-ring"></div>
            <div class="ripple-ring"></div>
            <div class="ripple-ring"></div>
            <div
              class="orb"
              role="img"
              aria-label="UV index ${n}, ${r.label}"
            >
              <span class="uv-number">${n}</span>
              <span class="uv-label">${r.label}</span>
            </div>
          </div>
          <div class="stats-row">
            ${"—"!==e?I`
                  <div class="stat-chip">
                    <span class="stat-label">Max Today</span>
                    <span class="stat-value highlight">${e}</span>
                  </div>
                `:""}
            ${"—"!==s?I`
                  <div class="stat-chip">
                    <span class="stat-label">Safe Time</span>
                    <span class="stat-value">${s} min</span>
                  </div>
                `:""}
            ${"—"!==i?I`
                  <div class="stat-chip">
                    <span class="stat-label">Protection</span>
                    <span class="stat-value">${i}</span>
                  </div>
                `:""}
          </div>
        </div>
      </ha-card>
    `}};yt.styles=ft,t([pt({attribute:!1})],yt.prototype,"hass",void 0),t([ut()],yt.prototype,"_config",void 0),t([ut()],yt.prototype,"_displayedUV",void 0),yt=t([ct("uv-card")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"uv-card",name:"UV Card",description:"Neural Orb UV index card powered by OpenUV",preview:!0,documentationURL:"https://github.com/strhwste/UV-Card"});export{yt as UVCard};
