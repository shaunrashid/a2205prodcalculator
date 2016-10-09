module.exports = {
    "luxuryfood": {
        "name" : "Luxury Food",
        "maintenance" : 600,
        "workforce" : 320,
        "energy" : 200,
        "output" : 16,
        "input" : [
            {
                "id" : "beef",
                "qty" : 8
            },
            {
                "id" : "wine",
                "qty" : 8
            }
        ]
    },

    "wine" : {
        "name" : "Wine",
        "maintenance" : 300,
        "workforce" : 50,
        "energy" : 40,
        "output" : 4,
        "input" : []
    },

    "beef" : {
        "name" : "Beef",
        "maintenance" : 450,
        "workforce" : 50,
        "energy" : 150,
        "output" : 4,
        "input" : [
            {
                "id" : "soybean",
                "qty" : 4
            }
        ]
    },

    "soybean" : {
        "name" : "Soy Beans",
        "maintenance" : 300,
        "workforce" : 50,
        "energy" : 50,
        "output" : 4,
        "input" : []
    }
}