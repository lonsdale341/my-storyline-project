window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  console.log("Код запущен при нажатии на кнопку2");
// Получаем объект-плеер Storyline
var player = GetPlayer();

// Извлекаем данные из переменной Storyline (например, "MyVar")
var myData = player.GetVar("MyVar");

// Отправляем данные в Make через POST-запрос
fetch("https://hook.eu2.make.com/uvkorvaepfbkjc7f2n75kxtyues81ekf", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ data: myData })
})
.then(function(response) {
  if (!response.ok) {
    throw new Error("Ошибка сети: " + response.statusText);
  }
  return response.json();
})
.then(function(result) {
  // Записываем полученный ответ обратно в переменную Storyline
  player.SetVar("ResponseVar", result.someField);
  console.log("Данные успешно отправлены в Make:", result);
})
.catch(function(error) {
  console.error("Ошибка при отправке данных в Make:", error);
});
}

};
