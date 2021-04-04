const carousel_buttons = document.getElementById("retinaDisplay__carousel__buttons");
const carousel_imagesArr = document.getElementById("retinaDisplay__carousel__images").children;

const carousel_BackBtn = carousel_buttons.children[0];
const carousel_FrontBtn = carousel_buttons.children[1];

const carousel_textArr = [
    "A mirrorlike enhanced reflector sheet in the backlight reflects over 98 percent of incident light, allowing MacBook Pro to achieve 500 nits of brightness efficiently.",
    "An Apple-patented metal layer in the TFT maximizes the transmittance of the pixels, enhancing brightness and color uniformity while reducing pixel cross-talk, which can cause visual artifacts.",
    "The oxide thin film transistor (TFT) features 10 times faster pixel charging than the traditional amorphous silicon TFT, and holds the pixel voltage steady during low-frequency power-saving modes, enabling pin-sharp resolution and longer battery life.",
    "The narrow-band LED-powered backlight allows MacBook Pro to represent the P3 wide color gamut for brilliant, true-to-life color in photos and videos."
]

let carousel_slideCounter = 4;

window.addEventListener("load", () => {
    const carousel_text = document.getElementById("retinaDisplay__carousel__text");
    carousel_text.innerHTML = carousel_textArr[0];
    
    carousel_imagesArr[0].style.opacity = 1;
})

carousel_BackBtn.addEventListener("click", () => {
    if (carousel_slideCounter === 1) return

    const carousel_text = document.getElementById("retinaDisplay__carousel__text");
    carousel_text.style.opacity = 0;
    carousel_text.addEventListener("transitionend", () => {
        carousel_text.innerHTML = carousel_textArr[carousel_slideCounter-1]
        carousel_text.style.opacity = 1;
    })

    carousel_imagesArr[carousel_slideCounter-1].style.opacity = 0;
    carousel_imagesArr[carousel_slideCounter-2].style.opacity = 1;

    carousel_slideCounter--
})

carousel_FrontBtn.addEventListener("click", () => {
    if (carousel_slideCounter >= carousel_imagesArr.length) return
    const carousel_text = document.getElementById("retinaDisplay__carousel__text");
    carousel_text.style.opacity = 0;
    carousel_text.addEventListener("transitionend", () => {
        carousel_text.innerHTML = carousel_textArr[carousel_slideCounter-1]
        carousel_text.style.opacity = 1;
    })

    carousel_imagesArr[carousel_slideCounter].style.opacity = 1;

    for ( let i=0; i < carousel_imagesArr.length; i++) {
        if ( carousel_slideCounter > i ) {
            carousel_imagesArr[i].style.opacity = 0.5;
        }
    }

    carousel_slideCounter++
})