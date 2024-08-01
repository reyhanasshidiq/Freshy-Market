document.addEventListener("DOMContentLoaded", () => {
  // Auto-slide functionality
  const images = [
    "assets/image-1.png",
    "assets/image-2.png",
    "assets/image-3.png",
    "assets/image-4.png",
  ];

  let currentImageIndex = 0;
  const imageElement = document.querySelector(".container-slider img");

  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imageElement.src = images[currentImageIndex];
  }

  setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik

  const hamburgerMenu = document.getElementById("hamburger-menu");
  const sidebar = document.getElementById("sidebar");

  hamburgerMenu.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });

  // Form validation
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Menghindari pengiriman form

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const interest = document.getElementById("interest");

    let valid = true;

    // Validasi nama
    if (name.value.trim() === "") {
      setError(name, "Nama tidak boleh kosong.");
      valid = false;
    } else {
      clearError(name);
    }

    // Validasi email
    if (!validateEmail(email.value.trim())) {
      setError(email, "Email tidak valid.");
      valid = false;
    } else {
      clearError(email);
    }

    // Validasi minat
    if (interest.value === "") {
      setError(interest, "Minat tidak boleh kosong.");
      valid = false;
    } else {
      clearError(interest);
    }

    if (valid) {
      // Jika semua validasi lulus, form dapat dikirim
      alert("Form berhasil dikirim!");
      form.submit();
    }
  });

  function setError(element, message) {
    let errorElement = element.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("error-message")) {
      errorElement = document.createElement("div");
      errorElement.classList.add("error-message", "error");
      element.parentNode.insertBefore(errorElement, element.nextSibling);
    }
    element.classList.add("error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function clearError(element) {
    element.classList.remove("error");
    const errorElement = element.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
      errorElement.style.display = "none";
    }
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
