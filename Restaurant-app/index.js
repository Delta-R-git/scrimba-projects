import {menuArray} from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4());

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
                                    data-id="${fruit.id}"
                                    >+
                                </button>
                            </div>  
                        ` 
})

let orders =[]
// const addBtn = document.getElementById('add')
document.addEventListener('click',function(e){
    let uuid = uuidv4()
    // let pizza = 0
    if (e.target.dataset.id) {
        console.log(e.target.dataset.id)
        console.log(menuArray[e.target.dataset.id].name)
        // pizza++
        // console.log('pizza :' + pizza)
        orders.push(`
            <div class="order" id="${uuid}" >
            <h2>${menuArray[e.target.dataset.id].name}</h2>
            <span data-rm="${uuid}" data-price="${menuArray[e.target.dataset.id].price}">remove</span>
            <h3>$${menuArray[e.target.dataset.id].price}</h3>
            </div> 
            `)
        console.log(orders)
            
        orderSection.innerHTML = `
                <div class="order-list">    
                    <h2 class="order-head">Your Order</h2>
                </div>
                ${orders.join(' ')}
                <div class="order total">
                    <h2>Total Price:</h2>
                    <h3>$26</h3>
                </div>
                <button>Complete order</button>
            `
    } else if (e.target.dataset.rm) {
            console.log(e.target.dataset.price)
            document.getElementById(e.target.dataset.rm).classList.add('hide')
            console.log(document.getElementById(e.target.dataset.rm))
    }
})


