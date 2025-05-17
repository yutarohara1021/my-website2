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
    const likeBtn = document.getElementById('likeBtn');
    const shareBtn = document.querySelectorAll('.share-button'); // 複数のシェアボタンがある可能性を考慮

    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            dataLayer.push({
                'event': 'button_clicked', // イベント名
                'button_id': this.id,       // ボタンのID
                'button_class': this.className, // ボタンのクラス
                'button_text': this.textContent.trim(), // ボタンのテキスト
                'action_type': 'like'        // アクションの種類
            });
        });
    }

    shareBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            dataLayer.push({
                'event': 'button_clicked',
                'button_id': this.id,
                'button_class': this.className,
                'button_text': this.textContent.trim(),
                'action_type': 'share'
            });
        });
    });

    // 他のボタンについても同様に追加
});
