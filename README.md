# DispMov-UNI

Aplicativo mobile de exemplo para cadastro e listagem de produtos, desenvolvido com React + Vite.

## Funcionalidades

- Tela de login com validação local para usuários pré-definidos:
  - `admin` / `1234`
  - `candidato` / `abcde`
- Tela de listagem de produtos com cards adaptados para dispositivos móveis
- Botão de cadastro fixado no rodapé da lista de produtos
- Tela de cadastro de produto com campos de nome, descrição, valor, categoria e imagem opcional
- Imagens padrão por categoria quando não há URL de imagem informada
- Layout responsivo com comportamento de teclado móvel melhorado

## Como executar

```bash
cd /workspaces/DispMov-UNI
npm install
npm run dev
```

O app será servido em `http://localhost:5173` por padrão.

## Observações

- A lista inicial contém 4 produtos de exemplo, um para cada categoria: Eletrônicos, Roupas, Alimentos e Casa.
- Produtos adicionados via formulário são armazenados em memória apenas durante a sessão.
