// Handle Profile Picture Upload
const profilePicInput = document.getElementById("profile-pic-upload");
const profilePic = document.getElementById("profile-pic");

profilePicInput.addEventListener("change", function () {
  const file = profilePicInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Save Button Logic
document.querySelector(".save-button").addEventListener("click", function () {
  alert("Profile updated successfully!");
  // Here, you would typically send the data to the backend for saving
});
