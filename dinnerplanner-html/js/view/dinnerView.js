var DinnerView = function(container, model){

	this.confirmDinner = document.getElementById('confirmDinner');
	this.numOfGuests = document.getElementById('numOfGuests');
	this.dinnerTable = container.find("#dinnerTable");
	var dinnerCost = document.getElementById("dinnerCost");

	function loadDinner(){
		while(dinnerTable.rows.length > 0){
			dinnerTable.deleteRow(0);
		}

		for(var i=0; i < model.getFullMenu().length; i++){
			var row = dinnerTable.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
		
			cell1.innerHTML = model.getFullMenu()[i].name;
			cell2.innerHTML = model.getSelectedDishCost(i) + "<img style='cursor:pointer;' src='images/circle-close.png' class='deleteBtn' id='closeBtn" + [i] + "'>";		
		}
		dinnerCost.innerHTML = model.getTotalMenuPrice();

		if(model.getFullMenu() != undefined && model.getFullMenu().length != 0){
			var closeBtns = dinnerTable.getElementsByTagName("img");
			
			for(var i=0; i<closeBtns.length; i++){
				
				
				var btn = closeBtns[i];
				btn.onclick = function(){
					//alert(model.getFullMenu().length);
					//alert(i);
					
					/* Get the exact */

					var position=$(this).attr("id")[$(this).attr("id").length-1];
					//alert(position);
					model.getFullMenu().splice(position,1);


					/* delete from the bottom
					var result= model.getFullMenu().pop();
					alert(result.name);
					*/


					//alert(model.getFullMenu());
					//model.getFullMenu().splice(i,1); //this line is not working, not sure why...???
					//model.removeDishFromMenu(i);
					
					model.notifyObservers();
					//dinnerTable.deleteRow(i);
				};
				
			}
		}
	};

	this.update = function(){
		loadDinner();
	}

	loadDinner();

	model.addObserver(this);
}