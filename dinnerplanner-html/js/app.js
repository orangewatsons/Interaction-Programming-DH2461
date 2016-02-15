$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);

	var homeView = new HomeView($('#homeView'), model);
	var homeController = new HomeController(homeView, model);

	var dishListView = new DishListView($('#dishListView'), model);
	var dishListController = new DishListController(dishListView, model);

	var dinnerView = new DinnerView($('#dinnerView'), model);
	var dinnerController = new DinnerController(dinnerView, model);

	var dishView = new DishView($('#dishView'), model);
	var dishController = new DishController(dishView, model);

	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model);

	var instructionsView = new InstructionsView($('#instructionsView'), model);
	var instructionsController = new InstructionsController(instructionsView, model);

});