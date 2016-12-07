//giphy public API key: dc6zaTOxFJmzC

//define global variables
//display array of animals as buttons
//user can click a button, and gifs tagged with that name will appear
//rating info should appear as text  
//user can add a new animal. pull text from 'add animal field' and render button, add to end of button list
//add capability for new button to search for gifs tagged with that animal and gif rating
//on click, gif can begin to run then stop when clicked again (screenshot)




// GLOBAL VARIABLES =======================================

//initial array of animals 
var animals = ["alligator", "dog", "hippopotamus", "rat", "ant", "dolphin", "horse", "scorpion", "bear", "duck", "kangaroo", "seal"];

//FUNCTIONS =======================================

	// display animalInfo function re-renders the HTML to display the appropriate content
	function displayAnimalInfo() {

		var animal = $(this).attr("data-name");
		console.log("animal= " + animal);
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
		console.log("queryURL= " + queryURL);
			//creating AJAX call for specific animal button being called
			$.ajax({ url: queryURL, method: "GET" }).done(function(response) {
			console.log(response);
				//creating a div to hold the gifs (I already have a div created in html file #gifs-view)
				//var gifDiv = $("<div class='gif'>");

				for (var index = 0; index < response.data.length; index++) {
					//storing the rating data
					var rating = response.data[index].rating;  
					console.log(rating);

					var image = response.data[index].images.downsized.url;
					console.log(image);

					//add rating to page 
					$("#gifs-view").append("Rating: " + rating);

					//add gifs to page 
					$("#gifs-view").append("<img src='" + image + "'>");
					console.log(image);
				}

			});

	}

	//function for displaying array buttons
	function renderButtons() {
		console.log("starting function render buttons");

		//deleting previously entered text prior to adding new text 
		$("#buttons-view").empty();

		//looping through the array of animals 
		console.log(animals[5]);
		for (var index = 0; index < animals.length; index++) {
			console.log("entering loop, currently at index= " + index);
			//dynamically generating buttons for each animal in the array
			var animalButton = $("<button>");
			//adding a class of animal to button
			animalButton.addClass("animal");
			//adding a data-attribute ?
			animalButton.attr("data-name", animals[index]);
			//providing the initial button text
			animalButton.text(animals[index]);
			//adding button to the buttons-view div
			$("#buttons-view").append(animalButton);
		}

	}


	//this function handles new animal button added 
	$("#addAnimal").on("click", function(event) {
		event.preventDefault();
		//grab input from the textbox
		var animal = $("#animal-input").val().trim();
		//add new animal from the textbox to our array
		animals.push(animal);
		//clear text box after submitting
		$("#animal-input").val("");
		console.log("#addAnimal= " + addAnimal)
		//calling renderButtons to handle the processing of animals array
		renderButtons();
	

	});


		// Adding a click event listener to all elements with a class of "animal"
		$(document).on("click", ".animal", displayAnimalInfo);



		// calling render buttons
		renderButtons();



//MAIN PROCESSES =======================================







