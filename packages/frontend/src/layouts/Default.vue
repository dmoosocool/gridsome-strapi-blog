<template>
  <div id="app" class="layout" :class="layoutClass">
    <header class="header" :class="isNotHeaderSticky!==undefined ? '': 'sticky'">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link"><g-image src="/logo.svg" :alt="$static.metadata.siteName" class="logo" /></g-link>
        </div>
        <nav class="right nav">
          <g-link class="nav__link" to="/journal/">Journal</g-link>
          <g-link class="nav__link" to="/about/">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot />
    <footer>
      <div class="container">
        <span>Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['layoutClass', 'isNotHeaderSticky']
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  --color-base: #fff;
  --color-base-1: #f3f3f3;
  --color-contrast: #000;
  --color-contrast-1: #2b2b2b;
  --color-contrast-2: rgba(0, 0, 0, .7);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background .5s ease;
}

* {
  box-sizing: border-box;
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0;
}

.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}

.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header>.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

.logo {
  height: 1.5rem;
}

.home-link {
  text-decoration: none;
}

.nav .nav__link {
  color: inherit;
  font-size: .9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border .15s;
}

.nav .nav__link:last-of-type {
  margin: 0;
}

.nav .nav__link.active, .nav .nav__link:hover {
  border-color: inherit;
}

img {
  max-width: 100%;
}
p {
  line-height: 1.5;
  font-size: 1.15rem;
}
footer {
  font-size: .8rem;
  padding: 6rem 0;
}
</style>
