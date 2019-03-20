<template>
	<div id="slider">
		<input checked="" type="radio" name="slider" id="slide1" selected="false">
		<input type="radio" name="slider" id="slide2" selected="false">
		<input type="radio" name="slider" id="slide3" selected="false">
		<input type="radio" name="slider" id="slide4" selected="false">
		<div id="slides">
			<div id="overflow">
				<div class="inner">
					<article>
						<content select="img:nth-of-type(1)"></content>
					</article>
					<article>
						<content select="img:nth-of-type(2)"></content>
					</article>
					<article>
						<content select="img:nth-of-type(3)"></content>
					</article>
					<article>
						<content select="img:nth-of-type(4)"></content>
					</article>
				</div>  .inner 
			</div>  #overflow 
		</div>
		<!--<label for="slide1"></label>
		<label for="slide2"></label>
		<label for="slide3"></label>
		<label for="slide4"></label>-->
        <div class='carousel'>
            <ul class='pane-container'>
                <li class='pane'>
                <div class='vertical-center'>1</div>
                </li>
                <li class='pane'>
                <div class='vertical-center'>2</div>
                </li>
                <li class='pane'>
                <div class='vertical-center'>3</div>
                </li>
                    <li class='pane'>
                <div class='vertical-center'>4</div>
                </li>
            </ul>
        </div>
	</div>
</template>


<script>


export default {
	name: 'ContentSlider',
    replace: true,

    data(){
		return {
            bodyClass: null,
		}
	},
	created() {
	},
	mounted() {
		this.contentSliderInizialiese();
	},
	watch: {
		'$route': function() {
			this.setBodyClasses();
		}
	},
	methods: {
		carousel(selector){

                /*var self = this;
                var $carousel = document.querySelector(selector);
                var $container = document.querySelector('pane-container', selector);
                var $panes = document.querySelector('.pane', selector);

                var paneWidth = 0;
                var paneCount = $panes.length;
                var panBoundary = .25; // if the pane is paned .25, switch to the next pane.

                var currentPane = 0;*/

                var sliderEl = document.querySelector('.slider'); // NEW: our element
                var slideCount = 3; // NEW: the total # of slides
                var sliderManager = new Hammer.Manager(sliderEl);
                sliderManager.add(new Hammer.Pan({ threshold: 0, pointers: 0 }) );
                sliderManager.on('pan', function(e) {
                var percentage = 100 / slideCount * e.deltaX / window.innerWidth; // NEW: our % calc
                sliderEl.style.transform = 'translateX(' + percentage + '%)'; // NEW: our CSS transform
            });
		}
	}   
    
}
</script>

<style lang="scss">

	#slider {
		max-width: 600px;
		text-align: center;
		margin: 0 auto;
	}

	#overflow {
		width: 100%;
		overflow: hidden;
	}

	#slides .inner {
		width: 400%;
	}

	#slides .inner {
		-webkit-transform: translateZ(0);
		-moz-transform: translateZ(0);
		-o-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);

		-webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
		-moz-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
		-o-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
		-ms-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
		transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

		-webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
		-moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
		-o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
		-ms-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
		transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
	}

	#slides article {
		width: 25%;
		float: left;
	}

	#slide1:checked ~ #slides .inner {
		margin-left: 0;
	}

	#slide2:checked ~ #slides .inner {
		margin-left: -100%;
	}

	#slide3:checked ~ #slides .inner {
		margin-left: -200%;
	}

	#slide4:checked ~ #slides .inner {
		margin-left: -300%;
	}

	input[type="radio"] {
		display: none;
	}

	label {
		background: #CCC;
		display: inline-block;
		cursor: pointer;
		width: 10px;
		height: 10px;
		border-radius: 5px;
	}

	#slide1:checked ~ label[for="slide1"],
	#slide2:checked ~ label[for="slide2"],
	#slide3:checked ~ label[for="slide3"],
	#slide4:checked ~ label[for="slide4"] {
		background: #333;
	}

</style>