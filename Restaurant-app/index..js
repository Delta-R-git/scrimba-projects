import {menuArray} from './data.js'

const menuSection = document.getElementById('menu')
const orderSection = document.getElementById('order')


menuArray.forEach(function(fruit){
    menuSection.innerHTML += `
                            <div class="item">
                                <div class="emoji">
                                    ${fruit.emoji} 
                                    
                                </div>
                                <div class="info">
                                    <h2>
                                        ${fruit.name} 
                                    </h2>
                                    <p>
                                        ${fruit.ingredients}
                                    </p>    
                                    <h3>
                                        $${fruit.price}
                                    </h3>
                                </div>
                                <button id="add"
                                    data-name="${fruit.name}"
                                    data-price="${fruit.price}"
                                    >+
                                </button>
                            </div>  
                        ` 
})

let orders ='' 
// const addBtn = document.getElementById('add')
document.addEventListener('click',function(e){
    // let pizza = 0
    if (e.target.dataset.name) {
        // console.log(e.target.dataset.name)
        // pizza++
        // console.log('pizza :' + pizza)

        orders += `
                <div class="order">
                    <h2>${e.target.dataset.name}</h2>
                    <span data-rm="${e.target.dataset.name}">remove</span>
                    <h3>$${e.target.dataset.price}</h3>
                </div> 
            `
            console.log(e.target.dataset.name)

        orderSection.innerHTML = `
                <div class="order-list">    
                    <h2 class="order-head">Your Order</h2>
                </div>
                ${orders}
                <div class="order total">
                    <h2>Total Price:</h2>
                    <h3>$26</h3>
                </div>
                <button>Complete order</button>
            `
    } else if (e.target.dataset.rm) {
            console.log(e.target.dataset.rm)
    }
})


