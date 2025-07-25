function exploreDogs() {
  alert("Explore our lovely dogs on the Services page!");
  window.location.href = "services.html";
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

function buyBreed(breed) {
  alert("You selected: " + breed + ". Please contact us to proceed.");
  window.location.href = "contact.html";
}

// Search Bar

document.addEventListener("DOMContentLoaded", () => {
  const listings = document.getElementById("dogListings");
  const searchInput = document.getElementById("searchInput");

  // Get only uploaded dogs from localStorage
  const uploadedDogs = JSON.parse(localStorage.getItem("uploadedDogs")) || [];

  function displayDogs(filter = "") {
    listings.innerHTML = "";

    const filtered = uploadedDogs
      .filter((dog) =>
        `${dog.name} ${dog.breed}`.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name)); // A–Z sort

    if (filtered.length === 0) {
      listings.innerHTML = `<p>No dogs match your search.</p>`;
    } else {
      filtered.forEach((dog) => {
        const card = document.createElement("div");
        card.className = "breed-card";
        card.innerHTML = `
          <img src="${dog.image}" alt="${dog.name}">
          <h3>${dog.name} (${dog.breed})</h3>
          <p>${dog.description}</p>
          ${dog.video ? `<video controls src="${dog.video}"></video>` : ""}
        `;
        listings.appendChild(card);
      });
    }
  }

  displayDogs();

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.trim();
      displayDogs(term);
    });
  }
});

// Background slider for hero section
const heroSection = document.getElementById("hero");
const backgroundImages = [
  "bgc img.jpg",
  "images/dog 1.jpg",
  "images/dog 2.jpg"
];

let currentBg = 0;

function changeBackground() {
  heroSection.style.backgroundImage = `url('${backgroundImages[currentBg]}')`;
  currentBg = (currentBg + 1) % backgroundImages.length;
}

changeBackground(); // Set initial background
setInterval(changeBackground, 3000); // Change every 3s
