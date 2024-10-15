let trafficLightRed = document.getElementsByClassName("traffic-light-red")[0];
let trafficLightYellow = document.getElementsByClassName("traffic-light-yellow")[0];
let trafficLightGreen = document.getElementsByClassName("traffic-light-green")[0];

let currentColorIndex = 0; 
let trafficColors = ["Red", "orange", "Green"];
let messages = ["STOP", "SLOW DOWN", "Go!"];

function changeColor() {
    // Set opacity for all traffic lights to make them faint
    trafficLightRed.style.opacity = "0.1";
    trafficLightYellow.style.opacity = "0.1";
    trafficLightGreen.style.opacity = "0.1";

    // Clear the messages inside each traffic light
    trafficLightRed.innerHTML = "";
    trafficLightYellow.innerHTML = "";
    trafficLightGreen.innerHTML = "";

    // Get the current color
    let lightColor = trafficColors[currentColorIndex];

    // Display the appropriate traffic light and message
    switch (lightColor) {
        case "Red":
            trafficLightRed.style.opacity = "1"; // Full opacity
            trafficLightRed.innerHTML = messages[0]; 
            break;
        case "orange":
            trafficLightYellow.style.opacity = "1"; // Full opacity
            trafficLightYellow.innerHTML = messages[1]; 
            // trafficLightYellow.style.color = "white"; 
            break;
        case "Green":
            trafficLightGreen.style.opacity = "1"; // Full opacity
            trafficLightGreen.innerHTML = messages[2]; 
            break;
        default:
            console.log("Invalid traffic light color.");
            break;
    }

    // Move to the next color
    currentColorIndex = (currentColorIndex + 1) % trafficColors.length;
}

// Change color every 5 seconds using setInterval
setInterval(changeColor, 5000);
