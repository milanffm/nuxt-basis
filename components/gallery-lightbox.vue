<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container" v-pan="pan">
					<transition-group name="gallery">
						<div class="item" v-for="(image, index) in images"

							:key="'key' + index"
							:style="{ backgroundImage: `url('${image}')` }"
							v-show="currentIndex === index">
						</div>
					</transition-group>
				</div>
				<div class="controller" v-if="itemsCount > 1">
					<div v-if="currentIndex > 0" class="prev" @click="prev()"></div>
					<div v-if="currentIndex < itemsCount -1" class="next" @click="next()"></div>
				</div>
				<div class="modal-close" @click="$emit('close')">
				</div>
			</div>
		</div>
	</transition>
</template>
<script>



export default {
	name: 'lightBox',
	props: {'currentGalleryIndex': Number, 'images': Array},

	data: function () {
		return {
			itemsCount: null,
			currentIndex: null,
			active: null
		}
	},
	mounted() {
		console.log(this.images, this.images.length, this.currentGalleryIndex);
		if (this.images) {
			this.itemsCount = this.images.length;
		}
		this.currentIndex = this.currentGalleryIndex;
	},
	updated() {


	},
	watch: {
		currentIndex: function(newVal, oldVal) {
			console.log('value changed from ' + oldVal + ' to ' + newVal);
			this.active = newVal;
		}
	},
	methods: {

		next() {
			if (this.currentIndex > this.itemsCount) {
				return
			}
			this.currentIndex += 1;
			console.log(this.currentIndex, this.itemsCount);
		},
		prev() {
			if (this.currentIndex < 1) {
				return
			}
			this.currentIndex -= 1;
			console.log(this.currentIndex, this.itemsCount);
		},
		pan(e){
			console.log('EVENT', e.additionalEvent);
			if(e.isFinal) {
				if (e.additionalEvent === 'panleft') {
					this.next()
				}
				if (e.additionalEvent === 'panright') {
					this.prev()
				}
			}
		}

	},
	destroyed() {

		this.itemsCount = null;
	}
}
</script>

<style lang="scss" scoped>
	.modal-mask {
		@include position(fixed, 0 0 0 0);
		z-index: 10;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .8);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
		@include padding(5vh null);


	}

	.modal-container {
		width: 80vw;
		margin: 0 auto;
		padding: 20px 30px;
		background-color: $white;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		height: 90vh;
		overflow: auto;
		position: relative;
	}

	.modal-header h3 {
		margin-top: 0;
		color: #42b983;
	}

	.modal-body {
		margin: 20px 0;
	}

	.modal-close {
		@include icon('icon-close');
		@include position(absolute, 1.5vh 5% null null);
		top: .80vh;
		right: 63px;
		&:before {
			color: $white;
			font-size: $icon-big-font-size;
		}
	}
	@media all and (max-width: $small-screen) {
		.modal-wrapper{
			margin: 0 auto;
			width: 80%;
		}
	}

	/**
	*
	* Gallery Style
	*
	**/


	.item {
		@include position(absolute, 0);
		position: absolute;
		background-size: cover;
		background-position: center;
	}

	.controller {
		@include position(absolute, 50% 0 null 0);
		position: absolute;
		width: 100%;

	}

	.prev, .next {
		@include icon('icon-cheveron-right');
		&:before {
			font-size: $icon-big-font-size;
		}
		cursor: pointer;
	}

	.prev {
		@include icon('icon-cheveron-left');
		@include position(absolute, 22px null null 5%);
	}
	.next {
		@include position(absolute, 0 5% null null);
	}
	.gallery-enter-active, .gallery-leave-active {
		transition: opacity .5s;
	}
	.gallery-enter, .gallery-leave-to {
		opacity: 0;
	}


	/*
	 * The following styles are auto-applied to elements with
	 * transition="modal" when their visibility is toggled
	 * by Vue.js.
	 *
	 * You can easily play with the modal transition by editing
	 * these styles.
	 */

	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	@media all and (max-width: $xsmall-screen) {


		.prev, .next {

			&:before {
				font-size: 1.5rem;
			}
			cursor: pointer;
		}

		.prev {
			top: 10px;
		}

	}
</style>