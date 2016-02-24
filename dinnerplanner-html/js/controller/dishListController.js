var DishListController = function(view, model){
	
	view.searchBtn.onclick = function(){
		view.update();
		loadDish();
	};

	/*function startAjax(){
		$.ajax({
			
		});
	};*/

	var displayDish = function(){
		document.getElementById('dishListView').style.display = 'none'
		document.getElementById('dishView').style.display = 'block'
	};

	var loadDish = function(){
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

	this.update = function(){
		loadDish();
	}

	loadDish();

	model.addObserver(this);
}