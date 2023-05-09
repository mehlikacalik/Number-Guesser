/*
Oyunun Fonksiyonları:
-Oyuncu min vemax değerleri arasında olan sayıyı tahmin etmeli
-Oyuncunun belirli bir tahmin hakkı olacak
-Oyuncunun kazanma durumunu bildir
-Tekrar denemesi için bir seçenek ver
*/

// Arayüz Elemanları
const game = document.querySelector("#game"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num");

// Oyunda Kullanılacak Değerler
let min = 1,
  max = 10,
  winningNumber = getRandomNum(min, max),
  guessesLeft = 3;

//   min ve max değerlerini arayüze gönder
minNum.textContent = min;
maxNum.textContent = max;

// yapılan tahmini izle
guessBtn.addEventListener("click", () => {
  // input içerisindeki sayıyı al ve sayıya çevir
  let guess = parseInt(guessInput.value);

  //   oyunu kazandımı kontrol et
  if (guess === winningNumber) {
    // oyunu kazandı
    gameOver(true, `KAZANDIN! Doğru Tahmin: ${winningNumber}`);
  } else {
    // Yanlış sayı tahmini
    guessesLeft--;

    if (guessesLeft === 0) {
      // Oyunu kaybetti
      gameOver(false, `KAYBETTİN!Doğru Tahmin: ${winningNumber}`);
    } else {
      // kalan hak 0 dan fazla ise
      // çerçeveyi kırmızı yap
      guessInput.style.borderColor = "red";

      //   inputu temizle
      guessInput.value = "";

      // kullanıcıya kaç hakkının kaldığını söyle
      setMessage(`${guess} doğru değil, ${guessesLeft} hakkınız kaldı`, "red");
    }
  }
});

// oyunu bitirme
function gameOver(won, msg) {
  let color = won ? "green" : "red";
  console.log(color);

  // inputu iptal et
  guessInput.disabled = true;

  //   inputun çerçevesini değiştir
  guessInput.borderColor = color;

  //   kullanıcıyı  bilgilendir
  setMessage(msg);
}

// kullanıcıya mesaj verme
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

//   rastgele sayı bulma methodu
function getRandomNum(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  return random;
}
