let row = document.querySelector('.row')

fetch(`https://api.escuelajs.co/api/v1/products`)
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        row.innerHTML += `
            <div class = "card">
            <img src=" ${item.category.image} " alt = "">
            <id class = "card_id">${item.id}</id>
            <h2 class = "card_title">${item.title}</h2>
            <p class = "card_price">${item.price}</p>
            <p class = "card_subtitle">${item.description}</p>
            </div>
        `
    })
})
row('all')