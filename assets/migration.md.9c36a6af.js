import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a3f83090.js";const g=JSON.parse('{"title":"Migration from @panter/vue-i18next","description":"","frontmatter":{},"headers":[],"relativePath":"migration.md","filePath":"migration.md","lastUpdated":1690070280000}'),p={name:"migration.md"},o=l(`<h1 id="migration-from-panter-vue-i18next" tabindex="-1">Migration from <a href="https://panter.github.io/vue-i18next/" target="_blank" rel="noreferrer">@panter/vue-i18next</a> <a class="header-anchor" href="#migration-from-panter-vue-i18next" aria-label="Permalink to &quot;Migration from [@panter/vue-i18next](https://panter.github.io/vue-i18next/)&quot;">​</a></h1><p>This package has some breaking changes compared to the @panter version.</p><div class="warning custom-block"><p class="custom-block-title">Versions</p><p>These migration notes are for <code>i18next-vue</code> v2.x. When updating to 3.x, also consider the <a href="./migration-v3.html">3.x migration information</a>.</p></div><h2 id="features-no-longer-supported" tabindex="-1">Features no longer supported <a class="header-anchor" href="#features-no-longer-supported" aria-label="Permalink to &quot;Features no longer supported&quot;">​</a></h2><ul><li>The <code>v-t</code> directive has been removed. Please use <code>$t</code> instead.</li><li>The <code>v-waitForT</code> directive has been removed. Use <code>v-if=&quot;$i18next.isInitialized&quot;</code> or hold off mounting Vue until i18next has been initialized:</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">i18nInitialized</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> i18next.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">({ </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* ... */</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(I18NextVue, { i18next });</span></span>
<span class="line"><span style="color:#E1E4E8;">i18nInitialized.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">i18nInitialized</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i18next.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">({ </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* ... */</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(I18NextVue, { i18next });</span></span>
<span class="line"><span style="color:#24292E;">i18nInitialized.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="api-changes" tabindex="-1">API changes <a class="header-anchor" href="#api-changes" aria-label="Permalink to &quot;API changes&quot;">​</a></h2><ul><li><code>i18nOptions</code> are no longer inherited by child components. Each component is independent.</li><li><code>$i18n.i18next</code> is now <code>$i18next</code>. <code>$i18n</code> itself has been removed.</li><li>Initialization changed from</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Vue 2</span></span>
<span class="line"><span style="color:#E1E4E8;">i18next.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">i18n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueI18next</span><span style="color:#E1E4E8;">(i18next);</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  i18n,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Vue 2</span></span>
<span class="line"><span style="color:#24292E;">i18next.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">i18n</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueI18next</span><span style="color:#24292E;">(i18next);</span></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  i18n,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>to</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">i18next.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(</span><span style="color:#6A737D;">/* ... */</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// no &#39;i18n&#39; option anymore</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(I18NextVue, { i18next }); </span><span style="color:#6A737D;">// pass in an object with your i18next instance</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">i18next.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(</span><span style="color:#6A737D;">/* ... */</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// no &#39;i18n&#39; option anymore</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(I18NextVue, { i18next }); </span><span style="color:#6A737D;">// pass in an object with your i18next instance</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><ul><li>Plugin options <ul><li><code>loadComponentNamespace</code> has been removed without replacement.</li><li><code>bindI18n</code> and <code>bindStore</code> have been replaced by <a href="./guide/started.html#plugin-options">the <code>rerenderOn</code> option</a></li></ul></li><li>The <a href="./guide/component-interpolation.html"><code>&lt;i18next&gt;</code> component</a> now uses named slots and the <code>:translation</code> prop. The slot contents can be used as <code>{nameOfSlot}</code> in the translated message. See the example below how to replace the <code>tag</code>, <code>path</code> and <code>place</code> props. These are no longer supported.</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// old @panter/vue-i18next</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- ...some other template code... --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">i18next</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">tag</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;license.goToTermsOfUse&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ name: &#39;LICENSE&#39; }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                     </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                     </span><span style="color:#B392F0;">place</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;termsOfUse&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            {{ $t(&#39;license.termsOfUse&#39;) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">i18next</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// old @panter/vue-i18next</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- ...some other template code... --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">i18next</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">tag</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;license.goToTermsOfUse&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ name: &#39;LICENSE&#39; }&quot;</span></span>
<span class="line"><span style="color:#24292E;">                     </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;link&quot;</span></span>
<span class="line"><span style="color:#24292E;">                     </span><span style="color:#6F42C1;">place</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;termsOfUse&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            {{ $t(&#39;license.termsOfUse&#39;) }}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">i18next</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>to</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// vi18next-vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- ...some other template code... --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#6A737D;">&lt;!-- for a wrapper tag just use normal template syntax --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">i18next</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:translation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$t(&#39;license.goToTermsOfUse&#39;)&quot;</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- translation in the parent --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">termsOfUseLink</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#6A737D;">&lt;!-- will be referenced via {termsOfUseLink} in the localized message --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ name: &#39;LICENSE&#39; }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                         </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;link&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                {{ $t(&quot;license.termsOfUse&quot;) }}</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">i18next</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// vi18next-vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- ...some other template code... --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">&gt;</span><span style="color:#6A737D;">&lt;!-- for a wrapper tag just use normal template syntax --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">i18next</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:translation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$t(&#39;license.goToTermsOfUse&#39;)&quot;</span><span style="color:#24292E;">&gt; </span><span style="color:#6A737D;">&lt;!-- translation in the parent --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">termsOfUseLink</span><span style="color:#24292E;">&gt; </span><span style="color:#6A737D;">&lt;!-- will be referenced via {termsOfUseLink} in the localized message --&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ name: &#39;LICENSE&#39; }&quot;</span></span>
<span class="line"><span style="color:#24292E;">                         </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;link&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                {{ $t(&quot;license.termsOfUse&quot;) }}</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">i18next</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>With translations looking like this:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">en</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">translation</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">license</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">goToTermsOfUse</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Read our {termsOfUseLink}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">termsOfUse</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Terms of Use&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">       }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">en</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">translation</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">license</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">goToTermsOfUse</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Read our {termsOfUseLink}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">termsOfUse</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Terms of Use&#39;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">       }</span></span></code></pre></div><h2 id="other-changes" tabindex="-1">Other changes <a class="header-anchor" href="#other-changes" aria-label="Permalink to &quot;Other changes&quot;">​</a></h2><p>The minimum tested i18next version is now 19.</p>`,19),e=[o];function t(c,r,E,i,y,d){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{g as __pageData,h as default};
