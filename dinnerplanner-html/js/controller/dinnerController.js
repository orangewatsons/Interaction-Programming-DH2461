var DinnerController = function(view, model){
	
	var displayOverview = function(){
		document.getElementById('dinnerView').style.display = 'none';
		document.getElementById('dishListView').style.display = 'none';
		document.getElementById('dishView').style.display = 'none';

		document.getElementById('dinnerOverviewView').style.display = 'block';
	}

	view.confirmDinner.onclick = function(){
		displayOverview();
	};

	view.numOfGuests.oninput = function(){
		model.setNumberOfGuests(view.numOfGuests.value);
	};

}