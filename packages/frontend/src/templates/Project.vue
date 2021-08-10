<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{$page.project.title}}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category" v-for="category in $page.project.categories" :key="category.id">{{category.name}}</span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{new Date($page.project.updated_at).getFullYear()}}</div>
            </div>
          </div>
        </div>
        <div class="content">
          <p v-html="content"></p>
          <img class="thumbnail" :alt="$page.project.title" :src="$page.metadata.hero.server + $page.project.cover.url" width="100%"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  metadata {
    hero {
      server
      title
      subtitle
    }
  }

  project: strapiProject(id: $id) {
    id
    title
    content
    cover {
      url
    }
    categories {
      id,
      name,
      backgroundColor,
      color
    },
    created_at,
    updated_at
  }
}
</page-query>
<script>
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

export default {
  computed: {
    content() {
      return md.render(this.$page.project.content)
    },
    bodyStyle() {
      let bodyStyle = [];
      this.$page.project.categories.forEach( (category) => {
        if(category.id !== 1) {
          bodyStyle.push('background-color: ' + category.backgroundColor)
          bodyStyle.push('color: ' + category.color)
          return true;
        }
      })

      return bodyStyle.join(';')
    }
  },
  metaInfo() {
    return {
      title: this.$page.project.title,
      bodyAttrs: {
        style: this.bodyStyle
      }
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem;
}

.project-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: .8rem;
}

.project-info > div {
  margin-right: 4rem;
}

.project-info > div:last-of-type {
  margin: 0;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom:.5rem;
}

.category:after {
  content: ", "
}

.category:last-of-type:after{
  content: ""
}

p {
  line-height: 1.5;
  font-size: 1.15rem;
}
</style>
