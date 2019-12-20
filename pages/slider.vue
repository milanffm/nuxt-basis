
<template>

    <div class="slider-wrapper">
        <vueper-slides :dragging-distance="70">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i" :title="slide.title"
                :content="slide.content"></vueper-slide>
        </vueper-slides>

        <vueper-slides :dragging-distance="70">
            <vueper-slide
                v-for="(slide, i) in slides2"
                :key="i" :title="slide.title"
                :content="slide.content"></vueper-slide>
        </vueper-slides>
    </div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
	components: { VueperSlides, VueperSlide },
	data() {
		return({
			slides: [
				{
					title: 'Slide #1',
					content: 'Slide content.'
				},
				{
					title: 'Slide #2',
					content: 'Slide content.'
				},
				{
					title: 'Slide #3',
					content: 'Slide content.'
				},
			],
			slides2: [
				{
					title: 'Slide #1',
					content: 'Slide content.dfgdgdgd'
				},
				{
					title: 'Slide #2',
					content: 'Slide content.'
				},
				{
					title: 'Slide #3',
					content: 'Slide content.'
				},
			]
		});
	},
	methods: {
	}
};

</script>

<style lang="scss">
    .slider-wrapper {
        .vueperslide {
            background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);

            &__content {
                color: $white;
            }
        }
    }

</style>
