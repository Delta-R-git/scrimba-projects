import {menuArray} from './data.js'

const menuSection = document.getElementById('menu')
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
                                <button>+</button>
                            </div>  
                        ` 
})
