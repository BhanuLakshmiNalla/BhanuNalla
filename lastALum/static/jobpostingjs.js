document.addEventListener("DOMContentLoaded", () => {
  const jobContainer = document.querySelector(".job-container");
  const jobModal = document.getElementById("job-modal");
  const addJobBtn = document.getElementById("add-job-btn");
  const closeBtn = document.querySelector(".close-btn");
  const jobForm = document.getElementById("job-form");

  let editingPostId = null; // Track the ID of the post being edited

  // Example job post data
  let jobs = [
    {
      id: 1,
      role: "Software Engineer",
      company: "ABC Corp",
      package: "$100,000",
      eligibility: "B.Tech, M.Tech",
      description: "Exciting opportunity to work on cutting-edge technologies.",
      poster: "John Doe",
    },
  ];

  function displayJobs() {
    jobContainer.innerHTML = "";
    jobs.forEach((job) => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
      jobCard.innerHTML = `
                <h3>${job.role}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Package:</strong> ${job.package}</p>
                <p><strong>Eligibility:</strong> ${job.eligibility}</p>
                <p>${job.description}</p>
                <div class="posted-by">Posted by: ${job.poster}</div>
                <div class="action-buttons">
                    <button class="edit-btn" data-id="${job.id}">Edit</button>
                    <button class="delete-btn" data-id="${job.id}">Delete</button>
                </div>
            `;
      jobContainer.appendChild(jobCard);
    });
  }

  function resetForm() {
    jobForm.reset();
    editingPostId = null;
  }

  addJobBtn.addEventListener("click", () => {
    jobModal.style.display = "block";
    document.getElementById("modal-title").textContent = "Add Job Post";
  });

  closeBtn.addEventListener("click", () => {
    jobModal.style.display = "none";
    resetForm();
  });

  jobForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newJob = {
      id: editingPostId || jobs.length + 1,
      role: document.getElementById("job-role").value,
      company: document.getElementById("job-company").value,
      package: document.getElementById("job-package").value,
      eligibility: document.getElementById("job-eligibility").value,
      description: document.getElementById("job-description").value,
      poster: document.getElementById("job-poster").value,
    };

    if (editingPostId) {
      jobs = jobs.map((job) => (job.id === editingPostId ? newJob : job));
    } else {
      jobs.push(newJob);
    }

    jobModal.style.display = "none";
    displayJobs();
    resetForm();
  });

  jobContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const jobId = parseInt(e.target.dataset.id);
      jobs = jobs.filter((job) => job.id !== jobId);
      displayJobs();
    }

    if (e.target.classList.contains("edit-btn")) {
      const jobId = parseInt(e.target.dataset.id);
      const jobToEdit = jobs.find((job) => job.id === jobId);

      document.getElementById("job-role").value = jobToEdit.role;
      document.getElementById("job-company").value = jobToEdit.company;
      document.getElementById("job-package").value = jobToEdit.package;
      document.getElementById("job-eligibility").value = jobToEdit.eligibility;
      document.getElementById("job-description").value = jobToEdit.description;
      document.getElementById("job-poster").value = jobToEdit.poster;

      editingPostId = jobToEdit.id;
      document.getElementById("modal-title").textContent = "Edit Job Post";
      jobModal.style.display = "block";
    }
  });

  displayJobs();
});
