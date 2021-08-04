<template>
  <Layout>
    <div class="hero">
      <h1 class="hero-title">{{$static.metadata.hero.title}}</h1>
      <h2 class="hero-subtitle">
        {{$static.metadata.hero.subtitle}}
      </h2>
    </div>

    <div class="projects">
      <div class="project" v-for="journal in $static.journals.edges" :key="journal.node.id" >
        <g-image :alt="journal.node.title" :src="$static.metadata.hero.server + journal.node.cover.url"/>
      </div>
    </div>
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
  }
  journals: allStrapiJournal {
    edges {
      node {
        id
        title
        content,
        cover {
          url
        },
        created_at,
        updated_at
      }
    }
  }
}
</static-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.hero {
  text-align: center;
  width: 480px;
  margin:0 auto;
  padding: 4rem 0 8rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
}

.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: .6;
}
</style>
