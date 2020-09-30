<template>
    <transition  name="modal-wrapper-animation">
        <div class="modal-mask" v-show="showModal">
            <div class="modal-wrapper" @click="closeOutside($event)">
                <transition
                    name="modal-animation"
                    @enter="enter"
                    @leave="leave"
                    @after-enter="showInnerContent = true" >
                    <div class="modal-container" v-if="showModal">
                        <div class="modal-content" >
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
                    @click="close()"
                />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
	name: 'modal-item',
	props: {
		'startCoordinates': Object,
		'showModal': Boolean
	},
	data () {
		return {
			showContent: false
		}
	},
	methods: {
		closeOutside(e) {
			if (e.target.classList.contains('modal-wrapper')) {
				this.close();
			}
		},
        close(){
	        this.$emit('close');
	        this.showContent = false;
        },

		enter(element) {

			const clickX = this.startCoordinates.x;
			const clickY = this.startCoordinates.y;
			const rect = element.getBoundingClientRect();
			const deltaX = (clickX - rect.left - (rect.width / 2));
			const deltaY = (clickY - rect.top - (rect.height / 2));

			element.style.transform = `translateX( ${deltaX}px ) translateY( ${deltaY}px )`;
			element.style.transition = 'none';

			// By default, the browser attempts to optimize updates by "chunking" CSS
			// changes. As such, we have to force the browser to repaint in order to
			// apply the above styles before we nullify them below.
			this.__force_paint__ = document.body.offsetHeight;
			element.style = null;
		},
		leave(element) {

			const clickX = this.startCoordinates.x;
			const clickY = this.startCoordinates.y;
			const rect = element.getBoundingClientRect();
			const deltaX = (clickX - rect.left - (rect.width / 2));
			const deltaY = (clickY - rect.top - (rect.height / 2));

			element.style.transform = `translateX( ${deltaX}px ) translateY( ${deltaY}px )`;

			element.style.width = '0%';
			element.style.height = '0%';
		},
		afterLeave(element) {
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
        margin: 0 auto;
        padding: 0;
        overflow-y: scroll;
        height: 90%;
        text-align: center;
        max-width: 900px;
        background: $white;
        border-radius: 25px;
        -webkit-overflow-scrolling: touch;
    }

    .modal-content {
        padding: 5%;
        max-height: 80vh;
        transition: all .5s ease;
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

    .modal-animation {
        &-enter {
            opacity: 0.0;
            width: 10%;
            height: 10%;

            // NOTE: Since the initial value of the "transform" property is data-driven
            // based on the Vue-state, we need to calculate the transform in the .enter()
            // hook of the Vue class.
        }

        &-enter-active, &-leave-active {
            transition: all .5s ease;
        }

        &-enter-to {
            opacity: 1.0;
            width: 80%;
            height: 90%;
            transform: translateX(0px) translateY(0px);
        }

        &-leave-to {
            opacity: 1.0;
            width: 10%;
            height: 10%;
        }
    }

    .modal-wrapper-animation {
        &-enter-active {
            transition: opacity .3s;
        }

        &-leave-active {
            transition: opacity .7s;
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
