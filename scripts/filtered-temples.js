const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/large-salt-lake.jpg"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/large-washington.jpg"
  },
  {
    templeName: "Bangkok Thailand Temple",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl: "images/new-bangkok.jpg"
  },
  {
    templeName: "Brasília Brazil Temple",
    location: "Brasília, Brazil",
    dedicated: "2022, September, 18",
    area: 25000,
    imageUrl: "images/new-brasilia.jpg"
  },
  {
    templeName: "Pocatello Idaho Temple",
    location: "Pocatello, Idaho, United States",
    dedicated: "2021, November, 7",
    area: 88862,
    imageUrl: "images/new-pocatello.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "images/old-logan-utah-temple.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/old-manti-temple.jpg"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl: "images/old-stgeorges.jpg"
  },
  {
    templeName: "Colonia Juárez Mexico Temple",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "images/small-colonia.jpg"
  }
];

const container = document.querySelector(".res-grid");
const pageTitle = document.querySelector("main h2");

function displayTemples(filteredTemples) {
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
        const figure = document.createElement("figure");

        figure.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;
        container.appendChild(figure);
    });
}


document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Home";
    displayTemples(temples);
    navigation.classList.remove('open');
    hamButton.classList.remove('open');
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Old Temples (Built before 1900)";
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    displayTemples(oldTemples);
    navigation.classList.remove('open');
    hamButton.classList.remove('open');
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "New Temples (Built after 2000)";
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    displayTemples(newTemples);
    navigation.classList.remove('open');
    hamButton.classList.remove('open');
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Large Temples (Greater than 90,000 sq ft)";
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
    navigation.classList.remove('open');
    hamButton.classList.remove('open');
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Small Temples (Less than 10,000 sq ft)";
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
    navigation.classList.remove('open');
    hamButton.classList.remove('open');
});


displayTemples(temples);
