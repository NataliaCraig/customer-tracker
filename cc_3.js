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
console.log("After removing first customer:", customers);

customers[0].email = "mmadison.capess@gmail.com";
console.log(customers[0]);





