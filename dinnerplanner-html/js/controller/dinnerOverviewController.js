var DinnerOverviewController = function(view, model){
	
	var backToEditDish = function(){
		document.getElementById('dinnerOverviewView').style.display = 'none';

		document.getElementById('dinnerView').style.display = 'block';
		document.getElementById('dishListView').style.display = 'block';
	}

	view.goBackBtn.onclick = function(){
		backToEditDish();
	};

	var printFullRecipe = function(){
		document.getElementById('dinnerOverviewView').style.display = 'none';

		document.getElementById('instructionsView').style.display = 'block';
	}

	view.recipeBtn.onclick = function(){
		printFullRecipe();
	};
}