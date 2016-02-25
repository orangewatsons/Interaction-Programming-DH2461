var DinnerView = function(container, model){

	this.confirmDinner = document.getElementById('confirmDinner');
	this.numOfGuests = document.getElementById('numOfGuests');
	this.dinnerTable = container.find("#dinnerTable");
	var dinnerCost = document.getElementById("dinnerCost");

	var loadDinner = function(){
		while(dinnerTable.rows.length > 0){
			dinnerTable.deleteRow(0);
		}

		for(var i=0; i < model.getFullMenu().length; i++){
			var row = dinnerTable.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
		
			cell1.innerHTML = model.getFullMenu()[i].name;
			cell2.innerHTML = model.getSelectedDishCost(i);			
		}
		dinnerCost.innerHTML = model.getTotalMenuPrice();
	};

	this.update = function(){
		loadDinner();
	}

	loadDinner();

	model.addObserver(this);
}