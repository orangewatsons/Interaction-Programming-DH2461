var DishListController = function(view, model){

	var displayDish = function(){
		document.getElementById('dishListView').style.display = 'none'
		document.getElementById('dishView').style.display = 'block'
	};

	this.loadDish = function(){
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

	this.loadDish();
	
	this.update = function(){
		this.loadDish();
	}

	view.searchBtn.click(function(){
		alert("searchBtn");
		view.loadSelection();
		update();
	});

	model.addObserver(this);
}