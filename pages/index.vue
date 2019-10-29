<template>
    <section class="container">
        <div>
            <h1 class="title">Home</h1>
            <h2 class="subtitle">basis nuxt site</h2>

            <img
                v-for="(image, index) in images"
                :key="index"
                v-on:click="showLightBox(index)"
                :src="image"
            >
        </div>
        <p>
            <img src="/img/layout/logo.png">
            sdfasdf asdf sdf <br>sdfasfsdfafsd
        </p>

        <gallery-light-box
            v-if="showModal"
            @close="showModal = false"
            v-bind:images="images"
            v-bind:currentGalleryIndex="galleryIndex"
        />
    </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
    head() {
        return {
            title: 'Nuxt Basis - Home',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Meta Description Home'
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content:
                        'Meta Description Home'
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'Nuxt Basis - Home'
                }
            ]
        };
    },
    data() {
        return {
            showModal: false,
            images: [
                'https://via.placeholder.com/150',
                'https://via.placeholder.com/250',
                'https://via.placeholder.com/350'
            ],
            galleryIndex: null
        };
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts
        })
    },
    mounted() {
        if (this.$store.state.post.posts.length < 1) {
            return this.$store.dispatch('post/getPosts');
        }
    },
    methods: {
        showLightBox(index) {
            this.galleryIndex = index;
            this.showModal = true;
        }
    }
};
</script>

<style lang="scss" scoped>
h1 {
    background: $btn-color;
}
</style>
