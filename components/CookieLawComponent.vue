<template>
    <client-only>
        <cookie-law
            theme="dark-lime"
            button-text="OK"
            position="top"
            transitionName="slideFromTop">
            <div slot="message">
                Cookies helfen uns unsere Dienstleistungen anzubieten. Wenn Sie unsere Dienstleistungen nutzen, sind Sie damit einverstanden.
                <nuxt-link to="/datenschutz">Mehr Dazu »</nuxt-link>
            </div>
        </cookie-law>
    </client-only>
</template>

<script>
import CookieLaw from 'vue-cookie-law';

export default {
    name: 'cookie-law-component',
    components: { CookieLaw },
    methods: { }
}
</script>

<style lang="scss">
body .Cookie--dark-lime .Cookie__button {
    background: $gray-light;
    color: $brand-primary;
    &:hover {
        background: $white;
    }
}

body .Cookie--dark-lime {
    background: $gray-dark;
}
</style>
