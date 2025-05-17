const img= document.getElementById("myImage");

img.addEventListener("click", () =>{
    img.classList.remove("bounce-animation");
    void img.offsetWidth;
    img.classList.add("bounce-animation");
})

const img2= document.getElementById("myImage2");

img2.addEventListener("click", () =>{
    img2.classList.remove("bounce-animation");
    void img2.offsetWidth;
    img2.classList.add("bounce-animation");
})

const img3= document.getElementById("myImage3");

img3.addEventListener("click", () =>{
    img3.classList.remove("bounce-animation");
    void img3.offsetWidth;
    img3.classList.add("bounce-animation");
})



const btn = document.getElementById("moveBtn");
const image = document.getElementById("myImage");

let moved = false;

btn.addEventListener("click", () => {
  if (!moved) {
    image.style.left = "300px"; // 動かす距離
  } else {
    image.style.left = "0";
  }
  moved = !moved;
});




const likeButton = document.getElementById('likeButton');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
});








//ボタンjs
document.addEventListener('DOMContentLoaded', function() {
    const likeBtn = document.getElementById('lileButton');

    if (lileButton) {
        lileButton.addEventListener('click', function() {
            this.classList.toggle('liked');
            
            dataLayer.push({
                'event': 'user_interaction', // イベント
                'interaction_type': 'いいね',
                'liked': this.classList.contains('liked') // 現在の「いいね！」状態 (true/false)
            });
        });
    }

   const shareButtons = document.querySelectorAll('.share-button'); // <button class="share-button"> が存在しないため、querySelectorAll は空の NodeList を返します

    shareButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            dataLayer.push({
                'event': 'user_interaction',
                'interaction_type': 'シェア'
                
            });
        });
    });

    // 他のボタンについても同様に追加
});


const moveBtn = document.getElementById("moveBtn");
    const image = document.getElementById("myImage");
    let moved = false;

    if (moveBtn && image) {
        moveBtn.addEventListener("click", () => {
            if (!moved) {
                image.style.left = "300px"; // 動かす距離
            } else {
                image.style.left = "0";
            }
            moved = !moved;
        });
    }

    const img = document.getElementById("myImage");
    const img2 = document.getElementById("myImage2");
    const img3 = document.getElementById("myImage3");


if (img) {
        img.addEventListener("click", () => {
            img.classList.remove("bounce-animation");
            void img.offsetWidth;
            img.classList.add("bounce-animation");
        });
    }

    if (img2) {
        img2.addEventListener("click", () => {
            img2.classList.remove("bounce-animation");
            void img2.offsetWidth;
            img2.classList.add("bounce-animation");
        });
    }

    if (img3) {
        img3.addEventListener("click", () => {
            img3.classList.remove("bounce-animation");
            void img3.offsetWidth;
            img3.classList.add("bounce-animation");
        });
    }
});
