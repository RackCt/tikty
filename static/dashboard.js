function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuButton = document.querySelector('.menu button');
    var menuContent = document.getElementById('menuContent');
    if (menu.style.width === '200px') {
        menu.style.width = '50px'; // Collapse menu
        menuContent.style.display = 'none'; // Hide content
        menuButton.innerHTML = '&#10148;'; // Right arrow
        menuButton.style.transform = 'rotate(0deg)';
    } else {
        menu.style.width = '200px'; // Expand menu
        menuContent.style.display = 'flex'; // Show content
        menuButton.innerHTML = '&#10148;'; // Right arrow
        menuButton.style.transform = 'rotate(180deg)'; // Rotate arrow
    }
}
