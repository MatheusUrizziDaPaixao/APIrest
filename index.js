// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());
let bancoDeCarros = [
    { id: 1, modelo: "Civic", marca: "Honda", ano: 2022, cor: "Prata", preco: 120000 },
    { id: 2, modelo: "Corolla", marca: "Toyota", ano: 2023, cor: "Branco", preco: 150000 }
];

// 5. GET - Listar todos os carros (Aula 03)
app.get('/carros', (req, res) => {
    res.status(200).json(bancoDeCarros);
});

// 6. GET - Buscar carro por ID (Aula 03)
app.get('/carros/:id', (req, res) => {
    const { id } = req.params;
    const carro = bancoDeCarros.find(c => c.id === parseInt(id));

    if (!carro) {
        return res.status(404).json({ erro: "Carro não encontrado." });
    }
    res.status(200).json(carro);
});

// 7. POST - Cadastrar novo carro com validações
app.post('/carros', (req, res) => {
    const { modelo, marca, ano, cor, preco } = req.body;

    if (!modelo || !marca || !ano || !cor || !preco) {
        return res.status(400).json({ erro: "Todos os campos (modelo, marca, ano, cor, preco) são obrigatórios." });
    }

    if (typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({ erro: "O preço deve ser um número positivo." });
    }

    const anoAtual = new Date().getFullYear();
    if (ano < 1886 || ano > anoAtual + 1) {
        return res.status(400).json({ erro: "Ano inválido." });
    }

    const novoCarro = {
        id: bancoDeCarros.length + 1,
        modelo,
        marca,
        ano,
        cor,
        preco
    };

    bancoDeCarros.push(novoCarro);
    res.status(201).json({
        mensagem: "Carro cadastrado com sucesso!",
        carro: novoCarro
    });
});

// 8. DELETE - Remover carro
app.delete('/carros/:id', (req, res) => {
    const { id } = req.params;
    const indice = bancoDeCarros.findIndex(c => c.id === parseInt(id));

    if (indice === -1) {
        return res.status(404).json({ erro: "Carro não encontrado para exclusão." });
    }

    bancoDeCarros.splice(indice, 1);
    res.status(200).json({ mensagem: "Carro removido com sucesso!" });
});

// 9. Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 API de Carros rodando em http://localhost:${PORT}`);
    console.log(`📌 Teste o GET em http://localhost:${PORT}/carros`);
});