<template>
    <div>
        <header>
            <div class="logo">
                <nuxt-link to="/"><img src="/img/layout/logo.png"></nuxt-link>
            </div>

            <nav>
                <nuxt-link to="/kontakt">Kontakt </nuxt-link>
            </nav>
        </header>
        <h1>Default</h1>
        <nuxt />
        <cookie-law-component />
    </div>
</template>
<script>
export default {
    components: {},
    computed: {},
    mounted() { },
    methods: {}
};
</script>

<style lang="scss">
#__layout {
    background: $white;
}
</style>
