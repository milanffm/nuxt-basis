<template>
    <section class="container">
        <div>
            <h1 class="title">Kontakt</h1>
            <p>Kontakt Seite</p>
            <p @click="showModalFn($event)">show Modal</p>
            <br> <br> <br>
            <p @click="showModalFn($event)">show Modal</p>
        </div>

        <modal-item
            :start-coordinates="mostRecentClickCoordinates"
            :sho-modal="showModal"
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
            </div>
        </modal-item>
    </section>
</template>

<script>

export default {
    data() {
        return {
            showModal: false,
	        mostRecentClickCoordinates: null
        };
    },
    components: {},
    computed: {},
    mounted() { },
    methods: {
	    showModalFn( event ) {

		    this.showModal = true;

		    // When Vue applies the "enter" animation for the above item, we want to
		    // animate it in from the current event's click-location. As such, we
		    // have store the coordinates for use in the subsequent animation hooks.
		    this.mostRecentClickCoordinates = {
			    x: event.clientX,
			    y: event.clientY
		    };
		    console.log(this.mostRecentClickCoordinates.y);

	    },
    }
};
</script>

<style lang="scss">
</style>
