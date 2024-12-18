
# Projeto Performance Goals Generatio

## 🏥 Sistema de Cadastro de Produtos de uma PetShop

Este projeto é um sistema simples de **cadastro de produtos** de petshop desenvolvido em **TypeScript**, 
utilizando os princípios de **Programação Orientada a Objetos (POO)**, como **herança**, **Polimorfismo**, **Classes Abstratas** e **Interfaces**, . 
O sistema permite cadastrar, listar, consultar, atualizar e deletar produtos, com categorias específicas de **Alimentos** e **Brinquedos**.

---

## 🚀 **Funcionalidades**

- **Cadastro de Produtos**: Inclui brinquedos e alimentos com atributos específicos.
- **Listagem de Produtos**: Mostra todos os produtos cadastrados.
- **Consulta por ID**: Permite buscar um produto específico.
- **Atualização de Produtos**: Edita as informações de um produto existente.
- **Exclusão de Produtos**: Remove um produto do sistema.
- **Categorias**:
    - **Alimentos**: Incluem o atributo `sabor` (string).
    - **Brinquedos**: Incluem o atributo `seguimento` (string).

---

## 🛠️ **Tecnologias Utilizadas**

- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Ambiente de execução para JavaScript/TypeScript.
- **Readline-sync**: Biblioteca para entrada de dados pelo terminal.

---

## 📂 **Estrutura do Projeto**

src/
│
├── models/              
│   ├── Produto.ts         # Classe abstrata Produto
│   ├── Alimentos.ts     # Subclasse Alimentos
│   ├── Brinquedos.ts       # Subclasse Brinquedos
│
├── repositories/
│   ├── ProdutoRepository.ts  # Interface ProdutoRepository
│
├── controllers/
│   ├── ProdutoController.ts  # Implementação da interface ProdutoRepository
│
├── views/
│   ├── Menu.ts              # Menu principal do sistema
│
└── README.md                # Documentação do projeto


---

## 🔧 **Como Executar o Projeto**

1. **Pré-requisitos**:
   - Instalar **Node.js** ([Download Node.js](https://nodejs.org/)).
   - Instalar o **TypeScript** globalmente:
     ```bash
     npm install -g typescript
     ```

2. **Clone o Repositório**:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

3. **Instale as Dependências**:

    ```bash
    npm install readline-syn
    ```

4. **Compile o TypeScript**:

    ```bash
    tsc
    ```

5. **Execute o Projeto**:

    ```bash
    node menu.js
    ```

## 🖥️ **Exemplo de Uso**:
1. *Ao iniciar o programa, você verá o menu interativo*:
    --- Menu de Produtos ---
    1. Cadastrar Produto
    2. Listar Produtos
    3. Consultar Produto por ID
    4. Atualizar Produto
    5. Deletar Produto
    0. Sair
    Escolha uma opcao:

2. *Cadastro de Alimentos*:
    Escolha a opção 1 e forneça os dados:

    Tipo (1-Alimentos, 2-Brinquedos): 1
    ID: 1
    Nome: Ração Golden
    Preco: 159.50
    Qual o sabor do Alimentos: Carne
    Produto "Ração Golden" adicionado com sucesso!

3. *Lista Produtos*:
    Escolha a opção 2 e veja os produtos cadastrados:
    ```bash
      [{
         "id": 1, "nome": "Racao Golden", "preco": 159.5, "sabor": true 
         }]
      ```


## ✅ **Melhorias Futuras**:
    ➡️ Conectar o sistema a um banco de dados para persistência de dados.
    ➡️ Implementar uma interface gráfica (front-end).
    ➡️ Adicionar testes automatizados usando Jest.


## 👩‍💻 Autora
  **Josiane Fermao**

🌐 LinkedIn: [Currículo](https://www.linkedin.com/in/josiane-fermao/)
🐙 GitHub: [Portifólio](https://github.com/josifermaodev)
📧 Email: josianefermao@gmail.com

