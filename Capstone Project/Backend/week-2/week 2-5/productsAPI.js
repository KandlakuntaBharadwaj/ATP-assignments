
// 1️ Create New Product

app.post('/products', (req, res) => {
    let newProduct = req.body

    products.push(newProduct)

    res.status(201).json({ message: "Product created" })
})


// 2️ Read All Products
app.get('/products', (req, res) => {
    res.json({ message: "All products", payload: products })
})

// 3️ Read Products By Brand
app.get('/products/brand/:brand', (req, res) => {
    let brandName = req.params.brand

    let filteredProducts = products.filter(
        product => product.brand.toLowerCase() === brandName.toLowerCase()
    )

    if (filteredProducts.length === 0) {
        return res.status(404).json({ message: "No products found for this brand" })
    }

    res.json({ message: "Products found", payload: filteredProducts })
})

// 4️ Update Product (by productId)
app.put('/products/:productid', (req, res) => {
    let idFromUrl = Number(req.params.productid)
    let updatedProduct = req.body

    let index = products.findIndex(
        product => product.productid === idFromUrl
    )

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" })
    }

    products.splice(index, 1, updatedProduct)

    res.json({ message: "Product updated" })
})

// 5 Delete Product By ID
app.delete('/products/:productid', (req, res) => {
    let idFromUrl = Number(req.params.productid)

    let index = products.findIndex(
        product => product.productid === idFromUrl
    )

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" })
    }

    products.splice(index, 1)

    res.json({ message: "Product deleted" })
})