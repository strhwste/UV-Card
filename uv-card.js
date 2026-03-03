function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,_=u.trustedTypes,f=_?_.emptyScript:"",m=u.reactiveElementPolyfillSupport,g=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??y)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[g("elementProperties")]=new Map,b[g("finalized")]=new Map,m?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,w=t=>t,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+C,P=`<${U}>`,M=document,O=()=>M.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,H="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,V=/>/g,L=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,F=/"/g,j=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),I=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,W=M.createTreeWalker(M,129);function G(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const X=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=k;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,l=0;for(;l<s.length&&(o.lastIndex=l,c=o.exec(s),null!==c);)l=o.lastIndex,o===k?"!--"===c[1]?o=N:void 0!==c[1]?o=V:void 0!==c[2]?(j.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=L):void 0!==c[3]&&(o=L):o===L?">"===c[0]?(o=r??k,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?L:'"'===c[3]?F:z):o===F||o===z?o=L:o===N||o===V?o=k:(o=L,r=void 0);const d=o===L&&t[e+1].startsWith("/>")?" ":"";n+=o===k?s+P:h>=0?(i.push(a),s.slice(0,h)+S+s.slice(h)+C+d):s+C+(-2===h?e:d)}return[G(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,h]=X(t,e);if(this.el=Y.createElement(c,s),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=W.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=h[n++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Q}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(j.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),W.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){if(e===I)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=R(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=J(t,r._$AS(t,e.values),r,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);W.currentNode=i;let r=W.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Z(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=W.nextNode(),n++)}return W.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),R(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new K(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Z(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=J(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=J(this,i[s+o],e,o),a===I&&(a=this._$AH[o]),n||=!R(a)||a!==this._$AH[o],a===B?t=B:t!==B&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class st extends Q{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??B)===I)return;const s=this._$AH,i=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(Y,Z),(x.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new Z(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},lt=(t=ht,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function dt(t){return(e,s)=>"object"==typeof s?lt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return dt({...t,state:!0,attribute:!1})}const ut=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
  :host {
    display: block;
  }

  ha-card {
    position: relative;
    padding: 0;
    background: var(--card-background-color);
    overflow: visible;
  }

  /* Subtle UV-tinted ambient glow at top of card */
  .card-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: var(--ha-card-border-radius, 12px);
    overflow: hidden;
    background: radial-gradient(
      ellipse at 50% 30%,
      color-mix(in srgb, var(--uv-color, #4caf50) 12%, transparent),
      transparent 70%
    );
    pointer-events: none;
  }

  /* Card inner layout */
  .card-inner {
    position: relative;
    z-index: 1;
    padding: 16px 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  /* ── Sun arc ── */
  .sun-arc-wrapper {
    width: 100%;
    max-width: 200px;
  }

  .sun-arc {
    width: 100%;
    overflow: visible;
  }

  .sun-track {
    stroke: var(--divider-color, rgba(255, 255, 255, 0.12));
    stroke-width: 1;
    fill: none;
    stroke-dasharray: 3 3;
    stroke-linecap: round;
  }

  .sun-dot {
    fill: #FFC107;
    filter: drop-shadow(0 0 4px rgba(255, 193, 7, 0.7))
            drop-shadow(0 0 8px rgba(255, 193, 7, 0.3));
  }

  .sun-shadow {
    fill: rgba(0, 0, 0, 0.15);
  }

  /* Card name */
  .card-name {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    text-align: center;
  }

  /* ── Orb container (holds glow + shadow + orb) ── */
  .orb-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 150px;
    margin: 0 0 4px;
  }

  /* Soft colored glow behind the orb */
  .orb-glow {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: var(--uv-color, #4caf50);
    opacity: 0.2;
    filter: blur(36px);
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.6s ease;
  }

  /* Sun-driven shadow beneath the orb */
  .orb-shadow {
    position: absolute;
    bottom: 4px;
    width: 70px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgba(0, 0, 0, 0.35),
      transparent 70%
    );
    transform:
      translateX(var(--shadow-x, 0px))
      translateY(var(--shadow-y, 0px))
      scaleX(var(--shadow-scale-x, 1));
    opacity: var(--shadow-opacity, 0.15);
    z-index: 0;
    pointer-events: none;
    transition: transform 2s ease, opacity 2s ease;
  }

  /* ── The orb ── */
  .orb {
    position: relative;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    /* Two-layer gradient: specular highlight + sphere shading */
    background:
      radial-gradient(
        circle at 34% 28%,
        rgba(255, 255, 255, 0.35),
        transparent 40%
      ),
      radial-gradient(
        circle at 50% 50%,
        color-mix(in srgb, var(--uv-color, #4caf50) 50%, white 50%),
        color-mix(in srgb, var(--uv-color, #4caf50) 95%, black 5%)
      );
    box-shadow:
      0 4px 20px color-mix(in srgb, var(--uv-color, #4caf50) 35%, transparent),
      0 0 0 1px color-mix(in srgb, var(--uv-color, #4caf50) 12%, transparent),
      inset 0 -2px 6px rgba(0, 0, 0, 0.08),
      inset 0 2px 0 rgba(255, 255, 255, 0.12);
    z-index: 1;
    cursor: default;
    user-select: none;
    transition: box-shadow 0.6s ease, background 0.6s ease;
  }

  .orb.orb-entering {
    animation: orbIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .orb.orb-pulsing {
    animation: pulse 0.4s ease-out;
  }

  @keyframes orbIn {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% { filter: brightness(1); }
    30% { filter: brightness(1.25); }
    100% { filter: brightness(1); }
  }

  /* UV number inside orb */
  .uv-number {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  .uv-label {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  }

  /* ── Stats row ── */
  .stats-row {
    display: flex;
    gap: 16px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 60px;
  }

  .stat-label {
    font-size: 0.58rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  .stat-value {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .stat-value.highlight {
    color: var(--uv-color, var(--primary-color));
  }

  /* ── Error state ── */
  .error-state {
    justify-content: center;
    padding: 24px 16px;
    gap: 6px;
    min-height: 100px;
  }

  .error-icon {
    font-size: 1.5rem;
    color: var(--error-color, #f44336);
    line-height: 1;
  }

  .error-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .error-body {
    font-size: 0.7rem;
    color: var(--secondary-text-color);
    font-family: monospace;
  }
`,_t={LOW:{label:"Low",min:0,max:2,color:"#4CAF50"},MODERATE:{label:"Moderate",min:3,max:5,color:"#FFC107"},HIGH:{label:"High",min:6,max:7,color:"#FF9800"},VERY_HIGH:{label:"Very High",min:8,max:10,color:"#F44336"},EXTREME:{label:"Extreme",min:11,max:1/0,color:"#9C27B0"}};function ft(t){const e=Math.max(0,t);return e<=2?_t.LOW:e<=5?_t.MODERATE:e<=7?_t.HIGH:e<=10?_t.VERY_HIGH:_t.EXTREME}const mt={uv_index_entity:"UV Index Entity",name:"Card Name",max_uv_entity:"Max UV Today",safe_exposure_entity:"Safe Exposure Time",protection_from_entity:"Protection Start",protection_till_entity:"Protection End",uv_level_entity:"UV Level Label Entity",show_sun_arc:"Show Sun Arc"},gt=[{name:"uv_index_entity",required:!0,selector:{entity:{domain:"sensor"}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"max_uv_entity",selector:{entity:{domain:"sensor"}}},{name:"safe_exposure_entity",selector:{entity:{domain:"sensor"}}},{name:"protection_from_entity",selector:{entity:{domain:"sensor"}}},{name:"protection_till_entity",selector:{entity:{domain:"sensor"}}}]},{name:"uv_level_entity",selector:{entity:{domain:"sensor"}}},{name:"show_sun_arc",selector:{boolean:{}}}];let vt=class extends ot{constructor(){super(...arguments),this._computeLabel=t=>mt[t.name]??t.name}setConfig(t){this._config=t}_valueChanged(t){const e=t.detail.value;this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:e}}))}render(){return this.hass&&this._config?D`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${gt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:D``}};t([dt({attribute:!1})],vt.prototype,"hass",void 0),t([pt()],vt.prototype,"_config",void 0),vt=t([ct("uv-card-editor")],vt);let yt=class extends ot{constructor(){super(...arguments),this._displayedUV=0,this._targetUV=0,this._countUpRaf=0,this._isFirstRender=!0,this._lastColor=""}static getGridOptions(){return{grid_rows:4,grid_columns:6,grid_min_rows:3,grid_max_rows:8,grid_min_columns:3,grid_max_columns:12}}static getConfigElement(){return document.createElement("uv-card-editor")}static getStubConfig(t){return{type:"custom:uv-card",uv_index_entity:Object.keys(t.states).find(t=>t.startsWith("sensor.")&&(t.includes("uv_index")||t.includes("current_uv")))??"sensor.current_uv_index",show_sun_arc:!0}}setConfig(t){if(!t.uv_index_entity)throw new Error("uv_index_entity is required");this._config={show_sun_arc:!0,...t}}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this._countUpRaf)}updated(t){super.updated(t);const e=ft(this._targetUV).color;if(e!==this._lastColor&&(this._lastColor=e,this.style.setProperty("--uv-color",e)),t.has("hass")&&this.hass&&this._updateSunShadow(),t.has("hass")&&this._config){const t=this._getUVFromHass();if(t!==this._targetUV){const e=this._targetUV;if(this._targetUV=t,this._isFirstRender){this._isFirstRender=!1;const e=this.shadowRoot?.querySelector(".orb");e&&(e.classList.add("orb-entering"),e.addEventListener("animationend",()=>e.classList.remove("orb-entering"),{once:!0})),this._triggerCountUp(0,t,!1)}else this._triggerCountUp(e,t,!0)}}}_getUVFromHass(){if(!this.hass||!this._config?.uv_index_entity)return 0;const t=this.hass.states[this._config.uv_index_entity]?.state,e=parseFloat(t??"0");return isNaN(e)?0:e}_triggerCountUp(t,e,s){cancelAnimationFrame(this._countUpRaf);const i=performance.now(),r=n=>{const o=Math.min((n-i)/700,1),a=1-Math.pow(1-o,3);this._displayedUV=t+(e-t)*a,o<1?this._countUpRaf=requestAnimationFrame(r):(this._displayedUV=e,s&&this._triggerBrightnessPulse())};this._countUpRaf=requestAnimationFrame(r)}_triggerBrightnessPulse(){const t=this.shadowRoot?.querySelector(".orb");t&&(t.classList.remove("orb-pulsing"),t.offsetWidth,t.classList.add("orb-pulsing"),t.addEventListener("animationend",()=>t.classList.remove("orb-pulsing"),{once:!0}))}_updateSunShadow(){const t=this.hass?.states["sun.sun"];if(!t)return;const e=parseFloat(t.attributes.elevation)||0,s=parseFloat(t.attributes.azimuth)||180;if(e<=0)return void this.style.setProperty("--shadow-opacity","0");const i=s*Math.PI/180,r=Math.min(e,90)/90,n=1-r,o=-Math.sin(i)*n*18,a=Math.cos(i)*n*6,c=1+.7*n,h=Math.min(.35,.45*r);this.style.setProperty("--shadow-x",`${o.toFixed(1)}px`),this.style.setProperty("--shadow-y",`${a.toFixed(1)}px`),this.style.setProperty("--shadow-scale-x",c.toFixed(2)),this.style.setProperty("--shadow-opacity",h.toFixed(2))}_renderSunArc(){if(!this._config?.show_sun_arc)return"";const t=this.hass?.states["sun.sun"];if(!t)return"";let e=.5;try{const s="above_horizon"===t.state,i=new Date(t.attributes.next_rising),r=new Date(t.attributes.next_setting),n=s?new Date(i.getTime()-864e5):i,o=s?r:new Date(r.getTime()-864e5),a=Date.now(),c=o.getTime()-n.getTime(),h=a-n.getTime();e=Math.max(0,Math.min(1,h/c))}catch{}const s=Math.PI-e*Math.PI,i=(100+86*Math.cos(s)).toFixed(2),r=(52-86*Math.sin(s)).toFixed(2),n=Math.sin(s),o=(3+8*(1-n)).toFixed(1),a=(.06+.14*n).toFixed(2);return D`
      <div class="sun-arc-wrapper">
        <svg
          class="sun-arc"
          viewBox="0 0 200 60"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path class="sun-track" d="M 14 52 A 86 86 0 0 1 186 52" />
          <ellipse
            class="sun-shadow"
            cx="${i}"
            cy="55"
            rx="${o}"
            ry="1.5"
            opacity="${a}"
          />
          <circle class="sun-dot" cx="${i}" cy="${r}" r="5" />
        </svg>
      </div>
    `}_deriveStats(){const t=this.hass,e=this._config,s=ft(this._targetUV),i=e.max_uv_entity?t?.states[e.max_uv_entity]?.state??"—":"—",r=e.safe_exposure_entity?t?.states[e.safe_exposure_entity]?.state??"—":"—",n=e.protection_from_entity?t?.states[e.protection_from_entity]?.state??"":"",o=e.protection_till_entity?t?.states[e.protection_till_entity]?.state??"":"";return{maxUV:i,safeExposure:r,protWindow:n&&o?`${n} – ${o}`:n||o||"—",uvLevel:s}}render(){if(!this._config||!this.hass)return D`<ha-card><div class="card-inner"></div></ha-card>`;const t=this.hass.states[this._config.uv_index_entity];if(!t)return D`
        <ha-card>
          <div class="card-inner error-state">
            <span class="error-icon">⚠</span>
            <span class="error-title">Entity not found</span>
            <span class="error-body">${this._config.uv_index_entity}</span>
          </div>
        </ha-card>
      `;if("unavailable"===t.state||"unknown"===t.state)return D`
        <ha-card>
          <div class="card-inner error-state">
            <span class="error-icon">⚠</span>
            <span class="error-title">UV data unavailable</span>
            <span class="error-body">${t.state}</span>
          </div>
        </ha-card>
      `;const{maxUV:e,safeExposure:s,protWindow:i,uvLevel:r}=this._deriveStats(),n=this._displayedUV.toFixed(1),o=this._config.name??"";return D`
      <ha-card>
        <div class="card-bg" aria-hidden="true"></div>
        <div class="card-inner">
          ${o?D`<div class="card-name">${o}</div>`:""}
          ${this._renderSunArc()}
          <div class="orb-container">
            <div class="orb-glow" aria-hidden="true"></div>
            <div class="orb-shadow" aria-hidden="true"></div>
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
            ${"—"!==e?D`
                  <div class="stat-item">
                    <span class="stat-label">Max Today</span>
                    <span class="stat-value highlight">${e}</span>
                  </div>
                `:""}
            ${"—"!==s?D`
                  <div class="stat-item">
                    <span class="stat-label">Safe Time</span>
                    <span class="stat-value">${s} min</span>
                  </div>
                `:""}
            ${"—"!==i?D`
                  <div class="stat-item">
                    <span class="stat-label">Protection</span>
                    <span class="stat-value">${i}</span>
                  </div>
                `:""}
          </div>
        </div>
      </ha-card>
    `}};yt.styles=ut,t([dt({attribute:!1})],yt.prototype,"hass",void 0),t([pt()],yt.prototype,"_config",void 0),t([pt()],yt.prototype,"_displayedUV",void 0),yt=t([ct("uv-card")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"uv-card",name:"UV Card",description:"Neural Orb UV index card powered by OpenUV",preview:!0,documentationURL:"https://github.com/strhwste/UV-Card"});export{yt as UVCard};
