<template>
  <Layout isNotHeaderSticky>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{$page.journal.title}}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{$page.journal.author.username}}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <span class="date">{{date}}</span>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span class="time">{{readTime}} min read</span>
            </div>
            <div class="journal-count">
              <span class="label">Count</span>
              <span class="time">{{wordCount}}</span>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="content">

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

  journal: strapiJournal(id: $id) {
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
</page-query>
<script>
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt();
export default {
  computed: {
    content() {
      let content = md.render(this.$page.journal.content)
      let result = content.match(/(?<=img.*?src=")[^"]+(?=")/g);
      
      if(result && result.length === 0) return content;

      result.forEach( item=> {
        content = content.replace(item, this.$page.metadata.hero.server + item);
      })
      return content
    },

    counter() {
      const cn = (this.content.match(/[\u4E00-\u9FA5]/g) || []).length
      const en = (this.content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length
      return [cn, en]
    },

    wordCount() {
      const length = this.counter[0] +this.counter[1];
      if(length < 1000) {
        return length
      }
      return Math.round(length/100) / 10 + 'k'
    },

    readTime() {
      const readingTime = this.counter[0] / 300 + this.counter[1] / 160;
      return readingTime < 1 ? '1' : parseInt(readingTime, 10);
    },

    date() {
      const date = this.$page.journal.updated_at
      const enMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      return `${new Date(date).getDate()}. ${enMonth[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`
    }
  }
}
</script>

<style scoped>

h1 {
  letter-spacing: -.01em;
}

.journal-container {
  max-width: 840px;
}

.journal-header {
  padding: 2rem 0 4rem;
}

.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: .8rem;
}

.journal-meta>div{
  margin-right: 4rem;
}

.journal-meta>div:last-of-type {
  margin: 0;
}
.journal-content{
  width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: .5rem;
}
</style>
