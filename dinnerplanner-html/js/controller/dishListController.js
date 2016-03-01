var DishListController = function(view, model){

	var displayDish = function(){
		document.getElementById('dishListView').style.display = 'none'
		document.getElementById('dishView').style.display = 'block'

		document.getElementById('pending').style.display = 'block';
	};

	/*function loadDish(){
		var images = view.dishList.getElementsByTagName("img");
		for(var i=0; i<images.length; i++){
			var img = images[i];
			img.onclick = function(){
				alert(1);
				model.setFocusedID(this.id);
				model.notifyObservers();
				//displayDish();
				//model.getRecipe(723582);
			};
		}
	};*/

	//function for big oven data
	$(document).ready(function(){
    	$('#dishList').delegate('img', 'click', function (){
    		var clickedID = $(this).attr('id');
    		model.setFocusedID(clickedID);
    		model.notifyObservers();
    		displayDish();
		});
	});


	
	//loadDish();

	this.update = function(){
		model.focusedID;
	}

	view.searchBtn.click(function(){
		view.loadSelection();
		//loadDish();
	});

	model.addObserver(this);
}