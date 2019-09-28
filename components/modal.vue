<template>
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper" @click="closeOutside($event)">
				<div class="modal-container">
					<div class="modal-content">
						<div class="modal-head">
							<slot name="head"></slot>
						</div>
						<div class="modal-body">
							<slot name="body"></slot>
						</div>
					</div>
				</div>

				<div class="modal-close" @click="$emit('close')"></div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'modal',
	methods: {
		closeOutside(e) {
			if (e.target.classList.contains('modal-wrapper')) {
				this.$emit('close');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.9);
	display: table;
	transition: opacity 0.5s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
	@include padding(5vh null);
}

.btn {
	margin-top: 20px;
}
.modal-container {
	width: 80%;
	margin: 0px auto;
	padding: 5vw;
	transition: all 0.5s ease;
	overflow: auto;
	display: table;
	text-align: center;
	max-width: 900px;
	background: $white;
	border-radius: 25px;
}

.modal-content {
	max-height: 69vh;
	overflow: auto;
}
.modal-close {
	@include icon('icon-close');
	@include position(absolute, 1.5vh 5% null null);
	top: 0.8vh;
	right: 63px;
	cursor: pointer;
	&:before {
		color: $white;
		font-size: $icon-big-font-size;
	}
}

/*
	 * The following styles are auto-applied to elements with
	 * transition="modal" when their visibility is toggled
	 * by Vue.js.
	 *
	 * You can easily play with the modal transition by editing
	 * these styles.
	 */

.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.5s;
}
.modal-enter,
.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

@media all and (max-width: $small-screen) {
	.modal-wrapper {
		@include padding(2vh null);
	}
	.modal-container {
		padding: 3%;
	}
	.modal-body {
		@include hyphens();
	}
}
</style>
