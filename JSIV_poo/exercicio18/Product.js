class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(percentage) {
    return this.price * ((100 - percentage) / 100);
  }
}

const watch = new Product('Relógio de pulso', '...', 80);
watch.addToStock(99);
const priceWithDiscount = watch.calculateDiscount(15);

console.log(watch);
console.log(priceWithDiscount);
