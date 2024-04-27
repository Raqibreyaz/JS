
let adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let shop_name = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}
let another_word = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

let a = Math.floor(Math.random() * 3) + 1;
let b = Math.floor(Math.random() * 3) + 1;
let c = Math.floor(Math.random() * 3) + 1;

console.log(adjectives[a], shop_name[b], another_word[c]);
