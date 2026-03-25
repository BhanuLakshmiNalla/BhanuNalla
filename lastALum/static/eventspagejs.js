const events = [];

// Open modal on button click
document.getElementById("add-event-btn").onclick = () => {
  document.getElementById("event-modal").style.display = "block";
};

// Close modal
document.querySelector(".close-btn").onclick = () => {
  document.getElementById("event-modal").style.display = "none";
};

// Handle form submission
document.getElementById("event-form").onsubmit = (e) => {
  e.preventDefault();

  const eventName = document.getElementById("event-name").value;
  const eventDate = document.getElementById("event-date").value;
  const eventVenue = document.getElementById("event-venue").value;
  const eventDescription = document.getElementById("event-description").value;
  const eventPhoto = document.getElementById("event-photo").files[0];

  // Validate unique event names
  if (events.some((event) => event.name === eventName)) {
    alert("Event with this name already exists!");
    return;
  }

  const event = {
    name: eventName,
    date: eventDate,
    venue: eventVenue,
    description: eventDescription,
    photoUrl: eventPhoto ? URL.createObjectURL(eventPhoto) : null,
  };

  events.push(event);
  createEventCard(event);
  document.getElementById("event-modal").style.display = "none";
  document.getElementById("event-form").reset();
};

// Function to create a new event card
function createEventCard(event) {
  const eventCard = document.createElement("div");
  eventCard.className = "event-card";

  const eventTitle = document.createElement("h3");
  eventTitle.textContent = event.name;

  const eventDate = document.createElement("p");
  eventDate.textContent = `Date: ${event.date}`;

  const eventVenue = document.createElement("p");
  eventVenue.textContent = `Venue: ${event.venue}`;

  const eventDescription = document.createElement("p");
  eventDescription.textContent = event.description;

  // If a photo was uploaded, display it
  if (event.photoUrl) {
    const eventPhoto = document.createElement("img");
    eventPhoto.src = event.photoUrl;
    eventCard.appendChild(eventPhoto);
  }

  // Add Edit and Delete buttons
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editEvent(event);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => deleteEvent(eventCard);

  eventCard.appendChild(eventTitle);
  eventCard.appendChild(eventDate);
  eventCard.appendChild(eventVenue);
  eventCard.appendChild(eventDescription);
  eventCard.appendChild(editBtn);
  eventCard.appendChild(deleteBtn);

  document.querySelector(".event-container").appendChild(eventCard);
}

// Edit event function
function editEvent(event) {
  document.getElementById("event-name").value = event.name;
  document.getElementById("event-date").value = event.date;
  document.getElementById("event-venue").value = event.venue;
  document.getElementById("event-description").value = event.description;
  document.getElementById("event-modal").style.display = "block";

  // Optionally: set the photo URL in case it needs to be shown in the modal
}

// Delete event function
function deleteEvent(eventCard) {
  document.querySelector(".event-container").removeChild(eventCard);
}
