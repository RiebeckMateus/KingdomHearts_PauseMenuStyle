// Elementos dos itens
const items = {
    item1: document.getElementById('item1'),
    item2: document.getElementById('item2'),
    item3: document.getElementById('item3'),
    item4: document.getElementById('item4'),
    item5: document.getElementById('item5'),
    item6: document.getElementById('item6'),
    item7: document.getElementById('item7')
};

const description = document.getElementById('descriptionBox');

// Textos dos itens
const itemDescriptions = {
    item1: "Use or equip items the party has obtained",
    item2: "Assign abilities to the party members",
    item3: "Equip weapons and accessories",
    item4: "Costumize party members' action patterns",
    item5: "Displays party members' attributes",
    item6: "Read Jiminy's journal, which contains his notes and other records",
    item7: "Configure game settings"
};

const defaultDescription = "";

function atualizarTexto(novoTexto) {
    description.textContent = novoTexto;
}

// Adiciona ouvintes de evento aos elementos dos itens
for (const key in items) {
    if (items.hasOwnProperty(key)) {
        const item = items[key];
        item.addEventListener("mouseover", function() {
            description.textContent = itemDescriptions[key];
        });
        item.addEventListener("mouseout", function() {
            atualizarTexto(defaultDescription);
        });
    }
}
