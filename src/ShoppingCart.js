class ShoppingCart {
    constructor(){
       this.items = []
    }
    getItems(){
        return this.items
    }
    addItem(itemName, quantity, price){
        return this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
    }
    clear(){
        return this.items = []
    }
    total(){
        return this.items.reduce((accumulator, item) => accumulator + (item.quantity * item.pricePerUnit),0)
    }
}

module.exports = ShoppingCart