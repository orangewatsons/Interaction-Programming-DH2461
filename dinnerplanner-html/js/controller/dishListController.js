var DishListController = function(view, model){
	
	view.searchBtn.click(function(){
		model.notifyObservers();
		view.loadSelection();
	});

	var displayDish = function(){
		document.getElementById('dishListView').style.display = 'none'
		document.getElementById('dishView').style.display = 'block'
	};

	var loadDish = function(){
		var images = view.dishList.getElementsByTagName("img");
		for(var i=0; i<images.length; i++){
			var img = images[i];
			img.onclick = function(){
				//var x=images[i].getAttributeNode("id").value;
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

	model.addObserver(this);
}