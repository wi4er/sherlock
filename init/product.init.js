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
