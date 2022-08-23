const headerComponent = function (title) {
  return `
          <header>
              <h1>${title}</h1>
          </header>
      `;
};

/* const yearComponent = function () {
  return `
        <div class='year-container'></div>
    `;
}; */

/* const monthComponent = function (name) {
  return `
        <section class="month-card">
            <div class="month-card-name">${name}</div>
            <hr>
            <div class="days">
                <div class "day">S</div>
                <div class "day">M</div>
                <div class "day">T</div>
                <div class "day">W</div>
                <div class "day">Th</div>
                <div class "day">F</div>
                <div class "day">S</div>
            </div>
            <div class="days-container">
                <time datetime="DD">${day}</time>
            </div>
        </section>
    `;
}; */

const footerComponent = function (copyrights) {
  return `
    <footer>${copyrights}</footer>
    `;
};

/* root.insertAdjacentHTML("beforebegin", headerComponent("2022"));
root.insertAdjacentHTML("beforeend", yearComponent());
root.insertAdjacentHTML(
  "afterend",
  footerComponent("Copyright © 2022 ZsuperCalendars Ltd. All rights reserved")
); */

/* for (let m = 0; m < year.length; m++) {
  document
    .querySelector("#root")
    .insertAdjacentHTML("beforeend", monthComponent(year[m].name));
  for (let j = 1; j <= year[m].days; j++) {
    document
      .querySelector(".days-container" + year[m].nth)
      .insertAdjacentHTML("beforeend", dayComponent[j]);
  }
}
 */
/* const days = ['S', 'M', 'T', 'W', 'Th', 'F', 'S']; */

function dayComponent(day) {
    return `
        <div class="card">
            <time datetime="DD">${day}</time>
        </div>
    `;
};

function monthCards(month) {
    let componentData = "";
    for ( let day = 1; day <= month.days; day++) {
        componentData += dayComponent(day);
    };
    console.log(month.name);
    let monthHtml = "";
    monthHtml = `
        <section id="${month.id}" class="container">
            <div class="name">${month.name}</div>
            <hr>
            <div class="inner-container">
                <div class="days">
                    <div class="day">S</div>
                    <div class="day">M</div>
                    <div class="day">T</div>
                    <div class="day">W</div>
                    <div class="day">T</div>
                    <div class="day">F</div>
                    <div class="day">S</div>
                </div>
                <div class="day-container">${componentData}</div>
            </div>
        </section>
    `
    return monthHtml;
};

function init() {
  const root = document.querySelector("#root");

  root.insertAdjacentHTML("beforebegin", headerComponent("2022"));
  root.insertAdjacentHTML(
    "afterend",
    footerComponent("Copyright © 2022 ZsuperCalendars Ltd. All rights reserved")
  );

  for (i = 0; i <= year.length - 1; i++) {
    const month = monthCards(year[i]);
    root.insertAdjacentHTML("beforeend", month);
  }
}

init();
