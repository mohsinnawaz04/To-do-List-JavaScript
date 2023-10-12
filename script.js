
// DOM Queries Selection
var inputNode = document.getElementById('input-box')
var dateInput = document.getElementById('date-input')
var btn = document.getElementById('button')
var ul = document.getElementById('list')





//(Validation Function)

var listAdd = () => {
    
    const todaysDate = new Date();
    const userdate = (new Date(dateInput.value));
    const timeDiff = userdate - todaysDate;
    const changedDateFormat = (new Date(dateInput.value).toDateString())

    if (inputNode.value.trim() === '' || !dateInput.value){
        btn.nextElementSibling.innerText = "Cannot Add Empty Value"
        inputNode.value = ''
        return false
    }
    if (timeDiff < 0){
        btn.nextElementSibling.innerText = "*You Can only select future dates"
        return false;
    }


    var divNode = document.createElement('div')
    btn.nextElementSibling.innerText = ""
    var listNode = document.createElement('li')
    var spanNode = document.createElement('span')
    listNode.innerText = inputNode.value
    spanNode.innerText = changedDateFormat
    divNode.appendChild(listNode)
    divNode.appendChild(spanNode)

// Styling div that contains both inputs of user
    divNode.style.textTransform = 'capitalize'
    divNode.style.display = 'flex'
    divNode.style.gap = '1rem'

// Adding User list item inside out list node
    ul.insertBefore(divNode, ul.firstChild)

}

// Implementing Validation Function using onclick event

btn.addEventListener('click', ()=> {listAdd()})



