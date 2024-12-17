function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Menampilkan "Home" sebagai tampilan awal
document.addEventListener("DOMContentLoaded", () => {
    showSection('home');
});
// Script untuk menampilkan blog hanya ketika menu "blog" aktif
document.addEventListener("DOMContentLoaded", function () {
    const blogSection = document.getElementById("blog-section");
    const blogMenu = document.getElementById("menu-blog");

    // Event listener untuk klik menu "blog"
    blogMenu.addEventListener("click", function () {
        blogSection.style.display = "block"; // Tampilkan blog section
    });

    // Sembunyikan blog saat halaman lainnya dipilih
    document.querySelectorAll(".menu-item").forEach(function (menuItem) {
        if (menuItem !== blogMenu) {
            menuItem.addEventListener("click", function () {
                blogSection.style.display = "none"; // Sembunyikan blog section
            });
        }
    });
});
