// ======================================================
// CONFIGURAÇÕES
// ======================================================

const WHATSAPP_NUMBER = "5511994016109";


// ======================================================
// CATÁLOGO
// ======================================================

const products = [

    // =====================================================
    // IPHONE 11
    // =====================================================

    {
        id: 1,
        name: "iPhone 11 64GB",
        linha: "iPhone 11",
        cat: "iPhone",
        price: 1540.00,
        desc: "Cores: lilás e branco. Bateria acima de 85%. Modelo 🇺🇸."
},

    {
        id: 2,
        name: "iPhone 11 128GB",
        linha: "iPhone 11",
        cat: "iPhone",
        price: 1620.00,
        desc: "Cores: verde, roxo, branco, amarelo e preto. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 12
    // =====================================================

    {
        id: 3,
        name: "iPhone 12 128GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 1770.00,
        desc: "Cores: azul, vermelho, preto, lilás, verde e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 4,
        name: "iPhone 12 256GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 1850.00,
        desc: "Cor: branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 5,
        name: "iPhone 12 Pro 128GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 2150.00,
        desc: "Cores: dourado, preto, branco e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 6,
        name: "iPhone 12 Pro 256GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 2250.00,
        desc: "Cores: dourado e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 7,
        name: "iPhone 12 Pro 512GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 2350.00,
        desc: "Cor: dourado. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 8,
        name: "iPhone 12 Pro Max 128GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 2450.00,
        desc: "Cores: azul, gold e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 9,
        name: "iPhone 12 Pro Max 256GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 2500.00,
        desc: "Cores: azul e gold. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 10,
        name: "iPhone 12 Pro Max 512GB",
        linha: "iPhone 12",
        cat: "iPhone",
        price: 2600.00,
        desc: "Cor: preto. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 13
    // =====================================================

    {
        id: 11,
        name: "iPhone 13 128GB",
        linha: "iPhone 13",
        cat: "iPhone",
        price: 2100.00,
        desc: "Cores: branco, rosa, azul, preto e verde. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 12,
        name: "iPhone 13 256GB",
        linha: "iPhone 13",
        cat: "iPhone",
        price: 2250.00,
        desc: "Cores: branco, rosa e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 13,
        name: "iPhone 13 Pro 256GB",
        linha: "iPhone 13",
        cat: "iPhone",
        price: 2750.00,
        desc: "Cores: dourado, preto, azul e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 14,
        name: "iPhone 13 Pro 512GB",
        linha: "iPhone 13",
        cat: "iPhone",
        price: 2800.00,
        desc: "Cores: azul, branco, dourado e verde. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 15,
        name: "iPhone 13 Pro 1TB",
        linha: "iPhone 13",
        cat: "iPhone",
        price: 2900.00,
        desc: "Cores: dourado e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 16,
        name: "iPhone 13 Pro Max 128GB",
        linha: "iPhone 13",
        cat: "iPhone",
        price: 2950.00,
        desc: "Cores: branco, preto, azul, dourado e verde. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 17,
        name: "iPhone 13 Pro Max 256GB",
        linha: "iPhone 13",
        cat: "iPhone",
        price: 3150.00,
        desc: "Cor: branco. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 14
    // =====================================================

    {
        id: 18,
        name: "iPhone 14 128GB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 2230.00,
        desc: "Cores: branco, preto, vermelho, azul e lilás. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 19,
        name: "iPhone 14 Plus 128GB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 2350.00,
        desc: "Cores: branco, preto, vermelho, azul e lilás. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 20,
        name: "iPhone 14 Plus 256GB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 2550.00,
        desc: "Cores: branco e preto. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 14 PRO
    // =====================================================

    {
        id: 21,
        name: "iPhone 14 Pro 128GB Gold/Branco",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 2970.00,
        desc: "Cores: gold e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 22,
        name: "iPhone 14 Pro 128GB Preto/Lilás",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3050.00,
        desc: "Cores: preto e lilás. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 23,
        name: "iPhone 14 Pro 256GB Gold/Branco",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3150.00,
        desc: "Cores: gold e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 24,
        name: "iPhone 14 Pro 256GB Roxo/Preto",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3200.00,
        desc: "Cores: roxo e preto. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 25,
        name: "iPhone 14 Pro 512GB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3280.00,
        desc: "Cores: gold e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 14 PRO MAX
    // =====================================================

    {
        id: 26,
        name: "iPhone 14 Pro Max 128GB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3400.00,
        desc: "Cores: gold, preto, branco e lilás. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 27,
        name: "iPhone 14 Pro Max 256GB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3570.00,
        desc: "Cor: dourado. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 28,
        name: "iPhone 14 Pro Max 512GB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3650.00,
        desc: "Cor: dourado. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 29,
        name: "iPhone 14 Pro Max 1TB",
        linha: "iPhone 14",
        cat: "iPhone",
        price: 3700.00,
        desc: "Cores: lilás, dourado e preto. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 15
    // =====================================================

    {
        id: 30,
        name: "iPhone 15 128GB Rosa/Verde/Azul",
        linha: "iPhone 15",
        cat: "iPhone",
        price: 2430.00,
        desc: "Cores: rosa, verde e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 31,
        name: "iPhone 15 128GB Preto",
        linha: "iPhone 15",
        cat: "iPhone",
        price: 2300.00,
        desc: "Cor: preto. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 32,
        name: "iPhone 15 Plus 128GB",
        linha: "iPhone 15",
        cat: "iPhone",
        price: 2600.00,
        desc: "Cores: rosa, amarelo, azul e preto. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 33,
        name: "iPhone 15 Plus 256GB",
        linha: "iPhone 15",
        cat: "iPhone",
        price: 2750.00,
        desc: "Cores: rosa e preto. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 15 PRO
    // =====================================================

    {
        id: 34,
        name: "iPhone 15 Pro 128GB",
        linha: "iPhone 15",
        cat: "iPhone",
        price: 3550.00,
        desc: "Cores: preto, natural e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 35,
        name: "iPhone 15 Pro 256GB",
        linha: "iPhone 15 Pro",
        cat: "iPhone",
        price: 3800.00,
        desc: "Cores: preto, branco, natural e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 36,
        name: "iPhone 15 Pro 512GB",
        linha: "iPhone 15 Pro",
        cat: "iPhone",
        price: 3900.00,
        desc: "Cores: preto, branco, azul e natural. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 37,
        name: "iPhone 15 Pro 1TB",
        linha: "iPhone 15 Pro",
        cat: "iPhone",
        price: 4000.00,
        desc: "Cores: preto, natural, branco e azul. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 15 PRO MAX
    // =====================================================

    {
        id: 38,
        name: "iPhone 15 Pro Max 256GB",
        linha: "iPhone 15 Pro Max",
        cat: "iPhone",
        price: 4200.00,
        desc: "Cores: azul, natural, preto e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 39,
        name: "iPhone 15 Pro Max 512GB",
        linha: "iPhone 15 Pro Max",
        cat: "iPhone",
        price: 4350.00,
        desc: "Cores: azul, natural, preto e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 40,
        name: "iPhone 15 Pro Max 1TB",
        linha: "iPhone 15 Pro Max",
        cat: "iPhone",
        price: 4450.00,
        desc: "Cores: azul, natural, preto e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 16
    // =====================================================

    {
        id: 41,
        name: "iPhone 16 128GB Preto",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 3250.00,
        desc: "Cor: preto. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 42,
        name: "iPhone 16 128GB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 3300.00,
        desc: "Cores: azul, verde, rosa e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 43,
        name: "iPhone 16 512GB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 3900.00,
        desc: "Cores: verde e rosa. Bateria acima de 85%. Modelo 🇺🇸."
    },


    // =====================================================
    // IPHONE 16 PRO
    // + R$750
    // =====================================================

    {
        id: 44,
        name: "iPhone 16 Pro 128GB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 4450.00,
        desc: "Cores: preto, natural e desert. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 45,
        name: "iPhone 16 Pro 256GB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 5000.00,
        desc: "Cores: preto e natural. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 46,
        name: "iPhone 16 Pro 512GB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 5100.00,
        desc: "Cor: preto. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 47,
        name: "iPhone 16 Pro 1TB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 0,
        desc: "Consulte disponibilidade."
    },


    // =====================================================
    // IPHONE 16 PRO MAX
    // =====================================================

    {
        id: 48,
        name: "iPhone 16 Pro Max 256GB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 5370.00,
        desc: "Cores: desert, natural, preto e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 49,
        name: "iPhone 16 Pro Max 512GB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 5630.00,
        desc: "Cores: desert, natural, preto e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
        id: 50,
        name: "iPhone 16 Pro Max 1TB",
        linha: "iPhone 16",
        cat: "iPhone",
        price: 5750.00,
        desc: "Cores: preto e branco. Bateria acima de 85%. Modelo 🇺🇸."
    },

    {
    id: 51,
    name: "iPhone 16 128GB",
    linha: "iPhone 16",
    cat: "iPhone",
    price: 4079.00,
    desc: "Cor: verde."
},
{
    id: 52,
    name: "iPhone 17e 256GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 3549.00,
    desc: "Cores: preto, rosa e branco."
},
{
    id: 53,
    name: "iPhone 17 256GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 5249.00,
    desc: "Cores: silver e preto."
},
{
    id: 54,
    name: "iPhone 17 256GB Lilás",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 5219.00,
    desc: "Cor: lilás."
},
{
    id: 55,
    name: "iPhone 17 Pro 256GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 6749.00,
    desc: "Cor: azul."
},
{
    id: 56,
    name: "iPhone 17 Pro 256GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 6649.00,
    desc: "Cor: laranja."
},
{
    id: 57,
    name: "iPhone 17 Pro Max 256GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 7049.00,
    desc: "Cor: silver."
},
{
    id: 58,
    name: "iPhone 17 Pro Max 256GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 6819.00,
    desc: "Cor: laranja."
},
{
    id: 59,
    name: "iPhone 17 Pro Max 256GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 6849.00,
    desc: "Cor: azul."
},
{
    id: 60,
    name: "iPhone 17 Pro Max 512GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 8449.00,
    desc: "Cor: azul."
},
{
    id: 61,
    name: "iPhone 17 Pro Max 512GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 8440.00,
    desc: "Cor: silver."
},
{
    id: 62,
    name: "iPhone 17 Pro Max 512GB",
    linha: "iPhone 17",
    cat: "iPhone",
    price: 8349.00,
    desc: "Cor: laranja."
},
{
    id: 63,
    name: "iPhone 18 Pro Max 256GB",
    linha: "iPhone 18",
    cat: "iPhone",
    price: 9300.00,
    desc: "Cor: azul. Modelo 🇺🇸."
},
{
    id: 64,
    name: "iPhone 18 Pro Max 256GB",
    linha: "iPhone 18",
    cat: "iPhone",
    price: 9200.00,
    desc: "Cor: preto. Modelo 🇺🇸."
},
{
    id: 65,
    name: "iPhone 18 Pro Max 256GB",
    linha: "iPhone 18",
    cat: "iPhone",
    price: 10600.00,
    desc: "Cor: bordo. Modelo 🇺🇸."
},
{
    id: 66,
    name: "iPhone 18 Pro 256GB",
    linha: "iPhone 18",
    cat: "iPhone",
    price: 8500.00,
    desc: "Cor: azul. Modelo 🇺🇸."
},
{
    id: 67,
    name: "iPhone 18 Pro 256GB",
    linha: "iPhone 18",
    cat: "iPhone",
    price: 8500.00,
    desc: "Cor: silver. Modelo 🇺🇸."
},
{
    id: 68,
    name: "iPhone 18 Pro 256GB",
    linha: "iPhone 18",
    cat: "iPhone",
    price: 9000.00,
    desc: "Cor: bordo. Modelo 🇺🇸."
},



    // =====================================================
    // ACESSÓRIOS
    // =====================================================

    {
        id: 69,
        name: "Fonte Tipo-C 45W",
        linha: "Carregadores",
        cat: "Acessórios",
        price: 45.00,
        desc: "Carregador primeira linha."
    },

    {
        id: 70,
        name: "Cabo Tipo-C para Tipo-C",
        linha: "Carregadores",
        cat: "Acessórios",
        price: 40.00,
        desc: "Cabo primeira linha."
    },

    {
        id: 71,
        name: "Fonte USB",
        linha: "Carregadores",
        cat: "Acessórios",
        price: 30.00,
        desc: "Fonte primeira linha."
    },

    {
        id: 72,
        name: "Cabo Tipo-C",
        linha: "Carregadores",
        cat: "Acessórios",
        price: 30.00,
        desc: "Cabo primeira linha."
    }

];













// ======================================================
// FORMATAÇÃO DE DINHEIRO
// ======================================================

const money = n => {
    return Number(n || 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};


// ======================================================
// ESTADO
// ======================================================

let cart = [];
let filter = "Todos";


// ======================================================
// ELEMENTOS
// ======================================================

const grid = document.getElementById("grid");


// ======================================================
// CARD DE PRODUTO
// ======================================================

function cardProduto(p) {

    return `
        <article class="card reveal visible">

            <div class="art">

                <span class="tag">
                    ${p.cat === "iPhone" ? "IPHONE" : "ACESSÓRIO"}
                </span>

                <div class="device"></div>

                <small>
                    PG SMART TECH
                </small>

            </div>


            <div class="body">

                <span class="type">
                    ${p.cat}
                </span>

                <h3>
                    ${p.name}
                </h3>

                <p class="desc">
                    ${p.desc}
                </p>


                <div class="price-row">

                    <span class="price">

                        ${
                            Number(p.price) > 0
                                ? money(p.price)
                                : "Consulte"
                        }

                    </span>


                    <button
                        class="add"
                        type="button"
                        onclick="add(${p.id})"
                        aria-label="Adicionar ${p.name}"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>
    `;
}


// ======================================================
// RENDERIZAÇÃO PRINCIPAL
// ======================================================

function render() {

    if (!grid) {
        return;
    }


    // ==================================================
    // ACESSÓRIOS
    // ==================================================

    if (filter === "Acessórios") {

        const list = products.filter(
            p => p.cat === "Acessórios"
        );

        grid.innerHTML = list
            .map(cardProduto)
            .join("");

        return;
    }


    // ==================================================
    // IPHONES
    // ==================================================

    if (
        filter === "Todos" ||
        filter === "iPhone"
    ) {

        const linhas = [];

        for (let i = 11; i <= 18; i++) {

            linhas.push(
                `iPhone ${i}`
            );

        }


        grid.innerHTML = linhas.map(linha => {

            return `

                <article
                    class="card reveal visible"
                    onclick="abrirLinha('${linha}')"
                    style="cursor:pointer"
                >

                    <div class="art">

                        <span class="tag">
                            IPHONE
                        </span>

                        <div class="device"></div>

                        <small>
                            PG SMART TECH
                        </small>

                    </div>


                    <div class="body">

                        <span class="type">
                            LINHA
                        </span>


                        <h3>
                            📱 ${linha}
                        </h3>


                        <p class="desc">
                            Veja os modelos disponíveis
                            da linha ${linha}.
                        </p>


                        <div class="price-row">

                            <span class="price">
                                Ver modelos
                            </span>


                            <button
                                class="add"
                                type="button"
                                onclick="event.stopPropagation(); abrirLinha('${linha}')"
                                aria-label="Ver modelos ${linha}"
                            >
                                →
                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

        return;
    }


    // ==================================================
    // OUTROS FILTROS
    // ==================================================

    const list = products.filter(
        p => p.cat === filter
    );

    grid.innerHTML = list
        .map(cardProduto)
        .join("");

}


// ======================================================
// ABRIR LINHA DO IPHONE
// ======================================================

function abrirLinha(linha) {

    if (!grid) {
        return;
    }


    const modelos = products.filter(
        p => p.linha === linha
    );


    if (!modelos.length) {

        render();

        return;
    }


    grid.innerHTML = `

        <div
            style="
                grid-column:1/-1;
                display:flex;
                align-items:center;
                gap:15px;
                margin-bottom:10px;
            "
        >

            <button
                type="button"
                onclick="render()"
                style="
                    border:0;
                    padding:10px 15px;
                    border-radius:10px;
                    cursor:pointer;
                "
            >
                ← Voltar
            </button>


            <div>

                <h2 style="margin:0;">
                    📱 ${linha}
                </h2>

                <p style="margin:5px 0 0;">
                    Escolha o modelo
                </p>

            </div>

        </div>


        ${modelos
            .map(cardProduto)
            .join("")}

    `;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ======================================================
// ADICIONAR AO CARRINHO
// ======================================================

function add(id) {

    const productId = Number(id);

    const p = products.find(
        x => x.id === productId
    );


    if (!p) {
        return;
    }


    const item = cart.find(
        x => x.id === productId
    );


    if (item) {

        item.qty++;

    } else {

        cart.push({
            ...p,
            qty: 1
        });

    }


    renderCart();

    openDrawer();

}


// ======================================================
// ALTERAR QUANTIDADE
// ======================================================

function qty(id, d) {

    const productId = Number(id);

    const item = cart.find(
        x => x.id === productId
    );


    if (!item) {
        return;
    }


    item.qty += Number(d);


    if (item.qty < 1) {

        cart = cart.filter(
            x => x.id !== productId
        );

    }


    renderCart();

}


// ======================================================
// RENDERIZAR CARRINHO
// ======================================================

function renderCart() {

    const count = document.getElementById("count");
    const items = document.getElementById("items");
    const totalElement = document.getElementById("total");


    const quantidade = cart.reduce(
        (s, x) =>
            s + Number(x.qty || 0),
        0
    );


    const total = cart.reduce(
        (s, x) =>
            s +
            Number(x.price || 0) *
            Number(x.qty || 0),
        0
    );


    if (count) {

        count.textContent =
            quantidade;

    }


    if (items) {

        if (cart.length) {

            items.innerHTML = cart
                .map(x => {

                    return `

                        <div class="line">

                            <div>

                                <b>
                                    ${x.name}
                                </b>


                                <small>

                                    ${
                                        Number(x.price) > 0
                                            ? money(x.price)
                                            : "Preço a confirmar"
                                    }

                                </small>

                            </div>


                            <div class="qty">

                                <button
                                    type="button"
                                    onclick="qty(${x.id}, -1)"
                                >
                                    −
                                </button>


                                <b>
                                    ${x.qty}
                                </b>


                                <button
                                    type="button"
                                    onclick="qty(${x.id}, 1)"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                    `;

                })
                .join("");

        } else {

            items.innerHTML = `

                <p
                    style="
                        text-align:center;
                        color:#aaa;
                        padding:45px 5px;
                    "
                >

                    Sua sacola está vazia.

                    <br><br>

                    Adicione um produto do catálogo.

                </p>

            `;

        }

    }


    if (totalElement) {

        totalElement.textContent =
            money(total);

    }

}


// ======================================================
// ABRIR CARRINHO
// ======================================================

function openDrawer() {

    const drawer =
        document.getElementById("drawer");

    const overlay =
        document.getElementById("overlay");


    if (drawer) {

        drawer.classList.add("open");

    }


    if (overlay) {

        overlay.classList.add("show");

    }


    document.body.style.overflow =
        "hidden";

}


// ======================================================
// FECHAR CARRINHO
// ======================================================

function closeDrawer() {

    const drawer =
        document.getElementById("drawer");

    const overlay =
        document.getElementById("overlay");


    if (drawer) {

        drawer.classList.remove("open");

    }


    if (overlay) {

        overlay.classList.remove("show");

    }


    document.body.style.overflow =
        "";

}


// ======================================================
// CHECKOUT WHATSAPP
// ======================================================

function checkout() {

    if (!cart.length) {

        alert(
            "Adicione pelo menos um produto à sacola."
        );

        return;
    }


    const lines = cart.map(x => {

        const subtotal =
            Number(x.price || 0) *
            Number(x.qty || 0);


        return `
• ${x.name} — ${x.qty} un. ${
            Number(x.price) > 0
                ? `(${money(subtotal)})`
                : "(consultar preço)"
        }`;

    });


    const total = cart.reduce(
        (s, x) =>
            s +
            Number(x.price || 0) *
            Number(x.qty || 0),
        0
    );


    const msg = `Olá, PG Smart Tech! Gostaria de fazer este pedido:

${lines.join("\n")}

Total estimado: ${money(total)}

Pode confirmar disponibilidade, valores e formas de pagamento?`;


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;


    window.open(
        url,
        "_blank"
    );

}


// ======================================================
// INICIALIZAÇÃO
// ======================================================

function init() {

    // ==================================================
    // CARRINHO
    // ==================================================

    const openCartButton =
        document.getElementById("openCart");

    const closeButton =
        document.getElementById("close");

    const overlay =
        document.getElementById("overlay");


    if (openCartButton) {

        openCartButton.addEventListener(
            "click",
            openDrawer
        );

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeDrawer
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeDrawer
        );

    }


    // ==================================================
    // FILTROS
    // ==================================================

    const filters =
        document.getElementById("filters");


    if (filters) {

        filters.addEventListener(
            "click",
            e => {

                const button =
                    e.target.closest(
                        "[data-filter]"
                    );


                if (!button) {
                    return;
                }


                filter =
                    button.dataset.filter;


                document
                    .querySelectorAll(".chip")
                    .forEach(chip => {

                        chip.classList.toggle(
                            "active",
                            chip === button
                        );

                    });


                render();

            }
        );

    }


    // ==================================================
    // CONTATO / WHATSAPP
    // ==================================================

    // Delegação de evento:
    // funciona mesmo que o elemento #contact
    // seja criado depois.

    document.addEventListener(
        "click",
        e => {

            const contact =
                e.target.closest("#contact");


            if (!contact) {
                return;
            }


            e.preventDefault();


            const mensagem =
                "Olá, PG Smart Tech! Gostaria de consultar os modelos disponíveis.";


            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;


            window.open(
                url,
                "_blank"
            );

        }
    );


    // ==================================================
    // FINALIZAR PEDIDO
    // ==================================================

    const checkoutButton =
        document.getElementById("checkout");


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            checkout
        );

    }


    // ==================================================
    // ANO
    // ==================================================

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    // ==================================================
    // ANIMAÇÕES
    // ==================================================

    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("visible");


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        document
            .querySelectorAll(".reveal")
            .forEach(element => {

                observer.observe(
                    element
                );

            });

    }


    // ==================================================
    // PRIMEIRA RENDERIZAÇÃO
    // ==================================================

    render();

    renderCart();

}


// ======================================================
// INICIAR QUANDO O HTML ESTIVER PRONTO
// ======================================================

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}