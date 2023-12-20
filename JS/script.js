$(document).ready(function () {
    var mangaData = [
        {
            imageSrc: "../IMAGE/MANGACOVER/jujutsuKaisenVol4.jpg",
            name: "Jujutsu Kaisen",
            tags: ["Recommended", "Horror", "Thriller"],
            description: "Yuuji is a genius at track and field. But he has zero interest running around in circles, he's happy as a clam in the Occult Research Club. Although he's only in the club for kicks, things get serious when a real spirit shows up at school! Life's about to get really strange in Sugisawa Town #3 High School!",
            author: "Gege Akutami",
            active: true,
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/jujutsuKaisenVol4.jpg",
            name: "Jujutsu Kaisen",
            tags: ["Recommended", "Horror", "Thriller"],
            description: "Yuuji is a genius at track and field. But he has zero interest running around in circles, he's happy as a clam in the Occult Research Club. Although he's only in the club for kicks, things get serious when a real spirit shows up at school! Life's about to get really strange in Sugisawa Town #3 High School!",
            author: "Gege Akutami",
            active: true,
        },
    ];

    var counter = 1;

    // Function to create and append carousel items
    function appendCarouselItem(data) {
        var carouselItem = $(
            `<div class="carousel-item background-item${counter} text-white">`
        ).appendTo(".carousel-inner");

        if (data.active) {
            carouselItem.addClass("active");
        }

        var tagsHtml = data.tags.map(tag => `<span class="tag rounded-pill">${tag}</span>`).join('');

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
