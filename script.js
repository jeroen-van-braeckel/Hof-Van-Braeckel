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
  