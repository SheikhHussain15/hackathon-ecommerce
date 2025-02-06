import { Car } from "../../../types/cars"

export const addToCart = (car : Car) => {
    const cart : Car[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingCarIndex = cart.findIndex(item => item._id === car._id)

    if(existingCarIndex > -1 ) {
        cart[existingCarIndex].inventory += 1
    }
    else {
        cart.push({
            ...car, inventory : 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (carId : number) => {
    let cart : Car[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== carId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (carId :number, quantity : number) => {
    const cart : Car[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const carIndex = cart.findIndex(item => item._id === carId)

    if(carIndex > -1) {
        cart[carIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : Car[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}