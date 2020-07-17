<template>
    <section class="container">

            <p>
	            {{seminar}} <br>
            </p>

    </section>
</template>

<script>


//import rawHtml from '~/assets/data/html/68.html';
import TurndownService from 'turndown';

export default {
    data() {
        return {
	        seminar: {title: '', content: ''}
        };
    },
    components: {},
    computed: {},
    mounted() {
        //console.log(file);
	    this.seminar.title = '68'
	    this.seminar.content = this.convertToMarkdown(rawHtml);
        console.log(this.seminar);
        /**
         * remove comment for input arrayCsv
        //
         */
        //this.$axios.post('/seminar-archives', this.seminar);

    },
    methods: {
	    convertToMarkdown(html) {
		    let turndownService = new TurndownService();

		    return turndownService.turndown(html);
        }
    }
};
</script>

<style lang="scss">
</style>
