var DinnerOverviewView = function(container, model){
	
	this.goBackBtn = document.getElementById('goBackBtn');
	this.recipeBtn = document.getElementById('recipeBtn');
	this.numberOfGuests2 = document.getElementById('numberOfGuests');

	this.overview = document.getElementById('overview');
	
	this.totalCost = container.find("#totalCost");
	

	var loadOverview = function(){

		numberOfGuests2.innerHTML = model.getNumberOfGuests();

		var menu = model.getFullMenu();
		overview.innerHTML = "";

		if (menu != undefined && menu.length != 0) {
			for(var i=0; i<menu.length; i++){
				var imgList = document.createElement("li");

				var dishImg = document.createElement("img");
				dishImg.setAttribute('id', model.getFullMenu()[i][0]);
				

				dishImg.src =  model.getFullMenu()[i][3];

				var dishTitle = document.createElement("h5");
				dishTitle.innerHTML = model.getFullMenu()[i][1];

				var dishCost = document.createElement("p");
			
				dishCost.innerHTML = "SEK " + model.getFullMenu()[i][2]*model.getNumberOfGuests();
				
				imgList.appendChild(dishImg);
				imgList.appendChild(dishTitle);
				imgList.appendChild(dishCost);
				overview.appendChild(imgList);
				
				totalCost.innerHTML = "SEK " + model.getDinnerCost();
				
			}
			
			
		}
	}

	loadOverview();

	this.update = function(){
		loadOverview();
	}

	model.addObserver(this);
};

