var HomeController = function(view, model){

	document.getElementById('dinnerView').style.display = 'none';
	document.getElementById('dishListView').style.display = 'none';
	document.getElementById('dishView').style.display = 'none';
	document.getElementById('dinnerOverviewView').style.display = 'none';
	document.getElementById('instructionsView').style.display = 'none';

	view.btnCreate.click(function(e){
		document.getElementById('homeView').style.display = 'none';
		document.getElementById('homePage').className = "none";

		document.getElementById('dinnerView').style.display = 'block';
		document.getElementById('pending').style.display = 'none';
		document.getElementById('dishListView').style.display = 'block';
	});
}
