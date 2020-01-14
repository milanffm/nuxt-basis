<template>
    <div>
        <h1>Strapi blog</h1>
        <Articles :articles="articles"/>
    </div>
</template>

<script>
import articlesQuery from '~/apollo/queries/article/articles'
import Articles from '~/components/Articles'

export default {
    data() {
        return {
            articles: [],
        }
    },
    components: {
        Articles
    },
    mounted() {
        console.log(this.articles);
    },
    apollo: {
        articles: {
            prefetch: true,
            query: articlesQuery
        }
    }
}
</script>
