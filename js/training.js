document.getElementById("dogTrainingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const training = {
    trainingTitle: document.getElementById("trainingTitle").value.trim(),
    trainerName: document.getElementById("trainerName").value.trim(),
    trainingType: document.getElementById("trainingType").value,
    description: document.getElementById("description").value.trim(),
    duration: document.getElementById("duration").value.trim(),
    format: document.getElementById("format").value,
    location: document.getElementById("location").value.trim(),
    price: document.getElementById("price").value.trim(),
    ageRange: document.getElementById("ageRange").value,
    breedCompatibility: document.getElementById("breedCompatibility").value.trim(),
    dogSize: document.getElementById("dogSize").value,
    trainerBio: document.getElementById("trainerBio").value.trim(),
    trainerPhone: document.getElementById("trainerPhone").value.trim(),
    trainerEmail: document.getElementById("trainerEmail").value.trim(),
    trainerWhatsApp: document.getElementById("trainerWhatsApp").value.trim(),
    trainerSocial: document.getElementById("trainerSocial").value.trim(),
    startDate: document.getElementById("startDate").value,
    media: [],
    uploadedAt: new Date().toISOString()
  };

  const mediaFiles = document.getElementById("media").files;
  const readers = [];

  for (let i = 0; i < mediaFiles.length && i < 5; i++) {
    const reader = new FileReader();
    const promise = new Promise((resolve) => {
      reader.onload = () => resolve(reader.result);
    });
    reader.readAsDataURL(mediaFiles[i]);
    readers.push(promise);
  }

  Promise.all(readers).then(results => {
    training.media = results;

    const trainings = JSON.parse(localStorage.getItem("dogTrainings") || "[]");
    trainings.push(training);
    localStorage.setItem("dogTrainings", JSON.stringify(trainings));

    alert("Training uploaded successfully!");
    document.getElementById("dogTrainingForm").reset();
  });
});