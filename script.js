// ==================================
// 1. فتح المفاجأة ❤️
// ==================================

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", function () {
    welcome.style.display = "none";
    mainContent.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });

    createHearts(35);
});


// ==================================
// 2. القلوب المتحركة 💗
// ==================================

function createHearts(number) {
    const container = document.getElementById("hearts");

    for (let i = 0; i < number; i++) {
        const heart = document.createElement("div");

        heart.className = "heart-particle";
        heart.textContent = ["❤️", "💗", "💕", "✨", "💖"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 4) + "s";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 7500);
    }
}


// ==================================
// 3. إطفاء الشموع 🎂
// ==================================

const blowBtn = document.getElementById("blowBtn");
const candles = document.getElementById("candles");
const wishMessage = document.getElementById("wishMessage");

blowBtn.addEventListener("click", function () {

    candles.classList.add("blown");
// Create smoke from each candle
document.querySelectorAll(".candle").forEach((candle) => {
    for (let i = 0; i < 3; i++) {
        const smoke = document.createElement("span");
        smoke.className = "smoke";

        smoke.style.left = (Math.random() * 10 - 5) + "px";
        smoke.style.top = "-25px";
        smoke.style.animationDelay = (i * 0.2) + "s";

        candle.appendChild(smoke);

        setTimeout(() => {
            smoke.remove();
        }, 2500);
    }
});
    blowBtn.textContent = "أمنيتك اتحققت ❤️";
    blowBtn.disabled = true;

    wishMessage.textContent =
        "يا رب كل أمنياتك تتحقق وتفضلي دايمًا مبسوطة يا جنجوون ❤️";

    createHearts(70);
    confetti(100);

});


// ==================================
// 4. رسالة صينية 🀄
// ==================================

const chineseBtn = document.getElementById("chineseBtn");
const chineseMessage = document.getElementById("chineseMessage");

chineseBtn.addEventListener("click", function () {

    chineseMessage.classList.remove("hidden");

    chineseBtn.textContent = "生日快乐 ❤️";

    createHearts(15);

});


// ==================================
// 5. تكبير الصور 📸
// ==================================

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(function (img) {

    img.addEventListener("click", function () {

        lightboxImage.src = img.src;
        lightbox.classList.remove("hidden");

    });

});

closeLightbox.addEventListener("click", function () {
    lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.add("hidden");
    }
});


// ==================================
// 6. احتفال الكونفيتي 🎉
// ==================================

function confetti(number) {

    const emojis = ["🎉", "✨", "💖", "🎊", "🌸", "⭐"];

    for (let i = 0; i < number; i++) {

        const item = document.createElement("div");

        item.textContent = emojis[
            Math.floor(Math.random() * emojis.length)
        ];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-30px";
        item.style.fontSize = (15 + Math.random() * 20) + "px";
        item.style.zIndex = "200";
        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        const duration = 2000 + Math.random() * 3000;
        const distance = window.innerHeight + 100;
        const rotation = Math.random() * 700;

        const animation = item.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                {
                    transform: `translateY(${distance}px) rotate(${rotation}deg)`,
                    opacity: 0.8
                }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        animation.onfinish = () => item.remove();

    }
}


// ==================================
// 7. زر الاحتفال الكبير 🎊
// ==================================

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", function () {

    confetti(150);
    createHearts(80);

    celebrateBtn.textContent = "أحلى عيد ميلاد يا جنة ❤️";

});