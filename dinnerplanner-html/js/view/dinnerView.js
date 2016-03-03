var DinnerView = function(container, model){

	this.confirmDinner = document.getElementById('confirmDinner');
	this.numOfGuests = document.getElementById('numOfGuests');
	this.dinnerTable = container.find("#dinnerTable");
	var dinnerCost = document.getElementById("dinnerCost");

	function loadDinner(){
		var dishCost=0;
		while(dinnerTable.rows.length > 0){
			dinnerTable.deleteRow(0);
		}

		for(var i=0; i < model.getFullMenu().length; i++){
			var row = dinnerTable.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
		
			var dishName=model.getFullMenu()[i][1];
			//var dishCost=$("#ingredientsCost").attr("rawcost")*model.getNumberOfGuests();
			
			dishCost= model.getFullMenu()[i][2]* model.getNumberOfGuests();
			//var dishCost = model.getFullMenu()[i][1];
			
			cell1.innerHTML = dishName;
			
			
			cell2.innerHTML = dishCost + "<img style='cursor:pointer;' src='images/circle-close.png' id='closeBtn" + [i] + "'>";		
		}
		
		dinnerCost.innerHTML = model.getDinnerCost();
		
		if(model.getFullMenu() != undefined && model.getFullMenu().length != 0){
			var closeBtns = dinnerTable.getElementsByTagName("img");
			for(var i=0; i<closeBtns.length; i++){
				var btn = closeBtns[i];
				btn.onclick = function(){
					/* Get the exact */
					var position=$(this).attr("id")[$(this).attr("id").length-1];
					model.getFullMenu().splice(position,1);
					model.notifyObservers();
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