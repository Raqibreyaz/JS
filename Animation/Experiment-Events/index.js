console.log("javascript begins here");

let bar = document.querySelector('.bar');
let circle = document.querySelector('.circle')
let second = document.querySelector('.second');


bar.addEventListener('click', (event) => {
    console.log(event)
    circle.style.left = (event.offsetX - 7) + 'px'
    console.log(circle);

}
)

second.addEventListener('click', (obj) => {

    console.log(obj);
    console.log(second);

    second.insertAdjacentHTML('afterBegin', `<span class="second-circle">
    </span>`);

    let secondCircle = document.body.getElementsByClassName('second-circle');

    console.log(secondCircle);

    try {

        secondCircle[0].style.left = (obj.offsetX - 7) + 'px';
        secondCircle[0].style.top = (obj.offsetY - 7) + 'px'
    } catch (error) {
        console.log(error);

    }

}
    , true)