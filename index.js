 // Task one jQuery
$(function() {
    let images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg'
    ];

    let imagesSlider = $('.images');
    images.forEach(function(image) {
        let slide = $('<div class="slide"><img class="task1-imgs" src="' + image + '" alt="Slide Image"></div>');
        imagesSlider.append(slide);
    });

    let changingTime;
    function startSlider() {
        changingTime = setInterval(nextSlide, 2000); 
    }

    startSlider(); 
    function nextSlide() {
        imagesSlider.animate(500, function() {
            // Move the first slide to the end after animation
            $(this).append($('.slide:first')).css({'margin-left': 0});
        });
    }

    // Pause btn
    $('#stop').click(function() {
        clearInterval(changingTime);
    });

    // Resume btn
    $('#resume').click(function() {
        startSlider();
    });
});

// end of task one

// Second task


// sliding 
$(".box img").hover(
    function() {
        $(this).next(".animation").stop().slideDown(2000);
    },
    function() {
        $(this).next(".animation").stop().slideUp(2000);
    }
);