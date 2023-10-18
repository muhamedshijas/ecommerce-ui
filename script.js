const menuIcon = document.querySelector('.nav-menu-icon');
const sidebar = document.getElementById('sidebar');
const closeIcon = document.querySelector('.close-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    console.log("open");
    sidebar.style.right = '0'; // Slide in the sidebar when the menu is clicked
});
closeIcon.addEventListener('click', () => {
    console.log(close);
    sidebar.style.right = '-250px'; // Slide out the sidebar when the close icon is clicked
});
window.addEventListener('resize', () => {

    if (window.innerWidth >= 600) {
        sidebar.style.right = '-100px'; // Hide the sidebar if the screen is wider than 600px
    }
});