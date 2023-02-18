document.getElementById('rhombus-card').addEventListener('mouseenter', function () {
    randomColor('rhombus-card')
})

document.getElementById('edit-rhombus').addEventListener('click', function () {
    const inputRhombus = document.getElementById('input-rhombus')
    inputRhombus.style.display = 'block'
})

document.getElementById('rhombus-checkbox').addEventListener('click', function () {
    const rhombusDiagonal1 = valueById('rhombus-diagonal1-field')
    const rhombusDiagonal2 = valueById('rhombus-diagonal2-field')

    const resultOfRhombus = multiplyByBaseThree(0.5, rhombusDiagonal1, rhombusDiagonal2)

    if (!isNaN(resultOfRhombus) && rhombusDiagonal1 > 0 && rhombusDiagonal2 > 0) {
        clearInputField('rhombus-diagonal1-field')
        clearInputField('rhombus-diagonal2-field')
        createNewAreaCalculation('Rectangle', resultOfRhombus)

        const inputRhombus = document.getElementById('input-rhombus')
        inputRhombus.style.display = 'none'

        updateInnerText('diagonal1-field', rhombusDiagonal1)
        updateInnerText('diagonal2-field', rhombusDiagonal2)
    } else {
        inputValidation(rhombusDiagonal1, rhombusDiagonal2, 'diagonal1', 'diagonal2')
    }
})

document.getElementById('rhombus-btn').addEventListener('click', function () {
    const diagonal1Field = innerTextById('diagonal1-field')
    const diagonal2Field = innerTextById('diagonal2-field')

    const rhombusDiagonal1Field = valueById('rhombus-diagonal1-field')
    const rhombusDiagonal2Field = valueById('rhombus-diagonal2-field')

    const resultOfRhombus = multiplyByBaseThree(0.5, diagonal1Field, diagonal2Field)
    const resultOfRhombusFromInput = multiplyByBaseThree(0.5, rhombusDiagonal1Field, rhombusDiagonal2Field)

    const inputRhombus = document.getElementById('input-rhombus')
    const checkDisplay = inputRhombus.style.display

    if (checkDisplay === 'block') {
        if (!isNaN(resultOfRhombusFromInput) && rhombusDiagonal1Field > 0 && rhombusDiagonal2Field > 0) {
            clearInputField('rhombus-diagonal1-field')
            clearInputField('rhombus-diagonal2-field')
            createNewAreaCalculation('Rhombus', resultOfRhombusFromInput)
            inputRhombus.style.display = 'none'

            updateInnerText('diagonal1-field', rhombusDiagonal1Field)
            updateInnerText('diagonal2-field', rhombusDiagonal2Field)
        } else {
            inputValidation(rhombusDiagonal1Field, rhombusDiagonal2Field, 'diagonal1', 'diagonal2')
        }
    } else {
        createNewAreaCalculation('Rhombus', resultOfRhombus)
    }
})