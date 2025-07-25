document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dogUploadForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const dog = {
        name: document.getElementById("dogName").value.trim(),
        breed: document.getElementById("breed").value.trim(),
        price: document.getElementById("price").value.trim(),
        location: document.getElementById("location").value.trim(),
        sex: document.getElementById("sex").value,
        whatsapp: document.getElementById("whatsapp").value.trim(),
        videoLink: document.getElementById("videoLink").value.trim(),
        description: document.getElementById("description").value.trim(),
        image: null,
      };

      const imageFile = document.getElementById("dogImage").files[0];

      if (!imageFile) {
        alert("Please upload an image.");
        return;
      }

      const imageReader = new FileReader();
      imageReader.onload = function () {
        dog.image = imageReader.result;
        saveToStorage(dog);
        alert("Dog uploaded successfully!");
        form.reset();
      };

      imageReader.readAsDataURL(imageFile);
    });
  }

  function saveToStorage(dog) {
    const existingDogs = JSON.parse(localStorage.getItem("uploadedDogs")) || [];
    existingDogs.push(dog);
    localStorage.setItem("uploadedDogs", JSON.stringify(existingDogs));
  }
});