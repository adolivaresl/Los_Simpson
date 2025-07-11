document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.addCart');
    const toastEl = document.getElementById('toastCarrito');
    const toast = new bootstrap.Toast(toastEl, {
        delay: 2000 
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            toast.show();
        });
    });
})