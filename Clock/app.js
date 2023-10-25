let section = document.querySelector("section"),
    icons = document.querySelector(".icons");

icons.onclick = ()=>{
    section.classList.toggle("dark");
}

// создание функции и вызов ее каждые секунды
setInterval(()=>{

    let date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; //если час меньше 12, то его значение будет AM, иначе его значение будет pm
    hour = hour > 12 ? hour - 12 : hour; //если значение часа больше 12, то 12 будет вычтено (сделав это, мы получим значение до 12, а не 13,14 или 24)
    hour = hour == 0 ? hour = 12 : hour; // если значение часа равно 0, то его значение будет равно 12

    // добавление 0 к началу всех значений, если они будут меньше 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;

}, 1000); // 1000 миллисекунд = 1 с