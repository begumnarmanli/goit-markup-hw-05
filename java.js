document.addEventListener("DOMContentLoaded", function () {
    const orderServiceButton = document.querySelector(".order-service-button");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModal");

    // Modal'ı gizleme (başlangıçta)
    modal.style.display = "none";

    // Modal'ı açma fonksiyonu
    orderServiceButton.addEventListener("click", function () {
        modal.style.display = "flex"; // Butona tıklandığında modal açılır
    });

    // Modal'ı kapama fonksiyonu
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none"; // Modal kapanır
    });

    // Modal dışına tıklayınca kapama fonksiyonu
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Modal dışına tıklanınca modal kapanır
        }
    });
});
