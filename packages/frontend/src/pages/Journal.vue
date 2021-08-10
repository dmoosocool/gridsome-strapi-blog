<template>
  <Layout layoutClass="sticky-header">
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">{{$static.metadata.journalHero.title}}</h1>
      </div>
    </div>

    <g-link class="journal-post" :to="'/journal/'+ journal.node.id" v-for="journal in $static.journals.edges" :key="journal.node.id" :style="'background-image: url(\''+$static.metadata.hero.server + journal.node.cover.url+'\')'">

      <div class="journal">
        <div class="container">
          <h2 class="journal-title">{{journal.node.title}}</h2>
          <p class="journal-excerpt">{{journal.node.description}}</p>
        </div>
      </div>

      <div class="journal-opacity"></div>
    </g-link>
  </Layout>
</template>
<static-query>
query {
  metadata {
    hero {
      server
      title
      subtitle
    }
    journalHero {
      title
    }
  }

  journals: allStrapiJournal {
    edges {
      node {
        id
        title
        content
        description
        slug
        author {
          username,
          email
        }
        updated_at
        cover {
          url
        }
      }
    }
  }
}
</static-query>
<script>
export default {
  metaInfo: {
    title: 'Journal'
  }
}
</script>


<style scoped>

h1{
  letter-spacing: -.01em;
}
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1);
}
.journal-header {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

.journal-post{
  position: relative;
  display: block;
  padding: 6rem 0;
  text-decoration: none;
  transition: background-image .5s ease;
  background-position: center;
  background-size: cover;
}

.journal-opacity{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.6);
  height: 100%;
  width: 100%;
}

.journal-post>.journal {
  position: absolute;
  z-index: 10;
  width: 100%;
  transition: transform .5s ease;
}

.journal-post:hover>.journal {
  transform: translateX(4rem);
}

.journal > .container {
  max-width: 720px;
  text-align: left;
}
.journal-post h1, .journal-post h2 {
  margin: 0;
  padding: 0;
}

.journal-title {
  font-size: 2rem;
  color: var(--color-contrast-2);
}

.journal-excerpt {
  color: var(--color-contrast-2);
}


@media (min-width: 560px) {
  .journal-post {
    padding: 9rem 0;
  }
}

@media(min-width: 860px) {
  .journal-post {
    padding: 15rem 0;
  }
}

.container.journal {
  max-width: 720px;
}


</style>
