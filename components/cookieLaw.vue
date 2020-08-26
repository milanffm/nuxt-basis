<template>
    <div>
        <client-only>
            <transition name="fade">
                <div class="accept-cookies" v-if="showCookieLaw">
                    <p>{{options.i18n.de.cookieText}}
                        <nuxt-link to="/datenschutz">{{options.i18n.de.cookieInfoLinkTxt}}</nuxt-link>
                    </p>
                    <div class="ok" @click="setCookie()">{{options.i18n.de.accept}}</div>
                </div>
            </transition>
        </client-only>
    </div>
</template>

<script>

export default {
    name: 'cookie-law',
    data(){
        return {
            showCookieLaw: true,
            options: {
                cookieName: 'cookiesAccepted',
                cookieValue: true,
                cookieValidForDays: 365,
                lang: {
                    default: 'de',
                    switchFromURL: true,
                    switches: [
                        {en: '/en/'}
                        //{it : '/it'} // make sure there us a i18n for this new switch
                    ]
                },
                i18n: {
                    de: {
                        cookieText: 'Cookies erleichtern die Nutzung dieser Website. Wenn Sie diese Website nutzen, erklären Sie sich damit einverstanden, dass wir Cookies verwenden.',
                        cookieInfoLink: 'datenschutz.html',
                        cookieInfoLinkTxt: 'weitere Informationen',
                        accept: 'ok'
                    },
                    en: {
                        cookieText: 'This web page uses Cookies for an actual representation of many contents.',
                        cookieInfoLink: 'datenschutz.html',
                        cookieInfoLinkTxt: 'more information',
                        accept: 'ok'
                    }
                }
            }
        }
    },
    mounted(){
        this.showCookieLaw = !this.getCookie();
    },
    methods: {
        // set Cookie
        setCookie() {
            this.showCookieLaw = false;
            //TODO uncomment for Matomo cookies accept
            //this.$matomo.rememberConsentGiven();
            const date = new Date();
            date.setTime(date.getTime() + (this.options.cookieValidForDays * 24 * 60 * 60 * 1000));
            document.cookie = this.options.cookieName + '=' + this.options.cookieValue + '; expires=' + date.toGMTString() + '; path=/' + ';SameSite=Lax';
        },
        getCookie() {
            const theCookie = document.cookie.split(';').filter( ck => {
                return ck.indexOf(this.options.cookieName) >= 0;
            });
            return theCookie.length > 0 ? theCookie[0].split('=').pop() : null;
        }
    }
}

</script>

<style lang="scss" scoped>
    .accept-cookies {
        @include position(fixed, null 0 0 0);
        @include padding(15px);
        height: 100px;
        width: 100%;
        z-index: 10;
        background: $white;
        padding-right: 80px;
        background: $gray-lighter;
    }
    p {
        margin-top: 0;
    }
    .ok {
        background: $brand-primary;
        cursor: pointer;
        color: $white;
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        @include position(absolute, 36px 15px null null);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    @media all and (max-width: $small-screen) {
        .accept-cookies {
            height: 130px;
        }
    }
    @media all and (max-width: $xsmall-screen) {
        p {
            font-size: $small-font-size;
            line-height: 1.3;
        }
    }

</style>
