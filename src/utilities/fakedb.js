// import { useState } from "react";


// use local storage to manage cart data
const addToDb = id => {
    let jobsApplied = {};

    // add quantity
    const storedCart = localStorage.getItem('jobs-Applied')
    if (storedCart) {
        jobsApplied = JSON.parse(storedCart)
    }
    

    // add quantity
    const quantity = jobsApplied[id]
    if(quantity){
        const newQuantity = quantity + 1
        jobsApplied[id] = newQuantity
    }
    else{
        jobsApplied[id] = 1
    }
    
    localStorage.setItem('jobs-Applied', JSON.stringify(jobsApplied))
}

// Get stored data from cart

const getStoredCart = () =>{
    let jobsApplied = {}
    const storedCart = localStorage.getItem('jobs-Applied')
    if (storedCart) {
        jobsApplied = JSON.parse(storedCart)
    }
    return jobsApplied
    
}


export {addToDb, getStoredCart}
