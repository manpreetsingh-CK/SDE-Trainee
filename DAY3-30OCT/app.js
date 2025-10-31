function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

Product.prototype.getDiscountedPrice = function (percent) {
  return this.price - (this.price * percent) / 100;
};

var products = [];
var prices = products.map(function (p) {
  return p.price;
});





var container = document.getElementById("productsContainer");

(function () {

  var initialProducts = [
        new Product("Laptop", 999.99, "Electronics"),
        new Product("Smartphone", 599.99, "Electronics")
    ];

    
    initialProducts.forEach(function(product) {
        products.push(product);
        createProductCard(product);
    });

    
    updateCostliestProduct();

})();

function updateCostliestProduct() {

  var maxPrice = products[0];
  for (let index = 1; index < products.length; index++) {
    if (products[index].price > maxPrice.price) {
      maxPrice = products[index];
    }
  }
  showCostliest.call(maxPrice);

}

function showCostliest() {
  document.getElementById("topInfo").textContent =
    "Price of costliest product is ₹" + this.price;
}


function createProductCard(p) {
  var card = document.createElement("div");
  card.className = "product-card";

  var nameEle = document.createElement("h3");
  nameEle.textContent = p.name;

  var priceEle = document.createElement("p");
  priceEle.textContent = "Price: " + p.price;

  var cateEle = document.createElement("p");
  cateEle.textContent = "Category: " + p.category;

  var btn = document.createElement("button");
  btn.textContent = "10% Off";

  var discountEle = document.createElement("p");

  btn.addEventListener("click", function () {
    discountEle.textContent = "Discounted Price: " + p.getDiscountedPrice(10);
  });
  card.addEventListener("mouseenter", function () {
    card.classList.add("Highlight");
  });

  card.addEventListener("mouseout", function () {
    card.classList.remove("Highlight");
  });

  card.appendChild(nameEle);
  card.appendChild(priceEle);
  card.appendChild(cateEle);
  card.appendChild(btn);
  card.appendChild(discountEle);
  container.appendChild(card);
}

var addProductBtn = document.getElementById("addProductBtn");


addProductBtn.addEventListener("click", function () {
  var name = prompt("Enter product name:");
  var price = parseFloat(prompt("Enter product price:"));
  var category = prompt("Enter product category:");

  var newProduct = new Product(name, price, category);
  products.push(newProduct);

  createProductCard(newProduct);

  updateCostliestProduct();

});
