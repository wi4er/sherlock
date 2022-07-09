let product = db.getSiblingDB("product");

product.createUser(
    {
        user: "product",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "product"
            }
        ]
    }
);

product.runCommand(
    {
        insert: "descriptions",
        documents: [{
            _id: "preview",
            timestamp: new Date(),
            created: new Date(),
        }, {
            _id: "detail",
            timestamp: new Date(),
            created: new Date(),
        }]
    }
);
