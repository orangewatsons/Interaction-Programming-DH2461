var DishListController = function(view, model){

	var displayDish = function(){
		document.getElementById('dishListView').style.display = 'none'
		document.getElementById('dishView').style.display = 'block'

		document.getElementById('pending').style.display = 'block';
	};

	function loadDish(){
		var images = view.dishList.getElementsByTagName("img");
		for(var i=0; i<images.length; i++){
			var img = images[i];
			img.onclick = function(){
				model.setFocusedID(this.id);
				model.notifyObservers();
				displayDish();
			};
		}
	};

	loadDish();
	
	this.update = function(){
		loadDish();
	}

	view.searchBtn.click(function(){
		view.loadSelection();
		loadDish();
	});

	model.addObserver(this);
}