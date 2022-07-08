const uzs = document.querySelector("#uzs");
const usd = document.querySelector("#usd");
uzs.addEventListener("click", (e) => {
  const request = new XMLHttpRequest();

  // 1- method va ulanadigan ma'lumot linki yoziladi
  request.open("GET", "json/current.json");
  // 2 - Ma'lumot turi kiritiladi
  request.setRequestHeader("Content-Type", "application/jsonl; charset=utf-8");
  // 3 - So'rovni yuborish
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      usd.value = (+uzs.value / data.current.usd).toFixed(2);
    } else {
      usd.value = "Something went wrong";
    }
  });

  // HTTP status: 200 - ok, 404 - not found, 500 - serever, 400 - client error
  // statusText
  // response
  // readyState
});
