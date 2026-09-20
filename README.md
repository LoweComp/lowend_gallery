# 🏜️ LOWEND // DESERT AESTHETIC

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-Black?style=for-the-badge&logo=framer&logoColor=blue)

> **"O DESERTO NAS NUVENS. NUNCA FOI UMA MIRAGEM."**

Este repositório contém o código-fonte da aplicação web imersiva e galeria de fotos oficial da festa **LOWEND**. Desenvolvido com foco em alta performance, estética "Dark/Neon Terminal" e uma experiência fluida para dispositivos móveis.

---

## 🚀 Funcionalidades (Features)

- **Entrada Cinemática:** Transição suave de um vídeo de introdução para um background estático de alta resolução.
- **Widgets de Imersão:** HUD (Head-Up Display) estilo terminal, exibindo temperatura extrema, data, local e status da missão.
- **Contagem Regressiva (LOWEND 2.0):** Relógio em tempo real integrado (Dias, Horas, Minutos e Segundos) gerando antecipação para o próximo evento.
- **Galeria de Fotos Híbrida:**
  - 📱 **Mobile First:** Sistema de *Lightbox* para visualização em tela cheia com botão nativo para download individual rápido.
  - 💻 **Desktop:** Seleção de múltiplas imagens em lote com exportação automatizada para arquivo `.ZIP` (via `JSZip`).
- **UI/UX Premium:** Animações baseadas em scroll e interações de hover customizadas (vermelho/verde neon) garantidas pelo `Framer Motion`.

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide-React](https://lucide.dev/)
- **Galeria:** [Yet Another React Lightbox](https://yet-another-react-lightbox.com/)
- **Utilitários:** `jszip`, `file-saver`

---

## ⚙️ Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/lowend-gallery.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd lowend-gallery
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra `http://localhost:5173` no seu navegador.

---

## 🌐 Deploy Contínuo (CI/CD)

Este projeto está configurado para deploy automatizado via **Vercel**. 
Sempre que uma nova atualização é enviada para a *branch* principal (ex: adição das fotos oficiais), a Vercel compila e publica a nova versão em menos de 2 minutos automaticamente.

---
*Developed for LoweComp*