const convertBtn = document.getElementById("btn")

const lengthOutput = document.getElementById("len")
const volumeOutput = document.getElementById("vol")
const massOutput = document.getElementById("mas")

convertBtn.addEventListener( "click", function(){    
    const input = document.getElementById( "inpt" ).value

    lengthOutput.textContent = `
        ${ Number( input ) } meters = ${ ( Number( input ) * 3.28084 ).toFixed( 3 ) } feet
         | ${ Number( input ) } feet = ${ ( Number( input ) * 0.3048 ).toFixed( 3 ) } meters

    `
    
    volumeOutput.textContent = `
        ${ Number( input ) } liters = ${ ( Number( input ) * 0.264172 ).toFixed( 3 ) } galons
         | ${ Number( input ) } galons = ${ ( Number( input ) * 3.78541 ).toFixed( 3 ) } liters

    `
    massOutput.textContent = `
        ${ Number( input ) } kilos = ${ ( Number( input ) * 2.20462 ).toFixed( 3 ) } pounds
         | ${ Number( input ) } pounds = ${ ( Number( input ) * 0.453592 ).toFixed( 3 ) } kilos

    `

} )


