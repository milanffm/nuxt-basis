<template>
    <transition
        name="modal-wrapper">
        <div class="modal-mask">
            <div
                class="modal-wrapper"
                @click="closeOutside($event)"
            >
                <transition
                    name="modal"
                    @enter="enter"
                    @leave="leave">
                        <div class="modal-container" v-show="shoModal">
                            <div class="modal-content" >
                                {{startCoordinates}}
                                <div class="modal-head">
                                    <slot name="head"/>
                                </div>
                                <div class="modal-body">
                                    <slot name="body"/>
                                </div>
                            </div>
                        </div>
                    </transition>
                <div
                    class="modal-close"
                    @click="$emit('close')"
                />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
	name: 'modal-item',
	props: {
		startCoordinates: Object,
        shoModal: Boolean
	},
	methods: {
		closeOutside(e) {
			if (e.target.classList.contains('modal-wrapper')) {
				this.$emit('close');
			}
		},
		enter(element) {

			// Calculate the initial transform to position the item under the user's
			// cursor (based on the stored mouse-click event).
			const clickX = this.startCoordinates.x;
			const clickY = this.startCoordinates.y;
			const rect = element.getBoundingClientRect();
			const deltaX = (clickX - rect.left - (rect.width / 2));
			const deltaY = (clickY - rect.top - (rect.height / 2));

			// Style the item position.
			element.style.transform = `translateX( ${deltaX}px ) translateY( ${deltaY}px )`;
			// When we define the initial position of the item, we have to LOCALLY
			// DEACTIVATE the transition property otherwise the item will never make
			// it from the static position out to the transformed position.
			element.style.transition = "none";

			// By default, the browser attempts to optimize updates by "chunking" CSS
			// changes. As such, we have to force the browser to repaint in order to
			// apply the above styles before we nullify them below.
			this.__force_paint__ = document.body.offsetHeight;

			// At this point, the browser has rendered the new item at the
			// transformed location without any transition timing. And, now that we
			// have configured the initial position, we can nullify the LOCAL STYLE
			// of the item so that the browser will transition the CSS based on the
			// "item-enter-to" class.
			element.style = null;
		},
		leave(element) {

			// Calculate the initial transform to position the item under the user's
			// cursor (based on the stored mouse-click event).
			const clickX = this.startCoordinates.x;
			const clickY = this.startCoordinates.y;
			const rect = element.getBoundingClientRect();
			const deltaX = (clickX - rect.left - (rect.width / 2));
			const deltaY = (clickY - rect.top - (rect.height / 2));

			// Style the item position.
			element.style.transform = `translateX( ${deltaX}px ) translateY( ${deltaY}px )`;
			// When we define the initial position of the item, we have to LOCALLY
			// DEACTIVATE the transition property otherwise the item will never make
			// it from the static position out to the transformed position.
			element.style.transition = "none";

			// By default, the browser attempts to optimize updates by "chunking" CSS
			// changes. As such, we have to force the browser to repaint in order to
			// apply the above styles before we nullify them below.
			this.__force_paint__ = document.body.offsetHeight;

			// At this point, the browser has rendered the new item at the
			// transformed location without any transition timing. And, now that we
			// have configured the initial position, we can nullify the LOCAL STYLE
			// of the item so that the browser will transition the CSS based on the
			// "item-enter-to" class.
			element.style = null;
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
        background-color: rgba(0, 0, 0, 0.8);
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
        height: 90%;
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
        @include icon("icon-close");
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

    .modal{
        &-enter {
            opacity: 0.0;
            min-width: 200px;
            width: 0%;
            height: 0%;

            overflow: hidden;
            // NOTE: Since the initial value of the "transform" property is data-driven
            // based on the Vue-state, we need to calculate the transform in the .enter()
            // hook of the Vue class.
        }

        &-enter-active {
            transition: all .7s ease;
        }

        &-enter-to {
            opacity: 1.0;
            width: 80%;
            height: 90%;
            transform: translateX(0px) translateY(0px);
        }
    }

    .modal-wrapper{
        &-leave-active, &-enter-active {
            transition: opacity 0.5s;
        }

        &-enter, &-leave-active {
            opacity: 0;
        }
    }

    // .modal-enter .modal-container,
    // .modal-leave-active .modal-container {
    //     -webkit-transform: scale(1.1);
    //     transform: scale(1.1);
    // }

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
