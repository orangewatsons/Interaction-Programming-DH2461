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

	var addClose = function(){
		if(model.getFullMenu() != undefined && model.getFullMenu().length != 0){
			document.getElementById("closeBtn0").onclick = function(){
				//model.removeDishFromMenu(0);
				alert("do something!");
			};
			document.getElementById("closeBtn1").onclick = function(){
				//model.removeDishFromMenu(1);
				alert("do something!");
			};
			document.getElementById("closeBtn2").onclick = function(){
				//model.removeDishFromMenu(2);
				alert("do something!");
			};
		}
	}

	addClose();

}