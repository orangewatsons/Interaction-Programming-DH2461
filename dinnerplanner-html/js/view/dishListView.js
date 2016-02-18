var DishListView = function(container, model){
	
	this.searchQuery = container.find("#searchQuery");
	this.searchBtn = container.find("#searchBtn");
	this.dishType = container.find("#dishType");
	
	this.dishList = document.getElementById("dishList");

	var loadSelection = function(){
		var result = model.getAllDishes(dishType.value, searchQuery.value);
	
		for(var i=0; i<result.length; i++){
			var imgList = document.createElement("li");

			var dishImg = document.createElement("img");
			dishImg.setAttribute('id', result[i].id);
			dishImg.src = "images/" + result[i].image;

			var dishTitle = document.createElement("h5");
			dishTitle.innerHTML = result[i].name; 

			/*var dishDescr = document.createElement("p");
			dishDescr.innerHTML = result[i].description;*/

			imgList.appendChild(dishImg);
			imgList.appendChild(dishTitle);
			dishList.appendChild(imgList);
		}
	}
	
	loadSelection();

	this.update = function(){
		//loadSelection();
	}

	model.addObserver(this);
};