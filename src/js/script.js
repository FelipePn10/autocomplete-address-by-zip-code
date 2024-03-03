const addresForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const city = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighbordhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelector("#[data-input]");

const closeButton = document.querySelector("#close-message");

// Validação CEP INPUT - ENGLISH > // VALIDATE CEP INPUT

cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    // allow only numbrs
    if (!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }
});

// Get address event
cepInput.addEventListener("keyup", (e) => {

    const inputValue = e.target.value

    // Check if we have the correct length
    if(inputValue.length === 8) {
        getAddress(inputValue);
    }

});

// Get customer address from API
 const getAddress =  async (cep) => {
    toggleLoader();
 };

 // Show or hide loader
 const toggleLoader = () => {

    const fadeElement = document.querySelector("#fade");
    const loaderElement = document.querySelector("#loader");

    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");
 }
