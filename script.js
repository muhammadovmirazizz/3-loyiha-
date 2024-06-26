
let box = document.querySelector('#box')
fetch('https://fakestoreapi.com/products')
  .then(data => data.json())
  .then(data =>
    data.map((item, idx) => {
      return (box.innerHTML += `
         <div class="row">
    <div class="col p-3">
      <div class="card p-3">
        <div class="card-image">
          <img src=${item.image} class='card-img-top' alt=${item.title}/>
          <div class="card-title">${item.title.slice(0, 20)}...</div>
        </div>
        <div class="card-content">
          <p>${item.description.slice(0, 50)}...</p>
          <p class='green lighten-4'>Price: ${item.price}$</p>
        </div>
         <a href="index2.html"><btn class='btn btn-success'>Sotib olish</btn></a>
      </div>
    </div>
  </div>`)
    })
  )
