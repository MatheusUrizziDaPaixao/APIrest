#APIrest

API de Organização de Carros
Esta API foi desenvolvida para a gestão de veículos, permitindo o cadastro, consulta, atualização e exclusão de carros com persistência de dados e validações.

Tecnologias Utilizadas
Node.js e Express (Framework Web).
CORS (Segurança de acesso).
SQLite e Knex.js (Persistência de dados e Query Builder conforme Aula 06/07).
Postman (Testes de endpoints).

Lista de Endpoints
MÉTODO GET
Endpoint: /carros
Descrição: Lista todos os carros cadastrados (com suporte a paginação e filtros).

MÉTODO GET
Endpoint: /carros/:id
Descrição: Busca um carro específico pelo ID.

MÉTODO POST
Endpoint: /carros
Descrição: Cadastra um novo carro.

MÉTODO PUT
Endpoint: /carros/:id
Descrição: Atualiza os dados de um carro existente.

MÉTODO DELETE
Endpoint: /carros/:id
Descrição: Remove um carro do sistema.

Detalhamento dos Endpoints
Cadastrar Carro (POST)
URL: http://localhost:3000/carros
Exemplo de Body JSON:
{
"modelo": "Civic",
"marca": "Honda",
"ano": 2022,
"cor": "Prata",
"preco": 120000
}
Resposta de Sucesso: 201 Created.
Validações Implementadas: O campo modelo e marca são obrigatórios. O ano deve ser um número inteiro e não superior ao ano atual mais um. O preco deve ser um número positivo.

Listar Todos os Carros (GET)
URL: http://localhost:3000/carros
Resposta: 200 OK.
Corpo da Resposta: Objeto contendo os metadados da paginação (info) e a lista de veículos (data).

Buscar por ID (GET)
URL: http://localhost:3000/carros/1
Resposta: 200 OK ou 404 Not Found caso o ID não seja localizado no banco.

Exemplos de Requisição no Postman
Para testar a API, importe o arquivo collection.json ou siga estas instruções:

POST - Criar Carro: Selecione o método POST, insira a URL http://localhost:3000/carros, vá em Body, marque a opção raw, selecione o tipo JSON e cole o objeto de exemplo antes de clicar em Send.

GET - Listar: Selecione o método GET, insira a URL http://localhost:3000/carros e clique em Send.

Recursos Criados (Exemplos para Teste)
O banco de dados inicia automaticamente com 20 registros. Abaixo estão exemplos extras para inserção manual via POST:
{ "modelo": "Corolla", "marca": "Toyota", "ano": 2023, "cor": "Branco", "preco": 150000 }
{ "modelo": "Onix", "marca": "Chevrolet", "ano": 2021, "cor": "Preto", "preco": 85000 }
{ "modelo": "Golf", "marca": "Volkswagen", "ano": 2020, "cor": "Azul", "preco": 110000 }
{ "modelo": "HB20", "marca": "Hyundai", "ano": 2024, "cor": "Cinza", "preco": 92000 }
{ "modelo": "Mustang", "marca": "Ford", "ano": 2022, "cor": "Vermelho", "preco": 450000 }

Capturas de Tela dos Testes (Pasta Prints)
Print do POST com sucesso (Status 201).
Print do GET trazendo a lista de carros.
Print de Validação (Erro 400 ao enviar campo vazio ou valor inválido).

Validações de Negócio Implementadas
Campos Obrigatórios: A API retorna o erro 400 Bad Request se campos essenciais como modelo ou marca forem omitidos.
Tipagem e Consistência: Os campos ano e preco passam por conversão de tipo para garantir cálculos corretos. O ano é validado para não aceitar datas futuras irreais.
Integridade de Dados: O banco de dados SQLite garante a persistência física. O sistema verifica a existência do ID antes de executar as operações de busca individual ou exclusão, evitando erros de referência nula.
Paginação: Implementada para garantir a performance da API ao lidar com múltiplos registros.

Instruções para Execução
Execute o comando npm install para baixar as dependências.
Inicie o servidor com o comando node server.js.
O arquivo carros.db será gerado automaticamente com os dados iniciais.
