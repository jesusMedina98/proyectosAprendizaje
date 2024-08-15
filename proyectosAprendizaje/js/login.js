const heroOpenBtn = document.querySelector('#hero-open'),
    logincontainer = document.querySelector('.login_container'),
    loginwrapper = document.querySelector('.login_wrapper'),
    heroCloseBtn = document.querySelector('.hero_close'),
    signupBtn = document.querySelector('#signup'),
    loginBtn = document.querySelector('#signup'),
    pwShowHide = document.querySelectorAll('.pw_hide');


heroOpenBtn.addEventListener("click", () => logincontainer.classList.add("show"))
heroCloseBtn.addEventListener("click", () => logincontainer.classList.remove("show"))


pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});
