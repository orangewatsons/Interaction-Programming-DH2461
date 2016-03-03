//DinnerModel Object constructor
var DinnerModel = function() {
 	var observers = [];
 	var focusedID = 1;
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var numberOfGuests = 1;
	var selectedDishes = [];

	//lab3
	this.addObserver = function(observer){
		observers.push(observer);
	}
	
	this.notifyObservers = function(obj){
		for(var i=0; i < observers.length ; i++){
			observers[i].update();
		}
	}

	this.setFocusedID = function(newID){
		focusedID = newID;
	}
	
	this.getFocusedID = function(){
		return focusedID;
	}

	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		numberOfGuests = num;
		this.notifyObservers();
	}

	// should return 
	this.getNumberOfGuests = function() {
		//TODO Lab 2
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 2
		switch(type){
			case 'starter':
				return selectedDishes[0];
				break;
			case 'main dish':
				return selectedDishes[1];
				break;
			case 'dessert':
				return selectedDishes[2];
				break;
			default:
				return null;
		}
	}
	

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 2
		return selectedDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2
		var allIngredients = [];
		var j;

		if(selectedDishes != undefined && selectedDishes.length != 0){
			for(var i=0; i<selectedDishes.length; i++){
				for(var j=0; j<selectedDishes[i].ingredients.length; j++){
					allIngredients[allIngredients.length] = selectedDishes[i].ingredients[j];
				}
			}
		}
		return allIngredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		var total = 0;
		var allIngredients = this.getAllIngredients();

		for(var i in allIngredients){
			total += (allIngredients[i].price * numberOfGuests);
		}

		return total;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	//the static one
	this.addDishToMenuStatic = function(id) {
		var newDish = this.getRecipe(id);
		switch(newDish.Category){
			case 'Appetizers':
				selectedDishes[0] = newDish;
				break;
			case 'Main Dish':
				selectedDishes[1] = newDish;
				break;
			case 'Desserts':
				selectedDishes[2] = newDish;
				break;
			default:
				break;
		}

		$('#confirmDinner').attr('disabled', false);

		this.notifyObservers();
	}
	
	this.addDishToMenu= function(id){
	
		var id =$("#ingredientsCost").attr("rawid");
		var title=$("#ingredientsCost").attr("rawname");
		var cost=$("#ingredientsCost").attr("rawcost");
		var img=$("#ingredientsCost").attr("rawimg");
		var instructions=$("#ingredientsCost").attr("rawinstructions");
		
		if(selectedDishes.length==0||selectedDishes==="undefined"){
			selectedDishes[0]=[id,title,cost,img,instructions];
			
			
		}else{
			selectedDishes.push([id,title,cost,img,instructions]);		
			
		}
		
		
		
		$('#confirmDinner').attr('disabled', false);
		this.notifyObservers();
		
		
	}
	

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 2
		delete selectedDishes[id];
		/*for(var i=0; i<selectedDishes.length; i++){
			if(selectedDishes[i].id === id){
				delete selectedDishes[i];
			}
		}*/
		this.notifyObservers();
	}

	
	
	
	
	
	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {

	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter!=""){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
	

	this.getDishCost = function(id){
		var totalCost = 0;
		var dish = this.getDish(id);

		for(var i=0; i<dish.ingredients.length; i++){
			totalCost += (dish.ingredients[i].price * numberOfGuests);
		}
		return totalCost;
	}
	
	//function that returns the total cost of selected Dish
	this.getDinnerCost=function(){
		var cost=0;
		for (var i=0;i<selectedDishes.length;i++){
			cost+=parseFloat(selectedDishes[i][2]);
		}

		return cost*numberOfGuests;
	}
	

	/*After the change of using dynamic data, it seems no need to use this function
	 * because now the cost is a number that stored in the selectedDish array.
	 */this.getSelectedDishCost = function(position){
		var cost = 0;

		for(var i=0; i<selectedDishes[position].ingredients.length; i++){
			
			cost+= (parseInt(selectedDishes[position][2]));
		}

		return cost;
	}

	 
	 
	 
	this.getNewDishes = function(keyword, category){
		var apiKey = "XKEdN82lQn8x6Y5jm3K1ZX8L895WUoXN";
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&any_kw="
                  + keyword 
                  + "&category=" + category + "&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
  			
                for(var i in data.Results){

                	var imgList = document.createElement("li");

                	var dishImg = document.createElement("img");
                	dishImg.setAttribute('id', data.Results[i].RecipeID);
                	dishImg.src = data.Results[i].ImageURL120;

					var dishTitle = document.createElement("h5");
					dishTitle.innerHTML = data.Results[i].Title;

                	imgList.appendChild(dishImg);
					imgList.appendChild(dishTitle);
                	$("#dishList").append(imgList);
                }
            }
        });
	}

	this.getRecipe = function(ID){
		var apiKey = "XKEdN82lQn8x6Y5jm3K1ZX8L895WUoXN";
        var url = "http://api.bigoven.com/recipe/"
                  + ID + "?api_key="+apiKey+ "&pg=1&rpp=10";
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
  				console.log(data);
  				
  				$("#dishName").html(data.Title);
  				$("#dishImg").attr("src", data.ImageURL);
  				$("#dishDescr").html(data.Description);

  				$("#ingredientsTable tr:gt(0)").remove();

				for(var i in data.Ingredients){
					var row = $('<tr>');
					row.append($("<td>").text(data.Ingredients[i].Quantity + data.Ingredients[i].Unit));
					row.append($("<td>").text(data.Ingredients[i].Name));
					row.append($("<td>").text(numberOfGuests));
					$("#ingredientsTable").append(row);
				}
				
				$("#ingredientsCost").html(data.Ingredients.length * numberOfGuests);	
				$("#ingredientsCost").attr("rawid",data.RecipeID);
				$("#ingredientsCost").attr("rawname",data.Title);
				$("#ingredientsCost").attr("rawcost",data.Ingredients.length);
				$("#ingredientsCost").attr("rawimg",data.ImageURL);
				$("#ingredientsCost").attr("rawinstructions", data.Instructions);
				
				

            }
        });
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}