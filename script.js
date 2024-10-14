// Select DOM elements
const usernameInput = document.getElementById('username');
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Function to display saved name
function displaySavedName() {
    const savedName = localStorage.getItem('username'); // Get saved name from localStorage
    if (savedName) {
        displayName.innerText = savedName; // Display the saved name if it exists
    }
}

// Event listener for the "Save Name" button
saveButton.addEventListener('click', function() {
    const username = usernameInput.value; // Get the input value
    if (username) {
        localStorage.setItem('username', username); // Save the name to localStorage
        displayName.innerText = username; // Display the saved name
    }
});

// Event listener for the "Clear Name" button
clearButton.addEventListener('click', function() {
    localStorage.removeItem('username'); // Remove the saved name from localStorage
    displayName.innerText = ''; // Clear the displayed name
    usernameInput.value = ''; // Clear the input field
});

// Check for saved name when the page loads
window.onload = displaySavedName;
