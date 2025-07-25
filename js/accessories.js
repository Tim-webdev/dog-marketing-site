document.getElementById("accessoryUploadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = {
    title: document.getElementById("title").value.trim(),
    category: document.getElementById("category").value,
    description: document.getElementById("description").value.trim(),
    price: document.getElementById("price").value,
    sizes: document.getElementById("sizes").value.trim(),
    color: document.getElementById("color").value.trim(),
    quantity: document.getElementById("quantity").value,
    material: document.getElementById("material").value.trim(),
    brand: document.getElementById("brand").value.trim(),
    breedSize: document.getElementById("breedSize").value,
    returnPolicy: document.getElementById("returnPolicy").value.trim(),
    tags: document.getElementById("tags").value.trim(),
    images: [],
    createdAt: new Date().toISOString()
  };

  // Handle image uploads
  const imageFiles = document.getElementById("images").files;
  const readerPromises = [];

  for (let i = 0; i < imageFiles.length && i < 5; i++) {
    const reader = new FileReader();
    const promise = new Promise((resolve) => {
      reader.onload = () => resolve(reader.result);
    });
    reader.readAsDataURL(imageFiles[i]);
    readerPromises.push(promise);
  }

  Promise.all(readerPromises).then(imagesData => {
    formData.images = imagesData;

    // Save to LocalStorage
    let accessories = JSON.parse(localStorage.getItem("accessories") || "[]");
    accessories.push(formData);
    localStorage.setItem("accessories", JSON.stringify(accessories));

    alert("Accessory uploaded successfully!");
    document.getElementById("accessoryUploadForm").reset();
  });