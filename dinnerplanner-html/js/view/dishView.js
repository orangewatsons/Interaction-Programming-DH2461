var DishView = function(container, model){
	
	this.backBtn = document.getElementById('backBtn');
	this.dishName = document.getElementById('dishName');
	this.dishImg = document.getElementById('dishImg');
	this.dishDescr = document.getElementById('dishDescr');

	this.numberOfGuests = document.getElementById('numberOfGuests');
	this.ingredientsTable = document.getElementById('ingredientsTable');
	this.totalCost = document.getElementById('totalCost');
	this.confirmBtn = document.getElementById('confirmBtn');

	var loadDishInfo = function(){
		dishName.innerHTML = model.getDish(model.getFocusedID()).name;
		dishImg.src = "images/" + model.getDish(model.getFocusedID()).image;
		dishDescr.innerHTML = model.getDish(model.getFocusedID()).description;
		numberOfGuests.innerHTML = model.getNumberOfGuests();

		for(var i=0; i<model.getDish(model.getFocusedID()).ingredients.length; i++){
			var row = ingredientsTable.insertRow(-1);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
		 
			cell0.innerHTML = model.getDish(model.getFocusedID()).ingredients[i].quantity + model.getDish(model.getFocusedID()).ingredients[i].unit;
			cell1.innerHTML = model.getDish(model.getFocusedID()).ingredients[i].name;
			cell2.innerHTML = model.getDish(model.getFocusedID()).ingredients[i].price;
		}
	}
	loadDishInfo();
}