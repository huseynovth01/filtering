const data = [
  {
    id: 1,
    price: 130000,
    numberOfRoom: 1,
    area: 73,
    img: "foto3.jpg",
  },
  {
    id: 2,
    price: 170000,
    numberOfRoom: 2,
    area: 90,
    img: "foto2.jpg",
  },
  {
    id: 3,
    price: 200000,
    numberOfRoom: 3,
    area: 120,
    img: "foto1.jpg",
  },
];

let activeFilter = [];

const container = document.querySelector(".container .second");
const filterInputs = document.querySelectorAll('.filter input');

filterInputs.forEach(input => {
  input.addEventListener('input', renderProducts);
});

function createProduct(data) {
  const card = document.createElement('div');

  card.innerHTML = `<div class="card">
    <img src="./images/${data.img}" alt="">
    <p class="price">${data.price} AZN</p>
    <p class="about">otaq -${data.numberOfRoom} , sahe - ${data.area}m^2  </p>
  </div>`;

  return card;
}

function renderProducts() {
  container.innerHTML = "";
  const minPrice = parseInt(document.querySelector(".min").value);
  const maxPrice = parseInt(document.querySelector(".max").value);
  const minArea = parseInt(document.querySelector(".min-area").value);
  const maxArea = parseInt(document.querySelector(".max-area").value);

  activeFilter = [...document.querySelectorAll('.room:checked')].map(checkbox => checkbox.id);

  const filteredData = data.filter(item => {
    return activeFilter.length === 0 || activeFilter.includes(item.numberOfRoom.toString())
  }).filter(item => {
    return item.price >= minPrice && item.price <= maxPrice && item.area >= minArea && item.area <= maxArea
  });

  filteredData.forEach(item => {
    const productDiv = createProduct(item);
    container.appendChild(productDiv);
  });
}

renderProducts();

