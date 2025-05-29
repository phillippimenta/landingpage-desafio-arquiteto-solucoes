# Landing Page – Desafio Técnico | Arquiteto de Soluções

Landing page desenvolvida para o desafio técnico da vaga de Arquiteto de Soluções (Desenvolvedor Sênior). O objetivo é capturar dados de pré-cadastro de usuários interessados na nova fase digital de um banco.

## 🖥️ Projeto

Esta aplicação foi construída com foco em responsividade, usabilidade e integração com uma API backend. O projeto simula uma campanha institucional para atrair novos clientes, permitindo o envio de nome, CPF, e-mail e telefone de forma segura e validada.

### ✨ Demonstração visual

![Exemplo da interface Mobile](https://github.com/phillippimenta/assets-desafio-arquiteto-solucoes/blob/main/landing-page-mobile.png)
![Exemplo da interface Tablet](https://github.com/phillippimenta/assets-desafio-arquiteto-solucoes/blob/main/landing-page-tablet.png)
![Exemplo da interface Desktop](https://github.com/phillippimenta/assets-desafio-arquiteto-solucoes/blob/main/landing-page-desktop.png)

---

## ⚙️ Tecnologias utilizadas

- HTML5
- CSS3 (responsivo e moderno)
- JavaScript (puro, sem frameworks)
- Integração com API REST (POST `/api/v1/leads`)
- Máscaras em campos de CPF e Telefone
- Validação de campos conforme LGPD

---

## 📦 Estrutura de Arquivos

```
.
├── index.html         # Página principal
├── style.css          # Estilo visual customizado
├── script.js          # Lógica de envio e validações
├── assets/            # (opcional) Imagens e logos
└── README.md
```

---

## 📥 Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/phillippimenta/landingpage-desafio-arquiteto-solucoes.git
cd landingpage-desafio-arquiteto-solucoes
```

2. Execute o HTML em um servidor local (ou abra no navegador):

```bash
# com Python
python -m http.server 8080
```

3. Certifique-se de que sua API esteja rodando em:
```
http://localhost:8080/api/v1/leads
```

---

## 🔐 LGPD

- O formulário contém aviso e checkbox de consentimento para coleta de dados, conforme a Lei Geral de Proteção de Dados (LGPD).
- Os dados são enviados apenas após o aceite explícito do usuário.

---

## ✅ Funcionalidades

- [x] Layout responsivo com foco institucional
- [x] Máscara automática de CPF e telefone
- [x] Envio de dados com `fetch` e `POST`
- [x] Mensagens amigáveis de sucesso e erro
- [x] Validação e tratamento de mensagens de erro do backend

---

## 🧑‍💻 Autor

Desenvolvido por **Phillip Pimenta**  
[https://github.com/phillippimenta](https://github.com/phillippimenta)

---

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.