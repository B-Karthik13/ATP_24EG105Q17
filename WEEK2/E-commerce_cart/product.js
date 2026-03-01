// Product database (simulated)
const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// Get product by ID
function getProductById(id){
    let product=products.find(productObj => productObj.id===id)
    return product
}

// A function to return all products
function getAllProducts(){
    return products
}

// Filter products by category
function getProductsByCategory(category){
    let product=products.filter(productObj=>productObj.category===category)
    return product
}

// Search product by name (case-insensitive)
function searchProducts(query){
    let product=products.find(productObj=>productObj.name.toLowerCase==query.toLowerCase)
    return product
}

// Check if stock is sufficient
function checkStock(productId, quantity){
    let product=products.find(productObj=>productObj.id===productId && productObj.stock>=quantity)
    if(product==undefined)
        return false
    else
        return true
}

// Reduce stock after purchase
function reduceStock(productId, quantity){
    let index=products.findIndex((productObj)=> productObj.id===productId)
    products[index].stock-=quantity
}

export {getProductById,getAllProducts,getProductsByCategory,searchProducts,checkStock,reduceStock}