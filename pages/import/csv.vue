<template>
    <section class="container">
        <div v-for="member in members">
            <p>
                {{member.status}}<br>
                {{member.title}}<br>
                {{member.firstName}} {{member.name}}<br>
                {{member.clinic}} <br>
                {{member.street}} <br>
                {{member.zip}} {{member.city}}<br>
                {{member.country}} <br>

                <span v-if="member.phone">Tel.: {{member.countryCode}} {{member.phone}}</span><br>
                <a v-if="member.email" :href="'mailto:' + member.email">{{member.email}}</a> <br>
                <a v-if="member.website" target="_blank" :href="member.website">{{member.website}}</a> <br>
            </p>
        </div>
    </section>
</template>

<script>


// import mitglieder from '~/assets/data/mitglieder.csv';

export default {
    data() {
        return {
            members: null
        };
    },
    components: {},
    computed: {},
    mounted() {
        //console.log(file);
        // this.members = this.convertToJson(mitglieder);
        console.log(this.members);
        /**
         * remove comment for input arrayCsv
        //
         */
        //this.$axios.post('/members', this.members);

    },
    methods: {
        convertToJson(inputCsv) {
            /* Split input string by `,` and clean up each item */
            const arrayCsv = inputCsv.split(';').map(s => s.replace(/"/gi, '').trim())

            const outputJson = [];

            /* Iterate through input csv at increments of 6, to capture entire CSV row
               per iteration */
            for (let i = 13; i < arrayCsv.length; i += 13) {

                /* Extract CSV data for current row, and assign to named variables */
                const [
                    status,
                    name,
                    firstName,
                    salutation,
                    title,
                    clinic,
                    street,
                    zip,
                    city,
                    country,
                    countryCode,
                    phone,
                    email,
                    website] =
                    arrayCsv.slice(i, i + 13)
                /* Populate structured JSON entry for this CSV row */
                outputJson.push({
                    member_rolls: [{'_id' :'5eb2ca664eaea726b5fb4940'}],
                    name,
                    firstName,
                    //salutation,
                    title,
                    clinic,
                    street,
                    zip,
                    city,
                    country,
                    countryCode,
                    phone,
                    email,
                    website
                });
            }

            return outputJson;
        }
    }
};
</script>

<style lang="scss">
</style>
