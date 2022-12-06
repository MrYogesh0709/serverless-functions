const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios("/api/2-basic-api");
    // console.log(data);
    const products = data
      .map((product) => {
        const {
          id,
          name,
          image: { url },
          price,
        } = product;
        return `
        <article class="product">
          <img
            src=${url}
          />
          <div class="info">
            <h5>${name}</h5>
            <h5 class="price">${price}</h5>
          </div>
        </article>`;
      })
      .join("");
    result.innerHTML = products;
  } catch (error) {
    // console.error(error.response);
    result.innerHTML = `<h4>There was an error,please try again later</h4>`;
  }
};
fetchData();
