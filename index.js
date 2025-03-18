const online = {
    "users": [
      {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "orders": [
          {
            "orderId": 101,
            "date": "2024-03-10",
            "total": 250.75,
            "status": "Shipped",
            "items": [
              {
                "productId": 1001,
                "name": "Wireless Headphones",
                "category": {
                  "id": 10,
                  "name": "Electronics"
                },
                "price": 150.5,
                "quantity": 1
              },
              {
                "productId": 1002,
                "name": "Bluetooth Speaker",
                "category": {
                  "id": 10,
                  "name": "Electronics"
                },
                "price": 100.25,
                "quantity": 1
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob@example.com",
        "orders": [
          {
            "orderId": 102,
            "date": "2024-03-12",
            "total": 89.99,
            "status": "Processing",
            "items": [
              {
                "productId": 1003,
                "name": "Smartphone Case",
                "category": {
                  "id": 11,
                  "name": "Accessories"
                },
                "price": 19.99,
                "quantity": 2
              },
              {
                "productId": 1004,
                "name": "Wireless Charger",
                "category": {
                  "id": 11,
                  "name": "Accessories"
                },
                "price": 50,
                "quantity": 1
              }
            ]
          }
        ]
      }
    ],
    "products": [
      {
        "id": 1001,
        "name": "Wireless Headphones",
        "category": "Electronics",
        "price": 150.5,
        "stock": 25,
        "reviews": [
          {
            "userId": 1,
            "rating": 5,
            "comment": "Excellent sound quality!"
          }
        ]
      },
      {
        "id": 1002,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "price": 100.25,
        "stock": 40,
        "reviews": []
      },
      {
        "id": 1003,
        "name": "Smartphone Case",
        "category": "Accessories",
        "price": 19.99,
        "stock": 100,
        "reviews": [
          {
            "userId": 2,
            "rating": 4,
            "comment": "Good quality, but a bit pricey."
          }
        ]
      }
    ]
  }

  
  // 1. Loop through all users and their orders
online.users.forEach(user => {
  console.log(`User: ${user.name}`);

  user.orders.forEach(order => {
      console.log(`  Order ID: ${order.orderId}, Total: $${order.total}`);

      order.items.forEach(item => {
          console.log(`    Product: ${item.name}, Quantity: ${item.quantity}`);
      });
  });
});

// 2. Find all products in the "Electronics" category
const electronicsProducts = online.products.filter(product => product.category === "Electronics");
electronicsProducts.forEach(product => {
  console.log(`Electronics Product: ${product.name} - $${product.price}`);
});

// 3. Calculate the total revenue from all orders
let totalRevenue = 0;
online.users.forEach(user => {
  user.orders.forEach(order => {
      totalRevenue += order.total;
  });
});
console.log(`Total Revenue: $${totalRevenue}`);

// 4. Get all product reviews with user details
online.products.forEach(product => {
  product.reviews.forEach(review => {
      const user = online.users.find(user => user.id === review.userId);
      console.log(`Review for ${product.name} by ${user.name}: ${review.comment}`);
  });
});

// 5. Find all orders with a specific status (e.g., "Processing")
const processingOrders = [];
online.users.forEach(user => {
  user.orders.forEach(order => {
      if (order.status === "Processing") {
          processingOrders.push(order);
      }
  });
});
console.log("Processing Orders:", processingOrders);

// 6. Count the total quantity of each product sold
const productSales = {};
online.users.forEach(user => {
  user.orders.forEach(order => {
      order.items.forEach(item => {
          if (!productSales[item.productId]) {
              productSales[item.productId] = 0;
          }
          productSales[item.productId] += item.quantity;
      });
  });
});

Object.entries(productSales).forEach(([productId, quantity]) => {
  const product = online.products.find(p => p.id === parseInt(productId));
  console.log(`${product.name} sold: ${quantity}`);
});

  
  