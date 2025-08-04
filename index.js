
// product image selection functionality
const productImages = document.querySelectorAll(".product-images img");

for (let i = 0; i < productImages.length; i++) {

    const imageBtn = productImages[i];

    imageBtn.addEventListener("click", function (e) {

        const color = e.target.id.replace("p-", "");
        console.log(color);

        for (let j = 0; j < productImages.length; j++) {
            productImages[j].classList.remove('product-images-border');
        }

        e.target.classList.add('product-images-border');

            const productImage = document.getElementById("selected-product");
            productImage.src = `./asset/p-${color}.jpg`;

    // productImage.src= './asset/p-4.jpg'
    })


}










// accordion functionality
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const currentlyActive = document.querySelector(".accordion-header.active");
        if (currentlyActive && currentlyActive !== header) {
            currentlyActive.classList.remove("active");
            currentlyActive.nextElementSibling.style.maxHeight = null;
        }

        header.classList.toggle("active");
        const content = header.nextElementSibling;
        if (header.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    })
})

