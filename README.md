# Primeiros passos.

- Faça o clone da apiBlip.

- Execute o comando `node PetController.js`.

- Com o Ngrok instalado e aberto em sua máquina, após o link raiz ao final da URL temos as opções `/service` `/banho` `/tosa` `/desconto`

- Import o Fluxo para seu Builder e no bloco `Banho e tosa` em `Ações`, `Requisição HTTTP` coloque em `URL` o link gerado pelo `Ngrok/service`.

# CORREÇÃO

- Após analisar com calma, utilizei a ferramenta de debug da própria plataforma,
  após isso percebi que o problema do fluxo era um simples erro na hora de
  consumir o conteúdo da API que no exemplo da correção é notável a utilização
  do `'petBody@banho'` ao invés de `'petBody.banho'` para um simples JSON. Nós,
  integrantes da equipe 2 conseguimos extrair uma ótima experiência e muito
  aprendizado com esse challenge, desde já agradecemos a oportunidade e o carinho
  de todos vocês.
