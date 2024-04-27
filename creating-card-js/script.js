
function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let div = document.createElement('div');

    document.body.insertAdjacentElement('beforeend',div);

    div.className = "container";

    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    if (views >= 10 ** 3 && views <= 10 ** 6 - 1) {

        views = views / 10 ** 3 + "K";
    }
    else if (views >= 10 ** 6 && views <= 10 ** 9 - 1) {

        views = views / 10 ** 6 + "M";
    }
    else if (views >= 10 ** 9) {

        views = views / 10 ** 9 + "B";
    }

    div1.insertAdjacentHTML('afterbegin', `<img src=${thumbnail}>`);
    div1.insertAdjacentHTML('beforeend', `<div><div>${duration}</div></div>`);

    div2.insertAdjacentHTML('afterbegin', `<h3>${title}</h3>`);
    div2.insertAdjacentHTML('beforeend', `<span>${cName}</span>
    <span>${views} views </span>
    <span>${monthsOld} months ago</span>`);

    div.insertAdjacentElement('beforeend', div1);
    div.insertAdjacentElement('beforeend', div2);

    div.setAttribute("style", "height: 200px;width: 100vw;background-color:black;display: flex;align-items: center;")

    div1.setAttribute("style", "position:relative");

    div1.children[0].setAttribute("style", "height:150px;width: 250px;padding:15px 10px 10px 15px;");

    div1.children[1].setAttribute("style", "height: 23px;width: 41px;background-color: black;color: white;position: absolute;right: 14px;bottom: 19px;opacity:0.88;border-radius: 4px;");

    div1.children[1].firstElementChild.setAttribute("style", " height: 100%;width: 100%;position: relative;z-index: 5;");

    div2.setAttribute("style", "height: 150px;color: white;text-transform:capitalize;");

    div2.firstElementChild.setAttribute("style","margin:0px;margin-bottom:20px");

    div2.lastElementChild.setAttribute("style", "padding: 20px 0px;")

}

document.body.setAttribute("style", "margin: 0; padding: 0;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;");

createCard("installing vs code and how websites work|sigma web development course-tutorial #1", "CodeWithHarry", 7200, 2, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");

createCard("html tags and attributes |sigma web development course- tutorial #2", "CodeWithHarry", 1800000, 2, "40:35", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");
