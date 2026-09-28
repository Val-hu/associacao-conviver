# Associação Conviver

Site institucional estático da Associação Conviver. A aplicação apresenta informações da associação e oferece um formulário de inscrição para voluntariado. A navegação entre início e formulário é feita como SPA, atualizando o conteúdo sem recarregar o documento.

## Funcionalidades

- Navegação entre a página inicial e o formulário de voluntariado por fragmentos da URL.
- Menu responsivo, dropdown e carrossel de imagens.
- Validação dos campos com mensagens de erro e confirmação acessíveis.
- Armazenamento das inscrições válidas no `localStorage` do navegador.

> As inscrições ficam apenas no navegador e dispositivo utilizados. Não são enviadas a um servidor nem sincronizadas entre dispositivos.

## Tecnologias

- HTML semântico
- CSS responsivo
- JavaScript nativo com ES Modules
- `localStorage` para persistência local

Não há dependências npm, bundler ou etapa de build.

## Pré-requisitos

- Navegador moderno com suporte a módulos ES.
- Servidor HTTP local para servir os arquivos. Abrir `index.html` diretamente via `file://` pode impedir o carregamento dos módulos.
- Python 3 para a opção de servidor abaixo, ou a extensão Live Server no VS Code.

## Executar localmente

Na pasta raiz do projeto, inicie um servidor estático:

```powershell
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador. Alternativamente, use a extensão Live Server do VS Code e abra `index.html` com **Go Live**.

## Testes

Não há framework ou suíte de testes automatizados configurados. A verificação atual é manual no navegador:

1. Navegue entre início, doação, contato e voluntariado, incluindo os botões Voltar e Avançar.
2. Envie o formulário vazio e confirme as mensagens de validação.
3. Teste e-mail inválido e telefone incompleto; depois envie dados válidos.
4. Confira no DevTools > Application > Local Storage a chave `conviver-inscricoes`.

## Publicar no GitHub Pages

O workflow em `.github/workflows/pages.yml` publica os arquivos estáticos quando há um push para a branch `main` ou quando a execução é iniciada manualmente.

1. Crie um repositório GitHub e envie os arquivos do projeto para a branch `main`.
2. No repositório, abra **Settings > Pages** e escolha **GitHub Actions** como fonte de publicação.
3. Acompanhe a execução em **Actions**. Quando terminar com sucesso, o endereço do site será exibido no ambiente `github-pages` e em **Settings > Pages**.

O workflow não instala pacotes nem executa build: ele publica diretamente HTML, CSS, JavaScript e imagens. O deploy depende de o repositório estar configurado para GitHub Pages e de a branch `main` receber o workflow.

## Estrutura

```text
.
├── index.html
├── voluntaria-se.html
├── assets/                 # Imagens e ilustrações
├── css/
│   └── style.css           # Estilos e layout responsivo
├── js/
│   ├── script.js           # Navegação SPA e carrossel
│   ├── templates.js        # Templates das telas
│   ├── form.js             # Validação e feedback do formulário
│   └── storage.js          # Persistência em localStorage
└── .github/
    └── workflows/
        └── pages.yml       # Deploy automatizado no GitHub Pages
```

## Acessibilidade e limitações

O projeto utiliza landmarks HTML, rótulos associados aos campos, atributos ARIA e feedback de validação. Ainda é necessário realizar uma auditoria completa de contraste, teclado e leitores de ecrã antes de declarar conformidade WCAG 2.1 AA.
