<template>
  <Layout layoutClass="sticky-header">
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{$static.metadata.hero.title}}</h1>
        <h2 class="hero-subtitle">
          {{$static.metadata.hero.subtitle}}
        </h2>
      </div>

      <div class="projects">
        <div class="project" v-for="project in $static.projects.edges" :key="project.node.id" >
          <g-link :to="'/project/'+ project.node.id" class="project-link">
            <img class="thumbnail" :alt="project.node.title" :src="$static.metadata.hero.server + project.node.cover.url" width="100%"/>
            <h3 class="project-title">{{project.node.title}}</h3>
            <div class="categories">
              <span class="category" v-for="category in project.node.categories" :key="category.id">{{category.name}}</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>

    <div class="latest-journals-container">
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link class="journal" :to="'/journal/'+ journal.node.id" v-for="journal in $static.journals.edges" :key="journal.node.id">
            <h3 class="journal-title">{{journal.node.title}}</h3>
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

  projects: allStrapiProject {
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
    title: 'Hello, world!',
    layoutClass: ""
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}

a {
  color: inherit;
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


.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: .6rem;
  font-weight: 400;
  text-transform: uppercase;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}

.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}

.latest-journals>.container {
  display: flex;
  flex-wrap: wrap;
}
@media (min-width:920px) {
  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}

.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background .25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}

@media (min-width: 580px) {
  .journal {
    flex:0 0 50%;
  }

  .journal:first-child {
    border-right: 1px solid var(--color-base-1);
  }

  .journal:first-child,.journal:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
  }

  .journal:nth-child(3) {
    border-right: 1px solid var(--color-base-1);
    border-bottom: 0;
  }

  .journal:hover {
    background: var(--color-base-1)
  }
}

@media (min-width: 920px) {
  .journal {
    flex:0 0 25%;
  }

  .journal:first-child,.journal:nth-child(2),.journal:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }

  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}


.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}
</style>
