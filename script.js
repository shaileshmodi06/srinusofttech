
document.addEventListener('DOMContentLoaded', function(){

    // wow initiation
    // new WOW().init();

    // navigation bar toggle
   // Select the navbar toggler button
    const navbarToggler = document.querySelector('#navbar-toggler');

    // Add a click event listener to the navbar toggler
    navbarToggler.addEventListener('click', function() {
        // Toggle the visibility of the navbar collapse
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('show'); // Assuming 'show' class controls the display
    });
    // navbar bg change on scroll
// Function to handle scroll event
    function handleScroll() {
        // Get the current scroll position
        let pos = window.scrollY;

        // Check if the scroll position is greater than or equal to 100
        if (pos >= 100) {
            // Add the 'cng-navbar' class to the navbar
            document.querySelector('.navbar').classList.add('cng-navbar');
        } else {
            // Remove the 'cng-navbar' class from the navbar
            document.querySelector('.navbar').classList.remove('cng-navbar');
        }
    }

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // sample video popup
    document.addEventListener('DOMContentLoaded', function() {
        var popupElements = document.querySelectorAll('.popup-youtube');
        
        popupElements.forEach(function(element) {
            element.magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
    });

    // team carousel 
    var teamCarousel = document.querySelector('.team.owl-carousel');
        
    teamCarousel.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {items: 1},
            600: {items: 2},
            1000: {items: 3}
        }
    });

    // faq accordion
    var faqHeads = document.querySelectorAll('.faq-head');

    faqHeads.forEach(function(faqHead) {
        faqHead.addEventListener('click', function(event) {
            var nextElement = event.target.nextElementSibling;
            nextElement.classList.toggle('show-faq-content');

            var icon = event.target.children[0].children[0].className;
            if (icon === "fas fa-plus") {
                event.target.innerHTML = '<i class="fas fa-minus"></i>';
            } else {
                event.target.innerHTML = '<i class="fas fa-plus"></i>';
            }
        });
    });
    // testimonial carousel 
    var testimonialCarousel = document.querySelector('.testimonial.owl-carousel');
        
        testimonialCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            items: 1
        });



});


