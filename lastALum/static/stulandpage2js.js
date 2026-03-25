// scripts.js

// Get the modal
const modal = document.getElementById("messageModal");

// Get the button that opens the modal
const btn = document.getElementById("connectButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle the message submission
document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const message = document.getElementById("messageText").value;

    if (message.trim() === "") {
      alert("Please write a message before sending.");
      return;
    }

    // Simulate sending the message (you would send this to the server)
    alert("Message sent: " + message);

    // Clear the textarea and close the modal
    document.getElementById("messageText").value = "";
    modal.style.display = "none";
  });
/*Handle the message submission
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const message = document.getElementById('messageText').value;

    if (message.trim() === "") {
        alert("Please write a message before sending.");
        return;
    }

    // Simulate sending the message (you would send this to the server)
    alert("Message sent: " + message);

    // Clear the textarea and close the modal
    document.getElementById('messageText').value = "";
    modal.style.display = "none";
});



document.addEventListener("DOMContentLoaded", function () {
  const addEventBtn = document.getElementById("add-event-btn");
  const eventModal = document.getElementById("event-modal");
  const closeBtn = document.querySelector(".close-btn");
  const eventForm = document.getElementById("event-form");
  const eventContainer = document.querySelector(".event-container");

  // Open the modal when Add Event button is clicked
  addEventBtn.addEventListener("click", function () {
    eventModal.style.display = "flex";
  });

  // Close the modal when X button is clicked
  closeBtn.addEventListener("click", function () {
    eventModal.style.display = "none";
  });

  // Close modal if clicking outside the modal content
  window.addEventListener("click", function (e) {
    if (e.target === eventModal) {
      eventModal.style.display = "none";
    }
  });

  // Handle form submission
  eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect event data
    const eventName = document.getElementById("event-name").value;
    const eventDate = document.getElementById("event-date").value;
    const eventVenue = document.getElementById("event-venue").value;
    const eventDescription = document.getElementById("event-description").value;
    const eventPhoto = document.getElementById("event-photo").files[0];
    const reader = new FileReader();

    // Read the uploaded photo and create a new event element
    reader.onloadend = function () {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");
      eventElement.innerHTML = `
              <div class="event-header">
                  <h3>${eventName}</h3>
                  <div class="event-edit-delete">
                      <button class="edit-btn">Edit</button>
                      <button class="delete-btn">Delete</button>
                  </div>
              </div>
              <p>Date: ${eventDate}</p>
              <p>Venue: ${eventVenue}</p>
              <p>${eventDescription}</p>
              <img src="${reader.result}" alt="Event Photo" class="event-img">
          `;

      // Add the event element to the container
      eventContainer.appendChild(eventElement);

      // Close the modal and reset the form
      eventModal.style.display = "none";
      eventForm.reset();
    };

    if (eventPhoto) {
      reader.readAsDataURL(eventPhoto);
    }
  });
});*/
