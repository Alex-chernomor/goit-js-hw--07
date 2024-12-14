const items = document.querySelectorAll('.item');

items.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`);
})

