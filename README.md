## Pré-requisitos

- PostgreSQL instalado e configurado
- Node.js e npm instalados
- Editor de texto de sua preferência instalado (para o projeto, foi usado o VS Code)
- Dependências do projeto instaladas (`npm install`)
- Extra: Ter a extensão Thunder Client instalada no VS Code ou outra parecida para fazer requisições ao back-end diretamente pelo programa

Os arquivos do Next estão na branch "next" do projeto

## Como Executar o Projeto

 **Clone este repositório**:
   use o comando:
   git clone <https://github.com/Luis-Impieri/hotel_management>


   Para as funções do back-end, utilize um programa que possa fazer requições. Abaixo serão listadas as principais funções de como acessa-las.

URL: /guests

Método: POST

Descrição: Cria um novo hóspede

exemplo de Json:
{
  "name": "Joao",
  "cpf": "12345678903",
  "roomNumber": 104
}

-----------

URL: /guests/:id (aqui, substitua o :id pelo id do hóspede)

Método: PUT

Descrição: Atualiza os dados de um hóspede existente, podendo mudar o nome cadastrado e o numero do quarto

exemplo de Json
{
  "name": "Pedro Atualizado",
  "roomNumber": 105
}

-----------
URL: /guests/:id (novamente, substitua pelo id do usuario)

Método: DELETE

Descrição: Deleta um hóspede


-------------
URL: /guests

Método: GET

Descrição: Retorna todos os hóspedes

-------------

URL: /guests/:cpf

Método: GET

Descrição: Retorna um hóspede baseado no CPF

--------------

URL: /auth/reset-password

Método: POST

Descrição: Envia um token de recuperação de senha 

exemplo de Json:
{
  "cpf": "12345678902"
}

----------------
URL: /rooms/:roomNumber

Método: GET

Descrição: Retorna os detalhes do quarto

------------------
URL: /services

Método: POST

Descrição: Solicita serviços extras

exemplo de Json:
{
  "guestId": 1,
  "service": "Café da Manhã"
}

