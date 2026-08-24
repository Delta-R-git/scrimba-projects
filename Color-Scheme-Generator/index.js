document.getElementById('btn').addEventListener('click', function(){
    
    let hex = document.getElementById('color-pick').value.replace('#','')
    let mode = document.getElementById('mode').value.toLowerCase()
    const url = `https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${mode}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
    
        let c1 = data.colors[0].hex.value        
        let c2 = data.colors[1].hex.value
        let c3 = data.colors[2].hex.value
        let c4 = data.colors[3].hex.value        
        let c5 = data.colors[4].hex.value

        document.getElementById('c1').style.backgroundColor = c1
        document.getElementById('c2').style.backgroundColor = c2
        document.getElementById('c3').style.backgroundColor = c3
        document.getElementById('c4').style.backgroundColor = c4
        document.getElementById('c5').style.backgroundColor = c5

        document.getElementById('hex1').textContent = c1
        document.getElementById('hex2').textContent = c2
        document.getElementById('hex3').textContent = c3
        document.getElementById('hex4').textContent = c4
        document.getElementById('hex5').textContent = c5
    })
    .catch(error => console.error('Error:', error));
})

