var $button = document.querySelector('.button')
$button.addEventListener('click', handleButtonClick)

function handleButtonClick() {
  var $userDay = document.getElementById("date").value;
  var $userMonth = document.getElementById("month").value;
  var $userYear = document.getElementById("year").value;
  var date = new Date();
  var currentDay = date.getDate();
  var currentMonth = 1 + date.getMonth();
  var currentYear = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if ($userDay > currentDay) {
    currentDay = currentDay + month[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if ($userMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
  var finalD = currentDay - $userDay;
  var finalM = currentMonth - $userMonth;
  var finalY = currentYear - $userYear;

  const $age = document.querySelector('.age')
  $age.innerHTML =` You are ${finalY} years ${finalM} months and ${finalD} days old`
}

