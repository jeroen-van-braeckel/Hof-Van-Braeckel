document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuDialog = document.getElementById('menuDialog');
    const closeDialog = document.getElementById('closeDialog');
  
    // Open the menu dialog when the button is clicked
    menuButton.addEventListener('click', function () {
      menuDialog.style.display = 'flex';
    });
  
    // Close the dialog when the "X" button is clicked
    closeDialog.addEventListener('click', function () {
      menuDialog.style.display = 'none';
    });
  
    // Close the dialog when clicking outside of it
    window.addEventListener('click', function (event) {
      if (event.target === menuDialog) {
        menuDialog.style.display = 'none';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuDialog = document.getElementById('menuDialog');
    const closeDialog = document.getElementById('closeDialog');
    
    const reservationDialog = document.getElementById('reservationDialog');
    const closeReservationDialog = document.getElementById('closeReservationDialog');
    const reservationMessage = document.getElementById('reservationMessage');
  
    // Open the vegan menu dialog when the button is clicked
    menuButton.addEventListener('click', function () {
      menuDialog.style.display = 'flex';
    });
  
    // Close the vegan menu dialog
    closeDialog.addEventListener('click', function () {
      menuDialog.style.display = 'none';
    });
  
    // Close the reservation dialog
    closeReservationDialog.addEventListener('click', function () {
      reservationDialog.style.display = 'none';
    });
  
    // Close any dialog when clicking outside of it
    window.addEventListener('click', function (event) {
      if (event.target === menuDialog) {
        menuDialog.style.display = 'none';
      } else if (event.target === reservationDialog) {
        reservationDialog.style.display = 'none';
      }
    });
  
    // Check URL query parameters to see if the reservation should be shown
    const urlParams = new URLSearchParams(window.location.search);
    const showReservation = urlParams.get('reservation');
    const guestName = urlParams.get('name'); // Fetch the name parameter
  
    if (showReservation === 'confirmed') {
      let message = `Uw reservering voor 30 september is bevestigd.`;
      
      // If the name is provided, include it in the message
      if (guestName) {
        message = `Geachte ${guestName},`;
      }
  
      reservationMessage.textContent = message ;
      reservationDialog.style.display = 'flex';
    }
  });
  