var InstructionsView = function(container, model){
	
	this.goBackBtn2 = document.getElementById('goBackBtn2');
	this.recipeTable = document.getElementById('recipeTable');
	this.numberOfGuests3 = document.getElementById('numberOfGuests3');

	var loadFullRecipe = function(){
		
		numberOfGuests3.innerHTML = model.getNumberOfGuests();

		var menu = model.getFullMenu();

		while (recipeTable.rows.length > 0){
			recipeTable.deleteRow(0);
		}

		if(menu != undefined && menu.length != 0){
			for(var i=0; i<menu.length; i++){
				var row = recipeTable.insertRow(-1);
				var cell0 = row.insertCell(0);
				var cell1 = row.insertCell(1);
				var cell2 = row.insertCell(2);
			 
				var dishImg = document.createElement("img");
				dishImg.src = model.getFullMenu()[i][3];
				dishImg.style.height = '150px';
    			dishImg.style.width = '150px';
				cell0.appendChild(dishImg);

				var dishTitle = document.createElement("h4");
				dishTitle.innerHTML = model.getFullMenu()[i][1];
				cell1.appendChild(dishTitle);

				cell2.innerHTML = model.getFullMenu()[i][4];
			}
		}
	}

	loadFullRecipe();

	this.update = function(){
		loadFullRecipe();
	}

	model.addObserver(this);
}