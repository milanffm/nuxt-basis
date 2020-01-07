<template>
    <div class="__nuxt-error-page">
        <main class="page ">
            <section class="content">
                <p></p>
                <h1><span class="status">{{error.statusCode}}</span> {{error.message}}</h1>
                <p>Bitte gehen sie zur <nuxt-link to="/">Startseite</nuxt-link>.</p>

            </section>
        </main>
    </div>
</template>

<script>

export default {
    name: 'NuxtError',
    props: ['error']
}
</script>
<style lang="scss" >
    .__nuxt-error-page {
        .status {
            color: $gray-light;
        }
    }
</style>
