// import $ from "jQuery";

function aboutScript() {
    function setupCoreTeamCarousel() {
        let $owl = $('.owl-carousel');

        let profiles = [{
                id: 1,
                name: "William Cho",
                position: "Co-Founder/Product Manager",
                description: "Someone who's addicted to cryptocurrencies and as an experienced in both Free2Play & Pay2Win mobile gamer, William aims to combine both his experiences and addiction together to deliver fun cryptocurrency mobile games to the public. Creating mobile games from scratch has always been on his bucket list. Previously, founded and managed"
            },
            {
                id: 2,
                name: "Ron Privado",
                position: "Community Manager",
                description: "Our Community Manager is Ron Privado. He is an avid video gamer and has been trading forex and investing into cryptocurrencies since 2018. Ron noticed in 2021 that NFT gaming has taken off and began focusing in the #GameFi industry. He believes that the gaming industry will evolve swiftly and that there would be a time video game companies will start to adopt NFT gaming. With the opportunity in the NFT industry, Ron has decided to start and build a marketing solution. His company RP Marketing is a marketing solution where a network of influencers can promote projects to each other."
            },
            {
                id: 3,
                name: "Melanie Louw",
                position: "Graphics Design Lead",
                description: "Self-taught Digital Artist and 3D Artist from Sydney, Australia with a love for Anime, Manga, Gaming, 3D Modeling, and Digital Art. She started her career in 2017 on Instagram doing Digital Art Portraits and 3D Model Custom Content commissions for life simulation games such as The Sims 4 and Second Life. She built a stable working relationship with clients and fellow artists in the community who enjoyed her work. In 2021 she entered the Crypto space as an investor and discovered the world of NFT Art and Crypto-Games. She quickly jumped into the industry and works as a 3D Artist and Graphic Designer for Crypto Gaming projects. She got the opportunity as an In-house Graphics Designer for Heroes of Lowhelm after seeing the concept design and the vision of the project."
            },
            {
                id: 4,
                name: "Jake B. Senorita",
                position: "PH Community Advocate",
                description: "A fan of online gaming such as RPG games, MMORPG, Adventure games, and the like. In 2017, he started his crypto trading and since then he has been an enthusiast. In 2020, he find out about NFT play-to-earn games and discovered its promising opportunities in the field of crypto. With his passion and interest, he is now the Filipino Community Advocate."
            },
            {
                id: 5,
                name: "Blockchain Andy",
                position: "Co-Founder / Marketing Strategist",
                description: "Andy has a wealth of experience within the crypto space and has worked with many projects in the Zilliqa ecosystem over the last 5 years. Andy will be working on the marketing side of the HoL project and will help advise the team wherever possible."
            },
            {
                id: 6,
                name: "HPL Game Corporation",
                position: "Game Art & Development",
                description: "Game Studio located in the Philippines with the main role of creating the 2D artwork and game development of Heroes of Lowhelm."
            },
            {
                id: 7,
                name: "Definite Studios",
                position: "Game Art & Development",
                description: "Game Studio located in the Philippines with the main role of creating the Cut-scene Animations & Artwork for Heroes of Lowhelm."
            },
            {
                id: 8,
                name: "Jefferlyn Alimurong",
                position: "Public Relations Specialist",
                description: "..."
            },
            {
                id: 9,
                name: "Grisha Asatrian",
                position: "Scilla Developer",
                description: "Passionate and highly-skilled Blockchain professional with rich experience in building smart contracts and decentralized applications. Equipped with a diverse and promising skill-set such as Solidity and C++ languages for Smart Contracts, Golang, frameworks of React and Vue for web frontend and ASP.NET, frameworks of Node and Laravel for web backend. Now Scilla ready to tackle on Zilliqa projects!"
            },
        ];

        $owl.children().each(function (index) {
            $(this).attr('data-position', index); // NB: .attr() instead of .data()
        });

        function dragDetected(event) {
            let chosen = (event.item.index === 5) ? 0 :
                (event.item.index === 6) ? 1 :
                (event.item.index === 7) ? 2 :
                (event.item.index === 8) ? 3 :
                (event.item.index === 9) ? 4 :
                (event.item.index === 10) ? 5 :
                (event.item.index === 11) ? 6 :
                (event.item.index === 12) ? 7 :
                (event.item.index === 13) ? 8 : 0;
            updateText(chosen);
        }

        $owl.owlCarousel({
            center: true,
            loop: true,
            items: 5,
            onDragged: dragDetected,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: true
                }
            }
        });

        function updateText(chosen) {
            // console.log(`chosen = ${chosen}`);
            $(`.carousel-description-name`).html(`${profiles[chosen].name}`);
            $(`.carousel-description-position`).html(`${profiles[chosen].position}`);
            $(`.carousel-description-desc`).html(`${profiles[chosen].description}`);
            $(`.top-left,.top-right,.bottom-left,.bottom-right`).remove();
            $(`.profile`).removeClass("profile");
            $(`.profile-${chosen+1} div`).addClass("profile");
            let profileDiv = '<div class = "top-left"></div>'
            profileDiv += '<div class = "top-right"></div>'
            profileDiv += '<div class = "bottom-left"></div>'
            profileDiv += '<div class = "bottom-right"></div>';
            $(`.profile`).append(profileDiv);
        }

        $(document).on('click', '.owl-item>div', function () {
            updateText($(this).data('position'));
            var $speed = 300; // in ms
            $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
        });

    };

    setupCoreTeamCarousel();
}

aboutScript();