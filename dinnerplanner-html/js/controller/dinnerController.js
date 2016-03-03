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

	view.dinnerTable.on('click', 'img', function() {
		var dishElement = $(this);
		console.log(dishElement.attr('id'));

		var position = dishElement.attr("id")[dishElement.attr("id").length-1];
		model.getFullMenu().splice(position,1);
		model.notifyObservers();
	});


}