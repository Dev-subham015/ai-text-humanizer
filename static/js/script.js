const active = () => {
  const navmenu = document.querySelector(".nav-menu");
  navmenu.classList.toggle("active");

  const burger = document.querySelector(".burger i");

  if (burger.classList.contains("fa-bars")) {
    burger.classList.remove("fa-bars");
    burger.classList.add("fa-xmark");
  } else {
    burger.classList.add("fa-bars");
    burger.classList.remove("fa-xmark");
  }
};

// Close nav-menu when clicking outside of it
document.addEventListener('click', (event) => {
  const navmenu = document.querySelector('.nav-menu');
  const burger = document.querySelector('.burger');
  
  if (!navmenu.contains(event.target) && !burger.contains(event.target)) {
    if (navmenu.classList.contains('active')) {
      navmenu.classList.remove('active');
      const burgerIcon = document.querySelector('.burger i');
      burgerIcon.classList.add('fa-bars');
      burgerIcon.classList.remove('fa-xmark');
    }
  }
});

// Toggle dropdown menu for Tools
document.addEventListener('click', (event) => {
  const toolsDropdown = document.getElementById('tools-dropdown');
  const dropdownMenu = toolsDropdown.querySelector('.dropdown-menu');
  const toolsIcon = document.getElementById('tools-icon');

  if (toolsDropdown.contains(event.target)) {
    dropdownMenu.classList.toggle('active');

    // Toggle icon between open and close states
    if (dropdownMenu.classList.contains('active')) {
      toolsIcon.classList.remove('fa-angle-down');
      toolsIcon.classList.add('fa-angle-up');
    } else {
      toolsIcon.classList.remove('fa-angle-up');
      toolsIcon.classList.add('fa-angle-down');
    }
  } else {
    // Close dropdown when clicking outside
    dropdownMenu.classList.remove('active');
    toolsIcon.classList.remove('fa-angle-up');
    toolsIcon.classList.add('fa-angle-down');
  }
});
