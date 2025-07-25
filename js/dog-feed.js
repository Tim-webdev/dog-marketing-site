document.getElementById("dogFeedForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const inputs = form.querySelectorAll("input, select, textarea");

  const newFeed = {
    feedName: inputs[0].value,
    feedType: inputs[1].value,
    ageCategory: inputs[2].value,
    breedSize: inputs[3].value,
    purpose: inputs[4].value,
    price: inputs[5].value,
    weight: inputs[6].value,
    brand: inputs[7].value,
    quantity: inputs[8].value,
    description: inputs[9].value,
    image: "",
    uploadedAt: new Date().toISOString()
  };

  const fileInput = inputs[10];
  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function () {
    newFeed.image = reader.result;

    // Save to localStorage
    const allFeeds = JSON.parse(localStorage.getItem("dogFeeds") || "[]");
    allFeeds.push(newFeed);
    localStorage.setItem("dogFeeds", JSON.stringify(allFeeds));

    alert("Dog Feed uploaded successfully!");
    form.reset();
  };

  reader.readAsDataURL(file);
});