// const phoneModel = 'Samsung M12';
// const phoneColor = 'qora';
// const phoneMemory = 64;
// const phoneCamera = '48MP';
// console.log(phoneModel);
// console.log(phoneColor);
// console.log(phoneMemory);
// // console.log(phoneCamera);
// const newTitle = "yangi nom";
// const elLogoLink= document.querySelector('.site-header-logo');

// const elChangeLogoTextButton = document.querySelector('.change-logo-text-button');

// elChangeLogoTextButton.addEventListener('click', function () {
//     elLogoLink.textContent='Boshqa nom';
// })

const elLightModeButton = document.querySelector('.site-header-light');
const elDarkModeButton = document.querySelector('.site-header-dark');

elDarkModeButton.addEventListener('click', function () {
    document.body.classList.add('dark-mode');
    
})

elLightModeButton.addEventListener('click', function () {
    document.body.classList.remove('dark-mode');
    
})