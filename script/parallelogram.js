document.getElementById('parallelogram-card').addEventListener('mouseenter', function () {
    randomColor('parallelogram-card')
})

document.getElementById('edit-parallelogram').addEventListener('click', function () {
    const inputParallelogram = document.getElementById('input-parallelogram')
    inputParallelogram.style.display = 'block'
})

document.getElementById('parallelogram-checkbox').addEventListener('click', function () {
    const ParallelogramBase = valueById('parallelogram-base-field')
    const Parallelogramheight = valueById('parallelogram-height-field')

    const resultOfParallelogram = multiplyByBaseTwo(ParallelogramBase, Parallelogramheight)

    if (!isNaN(resultOfParallelogram) && ParallelogramBase > 0 && Parallelogramheight > 0) {
        clearInputField('parallelogram-base-field')
        clearInputField('parallelogram-height-field')
        createNewAreaCalculation('Rectangle', resultOfParallelogram)

        const inputParallelogram = document.getElementById('input-parallelogram')
        inputParallelogram.style.display = 'none'

        updateInnerText('base-static', ParallelogramBase)
        updateInnerText('height-static', Parallelogramheight)
    } else {
        inputValidation(ParallelogramBase, Parallelogramheight, 'Base', 'Height')
    }
})

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const baseStatic = innerTextById('base-static')
    const heightStatic = innerTextById('height-static')

    const parallelogramBaseField = valueById('parallelogram-base-field')
    const parallelograHeightField = valueById('parallelogram-height-field')

    const resultOfParallelogram = multiplyByBaseTwo(baseStatic, heightStatic)
    const resultOfParallelogramFromInput = multiplyByBaseTwo(parallelogramBaseField, parallelograHeightField)

    const inputParallelogram = document.getElementById('input-parallelogram')
    const checkDisplay = inputParallelogram.style.display

    if (checkDisplay === 'block') {
        if (!isNaN(resultOfParallelogramFromInput) && parallelogramBaseField > 0 && parallelograHeightField > 0) {
            clearInputField('parallelogram-base-field')
            clearInputField('parallelogram-height-field')
            createNewAreaCalculation('parallelogram', resultOfParallelogramFromInput)
            inputParallelogram.style.display = 'none'

            updateInnerText('base-static', parallelogramBaseField)
            updateInnerText('height-static', parallelograHeightField)
        } else {
            inputValidation(parallelogramBaseField, parallelograHeightField, 'Base', 'Height')
        }
    } else {
        createNewAreaCalculation('Parallelogram', resultOfParallelogram)
    }
})
