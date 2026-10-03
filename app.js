function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function chooseCustomer() {
    window.location.href = "customer.html";
}


function chooseLaundry() {
    window.location.href = "laundry.html";
}