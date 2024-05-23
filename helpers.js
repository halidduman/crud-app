//* Tipi analiz edip ona göre fonksiyonun çağrıldığı yere
//* tipe denk gelen açıklamayı gönderir.
export const detecType = (type) => {
    switch (type) {
      case "park":
        return "Park Yeri";
      case "home":
        return "Ev";
      case "job":
        return "İş";
      case "goto":
        return "Ziyaret";
    }
  };
  //* Local storage ı güncelleyecek fonksiyon
  export const setStorage = (data) => {
    //* Veriyi locale göndermek için stringe çevirme
    const strData = JSON.stringify(data);
    //* localStoraga veriyi gönderdik.
    localStorage.setItem("notes", strData);
  };
  
  var carIcon = L.icon({
    iconUrl: "car.png",
    iconSize: [55, 50],
  });
  var homeIcon = L.icon({
    iconUrl: "home-marker.png",
    iconSize: [50, 50],
  });
  var jobIcon = L.icon({
    iconUrl: "job.png",
    iconSize: [50, 50 ],
  });
  var visitIcon = L.icon({
    iconUrl: "visit.png",
    iconSize: [50, 55],
  });
  
  export const detecIcon = (type) => {
    switch (type) {
      case "park":
        return carIcon;
      case "home":
        return homeIcon;
      case "job":
        return jobIcon;
      case "goto":
        return visitIcon;
    }
  };