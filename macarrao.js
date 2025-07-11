const modal = document.getElementById("modal-macarrao");
const modalList = document.getElementById("modal-list");
const modalTitle = document.getElementById("modal-title");
const closeBtn = modal.querySelector(".close");

const contentMap = {
    0: ["P: Pequeno (400g) - R$20,00", "M: Médio (700g) - R$35,00", "G: Grande (950g) - R$40,00"],
    1: ["Espaguete", "Gravatinha", "Parafuso", "Penne"],
    2: ["Molho branco", "Molho 4 queijos", "Molho bolonhesa", "Molho ao sugo"],
    3: ["Frango", "Bacon", "Presunto", "Calabresa", "Queijo minas", "Muçarela", "Manjericão",
        "Pimenta biquinho", "Alho", "Cebola", "Ervilha", "Milho", "Tomate seco", "Palmito",
        "Brócolis", "Azeite", "Uva passas", "Champignon", "Cebolinha verde", "Chimichurri",
        "Manteiga", "Orégano", "Azeitona verde", "Tempero da casa", "Pimenta calabresa"]
};

const titles = {
    0: "Tamanhos e Valores",
    1: "Massas",
    2: "Molhos",
    3: "Condimentos"
};

const items = document.querySelectorAll(".macarrao-item");

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        modalList.innerHTML = "";
        modalTitle.textContent = titles[index] || "";
        contentMap[index].forEach(liText => {
            const li = document.createElement("li");
            li.textContent = liText;
            modalList.appendChild(li);
        });
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
