var DinnerController = function(view, model){
	
	view.confirmDinner.click(function(e){
		document.getElementById('dinnerView').style.display = 'none';
		document.getElementById('dishListView').style.display = 'none';
		document.getElementById('dishView').style.display = 'none';

		document.getElementById('dinnerOverviewView').style.display = 'block';
	});
}