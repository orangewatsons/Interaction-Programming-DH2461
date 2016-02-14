var DishController = function(view, model){
	
	var backToSelectDish = function(){
		document.getElementById('dishListView').style.display = 'block'
		document.getElementById('dishView').style.display = 'none'
	}

	view.backBtn.onclick = function(){
		backToSelectDish();
	}
}