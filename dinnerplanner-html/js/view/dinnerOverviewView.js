var DinnerOverviewView = function(container, model){
	
	this.goBackBtn = document.getElementById('goBackBtn');
	this.recipeBtn = document.getElementById('recipeBtn');
	this.numberOfGuests = document.getElementById('numberOfGuests');

	this.starterImg = container.find("#starterImg");
	this.starterName = container.find("#starterName");
	this.starterCost = container.find("#starterCost");
	
	this.mainDishImg = container.find("#mainDishImg");
	this.mainDishName = container.find("#mainDishName");
	this.mainDishCost = container.find("#mainDishCost");
	
	this.dessertImg = container.find("#dessertImg");
	this.dessertName = container.find("#dessertName");
	this.dessertCost = container.find("#dessertCost");
	
	this.totalCost = container.find("#totalCost");
	
	var menu = model.getFullMenu();
	

	var loadOverview = function(){
		//alert(menu.length);

		numberOfGuests.innerHTML = model.getNumberOfGuests();

		if (menu != undefined && menu.length != 0) {

			starterImg.src = "images/" + menu[0].image;
			starterName.innerHTML = menu[0].name;
			starterCost.innerHTML = model.getSelectedDishCost(0);

			mainDishImg.src = "images/" + menu[1].image;
			mainDishName.innerHTML = menu[1].name;
			mainDishCost.innerHTML = model.getSelectedDishCost(1);

			dessertImg.src = "images/" + menu[2].image;
			dessertName.innerHTML = menu[2].name;
			dessertCost.innerHTML = model.getSelectedDishCost(2);		

			totalCost.html(model.getTotalMenuPrice());
		}
	}

	loadOverview();

	this.update = function(){
		loadOverview();
	}

	model.addObserver(this);
};

