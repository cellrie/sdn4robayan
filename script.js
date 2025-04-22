document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.getElementById("toggler");
  const navMenu = document.getElementById("nav-menu");

  toggler.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // --- Modal untuk galeri (saja) ---
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Buka modal saat klik gambar galeri
  document.querySelectorAll('.galeri-item img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt || img.nextElementSibling?.textContent || "";
    });
  });

  // Tombol close
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Klik di luar gambar modal untuk menutup
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
