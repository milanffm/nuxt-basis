<template>
  <div>
        <nuxt-link
            v-for="article in articles"
            :key="article.id"
            :to="{ name: 'articles', params: {id: article.id} }" >{{article.id}}
            <img :src="'http://localhost:1337/' + article.image.url" alt="" height="100">
             <p v-if="article.category" class="uk-text-uppercase">{{ article.category.name }}</p>
             <p >{{ article.title }}</p>
         </nuxt-link>
  </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'

export default {
  props: {
    articles: Array
  },
  computed: {
  }
}
</script>
