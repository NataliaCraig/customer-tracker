let customers = [
    {"name": "Madison Capes",
        "email": "Madicappppes@gmail.com",
        "purchases": ["Sunflowers", "roses", "tulips"],
    },
{"name": "Rossi Edds",
    "email": "Eddsrossi25@gmail.com",
    "purchases":["Peonies", "roses", "hibiscus"],
},
{"name": "Kara Baker",
    "email": "Karbaksurfs@gmail.com",
    "purchases": ["Orchid","sunflowers", "lavender"],
},
]
customers.push({
    "name": "Katie Potter",
    "email": "Katieepgym@hotmail.com",
    "purchases": ["Jasmine", "lilacs", "roses",]
});

let removedCustomer = customers.shift();
customers[0].email = "Rossiedds2025@gmail.com";
console.log("After removing first customer:", customers);
// Rossi is now at index 0
console.log(customers[0]);

customers.forEach(customer => {
  console.log(`${customer.name} | ${customer.email} | Purchases: ${customer.purchases.length}`);
});





