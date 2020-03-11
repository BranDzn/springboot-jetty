window.addEventListener("load",() => {
    document.querySelector("#botao").addEventListener("click", () => {
        var n1 = parseFloat(document.querySelector("#n1").value);
        var n2 = parseFloat(document.querySelector("#n2").value);
        var soma = n1 + n2
        document.querySelector("#res").value = soma;
    })
})