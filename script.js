const images = [
    'img/kezdokep.jfif',
    'img/manki.jpg',
    'img/zsiraf.jpg',
    'img/koala.jfif'
    ];

    let index = 0;
    const section = document.querySelector('section.kepek');

    function changeBackground() {
    section.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 5000);

function showDetails(animal) {
            const details = {
                oroszlan: "Az oroszlán a legnagyobb macskaféle, amely Afrikában és Ázsiában él.",
                tigris: "A tigris a legnagyobb vadmacska, amely Ázsiában él."
            };
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = `<p>${details[animal]}</p>`;
            detailsDiv.style.display = 'block';
        }

function changeImage(animal) {
            const images = {
                oroszlan: ['oroszlan1.jpg', 'oroszlan2.jpg', 'oroszlan3.jpg'],
            };
            const imgElement = document.getElementById(`${animal}-img`);
            let currentIndex = images[animal].indexOf(imgElement.src.split('/').pop());
            currentIndex = (currentIndex + 1) % images[animal].length;
            imgElement.src = images[animal][currentIndex];
        }



