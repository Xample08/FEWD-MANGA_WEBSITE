$(document).ready(function () {
    var mangaData = [
        {
            imageSrc: "../IMAGE/MANGACOVER/JujutsuKaisenVol4.jpg",
            name: "Jujutsu Kaisen, Vol. 4",
            tags: ["Recommended", "Thriller", "Action", "Demons", "Ghosts", "Martial Arts", "Magic", "School Life", "Fantasy", "Supernatural", "Mystery", "Tragedy"],
            description: `In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about. Should any demon consume Sukunas body parts, the power they gain could destroy the world as we know it. fortunatly, there exists a mysteious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural.`,
            author: "Akutami Gege",
            link: "../HTML/MANGA/MANGA01.html",
            active: true,
            chapter: ["../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (1).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (2).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (3).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (4).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (5).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (6).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (7).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (8).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (9).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (10).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (11).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (12).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (13).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (14).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (15).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (16).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (17).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (18).png", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol4Chapter/page (19).png"]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/HaikyuuVol33.jpg",
            name: "Haikyu!!, Vol. 33",
            tags: ["Recommended", "Award Winning", "Action", "Comedy", "Sports", "Adventure", "Drama", "School Life", "Slice of Life"],
            description: `After losing his first and last volleyball match against Tobio Kageyama, "the King of the Court," Shoyo Hinata swears to become his rival after graduating middle school. But what happens when the guy he wants to defeat ends up being his teammate?!`,
            author: "Furudate Haruichi",
            link: "../HTML/MANGA/MANGA02.html",
            active: false,
            chapter: ["../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (1).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (2).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (3).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (4).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (5).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (6).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (7).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (8).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (9).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (10).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (11).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (12).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (13).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (14).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (15).jpg", "../IMAGE/CHAPTERPREVIEW/HaikyuuVol33Chapter/page (16).jpg"]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/KaguyaSamaLoveIsWarVol21.jpg",
            name: "Kaguya-sama: Love Is War, Vol. 21",
            tags: ["Recommended", "Psychological", "Romance", "Comedy", "School Life", "Slice of Life"],
            description: `All's fair when love is war! Two geniuses. Two brains. Two hearts. One battle. Who will confess their love first…?!`,
            author: "Akasaka Aka",
            link: "../HTML/MANGA/MANGA03.html",
            active: false,
            chapter: ["../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (1).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (2).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (3).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (4).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (5).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (6).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (7).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (8).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (9).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (10).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (11).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (12).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (13).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (14).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (15).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (16).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (17).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (18).png", "../IMAGE/CHAPTERPREVIEW/KaguyaSamaLoveIsWarVol21Chapter/page (19).png"]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/ChainsawManVol3.jpg",
            name: "Chainsaw Man, Vol. 3",
            tags: ["Recommended", "Monsters", "Action", "Demons", "Comedy", "Horror", "Supernatural"],
            description: `The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!`,
            author: "Fujimoto Tatsuki",
            link: "../HTML/MANGA/MANGA04.html",
            active: false,
            chapter: ["../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (1).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (2).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (3).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (4).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (5).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (6).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (7).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (8).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (9).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (10).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (11).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (12).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (13).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (14).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (15).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (16).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (17).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (18).png", "../IMAGE/CHAPTERPREVIEW/ChainsawManVol13Chapter/page (19).png"]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/JujutsuKaisenVol8.jpg",
            name: "Jujutsu Kaisen, Vol. 8",
            tags: ["Recommended", "Thriller", "Action", "Demons", "Ghosts", "Martial Arts", "Magic", "School Life", "Fantasy", "Supernatural", "Mystery", "Tragedy"],
            description: `In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about. Should any demon consume Sukunas body parts, the power they gain could destroy the world as we know it. fortunatly, there exists a mysteious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the supernatural.`,
            author: "Akutami Gege",
            link: "../HTML/MANGA/MANGA05.html",
            active: false,
            chapter: ["../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (1).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (2).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (3).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (4).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (5).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (6).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (7).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (8).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (9).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (10).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (11).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (12).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (13).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (14).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (15).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (16).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (17).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (18).jpg", "../IMAGE/CHAPTERPREVIEW/JujutsuKaisenVol8Chapter/page (19).jpg"]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/KaguyaSamaLoveIsWarVol19.jpg",
            name: "Kaguya-sama: Love Is War, Vol. 19",
            tags: ["Recommended", "Psychological", "Romance", "Comedy", "School Life", "Slice of Life"],
            description: `All's fair when love is war! Two geniuses. Two brains. Two hearts. One battle. Who will confess their love first…?!`,
            author: "Akasaka Aka",
            link: "../HTML/MANGA/MANGA06.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/ChainsawManVol4.jpg",
            name: "Chainsaw Man, Vol. 14",
            tags: ["Monsters", "Action", "Demons", "Comedy", "Horror", "Supernatural"],
            description: `The name says it all! Denji's life of poverty is changed forever when he merges with his pet chainsaw dog, Pochita! Now he's living in the big city and an official Devil Hunter. But he's got a lot to learn about his new job and chainsaw powers!`,
            author: "Fujimoto Tatsuki",
            link: "../HTML/MANGA/MANGA07.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/HaikyuuVol39.jpg",
            name: "Haikyu!!, Vol. 39",
            tags: ["Recommended", "Award Winning", "Action", "Comedy", "Sports", "Adventure", "Drama", "School Life", "Slice of Life"],
            description: `After losing his first and last volleyball match against Tobio Kageyama, "the King of the Court," Shoyo Hinata swears to become his rival after graduating middle school. But what happens when the guy he wants to defeat ends up being his teammate?!`,
            author: "Furudate Haruichi",
            link: "../HTML/MANGA/MANGA08.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/SPYxFAMILYVol1.jpg",
            name: "Spy x Family, Vol. 1",
            tags: ["Action", "Comedy", "Drama", "Romance", "School Life", "Slice of Life"],
            description: `The master spy codenamed <Twilight> has spent most of his life on undercover missions, all for the dream of a better world. Yet one day he receives a particularly difficult order from command. For his mission, he must form a temporary family and start a new life?!<br>A Spy/Action/Comedy manga about a one-of-a-kind family!`,
            author: "Endo Tatsuya",
            link: "../HTML/MANGA/MANGA09.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/DrStoneVol20.jpg",
            name: "Dr. Stone, Vol. 20",
            tags: ["Adventure", "Sci-Fi", "Action", "Comedy", "Drama"],
            description: `Imagine waking to a world where every last human has been mysteriously turned to stone...<br><br>One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he's not alone! His science-loving friend Senku's been up and running for a few months and he's got a grand plan in mind—to kickstart civilization with the power of science!`,
            author: "Inagaki Riichiro",
            link: "../HTML/MANGA/MANGA10.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/SPYxFAMILYVol6.jpg",
            name: "Spy x Family, Vol. 6",
            tags: ["Action", "Comedy", "Drama", "Romance", "School Life", "Slice of Life"],
            description: `The master spy codenamed <Twilight> has spent most of his life on undercover missions, all for the dream of a better world. Yet one day he receives a particularly difficult order from command. For his mission, he must form a temporary family and start a new life?!<br>A Spy/Action/Comedy manga about a one-of-a-kind family!`,
            author: "Endo Tatsuya",
            link: "../HTML/MANGA/MANGA11.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/DrStoneVol24.jpg",
            name: "Dr. Stone, Vol. 24",
            tags: ["Adventure", "Sci-Fi", "Action", "Comedy", "Drama"],
            description: `Imagine waking to a world where every last human has been mysteriously turned to stone...<br><br>One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he's not alone! His science-loving friend Senku's been up and running for a few months and he's got a grand plan in mind—to kickstart civilization with the power of science!`,
            author: "Inagaki Riichiro",
            link: "../HTML/MANGA/MANGA12.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/OnePieceVol100.jpg",
            name: "One Piece, Vol. 100",
            tags: ["Adventure", "Action", "Comedy", "Fantasy", "Pirates"],
            description: "Follow the epic journey of Monkey D. Luffy and his crew as they search for the ultimate treasure, the One Piece, and become the Pirate King.",
            author: "Oda Eiichiro",
            link: "../HTML/MANGA/MANGA13.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/OnePunchManVol27.jpg",
            name: "One-Punch Man, Vol. 27",
            tags: ["Action", "Comedy", "Superheroes", "Supernatural", "Parody"],
            description: "Follow the story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch. He is now facing his greatest challenge yet: the rank of Class-S.",
            author: "Murata Yusuke",
            link: "../HTML/MANGA/MANGA14.html",        
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/BleachVol74.jpg",
            name: "Bleach, Vol. 74",
            tags: ["Action", "Supernatural", "Adventure", "Shinigami"],
            description: "Discover the world of Soul Reapers and Hollows as Ichigo Kurosaki battles against evil spirits to protect the living world.",
            author: "Kubo Tite",
            link: "../HTML/MANGA/MANGA15.html",      
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/MyHeroAcademiaVol37.jpg",
            name: "My Hero Academia, Vol. 37",
            tags: ["Superheroes", "Action", "Comedy", "School Life", "Adventure"],
            description: "Follow the story of Izuku Midoriya as he trains to become a hero in a world where almost everyone has superpowers known as Quirks.",
            author: "Horikoshi Kohei",
            link: "../HTML/MANGA/MANGA16.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/DemonSlayerVol23.jpg",
            name: "Demon Slayer, Vol. 23",
            tags: ["Action", "Supernatural", "Adventure", "Demons"],
            description: "Join Tanjiro Kamado on his quest to avenge his family and protect humanity from the threat of demons as a member of the Demon Slayer Corps.",
            author: "Gotouge Koyoharu",
            link: "../HTML/MANGA/MANGA17.html",
            active: false,
            chapter: [""]
        },
        {
            imageSrc: "../IMAGE/MANGACOVER/AssasinationClassroomVol6.jpg",
            name: "Assasination Classroom, Vol. 6",
            tags: ["Action", "Comedy", "School Life", "Adventure", "Supernatural"],
            description: "The students in Class 3-E of Kunugigaoka Junior High have a new teacher: an alien octopus with bizarre powers and unlimited strength, who’s just destroyed the moon and is threatening to destroy the earth—unless they can kill him first!",
            author: "Matsui Yuusei",
            link: "../HTML/MANGA/MANGA18.html",
            active: false,
            chapter: [""]
        }
    ];

    var counterCarousel = 1;
    var counterMangaItem = 1;
    var navbarHeight = $('.navbar').outerHeight();
    var carouselControls = $('.carousel-control-prev, .carousel-control-next');
    var searchCatalogue = $('.main-section');
    carouselControls.css({
        'margin-top': navbarHeight/2,
    });
    searchCatalogue.css({
        'margin-top': navbarHeight,
    });

    function createCardView(data) {
        const cardViewContainer = document.getElementById('card-view');
    
        cardViewContainer.innerHTML = '';
    
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'col-6 col-md-4 col-lg-3 cardSearch';
    
            // Wrap the card content with an anchor tag
            const cardLink = document.createElement('a');
            cardLink.href = item.link;
            cardLink.className = 'text-decoration-none';
            cardLink.target = '_blank';
    
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card text-bg-dark position-relative';
            cardContainer.style.backgroundColor = 'transparent';
    
            const img = document.createElement('img');
            img.src = item.imageSrc;
            img.className = 'card-img';
            img.alt = `${item.name} cover`;
    
            const cardOverlay = document.createElement('div');
            cardOverlay.className = 'card-img-overlay d-flex flex-column justify-content-start';
    
            const cardText = document.createElement('p');
            cardText.className = 'card-text text-white overflow-hidden scroll-hidden';
            cardText.style.maxHeight = '0px';
            cardText.textContent = item.description;
    
            // Show description on hover
            cardContainer.addEventListener('mouseenter', () => {
                img.style.opacity = '0.1';
                cardText.style.maxHeight = '100%';
            });
    
            // Hide description on mouse leave
            cardContainer.addEventListener('mouseleave', () => {
                img.style.opacity = '1';
                cardText.style.maxHeight = '0px';
            });
    
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title text-white mb-2';
            cardTitle.textContent = item.name;
    
            cardOverlay.appendChild(cardText);
    
            cardContainer.appendChild(img);
            cardContainer.appendChild(cardOverlay);
            cardLink.appendChild(cardContainer);
            cardLink.appendChild(cardTitle);
    
            card.appendChild(cardLink);
            cardViewContainer.appendChild(card);
        });
    }
    
    function createListView(data) {
        const listViewContainer = document.getElementById('list-view');
    
        listViewContainer.innerHTML = '';
    
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'px-2 col-md-6 mb-3 cardSearch';
    
            // Wrap the list content with an anchor tag
            const cardLink = document.createElement('a');
            cardLink.href = item.link; // Set the link from your data
            cardLink.className = 'text-decoration-none';
            cardLink.target = '_blank';
    
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card p-2 text-white h-100';
            cardContainer.style.backgroundColor = 'rgb(17,17,17)';
    
            const cardRow = document.createElement('div');
            cardRow.className = 'row g-0 h-100';
    
            const imgCol = document.createElement('div');
            imgCol.className = 'col-4';
    
            const img = document.createElement('img');
            img.src = item.imageSrc;
            img.className = 'img-fluid rounded';
            img.alt = `${item.name} cover`;
    
            const textCol = document.createElement('div');
            textCol.className = 'col-8 d-flex flex-column h-100';
    
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body py-0 flex-grow-1 overflow-hidden';
    
            // Create tags
            var tagsHtml = "";
            for (var i = 0; i < item.tags.length; i++) {
                var tag = item.tags[i];
                if (tag === "Recommended") {
                    tagsHtml += `<span class="tag tag-recommended text-white rounded-1 m-1">${tag}</span>`;
                } else {
                    tagsHtml += `<span class="tag text-white rounded-1 m-1">${tag}</span>`;
                }
            }
    
            // Card title, tags, and description
            cardBody.innerHTML = `<h4 class="fw-semibold card-title">${item.name}</h4>`;
            cardBody.innerHTML += `<div class="tags-container d-flex flex-wrap">${tagsHtml}</div>`;
            cardBody.innerHTML += `<div class="scroll-hidden overflow-auto">
                                    <p class="card-text">${item.description}</p>
                                </div>`;
    
            imgCol.appendChild(img);
            cardRow.appendChild(imgCol);
            textCol.appendChild(cardBody);
            cardRow.appendChild(textCol);
            cardContainer.appendChild(cardRow);
            cardLink.appendChild(cardContainer);
            card.appendChild(cardLink);
    
            listViewContainer.appendChild(card);
        });
    }

    function handleListStyling() {
        var windowWidth = $(window).width();
    
        if (windowWidth >= 992) {
            $("#myList").removeClass("list-unstyled");
        } else {
            $("#myList").addClass("list-unstyled");
        }
    }

    $(window).resize(handleListStyling);

    // Function to search the catalogue
    function searchBarCatalogue(inputFieldId) {
        var searchTerm = $(inputFieldId).val().toLowerCase();

        $(".cardSearch").each(function() {
            var mangaName = $(this).find(".card-title").text().toLowerCase();
            if (mangaName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    $("#searchForm").on("submit", function(event) {
        event.preventDefault();
        searchBarCatalogue("#searchBarInput");
    });

    $("#searchBarInput").on("input", function() {
        searchBarCatalogue("#searchBarInput");
    });

    $("#searchBarBtn").on("click", function() {
        searchBarCatalogue("#searchBarInput");
    });

    $("#searchFormNav").on("submit", function(event) {
        event.preventDefault();
        searchBarCatalogue("#searchBarInputNav");
    });

    $("#searchBarInputNav").on("input", function() {
        searchBarCatalogue("#searchBarInputNav");
    });

    $("#searchBarBtnNav").on("click", function() {
        searchBarCatalogue(".searchBarInputNav");
    });

    // Function to create and append carousel items
    function appendCarouselItem(data) {
        var carouselItem = $(
            `<a href="${data.link}" target="_blank" class="text-decoration-none carousel-item background-item${counterCarousel} text-white"></a>`
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
                tagsHtml += `<span class="tag ${revealTagClass} tag-recommended rounded-1 m-1">${tag}</span>`;
            } else {
                tagsHtml += `<span class="tag ${revealTagClass} rounded-1 m-1">${tag}</span>`;
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
                                    <div class="d-none d-md-block">
                                        <div class="d-flex mb-5 flex-wrap select-none overflow-hidden">
                                            ${tagsHtml}
                                        </div>
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
                        <div class="d-block d-md-none">
                            <div class="col-12 d-flex flex-wrap gap-1 select-none overflow-hidden">
                                ${tagsHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        carouselItem.html(innerContent);
        createDynamicBackgroundStyleCarousel(data.imageSrc, carouselItem);
    }

    // Function to create a dynamic CSS rule for background
    function createDynamicBackgroundStyleCarousel(imageSrc, carouselItem) {
        var dynamicStyle = `
            .carousel-item.background-item${counterCarousel}::before {
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
    
        counterCarousel++;
    }

    // Function to create and append manga item
    function appendMangaItem(data) {
        var layoutContainer = $(`<div class="layout-item background-item${counterMangaItem} text-white"></div>`).appendTo(".manga-info");
    
        var revealClass = "reveal";
        var revealTextClass ="reveal-text";
        var revealTagClass = "reveal-tag";
    
        var tagsHtml = "";
        for (var i = 0; i < data.tags.length; i++) {
            var tag = data.tags[i];
            if (tag === "Recommended") {
                tagsHtml += `<span class="tag ${revealTagClass} tag-recommended rounded-1 m-1">${tag}</span>`;
            } else {
                tagsHtml += `<span class="tag ${revealTagClass} rounded-1 m-1">${tag}</span>`;
            }
        }
    
        var innerContent = `
            <div style="padding-top: ${navbarHeight}px" class="background-item">
                <div class="mx-4 px-xl-5 mb-xl-0 mb-md-5 mb-0 py-5">
                    <div class="row px-xl-5 gap-3 d-flex flex-row">
                        <div class="col-lg-3 col-4">
                            <div class="content">
                                <img
                                    src="../${data.imageSrc}"
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
                                    <div class="d-none d-md-block">
                                        <div class="d-flex mb-5 flex-wrap select-none overflow-hidden">
                                            ${tagsHtml}
                                        </div>
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
                        <div class="d-block d-md-none">
                            <div class="col-12 d-block d-md-none d-flex flex-wrap">
                                ${tagsHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        // Append the inner content to the layout container
        layoutContainer.html(innerContent);
        // Create dynamic background style (if needed)
        backgroundImageSrc = `../${data.imageSrc}`;
        createDynamicBackgroundStyleMangaItem(backgroundImageSrc, layoutContainer);
        counterMangaItem++;
    }

    function createDynamicBackgroundStyleMangaItem(imageSrc, carouselItem) {
        console.log(imageSrc);
        var dynamicStyle = `
            .layout-item.background-item${counterMangaItem}::before {
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
    }

    function appendChapterItem(data) {
        var chapterContainer = $('.chapter-container');
        chapterContainer.html('');

        data.chapter.forEach(function(chapter) {
            var chapterImage = `../${chapter}`
            // Create an image element for each chapter
            var img = $('<img class="reveal-chapter img-fluid">').attr('src', chapterImage);
            chapterContainer.append(img);
        });
    }

    for (var i = 0; i < 5; i++) {
        var data = mangaData[i];
        appendCarouselItem(data);
    }
    
    var currentPath = window.location.pathname.split('/').pop();
    mangaData.forEach(function(data) {
        var lastPath = data.link.split('/').pop();
        if (currentPath === lastPath) {
            appendMangaItem(data);
            appendChapterItem(data);
        }
    });
    
    if (window.location.pathname.includes('Catalogue.html')) {
        // Call the functions only when Catalogue.html is loaded
        createCardView(mangaData);
        createListView(mangaData);
    }

    // jQuery to handle view switching
    $('#list-view-btn').on('click', function () {
        $('#list-view-btn').addClass('active');
        $('#card-view-btn').removeClass('active');  
        $('#list-view').removeClass('d-none').addClass('d-block');
        $('#card-view').removeClass('d-block').addClass('d-none');
    });

    $('#card-view-btn').on('click', function () {
        $('#card-view-btn').addClass('active');
        $('#list-view-btn').removeClass('active');
        $('#card-view').removeClass('d-none').addClass('d-block');
        $('#list-view').removeClass('d-block').addClass('d-none');
    });

    ScrollReveal().reveal('.reveal', { distance: '120px', origin : 'left', delay : '250',  easing: 'ease-in' });
    ScrollReveal().reveal('.reveal-text', { distance: '120px', origin : 'top', delay : '250', interval : '250', easing: 'ease-in' });
    ScrollReveal().reveal('.reveal-tag', { interval : '100',  easing: 'ease-in' });
    ScrollReveal().reveal('.skill-icon', { delay : '350', interval : '300',  easing: 'ease-in' });
    ScrollReveal().reveal('.skill-title', { delay : '50', easing: 'ease-in' });
    ScrollReveal().reveal('.main-section-text',  {distance: '120px', origin : 'left', interval : '200', easing: 'ease-in' });
    ScrollReveal().reveal('.profile-image',  {distance: '120px', origin : 'right', delay : '250', easing: 'ease-in'});
    ScrollReveal().reveal('.reveal-chapter', { delay : '150', easing: 'ease-in' });
})

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

    
