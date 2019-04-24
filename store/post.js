export const state = () => ({
	posts: [],
	post: {},
});

export const mutations = {
	setPosts(state, posts) {
		console.log('SET POST');
		state.posts = posts
	}
}

export const actions = {
	async getPosts({commit}) {
		this.$postRepository.index()
			.then((res) => {
				console.log('STORE GET POST', res);
				commit('setPosts', res);
			})
	},
	async set({commit}, post) {
		await commit('set', post)
	}
}

export const getters = {
	getPosts: (state) => state.posts,
}