// (function () {

//     var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

//     // Main
//     initHeader();
//     initAnimation();
//     addListeners();

//     function initHeader() {
//         width = window.innerWidth ;
//         height = window.innerHeight ;
//         target = { x: width / 2, y: height / 2 };

//         largeHeader = document.getElementById('large-header');
//         largeHeader.style.height = height + 'px';


//         canvas = document.getElementById('canvas-one');
//         canvas.width = width;
//         canvas.height = height ;
//         ctx = canvas.getContext('2d');
//         canvas.style.top = '100vh';


//         // create points
//         points = [];
//         for (var x = 0; x < width; x = x + width / 20) {
//             for (var y = 0; y < height; y = y + height / 20) {
//                 var px = x + Math.random() * width / 20;
//                 var py = y + Math.random() * height / 20;
//                 var p = { x: px, originX: px, y: py, originY: py };
//                 points.push(p);
//             }
//         }

//         // for each point find the 5 closest points
//         for (var i = 0; i < points.length; i++) {
//             var closest = [];
//             var p1 = points[i];
//             for (var j = 0; j < points.length; j++) {
//                 var p2 = points[j]
//                 if (!(p1 == p2)) {
//                     var placed = false;
//                     for (var k = 0; k < 5; k++) {
//                         if (!placed) {
//                             if (closest[k] == undefined) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }

//                     for (var k = 0; k < 5; k++) {
//                         if (!placed) {
//                             if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }
//                 }
//             }
//             p1.closest = closest;
//         }

//         // assign a circle to each point
//         for (var i in points) {
//             var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.9)');
//             points[i].circle = c;
//         }
//     }

//     // Event handling
//     function addListeners() {
//         if (!('ontouchstart' in window)) {
//             window.addEventListener('mousemove', mouseMove);
//         }
//         window.addEventListener('scroll', scrollCheck);
//         window.addEventListener('resize', resize);
//     }

//     function mouseMove(e) {
//         var posx = posy = 0;
//         if (e.pageX || e.pageY) {
//             posx = e.pageX;
//             posy = e.pageY;
//         }
//         else if (e.clientX || e.clientY) {
//             posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//             posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop +100;
//         }
//         target.x = posx;
//         target.y = posy;
//     }

//     function scrollCheck() {
//         if (document.body.scrollTop > height) animateHeader = false;
//         else animateHeader = true;
//     }

//     function resize() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         largeHeader.style.height = height + 'px';
//         canvas.width = width;
//         canvas.height = height;
      
//     }

//     // animation
//     function initAnimation() {
//         animate();
//         for (var i in points) {
//             shiftPoint(points[i]);
//         }
//     }

//     function animate() {
//         if (animateHeader) {
//             ctx.clearRect(0, 0, width, height);
//             for (var i in points) {
//                 // detect points in range
//                 if (Math.abs(getDistance(target, points[i])) < 4000) {
//                     points[i].active = 0.3;
//                     points[i].circle.active = 0.6;
//                 } else if (Math.abs(getDistance(target, points[i])) < 20000) {
//                     points[i].active = 0.1;
//                     points[i].circle.active = 0.3;
//                 } else if (Math.abs(getDistance(target, points[i])) < 40000) {
//                     points[i].active = 0.02;
//                     points[i].circle.active = 0.1;
//                 } else {
//                     points[i].active = 0;
//                     points[i].circle.active = 0;
//                 }

//                 drawLines(points[i]);
//                 points[i].circle.draw();
//             }
//         }
//         requestAnimationFrame(animate);
//     }

//     function shiftPoint(p) {
//         TweenLite.to(p, 1 + 1 * Math.random(), {
//             x: p.originX - 50 + Math.random() * 100,
//             y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
//             onComplete: function () {
//                 shiftPoint(p);
//             }
//         });
//     }

//     // Canvas manipulation
//     function drawLines(p) {
//         if (!p.active) return;
//         for (var i in p.closest) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p.closest[i].x, p.closest[i].y);
//             ctx.strokeStyle = 'rgba(255,255,255,' + p.active + ')';
//             ctx.stroke();
//         }
//     }

//     function Circle(pos, rad, color) {
//         var _this = this;

//         // constructor
//         (function () {
//             _this.pos = pos || null;
//             _this.radius = rad || null;
//             _this.color = color || null;
//         })();

