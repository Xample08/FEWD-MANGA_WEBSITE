$(document).ready(function () {
    var mangaData = [
        {
            imageSrc: "../IMAGE/MANGACOVER/JujutsuKaisenVol4.jpg",
            name: "Jujutsu Kaisen",
            tags: ["Recommended", "Thriller", "Action", "Demons", "Ghosts", "Martial Arts", "Magic", "School Life", "Fantasy", "Supernatural", "Mystery", "Tragedy"],
            description: `In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about. Should any demon consume Sukunas body parts, the power they gain could destroy the world as we know it. fortunatly, there exists a mysteious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural.`,
            author: "Akutami Gege",
            link: "",
            active: true,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/HaikyuuVol33.jpg",
            name: "Haikyuu!!",
            tags: ["Recommended", "Award Winning", "Action", "Comedy", "Sports", "Adventure", "Drama", "School Life", "Slice of Life"],
            description: `After losing his first and last volleyball match against Tobio Kageyama, "the King of the Court," Shoyo Hinata swears to become his rival after graduating middle school. But what happens when the guy he wants to defeat ends up being his teammate?!`,
            author: "Furudate Haruichi",
            link: "",
            active: false,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/KaguyaSamaLoveIsWarVol21.jpg",
            name: "Kaguya-sama: Love Is War",
            tags: ["Recommended", "Psychological", "Romance", "Comedy", "School Life", "Slice of Life"],
            description: `All's fair when love is war!

            Two geniuses. Two brains. Two hearts. One battle. Who will confess their love first…?!`,
            author: "Akasaka Aka",
            link: "",
            active: false,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/ChainsawManVol3.jpg",
            name: "Chainsaw Man",
            tags: ["Recommended", "Monsters", "Action", "Demons", "Comedy", "Horror", "Supernatural"],
            description: `The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!`,
            author: "Fujimoto Tatsuki",
            link: "",
            active: false,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/JujutsuKaisenVol8.jpg",
            name: "Jujutsu Kaisen",
            tags: ["Recommended", "Thriller", "Action", "Demons", "Ghosts", "Martial Arts", "Magic", "School Life", "Fantasy", "Supernatural", "Mystery", "Tragedy"],
            description: `In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about. Should any demon consume Sukunas body parts, the power they gain could destroy the world as we know it. fortunatly, there exists a mysteious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural.`,
            author: "Akutami Gege",
            link: "",
            active: false,
        },
    ];

    var counter = 1;
    var navbarHeight = $('.navbar').outerHeight();
    var carouselControls = $('.carousel-control-prev, .carousel-control-next');
    carouselControls.css({
        'margin-top': navbarHeight/2,
    });

    function handleListStyling() {
        var windowWidth = $(window).width();
    
        if (windowWidth >= 992) {
            $("#myList").removeClass("list-unstyled");
        } else {
            $("#myList").addClass("list-unstyled");
        }
    }

    // Function to create and append carousel items
    function appendCarouselItem(data) {
        var carouselItem = $(
            `<a href="${data.link}" class="text-decoration-none carousel-item background-item${counter} text-white"></a>`
        ).appendTo(".carousel-inner");

        if (data.active) {
            carouselItem.addClass("active");
        }

        var revealClass = data.active ? "reveal" : "";
        var revealTextClass = data.active ? "reveal-text" : "";
        var revealTagClass = data.active ? "reveal-tag" : "";

        var tagsHtml = "";
        for (var i = 0; i < data.tags.length; i++) {
            var tag = data.tags[i];
            if (tag === "Recommended") {
                tagsHtml += `<span class="tag ${revealTagClass} tag-recommended rounded-pill">${tag}</span>`;
            } else {
                tagsHtml += `<span class="tag ${revealTagClass} rounded-pill">${tag}</span>`;
            }
        }
        
        var innerContent = `
            <div style="padding-top: ${navbarHeight}px" class="background-item">
                <div class="mx-4 px-xl-5 mb-xl-0 mb-md-5 mb-0 py-5">
                    <div class="row px-xl-5 gap-3 d-flex flex-row">
                        <div class="col-lg-3 col-4">
                            <div class="content">
                                <img
                                    src="${data.imageSrc}"
                                    class="img-fluid rounded size ${revealClass}"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="col-lg-8 col-7 d-flex justify-content-between">
                            <div class="mb-0 row row-cols-1 gap-0">
                                <div class="col">
                                    <div class="align-self-start">
                                        <p class="${revealTextClass} fs-1 fw-bold mb-2">${data.name}</p>
                                    </div>
                                    <div class="d-none d-md-block mb-5 d-flex flex-wrap gap-1 select-none overflow-hidden">
                                        ${tagsHtml}
                                    </div>
                                    <div class="d-none d-md-block align-self-start overflow-auto" style="max-height: 200px">
                                        <p class="${revealTextClass} mb-0 fs-5">${data.description}</p>
                                    </div>
                                </div>

                                <div class="col align-self-end">
                                    <p class="${revealTextClass} mb-0 fs-5 fw-semibold fst-italic">${data.author}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 d-block d-md-none d-flex flex-wrap gap-1 select-none overflow-hidden">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;

        carouselItem.html(innerContent);
        createDynamicBackgroundStyle(data.imageSrc, carouselItem);
    }

    // Function to create a dynamic CSS rule for background
    function createDynamicBackgroundStyle(imageSrc, carouselItem) {
        var dynamicStyle = `
            .carousel-item.background-item${counter}::before {
                background: linear-gradient(
                    to bottom,
                    rgba(25, 26, 28, 0.5),
                    rgba(25, 26, 28, 1)
                ),
                url("${imageSrc}");
                background-size: cover;
                background-position: center 20%;
            }
        `;
    
        // Create or update the style element
        var styleElement = carouselItem.find('style');
        if (styleElement.length) {
            styleElement.html(dynamicStyle);
        } else {
            carouselItem.append($('<style>').html(dynamicStyle));
        }
    
        counter++;
    }

    // Loop through the mangaData and append carousel items
    mangaData.forEach(function (data, index) {
        appendCarouselItem(data);
    });

    handleListStyling();

    ScrollReveal().reveal('.reveal', { distance: '120px', origin : 'left', delay : '250',  easing: 'ease-in' });
    ScrollReveal().reveal('.reveal-text', { distance: '120px', origin : 'top', delay : '250', interval : '250', easing: 'ease-in' });
    ScrollReveal().reveal('.reveal-tag', { interval : '100',  easing: 'ease-in' });
    ScrollReveal().reveal('.skill-icon', { delay : '350', interval : '300',  easing: 'ease-in' });
    ScrollReveal().reveal('.skill-title', { delay : '50', easing: 'ease-in' });
    ScrollReveal().reveal('.main-section-text',  {distance: '120px', origin : 'left', interval : '200', easing: 'ease-in' });
    ScrollReveal().reveal('.profile-image',  {distance: '120px', origin : 'right', delay : '250', easing: 'ease-in'});
});

$(window).resize(function () {
    handleListStyling();
});

$(document).ready(function () {
    var lastScrollTop = 0;

    function handleScroll() {
        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            $(".navbar").addClass("hidden-navbar");
        } else {
            $(".navbar").removeClass("hidden-navbar");
        }

        // Update the last scroll position
        lastScrollTop = st;
    }

    // Add a scroll event listener
    $(window).scroll(handleScroll);
});
