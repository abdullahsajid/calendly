let element = document.getElementById("my-calendar");
let myCalendar = jsCalendar.new(element);
let parent_btns = document.querySelector(".parent-btns");
let timerModel = document.querySelector("#timerModel");
let details = {};
myCalendar.onDateClick((e, date) => {
  //   console.log(date.toString());
  let currDate = date.toString();
  let splitDates = currDate.split(" ");
//   console.log(splitDates);
  document.querySelector(
    ".setDate"
  ).innerHTML = `${splitDates[0]}, ${splitDates[1]} ${splitDates[2]}`;
  details["day"] = splitDates[0];
  details["month"] = splitDates[1];
  details["date"] = splitDates[2];
  details["year"] = splitDates[3];
  timerModel.classList.add("toggle-view");
  document.querySelector("#mainContainer").classList.add("w-change");
});

let initialHour = 8;
let initialMin = 45;
for (let i = 0; i < 19; i++) {
  const btn = document.createElement("button");
  btn.className =
    "border border-[rgba(0,105,255,0.5)] py-2 text-[#0060e6] font-bold hover:border-[#0060e6]";
  btn.textContent = `${initialHour}:${initialMin}pm`;
  btn.addEventListener("click", () => {
    details["time"] = btn.innerHTML;
    let spBtw = details.time.split(":");
    let startTime = spBtw[1].slice(0, 2);
    let no = Number(startTime)
    no += 7;
    document.querySelector(
      "#meetingDetails"
    ).innerHTML = `${details.time} - ${spBtw[0]}:${no}pm, ${details.day}, ${details.month} ${details.date}, ${details.year}`;
    document.querySelector('#viewTiming').classList.add('toggle-view')
  });
  
  parent_btns.appendChild(btn);

  initialMin += 7;
  if (initialMin > 55) {
    initialHour += 1;
    let take = 60 - initialMin;
    let test = 7 - take;
    initialMin = test;
  }
}
