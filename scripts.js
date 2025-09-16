const container = document.getElementById('app');
const menuContainer = document.getElementById('menu-container');

async function getData() {
    const httpResponse = await fetch('https://neodigm.github.io/FED_Programming_Challenge/products.json');
    const data = await httpResponse.json();
    return data;
    
}

let data = getData();

console.log(data);