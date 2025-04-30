document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggler
  const toggler = document.getElementById("toggler");
  const navMenu = document.getElementById("nav-menu");

  toggler.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // --- Modal untuk galeri (saja) ---
  const modal = document.getElementById("imgModal");
  // Cek jika elemen modal ada sebelum memanipulasinya
  if (modal) {
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
    if (closeBtn) {
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };
    }

    // Klik di luar gambar modal untuk menutup
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  // --- Periksa apakah Swiper sudah dimuat ---
  if (typeof Swiper === 'function') {
    // --- Swiper Carousel untuk Kegiatan ---
    const kegiatanSwiper = new Swiper('.kegiatan-swiper', {
      centeredSlides: true, // Center the active slide
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-kegiatan', // Ubah selector pagination
        clickable: true,
        // Posisikan pagination di luar container dengan CSS
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'slide',
      speed: 800,
      breakpoints: {
        // When window width is >= 577px
        577: {
          slidesPerView: 1.8, // Show partial side slides
          spaceBetween: 15,
        },
        // When window width is >= 901px
        901: {
          slidesPerView: 2.5, // Show more slides with center focus
          spaceBetween: 20,
        },
      },
    });
    
    // Log untuk debugging
    console.log('Kegiatan Swiper initialized with autoplay');
  } else {
    console.error('Swiper tidak ditemukan. Pastikan library Swiper sudah dimuat.');
  }
});