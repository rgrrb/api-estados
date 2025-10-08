-----

# 🏛️ API Estados e Cidades

API RESTful criada em Node.js com Express, responsável por fornecer informações de estados, capitais e cidades do Brasil. Permite listar todos os estados, buscar por sigla, listar estados por região, consultar capitais (incluindo as históricas) e obter a lista de cidades de um determinado estado.

-----

## 🚀 Funcionalidades

  - Listar todos os estados do Brasil.
  - Buscar informações detalhadas de um estado pela sua sigla (UF).
  - Obter a capital de um estado específico.
  - Filtrar e listar estados por região (Norte, Nordeste, Sul, Sudeste, Centro-Oeste).
  - Listar as capitais que o Brasil já teve ao longo da história.
  - Obter a lista de todas as cidades de um estado específico.

-----

## 🌐 API Online

A API está disponível publicamente e hospedada no Render.

**URL Base:** `https://api-estados-alwf.onrender.com`

**Exemplo de uso:**

```bash
curl https://api-estados-alwf.onrender.com/v1/estados
```

-----

## ⚙️ Instalação Local

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

  - [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
  - [Git](https://git-scm.com/)

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/roger-ribeiro/api-estados-cidades.git
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd api-estados-cidades
    ```

3.  **Instale as dependências:**

    ```bash
    npm install express cors body-parser
    ```

-----

## ▶️ Execução Local

Após a instalação, inicie o servidor com o seguinte comando:

```bash
node app.js
```

O servidor será iniciado e estará acessível em:
📍 `http://localhost:8080`

-----

## 📚 Endpoints da API

### 1\. Listar todos os estados

Retorna uma lista com a sigla de todos os estados.

  - **Método:** `GET`
  - **Endpoint:** `/v1/estados`
  - **Resposta de Sucesso (200):**
    ```json
    {
      "statuscode": 200,
      "developer": "Roger Ribeiro de Oliveira",
      "uf": ["SP", "RJ", "MG", "BA", "..."],
      "quantidade": 27
    }
    ```

### 2\. Buscar estado por sigla

Retorna os detalhes de um estado específico.

  - **Método:** `GET`
  - **Endpoint:** `/v1/estados/:sigla`
  - **Exemplo:** `/v1/estados/SP`
  - **Resposta de Sucesso (200):**
    ```json
    {
      "statuscode": 200,
      "developer": "Roger Ribeiro de Oliveira",
      "uf": "SP",
      "descricao": "São Paulo",
      "capital": "São Paulo",
      "regiao": "Sudeste"
    }
    ```

### 3\. Buscar capital de um estado

Retorna a capital de um estado específico.

  - **Método:** `GET`
  - **Endpoint:** `/v1/capital/:sigla`
  - **Exemplo:** `/v1/capital/RJ`
  - **Resposta de Sucesso (200):**
    ```json
    {
      "statuscode": 200,
      "developer": "Roger Ribeiro de Oliveira",
      "uf": "RJ",
      "descricao": "Rio de Janeiro",
      "capital": "Rio de Janeiro"
    }
    ```

### 4\. Listar estados por região

Retorna uma lista de estados que pertencem a uma determinada região.

  - **Método:** `GET`
  - **Endpoint:** `/v1/estado/estadoregiao/:regiao`
  - **Exemplo:** `/v1/estado/estadoregiao/Sudeste`
  - **Resposta de Sucesso (200):**
    ```json
    {
      "statuscode": 200,
      "developer": "Roger Ribeiro de Oliveira",
      "regiao": "SUDESTE",
      "estados": [
        { "uf": "SP", "descricao": "São Paulo" },
        { "uf": "RJ", "descricao": "Rio de Janeiro" },
        { "uf": "MG", "descricao": "Minas Gerais" },
        { "uf": "ES", "descricao": "Espírito Santo" }
      ]
    }
    ```

### 5\. Listar capitais históricas

Retorna as capitais que o Brasil já teve.

  - **Método:** `GET`
  - **Endpoint:** `/v1/estado/capital/:pais`
  - **Exemplo:** `/v1/estado/capital/Brasil`
  - **Resposta de Sucesso (200):**
    ```json
    {
      "statuscode": 200,
      "developer": "Roger Ribeiro de Oliveira",
      "capitais": [
        {
          "capital_atual": "Brasília",
          "uf": "DF",
          "descricao": "Distrito Federal",
          "capital": "Brasília",
          "regiao": "Centro-Oeste",
          "capital_pais_ano_inicio": 1960,
          "capital_pais_ano_termino": null
        },
        {
          "capital_atual": "Não",
          "uf": "RJ",
          "descricao": "Rio de Janeiro",
          "capital": "Rio de Janeiro",
          "regiao": "Sudeste",
          "capital_pais_ano_inicio": 1763,
          "capital_pais_ano_termino": 1960
        }
      ]
    }
    ```

### 6\. Listar cidades de um estado

Retorna todas as cidades de um estado pela sua sigla.

  - **Método:** `GET`
  - **Endpoint:** `/v1/estado/cidade/:sigla`
  - **Exemplo:** `/v1/estado/cidade/SP`
  - **Resposta de Sucesso (200):**
    ```json
    {
      "statuscode": 200,
      "developer": "Roger Ribeiro de Oliveira",
      "uf": "SP",
      "descricao": "São Paulo",
      "quantidade_cidades": 645,
      "cidades": ["Adamantina", "Adolfo", "Aguaí", "..."]
    }
    ```

-----

## ⚠️ Tratamento de Erros

Em caso de requisição inválida (ex: sigla inexistente) ou erro interno do servidor, a API retornará uma resposta com status de erro.

**Exemplo de Resposta de Erro (500):**

```json
{
  "status": false,
  "statuscode": 500,
  "developer": "Roger Ribeiro de Oliveira",
  "message": "Ocorreu um erro no processamento da sua requisição"
}
```

-----

## 👨‍💻 Autor

  - **Roger Ribeiro de Oliveira**

-----

