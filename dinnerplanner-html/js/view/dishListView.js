var DishListView = function(container, model){
	
	this.searchQuery = container.find("#searchQuery");
	this.searchBtn = container.find("#searchBtn");
	this.dishType = container.find("#dishType");
	
	this.dishList = document.getElementById("dishList");
	
	this.loadSelection = function(){

		dishList.innerHTML="";
		var searchQuery=document.getElementById("searchQuery").value;
		var dishType=document.getElementById("dishType").value;
		
		var result = model.getAllDishes(dishType, searchQuery);
	
		for(var i=0; i<result.length; i++){
			var imgList = document.createElement("li");

			var dishImg = document.createElement("img");
			dishImg.setAttribute('id', result[i].id);
			dishImg.src = "images/" + result[i].image;

			var dishTitle = document.createElement("h5");
			dishTitle.innerHTML = result[i].name; 

			imgList.appendChild(dishImg);
			imgList.appendChild(dishTitle);
			dishList.appendChild(imgList);
		}
	};
	
	this.loadSelection();

	this.update = function(){
		this.loadSelection();
	}

	model.addObserver(this);
};