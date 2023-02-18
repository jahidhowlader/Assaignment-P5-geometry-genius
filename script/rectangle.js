document.getElementById('rectangle-card').addEventListener('mouseenter', function () {
    randomColor('rectangle-card')
})

document.getElementById('rectangle-btn').addEventListener('click', function () {
    const widthInput = valueById('rectangle-width-field')
    const lengthInput = valueById('rectangle-length-field')

    const resultOfRectangle = multiplyByBaseTwo(widthInput, lengthInput)

    if (!isNaN(resultOfRectangle) && widthInput > 0 && lengthInput > 0) {
        clearInputField('rectangle-width-field')
        clearInputField('rectangle-length-field')
        createNewAreaCalculation('Rectangle', resultOfRectangle)
    } else {
        inputValidation(widthInput, lengthInput, 'Width', 'Length')
    }
})