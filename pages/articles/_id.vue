<template>
  <div v-if="article">
      <div v-if="article.image"  :data-src="'http://localhost:1337/' + article.image.url" >
        <h1>{{ article.title }}YYYYy</h1>
      </div>
      <!--<div v-if="article.content" id="editor" v-html="$md.render(article.content)"></div>-->
      <p v-if="article.published_at">{{ moment(article.published_at).format("MMM Do YY") }}</p>
  </div>
</template>

<script>
import articleQuery from '~/apollo/queries/article/article'
const moment = require('moment');

export default {
  data() {
    return {
      article: {},
      moment: moment,
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