//         this.draw = function () {
//             if (!_this.active) return;
//             ctx.beginPath();
//             ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
//             ctx.fillStyle = 'rgb(225, 255, 255,' + _this.active + ')';
//             ctx.fill();
//         };
//     }

//     // Util
//     function getDistance(p1, p2) {
//         return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//     }


// })();








/////////////////////////////////////////////////



////////////////////Conrol Navigation////////////////

  var layer1 = document.getElementById('layer1')
  scroll = window.pageYOffset;
  document.addEventListener("scroll", function(e){
      var offset = window.pageYOffset;
      scroll = offset;
      layer1.style.width = (90 + scroll/3 ) + "%"
  })

    var layer2 = document.getElementById('layer2')
  scroll = window.pageYOffset;
  document.addEventListener("scroll", function(e){
      var offset = window.pageYOffset;
      scroll = offset;
      layer2.style.width = (90 + scroll/3 ) + "%"
      layer2.style.left =  scroll/50 + "%"
      layer2.style.transform = "translateX(10%)"
  })

  var text = document.getElementById('text')
  var zoom = document.querySelector(".zoom")
  var intro = document.querySelector(".intro-text")
  scroll = window.pageYOffset;
  document.addEventListener("scroll", function(e){
      var offset = window.pageYOffset;
      scroll = offset;

      if(scroll > 20){
      text.style.bottom = scroll/6 + "%";
      if(scroll > 200){
          text.style.bottom = "18%";
      }
      text.style.opacity = .1 + scroll/100;
      zoom.style.backgroundColor = "grey";
      intro.style.opacity = 0;
      }
      else{

        zoom.style.backgroundColor = "transparent";
        text.style.opacity = .1;
        intro.style.opacity = 1;

      }
  })

  //////////////////////ScrollMagic Animations//////////////////

  /*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function (n) { n.viewportSize = {}, n.viewportSize.getHeight = function () { return t("Height") }, n.viewportSize.getWidth = function () { return t("Width") }; var t = function (t) { var f, o = t.toLowerCase(), e = n.document, i = e.documentElement, r, u; return n["inner" + t] === undefined ? f = i["client" + t] : n["inner" + t] != i["client" + t] ? (r = e.createElement("body"), r.id = "vpw-test-b", r.style.cssText = "overflow:scroll", u = e.createElement("div"), u.id = "vpw-test-d", u.style.cssText = "position:absolute;top:-1000px", u.innerHTML = "<style>@media(" + o + ":" + i["client" + t] + "px){body#vpw-test-b div#vpw-test-d{" + o + ":7px!important}}<\/style>", r.appendChild(u), i.insertBefore(r, e.head), f = u["offset" + t] == 7 ? i["client" + t] : n["inner" + t], i.removeChild(r)) : f = n["inner" + t], f } })(this);

/**
* This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
* Want to see more similar demos and tutorials?
* Help by spreading the word about Ihatetomatoes blog.
* Facebook - https://www.facebook.com/ihatetomatoesblog
* Twitter - https://twitter.com/ihatetomatoes
* Google+ - https://plus.google.com/u/0/109859280204979591787/about
* Article URL: http://ihatetomatoes.net/how-to-create-a-parallax-scrolling-website-part-2/
*/

