<template>
    <section class="container">
        <div>
            <h1 class="title">Kontakt</h1>
            <p>Kontakt Seite</p>
            <p @click="showModal = true">show Modal</p>
        </div>
        <modal
            v-show="showModal"
            @close="showModal = false"
        >
            <div slot="body">
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
            </div>
        </modal>
    </section>
</template>

<script>

export default {
    data() {
        return {
            showModal: false
        };
    },
    components: {},
    computed: {},
    mounted() { },
    methods: {}
};
</script>

<style lang="scss">
</style>
