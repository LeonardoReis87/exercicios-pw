# 💻 Atividade — Clone de Layout com Grid, Flexbox e Position

## 🧩 Desafio

Reproduza o layout da imagem abaixo utilizando exclusivamente **HTML e CSS**, aplicando os conceitos aprendidos de:

- **Grid Layout**
- **Flexbox**
- **Position (absoluta/relativa, se necessário)**

> 📌 Não é permitido usar frameworks como Bootstrap ou Tailwind. O foco é praticar a estruturação manual do layout com HTML e CSS puros.

---

## 🎯 Objetivo

O objetivo desta atividade é desenvolver um layout **estático**, o mais fiel possível ao modelo original, utilizando uma combinação estratégica de `display: grid`, `display: flex` e `position` para organizar os elementos visuais da interface.

---

## 🖼️ Modelo Original (para comparação)

![Modelo de Interface](./assets/Dark%20Blue%20Modern%20Geometric%20Simple%20Feature%20Section%20Website%20UI%20Prototype.jpg)

---

## 📝 Requisitos

- Crie um arquivo `index.html` com a estrutura do layout;
- Crie um arquivo `style.css` para os estilos;
- Utilize cores, espaçamentos, alinhamentos e fontes semelhantes ao modelo;
- O botão deve ter aparência e posicionamento similar ao original;
- A imagem lateral pode ser substituída por outra parecida, caso não consiga recortar a exata;
- O texto pode ser simulado com `Lorem Ipsum`;


---

## ✅ Entregáveis

- Código fonte com os arquivos `index.html` e `style.css`;
- A imagem do modelo original deve estar junto ao projeto, como referência;
- Na pasta assets terá a imagem banner.png e logo.png para utlizar no projeto
- Estrutura clara e organizada;
- Comentários no código são bem-vindos, mas não obrigatórios.

---

## 🚀 Dica Final


---

## 🎨 Uso de Ícones (Font Awesome)

Para os elementos visuais que necessitam de ícones (como redes sociais, botões, etc.), utilize a biblioteca **Font Awesome (Versão 6 Free)**. 

### 1. Como incluir no seu projeto
Adicione a tag `link` abaixo dentro do `<head>` do seu arquivo `index.html`:

```html
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css)" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

```

### 2. Onde encontrar os ícones

Você pode pesquisar os ícones gratuitos diretamente no catálogo oficial da versão 6:
🔗 [Buscar Ícones no Font Awesome v6 (Free Collection)](https://fontawesome.com/v6/search?ic=free-collection)

### 3. Exemplo de uso no HTML

Após incluir o link do CDN no head, basta copiar a tag `<i>` do ícone desejado, por exemplo:

```html
<!-- Exemplo de ícone de seta para um botão -->
<button>Saiba Mais <i class="fa-solid fa-arrow-right"></i></button>

<!-- Exemplo de ícone de rede social -->
<a href="#"><i class="fa-brands fa-instagram"></i></a>

```

Boa sorte e bons códigos! 💡
