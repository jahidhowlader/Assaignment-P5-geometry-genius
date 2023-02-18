document.getElementById('pentagon-card').addEventListener('mouseenter', function () {
    randomColor('pentagon-card')
})

document.getElementById('edit-pentagon').addEventListener('click', function () {
    const inputPentagon = document.getElementById('input-pentagon')
    inputPentagon.style.display = 'block'
})

document.getElementById('pentagon-checkbox').addEventListener('click', function () {
    const pentagonPerimeterField = valueById('pentagon-perimeter-field')
    const pentagonBaseField = valueById('pentagon-base-field')

    const resultOfPentagon = multiplyByBaseThree(0.5, pentagonPerimeterField, pentagonBaseField)

    if (!isNaN(resultOfPentagon) && pentagonPerimeterField > 0 && pentagonBaseField > 0) {
        clearInputField('pentagon-perimeter-field')
        clearInputField('pentagon-base-field')
        createNewAreaCalculation('Rectangle', resultOfPentagon)

        const inputPentagon = document.getElementById('input-pentagon')
        inputPentagon.style.display = 'none'

        updateInnerText('perimeter-field', pentagonPerimeterField)
        updateInnerText('base-field', pentagonBaseField)
    } else {
        inputValidation(pentagonPerimeterField, pentagonBaseField, 'perimeter', 'base')
    }
})

document.getElementById('pentagon-btn').addEventListener('click', function () {
    const perimeterField = innerTextById('perimeter-field')
    const baseField = innerTextById('base-field')

    const inputPerimeterfield = valueById('pentagon-perimeter-field')
    const inputBasefield = valueById('pentagon-base-field')

    const resultOfPentagon = multiplyByBaseThree(0.5, perimeterField, baseField)
    const resultOfPentagonFromInput = multiplyByBaseThree(0.5, inputPerimeterfield, inputBasefield)

    const inputPentagon = document.getElementById('input-pentagon')
    const checkDisplay = inputPentagon.style.display

    if (checkDisplay === 'block') {
        if (!isNaN(resultOfPentagonFromInput) && inputPerimeterfield > 0 && inputBasefield > 0) {
            clearInputField('pentagon-perimeter-field')
            clearInputField('pentagon-base-field')
            createNewAreaCalculation('Pentagon', resultOfPentagonFromInput)
            inputPentagon.style.display = 'none'

            updateInnerText('perimeter-field', inputPerimeterfield)
            updateInnerText('base-field', inputBasefield)
        } else {
            inputValidation(inputPerimeterfield, inputBasefield, 'Perimeter', 'base')
        }
    } else {
        createNewAreaCalculation('Pentagon', resultOfPentagon)
    }
})