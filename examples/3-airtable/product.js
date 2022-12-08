const result = document.querySelector(".result");

const fetchData = async () => {
  result.innerHTML = `<h2>Loading...</h2>`;

  try {
    const id = window.location.search;
    console.log(id);
    const {
      data: { fields },
      // } = await axios(`/api/3-product${id}`);
    } = await axios(`/api/3-z-complete${id}`);
    // console.log(data);
    const { Name, Desc, price, Image } = fields;
    result.innerHTML = `<h1 class="title">${Name}</h1>
  <article class="product">
    <img class="product-img"
    src="${Image[0].url}"
    alt="${Name}"
    />
    <div class="product-info">
      <h5 class="title">${Name}</h5>
      <h5 class="price">${price}</h5>
      <p class="desc">${Desc}</p>
    </div>
  </article>`;
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchData();
