
function abreFechaMenu(){
    let nav = document.querySelector("#menu");
    let icon = document.querySelector("#menuBtn");
    let iconFechar = document.querySelector("#menuBtnFechar");

    if(nav.classList.value.split(" ").includes("-left-[270px]")){
        nav.classList.remove("-left-[270px]");
        nav.classList.add("left-[0px]");
        icon.classList.add("hidden");
        iconFechar.classList.remove("hidden");
    } else {
        nav.classList.remove("left-[0px]");
        nav.classList.add("-left-[270px]");
        icon.classList.remove("hidden");
        iconFechar.classList.add("hidden");
    }
}

function cafeteriaImg1(imgGrande){
    const imgMaior = document.querySelector('#imgMaior');
    imgMaior.src = imgGrande;
}

function cafeteriaImg2(imgGrande){
    const imgMaior = document.querySelector('#imgMaior2');
    imgMaior.src = imgGrande;
}

let opcao = 1;
function quemSomos(direcao) {
    const icon = document.querySelector('#icon-quemsomos');
    const text = document.querySelector('#texto-quemsomos');

    if (direcao === "proximo") {
        opcao += 1;
        if (opcao > 4) {
            opcao = 1; 
        }
    } else {
        opcao -= 1;
        if (opcao < 1) {
            opcao = 4;
        }
    }

    if (opcao === 1) {
        icon.src = "./images/icon-quemsomos1.png";
        text.innerText = "Universidade corporativa que auxilia na capacitação operacional e desenvolvimento de habilidades gerenciais";
    } else if (opcao === 2) {
        icon.src = "./images/icon-quemsomos2.png";
        text.innerText = "Modelo inovador e produtos patenteados";
    } else if (opcao === 3) {
        icon.src = "./images/icon-quemsomos3.png";
        text.innerText = "Ampla oferta de produtos, seja bebidas ou comidas";
    } else if (opcao === 4) {
        icon.src = "./images/icon-quemsomos4.png";
        text.innerText = "Equipe de consultores altamente especializada";
    }
    // console.log(opcao);
}

function diferenciais(iconGrande){
    const iconMaior = document.querySelector('#iconMaior');
    const text = document.querySelector('#texto-diferenciais');
    iconMaior.src = iconGrande;

    if (opcao == 1) {
        icon.src = "./images/diferencial1-grande.png";
        text.innerText = "A tiamate possui faturamento bruto percentual de lucro de 12% a 18%";
    } else if (opcao == 2) {
        icon.src = "./images/diferencial2G.png";
        text.innerText = "A Tiamate possui um departamento de logistica que avalia cada caso e analisa a entrega oferecendo soluções para que as unidades não fiquem sem produtos.";
    } else if (opcao == 3) {
        icon.src = "./images/diferencial3G.png";
        text.innerText = "Possui um software de gestão integrada";
    } else if (opcao == 4) {
        icon.src = "./images/diferencial4G.png";
        text.innerText = "Dedica profissionais para prospecção e análise de pontos que sejam pertinentes ao modelo de negócios.";
    }
}

