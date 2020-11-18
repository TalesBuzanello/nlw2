//Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botão 

//Executar uma ação
function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean = true or false
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = ''
    })
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
//Duplicar campos

//Colar na pagina
