document.getElementById('triangle-card').addEventListener('mouseenter', function () {
    randomColor('triangle-card')

})

document.getElementById('triangle-btn').addEventListener('click', function () {
    const baseInput = valueById('triangle-base-field')
    const heightInput = valueById('triangle-height-field')

    const resultOfTriangle = multiplyByBaseThree(0.5, baseInput, heightInput)

    if (!isNaN(resultOfTriangle) && baseInput > 0 && heightInput > 0) {
        clearInputField('triangle-base-field')
        clearInputField('triangle-height-field')
        createNewAreaCalculation('Triangle', resultOfTriangle)
    } else {
        inputValidation(baseInput, heightInput, 'Base', 'Height')
    }

    console.log(typeof baseInput);
    console.log(heightInput);
})