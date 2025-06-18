document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu img');
    const menu = document.querySelector('.hamburger-menu ul');
    
    let menuVisible = false;
    
    hamburger.addEventListener('click', function() {
        menuVisible = !menuVisible;
        menu.style.display = menuVisible ? 'block' : 'none';
    });

    hamburger.addEventListener('mouseover', function() {
        menuVisible = true;
        menu.style.display = 'block';
    });

    hamburger.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!menu.matches(':hover') && !hamburger.matches(':hover')) {
                menuVisible = false;
                menu.style.display = 'none';
            }
        }, 500);
    });

    menu.addEventListener('mouseover', function() {
        menuVisible = true;
        menu.style.display = 'block';
    });

    menu.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!hamburger.matches(':hover') && !menu.matches(':hover')) {
                menuVisible = false;
                menu.style.display = 'none';
            }
        }, 500);
    });
});

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    const productContainer = document.getElementById('product-container');

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        productContainer.style.height = ''; // Reset height
    } else {
        dropdownContent.style.display = 'block';
        productContainer.style.height = productContainer.scrollHeight + dropdownContent.scrollHeight + 'px'; // Adjust height
    }
}