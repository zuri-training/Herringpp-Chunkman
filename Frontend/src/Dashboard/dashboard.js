
 // Get the links
 function showHistory() {
  // Show the history panel
  var historyPanel = document.getElementById("history-panel");
  historyPanel.style.display = "block";
} var shareLink = document.getElementById("share-link");
 var ratingsLink = document.getElementById("ratings-link");
 
 function toggleNotifications() {
  // Toggle the visibility of the notifications panel
  var notificationsPanel = document.getElementById("notifications-panel");
  if (notificationsPanel.style.display === "none") {
    notificationsPanel.style.display = "block";
  } else {
    notificationsPanel.style.display = "none";
  }
}
 // Add click event listeners to the links
 historyLink.addEventListener("click", function() {
   // code to handle the click event on the "History" link goes here
 });
 shareLink.addEventListener("click", function() {
   // code to handle the click event on the "Share" link goes here
 });
 ratingsLink.addEventListener("click", function() {
   // code to handle the click event on the "Ratings" link goes here
 });
     // Get the user name element
     var userNameElement = document.getElementById("user-name");

     // Get the user name from a server or from some other source
     var userName = "John";
 
     // Set the user name in the element
     userNameElement.textContent = "Hello " + userName;
 