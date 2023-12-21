$(document).ready(function () {
    var mangaData = [
        {
            imageSrc: "../IMAGE/MANGACOVER/JujutsuKaisenVol4.jpg",
            name: "Jujutsu Kaisen",
            tags: ["Recommended", "Thriller", "Action", "Demons", "Ghosts", "Martial Arts", "Magic", "School Life", "Fantasy", "Supernatural", "Mystery", "Tragedy"],
            description: `In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about. Should any demon consume Sukunas body parts, the power they gain could destroy the world as we know it. fortunatly, there exists a mysteious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural.`,
            author: "Akutami Gege",
            active: true,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/HaikyuuVol33.jpg",
            name: "Haikyuu!!",
            tags: ["Recommended", "Award Winning", "Action", "Comedy", "Sports", "Adventure", "Drama", "School Life", "Slice of Life"],
            description: `After losing his first and last volleyball match against Tobio Kageyama, "the King of the Court," Shoyo Hinata swears to become his rival after graduating middle school. But what happens when the guy he wants to defeat ends up being his teammate?!`,
            author: "Furudate Haruichi",
            active: false,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/KaguyaSamaLoveIsWarVol21.jpg",
            name: "Kaguya-sama: Love Is War",
            tags: ["Recommended", "Psychological", "Romance", "Comedy", "School Life", "Slice of Life"],
            description: `All's fair when love is war!

            Two geniuses. Two brains. Two hearts. One battle. Who will confess their love first…?!`,
            author: "Akasaka Aka",
            active: false,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/ChainsawManVol3.jpg",
            name: "Chainsaw Man",
            tags: ["Recommended", "Monsters", "Action", "Demons", "Comedy", "Horror", "Supernatural"],
            description: `The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!`,
            author: "Fujimoto Tatsuki",
            active: false,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/JujutsuKaisenVol8.jpg",
            name: "Jujutsu Kaisen",
            tags: ["Recommended", "Thriller", "Action", "Demons", "Ghosts", "Martial Arts", "Magic", "School Life", "Fantasy", "Supernatural", "Mystery", "Tragedy"],
            description: `In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about. Should any demon consume Sukunas body parts, the power they gain could destroy the world as we know it. fortunatly, there exists a mysteious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural.`,
            author: "Akutami Gege",
            active: false,
        },
    ];

    var counter = 1;

    // Function to create and append carousel items
    function appendCarouselItem(data) {
        var carouselItem = $(
            `<div class="carousel-item pt-5 background-item${counter} text-white">`
        ).appendTo(".carousel-inner");

        if (data.active) {
            carouselItem.addClass("active");
        }

        if (data.tag == "Recommended") {
            var tagsHtml = data.tags.map(tag => `<span class="tag tag-recommended rounded-pill">${tag}</span>`).join('');
        }
        else {
            var tagsHtml = data.tags.map(tag => `<span class="tag rounded-pill">${tag}</span>`).join('');
        }

        var innerContent = `
            <div class="background-item">
                <div class="mx-4 px-xl-5 mb-xl-0 mb-md-5 mb-0 py-5">
                    <div class="row px-xl-5 gap-3 d-flex flex-row">
                        <div class="col-lg-3 col-4">
                            <div class="content">
                                <img
                                    src="${data.imageSrc}"
                                    class="img-fluid rounded size"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="col-lg-8 col-7 d-flex justify-content-between">
                            <div class="mb-0 row row-cols-1 gap-0">
                                <div class="col">
                                    <div class="align-self-start">
                                        <p class="fs-1 fw-bold mb-2">${data.name}</p>
                                    </div>
                                    <div class="d-none d-md-block mb-5 d-flex flex-wrap gap-1 select-none overflow-hidden">
                                        ${tagsHtml}
                                    </div>
                                    <div class="d-none d-md-block align-self-start overflow-auto" style="max-height: 200px">
                                        <p class="mb-0 fs-5">${data.description}</p>
                                    </div>
                                </div>

                                <div class="col align-self-end">
                                    <p class="mb-0 fs-5 fw-semibold fst-italic">${data.author}</p>
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
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 1)
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
});
