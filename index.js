// You will receive from the user a number referring to the month of the year
// -> You must determine the NAME of the corresponding month

// You must know the season based on this number
// -> You must provide the name of the season

// If the entered number is invalid:
// Error message (Invalid month number), error image, red background
// Valid months (1 to 12) -> if it's less than 1 or greater than 12

// If it's correct:
// In the text: "You are in the month of (CORRESPONDING MONTH NAME) and in the season (CORRESPONDING SEASON NAME)"
// In the image: the image corresponding to the season
// In the background (mainContainer) -> Access the classes and assign a color corresponding to the season
// For example: winterColor: "#fff" (white), summerColor: "#fff000" (yellow), etc.
// With these colors, access the classes and assign the corresponding class (use Tailwind)

// Tip --> check previous lessons, and see how to manipulate attributes (image and class)

// Month numbers with the corresponding season:
// 1 to 3 --> winter
// 4 to 6 --> spring
// 7 to 9 --> summer
// 10 to 12 --> fall

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROMPT Receiving the month number from the user using prompt, already converting it to a number with the Number function
var monthNumber = Number(prompt("What's month we are now? (in number)"));

// Checking the name of the corresponding month for the number provided by the user using IF and ELSE
var monthName = null; // Initially declared as null, it will be defined based on the month number

if (monthNumber === 1) {
  monthName = "January";
} else {
  if (monthNumber === 2) {
    monthName = "February";
  } else {
    if (monthNumber === 3) {
      monthName = "March";
    } else {
      if (monthNumber === 4) {
        monthName = "April";
      } else {
        if (monthNumber === 5) {
          monthName = "May";
        } else {
          if (monthNumber === 6) {
            monthName = "June";
          } else {
            if (monthNumber === 7) {
              monthName = "July";
            } else {
              if (monthNumber === 8) {
                monthName = "August";
              } else {
                if (monthNumber === 9) {
                  monthName = "September";
                } else {
                  if (monthNumber === 10) {
                    monthName = "October";
                  } else {
                    if (monthNumber === 11) {
                      monthName = "November";
                    } else {
                      if (monthNumber === 12) {
                        monthName = "December";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// Variables to store the images of the seasons
var seasonImage = null; // We start with null because we don't know yet
var winterImage = "assets/winter.jpg";
var springImage = "assets/spring.jpg";
var summerImage = "assets/summer.jpg";
var fallImage = "assets/fall.jpg";
var errorImage = "assets/error.webp";

// Variables to store the colors of the seasons
var seasonColor = null; // We start with null because we don't know yet
var winterColor = "bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700";
var springColor = "bg-gradient-to-b from-green-400 via-green-600 to-green-950";
var summerColor = "bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-700";
var fallColor = "bg-gradient-to-b from-amber-500 via-amber-700 to-amber-950";
var errorColor = "bg-gradient-to-b from-red-500 via-red-700 to-red-950";

// Checking the season and assigning the corresponding season's color and image
var seasonName = null; // We start with null because we don't know yet

if (monthNumber >= 1 && monthNumber <= 3) {
  seasonName = "Winter"; // If the month is between 1 and 3, it's winte
  seasonImage = winterImage; // Assigning the corresponding season image
  seasonColor = winterColor; // Assigning the corresponding season background color
} else {
  if (monthNumber >= 4 && monthNumber <= 6) {
    seasonName = "Spring"; // Between 4 and 6, it's spring
    seasonImage = springImage;
    seasonColor = springColor;
  } else {
    if (monthNumber >= 7 && monthNumber <= 9) {
      seasonName = "Summer"; // Between 7 and 9, it's summer
      seasonImage = summerImage;
      seasonColor = summerColor;
    } else {
      if (monthNumber >= 10 && monthNumber <= 12) {
        seasonName = "Fall"; // Between 10 and 12, it's fall
        seasonImage = fallImage;
        seasonColor = fallColor;
      } else {
        // If no season is assigned (error)
        seasonImage = errorImage; // Assigning an error image
        seasonColor = errorColor; // Assigning an error background color
      }
    }
  }
}

// Getting the elements of the HTML page
var body = document.getElementById("body");
var cardOutput = document.getElementById("card-output");
var seasonImageOutput = document.getElementById("image-output");
var seasonText = document.getElementById("text-season");

// Changing the background color of the body according to the season
body.className += " " + seasonColor;

// Changing the season image on the page
seasonImageOutput.setAttribute("src", seasonImage);

// Setting the error or success message
var errorMessage = "Error! The month entered is invalid.";
var successMessage = "We are in the month of " + monthName + " and at the season " + seasonName;

// Displaying the correct or incorrect message based on the provided month
if (monthName !== null) {
  seasonText.innerText = successMessage; // If the month is valid, display the success message
} else {
  seasonText.innerText = errorMessage; // If the month is invalid, display the error message
}