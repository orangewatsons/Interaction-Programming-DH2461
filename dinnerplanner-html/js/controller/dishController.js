var DishController = function(view, model){
	
	var backToSelectDish = function(){
		document.getElementById('dishListView').style.display = 'block';
		document.getElementById('dishView').style.display = 'none';
	}

	view.backBtn.onclick = function(){
		backToSelectDish();

		document.getElementById('pending').style.display = 'none';
	}

	view.confirmBtn.onclick = function(){
		model.addDishToMenu(model.getFocusedID());
		document.getElementById('dishListView').style.display = 'none';
		document.getElementById('dishView').style.display = 'block';

		document.getElementById('pending').style.display = 'none';
	}

}