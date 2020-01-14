<template>
    <div>
        <Articles :articles="[article]"/>
    </div>
</template>

<script>
import articleQuery from '~/apollo/queries/article/article'
import Articles from '~/components/Articles'

const moment = require('moment');

export default {
    data() {
        return {
            article: {},
            moment: moment,
        }
    },
    components: {
        Articles
    },
    apollo: {
        article: {
            prefetch: true,
            query: articleQuery,
            variables() {
                console.log(this.$route.params.id);
                return {id: this.$route.params.id}
            }
        }
    }
}
</script>
