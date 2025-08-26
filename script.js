//desplazamiento menu burguer
let menu = document.getElementById('menu-icon');
let close = document.getElementById('close-icon');
let modalNavbarBlack = document.getElementById('modal-navbar-background');

modalNavbarBlack.style.display = 'none'
menu.addEventListener("click", function () {
    modalNavbarBlack.style.display = 'block'
})
close.addEventListener("click", function () {
    modalNavbarBlack.style.display = 'none'
})


//--Cambio de cantidas con los botones mas y menos---
const buttonMinus = document.querySelector('.input-minus');
let number = document.querySelector('.input-number');
const buttonPlus = document.querySelector('.input-plus');
let counterNumber = 0;

buttonMinus.addEventListener('click', function () {
    counterNumber--;
    if (counterNumber <= 0) {
        counterNumber = 0;
    };
    number.value = counterNumber;
})

buttonPlus.addEventListener('click', () => {
    counterNumber++;
    number.value = counterNumber;
})

//Agregar el total de productos al carrito cuando se presiona el boton Add to car

const btnAddToCar = document.querySelector('.details-button');
let cardNotification = document.querySelector('.notification');
let previousValue = parseInt(cardNotification.innerText);


btnAddToCar.addEventListener('click', () => {

    previousValue = previousValue + counterNumber;
    cardNotification.innerText = previousValue;
    cardNotification.style.display = "block";
    drawProduct();
    // priceModal.innerHTML= `$125 x${previousValue} <span> $${previousValue * 125}.00</span>`;
})

//--Dar click en el carrito y mostrar los productos
const imgCart = document.querySelector('.header-cart');
let cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal-price');
const infoProducts = document.querySelector('.cart-modal-checkout-container');

// cartModal.style.display='none';
imgCart.addEventListener('click', () => {
    cartModal.classList.toggle('show-cart-modal');
    if (previousValue == 0) {
        infoProducts.innerHTML = '<p class="message-empty">Your cart is empty</p>';
    } else {
        drawProduct();
    }

});

//borrar contenido del carrito
function deleteProduct() {
    const iconDelete = document.querySelector('.cart-modal-delete');

    iconDelete.addEventListener('click', () => {
        infoProducts.innerHTML = '<p class="message-empty">Your cart is empty</p>';
        previousValue = 0;
        cardNotification.innerText = previousValue;
    })
}

//cambiar imagenes cuando se presionen las flechitas
const imageContainer = document.querySelector('.gallery-image-container');
const btnPrevious = document.querySelector('.previous-icon');
const btnNext = document.querySelector('.next-icon');
let imgIndex = 1;


btnNext.addEventListener('click', () => {
    changeNextImg(imageContainer);
});
btnPrevious.addEventListener('click', () => {
    changePreviousImg(imageContainer);
});



//Mostar el modal background cuando le doy click en la 
//img grande del desktop
let modalBackground = document.querySelector('.modal-gallery-background');

imageContainer.addEventListener('click', () => {
    modalBackground.style.display = "block";

})

//cambiar las imaganes principales desde los thumbnails
let thumbnails = document.querySelectorAll('.thumbnail');
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event => {
        imageContainer.style.backgroundImage = `url('/images/image-product-${event.target.id}.jpg')`;
    })
})

//Cerrar el gallery modal con boton X
const modalClose = document.querySelector('.modal-icon-close');

modalClose.addEventListener('click', () => {
    modalBackground.style.display = "none";
})


//cambiar las imagenes principales desde los thumbnails del modal
let modalThumbnails = document.querySelectorAll('.modal-thumbnail');
let modalImgContainer = document.querySelector('.modal-gallery-image-container');
modalThumbnails = [...modalThumbnails];

modalThumbnails.forEach(modalThumnail => {
    modalThumnail.addEventListener('click', event => {
        modalImgContainer.style.backgroundImage = `url('/images/image-product-${event.target.id.slice(-1)}.jpg')`;

    })
})

//cambiar las imagenes con la flechitas en el modal
const btnPreviousModal = document.querySelector('.modal-previous-icon');
const btnNextModal = document.querySelector('.modal-next-icon');

btnPreviousModal.addEventListener('click', () => {
    changePreviousImg(modalImgContainer);
})

btnNextModal.addEventListener('click', () => {
    changeNextImg(modalImgContainer);
})

//------ FUNCIONES ------
function drawProduct() {
    infoProducts.innerHTML = `
        <div class="cart-modal-details-container">
            <img class="img-item-cart" src="images/image-product-1-thumbnail.jpg" alt="img">
            <div class="info">
                <p class="cart-modal-product">Fall Limited Edition Sneakers</p>
                <p class="cart-modal-price">$125 x${previousValue} <span> $${previousValue * 125}.00</span></p>
            </div>
            <img class="cart-modal-delete" src="images/icon-delete.svg" alt="delete">
        </div>
        <button class="button-check">Checkout</button>`
    deleteProduct();
}

function changeNextImg(imgContainer) {
    if (imgIndex === 4) {
        imgIndex = 1
    }
    else {
        imgIndex++
    }
    imgContainer.style.backgroundImage = `url('/images/image-product-${imgIndex}.jpg')`;
}

function changePreviousImg(imgContainer) {
    if (imgIndex === 1) {
        imgIndex = 4
    }
    else {
        imgIndex--
    }
    imgContainer.style.backgroundImage = `url('/images/image-product-${imgIndex}.jpg')`;
}