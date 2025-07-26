document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    };

    // Optionally store locally
    let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    messages.push(formData);
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    // Show confirmation message
    successMessage.style.display = "block";
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  });
});
