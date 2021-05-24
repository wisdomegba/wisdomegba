// $('#recipeCarousel').carousel({
//     interval: 10000
// })

// $('.carousel .carousel-item').each(function() {
//     var minPerSlide = 3;
//     var next = $(this).next();
//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));

//     for (var i = 0; i < minPerSlide; i++) {
//         next = next.next();
//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }

//         next.children(':first-child').clone().appendTo($(this));
//     }
// });


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});
// $(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1000) {
//             $('.navbar-brand').attr('src', '../images/nasims-logo.webp');
//         }
//         if ($(this).scrollTop() < 1000) {
//             $('.navbar-brand').attr('src', '../images/nasims-logo.webp');
//         }
//     })
// });
// 
// 

$(document).ready(function() {
    $(".hide-modal").click(function() {
        $("#myModal").modal('hide');
    });
});


$(document).ready(function() {
    $("#myModal").modal('show');
});


// $(document).ready(function() {
//     var previousScroll = 0;
//     $(window).scroll(function() {
//         var currentScroll = $(this).scrollTop();
//         if (currentScroll < 100) {
//             showTopNav();
//         } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
//             if (currentScroll > previousScroll) {
//                 hideNav();
//             } else {
//                 showNav();
//             }
//             previousScroll = currentScroll;
//         }
//     });

//     function hideNav() {
//         $(".navbar").removeClass("is-visible").addClass("is-hidden");
//     }

//     function showNav() {
//         $(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
//     }
// });



$('#myCarousel').carousel({
    interval: 6000
  })
  
  