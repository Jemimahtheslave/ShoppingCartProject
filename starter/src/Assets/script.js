const products = [
  {
    name: "Carton of Cherries",
    price: 5,
    quantity: 0,
    productId: 0.1,
    image: "./images/cherry.jpg", // Updated image path
  },
  {
    name: "Carton of strawberries",
    price: 4,
    quantity: 0,
    productId: 0.2,
    image: "./images/orange.jpg", // Updated image path
  },
  {
    name: "Bag of Oranges",
    price: 10,
    quantity: 0,
    productId: 0.3,
    image: "./images/strawberry.jpg", // Updated image path
  },
];

const cart = [];

// Function to find a product by its productId
const findProductById = (productId) => products.find((product) => product.productId === productId);

// Function to add a product to the cart
const addProductToCart = (productId) => {
  let product = products.find((product) => product.productId === productId);
  product.quantity += 1;

  if (!cart.includes(product)) {
    cart.push(product);
  }
};

// Function to increase the quantity of a product in the cart
const increaseQuantity = (productId) => {
  const existingCartItem = cart.find((item) => item.productId === productId);
  if (existingCartItem) {
    existingCartItem.quantity++;
  }
};

// Function to decrease the quantity of a product in the cart
const decreaseQuantity = (productId) => {
  const existingCartItemIndex = cart.findIndex((item) => item.productId === productId);

  if (existingCartItemIndex !== -1) {
    const existingCartItem = cart[existingCartItemIndex];
    existingCartItem.quantity--;

    if (existingCartItem.quantity === 0) {
      cart.splice(existingCartItemIndex, 1);
    }
  }
};

// Function to remove a product from the cart
const removeProductFromCart = (productId) => {
  const existingCartItemIndex = cart.findIndex((item) => item.productId === productId);

  if (existingCartItemIndex !== -1) {
    const existingCartItem = cart[existingCartItemIndex];
    cart.splice(existingCartItemIndex, 1);
    existingCartItem.quantity = 0;
  }
};

// Function to calculate the total cost of the items in the cart
const cartTotal = () => {
  let total = 0;
  cart.forEach((element) => {
    const itemTotal = element.quantity * element.price;
    total += itemTotal;
  });
  return total;
};

// Function to empty the cart and reset totalPaid
const emptyCart = () => {
  cart.forEach((product) => {
    product.quantity = 0;
  });
  cart.length = 0;
  totalPaid = 0;
};

// Global variable to keep track of the total paid
let totalPaid = 0;

// Function to handle payment and return the remaining balance
const pay = (amount) => {
  // Add the current payment to totalPaid
  totalPaid += amount;

  // Calculate the remaining balance
  let remaining = totalPaid - cartTotal();

  if (remaining >= 0) {
    // Reset totalPaid for the next payment
    totalPaid = 0;
    // Empty the cart
    emptyCart();
  }

  return remaining;
};
