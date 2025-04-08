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
  // Получаем объект-плеер Storyline
var player = GetPlayer();

// Извлекаем данные для отправки (например, из переменной "MyVar")
var myData = player.GetVar("MyVar");

// Отправляем запрос в Make
fetch("https://hook.eu2.make.com/uvkorvaepfbkjc7f2n75kxtyues81ekf"
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ data: myData })
})
.then(function(response) {
  // Проверяем, что ответ успешный
  if (!response.ok) {
    throw new Error("Ошибка сети: " + response.statusText);
  }
  // Обрабатываем ответ как JSON
  return response.json();
})
.then(function(result) {
  // Лог для контроля
  console.log("Ответ от Make:", result);
  // Записываем полученные данные в переменную Storyline, например, "ResponseVar"
  // Допустим, нас интересует поле result из ответа
  player.SetVar("ResponseVar", result.result);
})
.catch(function(error) {
  console.error("Ошибка при обмене данными с Make:", error);
});
}

};
