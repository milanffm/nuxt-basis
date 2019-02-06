<template>
	<section class="container">
		<div>
			<h1 class="title">Home</h1>
			<h2 class="subtitle">website to book apartments in sitia</h2>
		</div>
	</section>
</template>
<script>

import {mapState} from 'vuex';

export default {
	components: {
	},
	computed: {
		...mapState({
			posts: state => state.post.posts
		})
	},
	mounted() {
		if (this.$store.state.post.posts.length < 1) {
			return this.$store.dispatch("post/getPosts");
		}
	},
	methods: {

	},
};
</script>

<style lang="scss" scoped>
	h1 {
		background: $btn-color;
	}
</style>
