# APIrest

API de Organização de Carros Esta API foi desenvolvida para a gestão de veículos, permitindo o cadastro, consulta, atualização e exclusão de carros, com persistência de dados e validações.

Tecnologias Utilizadas:
Node.js e Express (Framework Web)
CORS (Segurança de acesso)
PostgreSQL (Persistência via integração de banco de dados conforme Aula 06/07)
Postman (Testes de endpoints)

Lista de Endpoints
Método GET
Endpoint carros
Descrição Lista todos os carros cadastrados
Método GET
Endpoint /carros/:id
Descrição Busca um carro específico pelo ID
Método POST
Endpoint /carros
Descrição Cadastra um novo carro
Método PUT
Endpoint /carros/:id
Descrição Atualiza os dados de um carro existente
Método DELETE
Endpoint /carros/:id
Descrição Remove um carro do sistema

Detalhamento dos Endpoints.
1-Cadastrar Carro (POST)URL: http://localhost:3000/carros
Body (JSON):
{
  "modelo": "Civic",
  "marca": "Honda",
  "ano": 2022,
  "cor": "Prata",
  "preco": 120000
}
Resposta de Sucesso: 201 Created
Validações Implementadas:
modelo: Obrigatório (string).
marca: Obrigatório (string).
ano: Deve ser um número inteiro e não superior ao ano atual + 1.
preco: Deve ser um número positivo.
2-Listar Todos os Carros (GET)
URL: http://localhost:3000/carros
Resposta: 200 OKCorpo da Resposta: Array de objetos contendo ID e dados do veículo.
3-Buscar por ID (GET)
URL: http://localhost:3000/carros/1
Resposta: 200 OK ou 404 Not Found se o ID não existir.

Exemplos de Requisição no Postman
Para testar a API, importe as seguintes configurações no Postman:
POST - Criar Carro:
Selecione o método POST.
Cole a URL http://localhost:3000/carros.
Vá em Body -> raw -> selecione JSON.
Cole o objeto de exemplo acima e clique em Send.
GET - Listar:Método GET.URL http://localhost:3000/carros.
Clique em Send.

Recursos Criados (Exemplos para Teste)
Para cumprir o requisito de criar pelo menos 5 recursos, utilize os seguintes corpos no POST:
{ "modelo": "Corolla", "marca": "Toyota", "ano": 2023, "cor": "Branco", "preco": 150000 }
{ "modelo": "Onix", "marca": "Chevrolet", "ano": 2021, "cor": "Preto", "preco": 85000 }
{ "modelo": "Golf", "marca": "Volkswagen", "ano": 2020, "cor": "Azul", "preco": 110000 }
{ "modelo": "HB20", "marca": "Hyundai", "ano": 2024, "cor": "Cinza", "preco": 92000 }
{ "modelo": "Mustang", "marca": "Ford", "ano": 2022, "cor": "Vermelho", "preco": 450000 }

Capturas de Tela dos Testes
Print do POST com sucesso (Status 201):

Print do GET trazendo a lista de 5 carros:

Print de Validação (Erro 400 ao enviar campo vazio):


Validações de Negócio Implementadas
Campos Obrigatórios: A API retorna 400 Bad Request se modelo ou marca não forem enviados.
Tipagem de Dados: O campo ano deve ser numérico. Caso receba uma string, a API rejeita a entrada.
Integridade de Dados: Antes de deletar um registro, a API verifica se o ID realmente existe no banco de dados para evitar erros de referência nula.
