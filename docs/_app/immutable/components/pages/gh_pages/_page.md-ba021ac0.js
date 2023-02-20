import{S as ia,i as ga,s as da,k as t,x as ma,a as l,q as $,l as p,m as o,y as ha,h as e,c as r,r as C,n as u,b as va,G as a,z as ya,C as fa,f as _a,t as ba,A as wa}from"../../../chunks/index-f05a2fe5.js";import{T as ja}from"../../../chunks/TOC-2a526c9d.js";function Ea(T){let c,g,i,x,s,b,L,M,w,I,B,d,aa='<code class="language-bash"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @sveltejs/adapter-static</code>',D,m,sa=`<code class="language-js"><span class="token comment">/* svelte.config.js */</span>
<span class="token keyword">import</span> adapter <span class="token keyword">from</span> <span class="token string">"@sveltejs/adapter-static"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dev <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'dev'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/** @type &#123;import('@sveltejs/kit').Config&#125; */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">base</span><span class="token operator">:</span> dev <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> <span class="token string">'/pwa_test'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token comment">/* build to &#96;docs&#96; for gh-pages */</span>
      <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token string">"docs"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token string">"docs"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">"app.html"</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code>`,A,h,na=`<code class="language-js"><span class="token comment">/* adapter options defaults */</span>
<span class="token literal-property property">adapter</span><span class="token operator">:</span> <span class="token function">adapter</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token string">'build'</span><span class="token punctuation">,</span> <span class="token comment">/* output folder */</span>
  <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token string">'build'</span><span class="token punctuation">,</span> <span class="token comment">/* output folder */</span>
  <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">/* 404 fallback page */</span>
  <span class="token literal-property property">precompress</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">/* gzip files*/</span>
  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">/* Check if whole app is accessible */</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`,G,S,P,V,j,q,z,v,ta=`<code class="language-js"><span class="token comment">// +layout.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> prerender <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></code>`,O,F,R,J,E,K,N,y,pa=`<code class="language-js"><span class="token comment">// svelte.config.cjs</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">kit</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">base</span><span class="token operator">:</span> dev <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> <span class="token string">'/pwa_test'</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,Q,f,ea=`<code class="language-svelte"><span class="token comment">&lt;!-- all relative paths prefaces with &#123; base &#125; --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> base <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$app/paths'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'About'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span><span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>title<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>      
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href='</span><span class="token language-javascript"><span class="token punctuation">&#123;</span> base <span class="token punctuation">&#125;</span></span>/<span class="token attr-name">'</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span> base <span class="token punctuation">&#125;</span></span>/<span class="token attr-name">pwa.svg"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
    <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">routes </span><span class="token keyword">as</span> <span class="token language-javascript">route<span class="token punctuation">&#125;</span></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>route<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>base<span class="token punctuation">&#125;</span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>route<span class="token punctuation">.</span>path<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>route<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></code>`,H;return i=new ja({props:{links:T[0]}}),{c(){c=t("div"),g=t("div"),ma(i.$$.fragment),x=l(),s=t("div"),b=t("h1"),L=$("Github Pages"),M=l(),w=t("h2"),I=$("Install and Configure adapter-static"),B=l(),d=t("pre"),D=l(),m=t("pre"),A=l(),h=t("pre"),G=l(),S=t("br"),P=t("br"),V=l(),j=t("h2"),q=$("Pre-Render pages"),z=l(),v=t("pre"),O=l(),F=t("br"),R=t("br"),J=l(),E=t("h2"),K=$("Configure Relative Paths"),N=l(),y=t("pre"),Q=l(),f=t("pre"),this.h()},l(k){c=p(k,"DIV",{class:!0});var _=o(c);g=p(_,"DIV",{class:!0});var U=o(g);ha(i.$$.fragment,U),U.forEach(e),x=r(_),s=p(_,"DIV",{class:!0});var n=o(s);b=p(n,"H1",{});var W=o(b);L=C(W,"Github Pages"),W.forEach(e),M=r(n),w=p(n,"H2",{});var X=o(w);I=C(X,"Install and Configure adapter-static"),X.forEach(e),B=r(n),d=p(n,"PRE",{class:!0});var oa=o(d);oa.forEach(e),D=r(n),m=p(n,"PRE",{class:!0});var ca=o(m);ca.forEach(e),A=r(n),h=p(n,"PRE",{class:!0});var la=o(h);la.forEach(e),G=r(n),S=p(n,"BR",{}),P=p(n,"BR",{id:!0}),V=r(n),j=p(n,"H2",{});var Y=o(j);q=C(Y,"Pre-Render pages"),Y.forEach(e),z=r(n),v=p(n,"PRE",{class:!0});var ra=o(v);ra.forEach(e),O=r(n),F=p(n,"BR",{}),R=p(n,"BR",{id:!0}),J=r(n),E=p(n,"H2",{});var Z=o(E);K=C(Z,"Configure Relative Paths"),Z.forEach(e),N=r(n),y=p(n,"PRE",{class:!0});var ua=o(y);ua.forEach(e),Q=r(n),f=p(n,"PRE",{class:!0});var ka=o(f);ka.forEach(e),n.forEach(e),_.forEach(e),this.h()},h(){u(g,"class","toc"),u(d,"class","language-bash"),u(m,"class","language-js"),u(h,"class","language-js"),u(P,"id","prerender"),u(v,"class","language-js"),u(R,"id","paths"),u(y,"class","language-js"),u(f,"class","language-svelte"),u(s,"class","content"),u(c,"class","page")},m(k,_){va(k,c,_),a(c,g),ya(i,g,null),a(c,x),a(c,s),a(s,b),a(b,L),a(s,M),a(s,w),a(w,I),a(s,B),a(s,d),d.innerHTML=aa,a(s,D),a(s,m),m.innerHTML=sa,a(s,A),a(s,h),h.innerHTML=na,a(s,G),a(s,S),a(s,P),a(s,V),a(s,j),a(j,q),a(s,z),a(s,v),v.innerHTML=ta,a(s,O),a(s,F),a(s,R),a(s,J),a(s,E),a(E,K),a(s,N),a(s,y),y.innerHTML=pa,a(s,Q),a(s,f),f.innerHTML=ea,H=!0},p:fa,i(k){H||(_a(i.$$.fragment,k),H=!0)},o(k){ba(i.$$.fragment,k),H=!1},d(k){k&&e(c),wa(i)}}}function Pa(T){return[[{name:"Adapter Static",path:"#top"},{name:"Pre-Render Pages",path:"#prerender"},{name:"Configure Paths",path:"#paths"}]]}class $a extends ia{constructor(c){super(),ga(this,c,Pa,Ea,da,{})}}export{$a as default};