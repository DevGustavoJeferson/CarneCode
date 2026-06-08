const busca = document.querySelector("form > input");
const linhas = document.querySelectorAll(".tabela tbody tr");
const resultado = document.querySelector("#resultado");
const placeholderBarra = document.querySelector('input');


    placeholderBarra.addEventListener("focus", () => {

        placeholderBarra.placeholder = "";

    });


    placeholderBarra.addEventListener("blur", () => {

        placeholderBarra.placeholder = "🔍 Pesquisar produto...";

    });


busca.addEventListener("input", pesquisar);


function pesquisar() {

    resultado.classList.remove("ativo");

    resultado.innerHTML = "";

    const textoBusca = busca.value.toLowerCase();


    for (let linha of linhas) {

        const descricao = linha.querySelector("td").innerText.toLowerCase();


        if (descricao.includes(textoBusca) && textoBusca !== "") {

            resultado.classList.add("ativo");

            criarSugestao(linha);

        }

    }

}



function criarSugestao(linha) {

    const descricao = linha.querySelector("td").innerText;

    const sugestao = document.createElement("p");

    sugestao.innerText = descricao;


    sugestao.addEventListener("click", () => {

        destacarProduto(linha);


        resultado.classList.remove("ativo");


        setTimeout(() => {

            resultado.innerHTML = "";

        }, 250);

    });


    resultado.appendChild(sugestao);
}



function destacarProduto(linha) {


    limparDestaques();


    linha.classList.add("destaque");


    linha.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



function limparDestaques() {


    for (let linha of linhas) {

        linha.classList.remove("destaque");

    }


}
