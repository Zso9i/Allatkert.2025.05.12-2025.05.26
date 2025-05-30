const animals = [
    {
      name: "Ázsiai elefánt",
      latin: "Elephas maximus",
      type: "mammal",
      img: "img/elefant.jpeg",
      desc: "Az elefánt a világ legnagyobb szárazföldi emlőse."
    },
    {
      name: "Fekete medve",
      latin: "Ursus americanus",
      type: "mammal",
      img: "img/elefant.jpeg",
      desc: "A fekete medve Észak-Amerika egyik legnagyobb ragadozója."
    },
    {
      name: "Bolíviai mókusmajom",
      latin: "Saimiri boliviensis",
      type: "mammal",
      img: "img/elefant.jpeg",
      desc: "A mókusmajom egy kis, fürge majomfaj."
    },
    {
      name: "Dzselada pávián",
      latin: "Theropithecus gelada",
      type: "mammal",
      img: "img/elefant.jpeg",
      desc: "A dzselada pávián a hegyvidékek lakója."
    },
    {
      name: "Apáca fütyülőlúd",
      latin: "Dendrocygna viduata",
      type: "bird",
      img: "img/elefant.jpeg",
      desc: "Az apáca fütyülőlúd hangos és látványos madár."
    },
    {
      name: "Aligátorteknős",
      latin: "Chelydra serpentina",
      type: "reptile",
      img: "img/elefant.jpeg",
      desc: "Az aligátorteknős gyors és agresszív vízi hüllő."
    },
    {
      name: "Szélesszájú orrszarvú",
      latin: "Ceratotherium simum",
      type: "mammal",
      img: "img/elefant.jpeg",
      desc: "A szélesszájú orrszarvú a legnagyobb orrszarvú faj."
    },
    {
      name: "Alpaka",
      latin: "Vicugna pacos",
      type: "mammal",
      img: "img/elefant.jpeg",
      desc: "Az alpaka déli-amerikai teveféle."
    }
  ];

  let currentFilter = "all";
  let swiper;

  function createSlide(animal) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    slide.innerHTML = `
      <div class="card">
          <div class="upper-part">
              <div class="upper-part-face">
                  <img src="${animal.img}" alt="${animal.name}">
                  <div></div>
              </div>
              <div class="upper-part-back">
                  <div class="nev">${animal.name}</div>
                  <div>${animal.desc}</div>
              </div>
          </div>
          <div class="lower-part">
              <div class="lower-part-face">${animal.name}<br>Típus: ${animal.type}</div>
              <div class="lower-part-back">Tudományos név:<br>${animal.latin}</div>
          </div>
      </div>
    `;

    return slide;
  }

  function setFilter(type) {
    currentFilter = type;
    // Gombok aktív állapotának kezelése
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById('btn-' + type).classList.add('active');

    renderSwiper();
  }

  function renderSwiper() {
    const wrapper = document.getElementById("swiper-wrapper");
    wrapper.innerHTML = "";

    const filteredAnimals =
      currentFilter === "all"
        ? animals
        : animals.filter((a) => a.type === currentFilter);

    if (filteredAnimals.length === 0) {
      wrapper.innerHTML = `<div class="swiper-slide"><p>Nincs megjeleníthető állat.</p></div>`;
    } else {
      filteredAnimals.forEach((animal) => {
        const slide = createSlide(animal);
        wrapper.appendChild(slide);
      });
    }

    if (swiper) swiper.destroy(true, true);

    swiper = new Swiper(".swiper", {
      loop: filteredAnimals.length > 1,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1099: {
          slidesPerView: 4
        }
      }
    });
  }

  // Kezdeti render
  renderSwiper();
