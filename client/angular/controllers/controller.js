angular.module('ui.bootstrap').controller('CarouselCtrl', function($scope) {
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	var slides = $scope.slides = [];
	var currIndex = 0;
	console.log("IN CAROUSEL CTRL");
	$scope.addSlide = function() {
		var newWidth = slides.length + 1;
		slides.push({
			image : '/car' + newWidth + '.jpg',
			text: ["Car 1","Car 2", "Car 3"][slides.length%3],
			id: currIndex++
		});
	};

	$scope.randomize = function() {
		var indexes = generateIndexesArray();
		assignNewIndexesToSlides(indexes);
	};

	for (var i = 0; i < 3; i++) {
		$scope.addSlide();
		console.log("SLIDE ADDED")
	}

	function assignNewIndexesToSlides(indexes) {
		for(var i = 0, l = slides.length; i < l; i++) {
			slides[i].id = indexes.pop();
		}
	}

	function generateIndexesArray() {
		var indexes = [];
		for (var i = 0; i < currIndex; i++) {
			indexes[i] = i;
		}
		return shuffle(indexes);
	}

	function shuffle(array) {
		var tmp, current, top = array.length;

		if(top) {
			while(--top) {
				current = Math.floor(Math.random() * (top + 1));
				tmp = array[current];
				array[current] = array[top];
				array[top] = tmp;
			}
		}
		return array;
	}
});

angular.module('ui.bootstrap').controller('TabCtrl', function($scope, $window) {
	$scope.tabs = [
		{title: "Window Tinting", content: "Window Tint stuff"},
		{title: "Paint Protection", content: "PPF stuff"}
	];

	$scope.model = {
		name: "Tabs"
	};
});