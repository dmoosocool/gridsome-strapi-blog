<template>
  <div id="app" class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link"><g-image src="/logo.svg" :alt="$static.metadata.siteName" class="logo" /></g-link>
        </div>
        <nav class="right nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

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
</style>
