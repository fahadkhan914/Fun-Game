// JavaScript to make the "No" button switch places with "Yes" when clicked
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// Track if buttons are in swapped position
let isSwapped = false;

noButton.addEventListener("mouseover", () => {
    // Toggle between swapped and original position
    if (isSwapped) {
        // Revert to the original position
        yesButton.style.transform = "translateX(0)";
        noButton.style.transform = "translateX(0)";
    } else {
        // Swap to the other side within a fixed distance
        yesButton.style.transform = "translateX(100px)";
        noButton.style.transform = "translateX(-100px)";
    }
    // Toggle the swapped state
    isSwapped = !isSwapped;
});


// Action when "Yes" button is clicked
yesButton.addEventListener("click", () => {
    alert("Yay! I knew you'd say yes! itz._.fahad_khan : is my insta id msg me");
});
