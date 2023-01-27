const form = document.querySelector(".formMainContent")
const resultadoForm = document.querySelector(".senhaGerada")

const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const symbols = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":", "\"", "\\"]

function addNumber() { return Math.floor(Math.random() * 10) }
function adUpper() { return alfabeto[Math.floor(Math.random() * alfabeto.length)] }
function addLower() { return (alfabeto[Math.floor(Math.random() * alfabeto.length)]).toLowerCase() }
function addSymbol() { return symbols[Math.floor(Math.random() * symbols.length)] }

function geraSenha(qntdCaracteres, letrasNumeros, letrasUpper, letrasLower, letrasSymbols) {    

    let senha = []
    let cond = 0
    for (let i = 0; i <= qntdCaracteres;) {
        cond++
        if (cond === 1 && letrasNumeros) { senha.push(addNumber()) ; i++ }
        if (cond === 2 && letrasUpper) { senha.push(adUpper()) ; i++ }
        if (cond === 3 && letrasLower) { senha.push(addLower()) ; i++ }
        if (cond === 4 && letrasSymbols) { senha.push(addSymbol()) ; i++ }
        if (cond === 4) { cond = 0 }
        if (i == qntdCaracteres) { break }
    }

    console.log(senha)
    senha = senha.join('')
    return senha
}

function obtemForm(evento) {
    evento.preventDefault();
    const qntdCaracteres = form.querySelector("#qntdCaracteres").value
    const letrasNumeros = form.querySelector("#letrasNumeros").checked
    const letrasUpper = form.querySelector("#letrasUpper").checked
    const letrasLower = form.querySelector("#letrasLower").checked
    const letrasSymbols = form.querySelector("#letrasSymbols").checked

    resultadoForm.innerText = geraSenha(qntdCaracteres, letrasNumeros, letrasUpper, letrasLower, letrasSymbols)
}

form.addEventListener('submit', obtemForm)