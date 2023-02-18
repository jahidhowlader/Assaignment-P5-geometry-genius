var totalAreaCount = 1;
var regex = /^[0-9]+$/

function valueById(elementId) {
    return document.getElementById(elementId).value
}

function innerTextById(elementId) {
    return document.getElementById(elementId).innerText
}

function multiplyByBaseTwo(one, two) {
    return one * two
}

function multiplyByBaseThree(one, two, three) {
    return one * two * three
}

function inputValidation(input1, input2, fieldName1, fieldName2) {
    if (input1 === '') {
        return alert(`Please Fillup ${fieldName1} field`)
    } else if (isNaN(input1)) {
        return alert(`${fieldName1} field accept only integer number`)
    } else if (input1 < 1) {
        return alert(`${fieldName1} field accept only positive number & positive number will be gretter then 0`)
    } else if (input2 === '') {
        return alert(`Please Fillup ${fieldName2} field`)
    } else if (isNaN(input2)) {
        return alert(`${fieldName2} field accept only integer number`)
    } else if (input2 < 1) {
        return alert(`${fieldName2} field accept only positive number & positive number will be gretter then 0`)
    }
}

function clearInputField(fieldId) {
    const value = document.getElementById(fieldId)
    return value.value = ''
}

function createNewAreaCalculation(geometryName, geometryResult) {
    const tableBody = document.getElementById('table-body')
    const tableRow = document.createElement('tr')
    tableRow.style.paddingTop = '20px';
    tableRow.innerHTML = `
        <th>${totalAreaCount++}.</th>
        <td>${geometryName}</td>
        <td>${String(geometryResult).match(regex) ? geometryResult : geometryResult.toFixed(2)}cm<sup>2</sup></td>
        <td><button class="bg-btnBg text-white py-2 px-2 md:px-5 rounded-lg">convert to m<sup class="text-white">2</sup></button></td>
    `
    tableBody.appendChild(tableRow)
}

function randomColor(elementId) {
    const parallelogramCard = document.getElementById(elementId)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    parallelogramCard.style.backgroundColor = "#" + randomColor;
}

function updateInnerText(elementId, updateValue) {
    const field = document.getElementById(elementId)
    return field.innerText = updateValue
}

// redirect Blog Page
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html'
})