<template>
    <section class="container">
        <div>
            <h1 class="title">Kontakt</h1>
            <p>Kontakt Seite</p>
            <p @click="showModalFn($event)">show Modal</p>
            <br> <br>  <img src="https://via.placeholder.com/500"><br>
            <br> <br>  <img src="https://via.placeholder.com/500"><br>
            <br> <br>  <img src="https://via.placeholder.com/500"><br>
            <br> <br>  <img src="https://via.placeholder.com/500"><br>
            <br> <br>  <img src="https://via.placeholder.com/500"><br>
            <br> <br>  <img src="https://via.placeholder.com/500"><br>
            <p @click="showModalFn($event)">show Modal</p>
        </div>

        <modal-item
            :start-coordinates="mostRecentClickCoordinates"
            :show-modal="showModal"
            @close="showModal = false"
        >
            <div slot="body">
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <p>modal body</p>
                <img src="https://via.placeholder.com/500">
                <p>modal body</p>
                <p>modal body</p>
                <img src="https://via.placeholder.com/350">
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
