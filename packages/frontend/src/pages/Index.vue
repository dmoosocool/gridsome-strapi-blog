<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{$static.metadata.hero.title}}</h1>
        <h2 class="hero-subtitle">
          {{$static.metadata.hero.subtitle}}
        </h2>
      </div>

      <div class="projects">
        <div class="project" v-for="journal in $static.journals.edges" :key="journal.node.id" >
          <g-link to="/" class="project-link">
            <img class="thumbnail" :alt="journal.node.title" :src="$static.metadata.hero.server + journal.node.cover.url" width="100%"/>
            <h3 class="project-title">{{journal.node.title}}</h3>
            <div class="categories">
              <span class="category" v-for="category in journal.node.categories" :key="category.id">{{category.name}}</span>
            </div>
          </g-link>
        </div>
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
        categories {
          id,
          name
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
img {
  max-width: 100%;
}
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

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}

.project {
  grid-column: auto/span 2;
  text-align: center;
}

.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,.25);
}
@media (min-width:920px) {
  .project {
    grid-column: auto/span 1;
  }

  .project:nth-child(3n+1) {
    grid-column: auto/span 2;
  }
}

.project-link {
  text-decoration: none;
}

.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem;
}

.categories {
  font-size: .8rem;
  color: var(--color-contrast-1);
}

.category {
  margin-right: .8rem;
}

.thumbnail {
  height: 560px;
  object-fit: cover;
  transition: all .15s ease;
  box-shadow: 0 0 40px -20px rgb(0 0 0 / 25%);
}

</style>
