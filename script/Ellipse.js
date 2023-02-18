document.getElementById('ellipse-card').addEventListener('mouseenter', function () {
    randomColor('ellipse-card')
})

document.getElementById('edit-ellipse').addEventListener('click', function () {
    const inputEllipse = document.getElementById('input-ellipse')
    inputEllipse.style.display = 'block'
})

document.getElementById('ellipse-checkbox').addEventListener('click', function () {
    const majorAxixField = valueById('major-axix-field')
    const minorAxixField = valueById('minor-axix-field')

    const resultOfEllipse = multiplyByBaseThree(3.14, majorAxixField, minorAxixField)


    if (!isNaN(resultOfEllipse) && majorAxixField > 0 && minorAxixField > 0) {
        clearInputField('major-axix-field')
        clearInputField('minor-axix-field')
        createNewAreaCalculation('Ellipse', resultOfEllipse)

        const inputEllipse = document.getElementById('input-ellipse')
        inputEllipse.style.display = 'none'

        updateInnerText('major-field', majorAxixField)
        updateInnerText('minor-field', minorAxixField)
    } else {
        inputValidation(majorAxixField, minorAxixField, 'Major axix', 'Minor Axix')
    }
})

document.getElementById('ellipse-btn').addEventListener('click', function () {
    const majorField = innerTextById('major-field')
    const minorField = innerTextById('minor-field')

    const majorAxixInput = valueById('major-axix-field')
    const minorAxixInput = valueById('minor-axix-field')

    const resultOfEllipse = multiplyByBaseThree(3.14, majorField, minorField)
    const resultOfEllipseFomInput = multiplyByBaseThree(3.14, majorAxixInput, minorAxixInput)

    const inputEllipse = document.getElementById('input-ellipse')
    const checkDisplay = inputEllipse.style.display

    if (checkDisplay === 'block') {
        if (!isNaN(resultOfEllipseFomInput) && majorAxixInput > 0 && minorAxixInput > 0) {
            clearInputField('major-axix-field')
            clearInputField('minor-axix-field')
            createNewAreaCalculation('Ellipse', resultOfEllipseFomInput)
            inputEllipse.style.display = 'none'

            updateInnerText('major-field', majorAxixInput)
            updateInnerText('minor-field', minorAxixInput)
        } else {
            inputValidation(majorAxixInput, minorAxixInput, 'Major Axix', 'Minor Axix')
        }
    } else {
        createNewAreaCalculation('Ellipse', resultOfEllipse)
    }
})