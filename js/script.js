
document.addEventListener("DOMContentLoaded", function () {
    let envelope = document.querySelector(".envelope");
    let card = document.querySelector(".card");

    envelope.addEventListener("click", function () {
        envelope.classList.add("opened"); // Tambahkan class untuk mengubah warna amplop
        card.classList.remove("hidden"); // Munculkan teks langsung
    });
});