(function ($) {

	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	htmlbody = $('html,body');
	var duration = 500;

	//FadeIn all sections   
	$body.imagesLoaded(function () {
		setTimeout(function () {

			// Resize sections
			adjustWindow();

			// Init navigation
			initHomepageNav();

			// Fade in sections
			$body.removeClass('loading').addClass('loaded');

		}, 800);
	});

	function adjustWindow() {

		// Init Skrollr
		var s = skrollr.init({
			forceHeight: false,
			render: function (data) {

				//Debugging - Log the current scroll position.
				//console.log(data.curTop);
			}
		});

		// Get window size
		winH = $window.height();

		// Keep minimum height 550
		if (winH <= 550) {
			winH = 550;
		}

		// Resize our slides
		$slide.height(winH);
		$slideTall.height(winH * 2);
		$slideTall2.height(winH * 3);

		// Refresh Skrollr after resizing our sections
		s.refresh($('.homeSlide'));

	}

	function initHomepageNav() {

		var homeSlides = $('.homeSlide');
		var $slideContent = $('.hsContainer');
		var slidesCount = $(homeSlides).length;
		var activeSlide = 1;

		// Build HTML for Nav
		$('<div/>', {
			'id': 'slideNav'
		}).append($('<ul><li class="slideNavPrev"><a class="disabled" href="#" title="Go to previous slide"><span class="ico ico-up">↑</span></a></li><li><span id="activeSlide">' + activeSlide + '</span>/<span id="maxSlides">' + slidesCount + '</span></li><li class="slideNavNext"><a href="#" title="Go to next slide"><span class="ico ico-down">↓</span></a></li></ul>')).appendTo('body').delay(1200).fadeIn(duration);


		// Navigation highligting
		var $activeSlide = $('#activeSlide');
		var $maxSlides = $('#maxSlides');
		var $numberOfSlides = parseInt($maxSlides.text());
		var slideNavPrev = $('');
		var $slideNavNext = $('.slideNavNext');
		var $slideNavPrev = $('.slideNavPrev');
		var $slideNavNextA = $('.slideNavNext a');
		var $slideNavPrevA = $('.slideNavPrev a');

		// Highlight the section currently scrolling DOWN
		homeSlides.waypoint(function (direction) {
			if (direction === 'down') {
				var index = $(this).index();
				var index = index + 1;
				$activeSlide.text(index);
				showHideNavItems();
			}
		}, { offset: '50%' });

		// Highlight the section currently scrolling UP
		homeSlides.waypoint(function (direction) {
			if (direction === 'up') {
				var index = $(this).index();
				var index = index + 1;
				$activeSlide.text(index);
				showHideNavItems();
			}
		}, {
			offset: function () {
				// This is the calculation that would give you
				// "bottom of element hits middle of window"
				return $.waypoints('viewportHeight') / 2 - $(this).outerHeight();
			}
		});

		//Fade out unnecesary nav items
		function showHideNavItems() {
			var $activeSlideNumber = parseInt($activeSlide.text());

			if ($activeSlideNumber == 1) {

				$slideNavNextA.removeAttr('class');
				$slideNavPrev.animate({ opacity: 0.25 }).find('a').addClass('disabled');

			} else if ($activeSlideNumber == $numberOfSlides) {

				$slideNavPrevA.removeAttr('class');
				$slideNavNext.animate({ opacity: 0.25 }).find('a').addClass('disabled');

			} else {

				$slideNavNext.add($slideNavPrev).animate({ opacity: 1 });
				$slideNavNextA.add($slideNavPrevA).removeAttr('class');

			}
		}

		//Next slide
		$slideNavNext.click(function (e) {
			e.preventDefault();
			var index = parseInt($activeSlide.text());
			index++;
			if (index <= $numberOfSlides) {

				scrollToSlide(index);

			}
		});

		//Prev slide
		$slideNavPrev.click(function (e) {
			e.preventDefault();
			var index = parseInt($activeSlide.text());
			index--;
			if (index > 0) {

				scrollToSlide(index);

			}
		});


		function scrollToSlide(slideId) {

			// Custom slide content offset
			var customSlideOffset = $("#slide-" + slideId).attr('data-content-offset');


			// Scroll to the top of a container if it doesn't have custom offset defined
			if (typeof customSlideOffset === 'undefined') {

				htmlbody.animate({ scrollTop: ($("#slide-" + slideId).offset().top) + 'px' }, 'slow');

			} else {

				// Convert percentage 'eg. 25p' into pixels
				if (customSlideOffset.indexOf('p') != -1) {

					var customSlideOffset = parseInt(customSlideOffset.split('p')[0]);
					var slideHeight = $slide.height();

					customSlideOffset = Math.ceil((slideHeight / 100) * customSlideOffset);

					//console.log(slideHeight +' '+ customSlideOffset);

					htmlbody.animate({ scrollTop: ($("#slide-" + slideId).offset().top + customSlideOffset) + 'px' }, 'slow');

				} else {

					var customSlideOffset = parseInt(customSlideOffset);

					htmlbody.animate({ scrollTop: ($("#slide-" + slideId).offset().top + customSlideOffset) + 'px' }, 'slow');

				}

			}
		}


	}

})(jQuery);
