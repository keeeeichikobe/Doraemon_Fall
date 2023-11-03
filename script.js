let snowContainer = document.querySelector(".snow-container");

const createSnow = () => {
    let snow = document.createElement("img"); // 画像要素を作成
    snow.className = "snow";
    snow.src = "images/image_doraemon.png"; // 降らせる画像のファイルパスを設定

    let minSize = 5;
    let maxSize = 90;

    let snowSize = Math.random() * (maxSize-minSize) + minSize;
    
    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    snow.style.left = Math.random() * 100 + "%";
    snow.style.animationDuration = (Math.random() * 5 + 5) + "s";
    snow.style.transform = `rotate(${Math.random() * 360}deg)`; // ランダムな回転値を設定
    

    snowContainer.appendChild(snow);

    snow.addEventListener("animationiteration", () => {
        snow.remove();
    });
};

setInterval(createSnow, 100);
