// profile.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("updateProfileForm");
  const profilePicInput = document.getElementById("profilePic");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const profilePicFile = profilePicInput.files[0];

    if (!fullName || !username || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const profileData = {
      fullName,
      username,
      email,
      phone,
      password: password || null,
      profilePic: null,
    };

    if (profilePicFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        profileData.profilePic = event.target.result;
        saveProfile(profileData);
      };
      reader.readAsDataURL(profilePicFile);
    } else {
      saveProfile(profileData);
    }
  });

  function saveProfile(data) {
    // You can connect this with localStorage or a backend system.
    localStorage.setItem("userProfile", JSON.stringify(data));
    alert("Profile updated successfully!");
    form.reset();
  }
});
