// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
import axios from "axios";

const sampleMakale = {
  id: "1e4d8724-5973-4b5b-84d9-a30a3c5adb70",
  anabaslik:
    "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
  yazarFoto: "https://picsum.photos/514",
  yazarAdi: "SIR RUFF'N'STUFF",
};

const Card = (makale) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.innerHTML = `
       <div class="headline">${makale.anabaslik}</div>
       <div class="author">
         <div class="img-container">
           <img src=${makale.yazarFoto}>
         </div>
         <span>${makale.yazarAdi} tarafından</span>
       </div>`;

  return cardDiv;
};

const cardEkleyici = (secici) => {
  axios
    .get("http://localhost:5001/api/makaleler")
    .then(function (response) {
      const cardContainer = document.querySelector(secici);

      for (let m in response.data.makaleler) {
        response.data.makaleler[m].map((mak) => {
          cardContainer.appendChild(Card(mak));
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { Card, cardEkleyici };
