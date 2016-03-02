var InstructionsController = function(view, model){
	
	var backToEditDish = function(){
		document.getElementById('instructionsView').style.display = 'none';

		document.getElementById('dinnerView').style.display = 'block';
		document.getElementById('dishListView').style.display = 'block';
	}

	view.goBackBtn2.onclick = function(){
		backToEditDish();
	};
}