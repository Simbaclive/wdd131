// Data sets for dynamic rendering
const programs = [
  { id: "p1", name: "Full-Stack Web Bootcamp", averagerating: 4.8 },
  { id: "p2", name: "Cybersecurity Data Analytics", averagerating: 4.9 },
  { id: "p3", name: "Cloud Infrastructure Meetup", averagerating: 4.7 },
  { id: "p4", name: "AI & Human-Centred Tech Seminar", averagerating: 5.0 }
];

const events = [
  { title: "Intro to React & Vite", category: "workshop", date: "June 15, 2026", description: "Learn modern frontend tooling and component architecture." },
  { title: "DevOps & Security Night", category: "networking", date: "June 22, 2026", description: "Network with local security engineers and cloud architects." },
  { title: "Python Data Wrangling", category: "workshop", date: "June 29, 2026", description: "Hands-on session using Pandas and NumPy for analysis." },
  { title: "Tech Founder Pitch Panel", category: "networking", date: "July 6, 2026", description: "Listen to regional startup founders share their journey." }
];

// Populate Select Dropdown on form.html
const productSelect = document.querySelector("#productName");
if (productSelect) {
  programs.forEach(program => {
    const option = document.createElement("option");
    option.value = program.id;
    option.textContent = program.name;
    productSelect.appendChild(option);
  });
}

// Render Highlights on index.html
const highlightContainer = document.querySelector("#highlight-container");
if (highlightContainer) {
  highlightContainer.innerHTML = programs.map(prog => `
    <div class="card">
      <h3>${prog.name}</h3>
      <p>Average Rating: <strong>${prog.averagerating} / 5.0</strong></p>
    </div>
  `).join("");
}

// Render Events on meetups.html with filter functionality
const eventsContainer = document.querySelector("#events-container");
function displayEvents(filteredEvents) {
  if (eventsContainer) {
    eventsContainer.innerHTML = filteredEvents.map(ev => `
      <div class="card">
        <h3>${ev.title}</h3>
        <p><strong>Date:</strong> ${ev.date}</p>
        <p>${ev.description}</p>
      </div>
    `).join("");
  }
}

if (eventsContainer) {
  displayEvents(events);

  const allBtn = document.querySelector("#all-btn");
  const workshopBtn = document.querySelector("#workshop-btn");
  const networkingBtn = document.querySelector("#networking-btn");

  if (allBtn && workshopBtn && networkingBtn) {
    allBtn.addEventListener("click", () => displayEvents(events));
    workshopBtn.addEventListener("click", () => {
      const filtered = events.filter(e => e.category === "workshop");
      displayEvents(filtered);
    });
    networkingBtn.addEventListener("click", () => {
      const filtered = events.filter(e => e.category === "networking");
      displayEvents(filtered);
    });
  }
}

// LocalStorage Counter on review.html
const counterDisplay = document.querySelector("#reviews-counter");
if (counterDisplay) {
  let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;
  reviewCount++;
  localStorage.setItem("reviewCount-ls", reviewCount);
  counterDisplay.textContent = reviewCount;
}