/*==================================================
    LIGHTBOX & OVERLAY ICON UNTUK GAMBAR SERTIFIKAT
==================================================*/
document.addEventListener("DOMContentLoaded", function() {
    const certLinks = document.querySelectorAll(".project-image a");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    if(modal && modalImg) {
        certLinks.forEach(link => {
            // Hapus target _blank agar tidak buka tab baru jika JS berjalan
            link.removeAttribute("target");
            
            // Atur gaya parent A
            link.style.position = "relative";
            link.style.display = "block";
            link.style.overflow = "hidden";
            link.style.borderRadius = "8px";
            
            // Buat elemen overlay dengan ikon mata
            const overlay = document.createElement("div");
            overlay.innerHTML = '<i class="bi bi-eye"></i>';
            overlay.style.position = "absolute";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(37, 99, 235, 0.7)"; // Warna primer semi-transparan
            overlay.style.color = "white";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.fontSize = "3rem";
            overlay.style.opacity = "0";
            overlay.style.transition = "opacity 0.3s ease";
            overlay.style.cursor = "pointer";
            overlay.style.pointerEvents = "none"; // Agar klik diteruskan ke link
            
            // Tambahkan overlay ke dalam A
            link.appendChild(overlay);
            
            // Tambahkan efek hover pada parent A
            link.addEventListener("mouseenter", function() {
                overlay.style.opacity = "1";
            });
            link.addEventListener("mouseleave", function() {
                overlay.style.opacity = "0";
            });

            // Tambahkan fungsi klik lightbox
            link.addEventListener("click", function(e) {
                e.preventDefault(); 
                modal.style.display = "flex";
                modalImg.src = this.href;
            });
        });

        // Klik di luar gambar atau tombol close untuk menutup modal
        modal.addEventListener("click", function(e) {
            if (e.target === modal || e.target.tagName.toLowerCase() === 'span') {
                modal.style.display = "none";
            }
        });
    }
});