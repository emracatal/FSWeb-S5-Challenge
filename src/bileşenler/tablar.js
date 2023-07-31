// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

import axios from "axios";

const Tablar = (konu) => {
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");

  topicsDiv.innerHTML = konu
    .map((k) => {
      return `<div class="tab">${k}</div>`;
    })
    .join("");

  return topicsDiv;
};

const tabEkleyici = (secici) => {
  axios
    .get("http://localhost:5001/api/konular")

    .then(function (response) {
      console.log("görev 4", response);
      const tabOgeleri = document.querySelector(secici);
      return tabOgeleri.appendChild(Tablar(response.data.konular));
    })
    .catch(function (error) {
      console.log(error);
    });
};
export { Tablar, tabEkleyici };
