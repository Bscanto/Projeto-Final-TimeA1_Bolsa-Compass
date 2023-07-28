# Projeto-Final-TimeA1_Bolsa-Compass
# Projeto realizado ao final do estágio de bolsa da compass UOL 🐶

Este repositório apresenta o projeto de conclusão da trilha Blockchain Apprentice. A ideia desenvolvida aborda a criação de NFTs por fidelidade, com a temática de um petshop onde a cada 10 banhos a pessoa recebe um NFT personalizado do seu próprio pet gerado por esta aplicação, a obtenção do NFT pode trazer diversos benefícios como descontos nos próximos banhos e a participação em promoções especiais!

## Descrição do Projeto
A aplicação é composta por duas APIs: uma API de Imagem que utiliza o OpenAI para gerar imagens com base em prompts, criar variações ou edições de imagens adicionadas por upload e uma API de Token que aproveita a API de Imagem, faz upload de imagens para o IPFS e utiliza a API do Headless Hathor Wallet para criar NFTs.

Confira nossa apresentação no link a seguir: [Slides](https://drive.google.com/file/d/1bU3FMOlwGnB4KQ22qFG3SQIhq7RzzLSk/view?usp=sharing) 🐱🐱

## Pré-requisitos
Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Node.js: [Install Node.js](https://nodejs.org/)

## Visão Geral da Aplicação

A aplicação consiste nas seguintes APIs:

1. **Image API**: Utiliza a API do OpenAI para gerar imagens a partir de prompts e criar variações e edições a partir do upload de imagens.
2. **Token API**: Esta API expõe um endpoint para a criação de NFTs (Non-Fungible Tokens). A API de Token chama a API de Imagem, fornecendo a descrição do metadado do NFT como prompt. Ela recupera a imagem gerada e a faz upload para o IPFS utilizando a API do Infura IPFS. Por fim, ela chama a API do Hathor Headless Wallet para criar um novo NFT.

## Estrutura do Repositório

O repositório está organizado nas seguintes pastas:

- **apis**: Contém as implementações das APIs "Image API" e "Token API".
- **collections**: Inclui coleções do Postman para interagir com a aplicação.
- **scripts**: Fornece scripts para configurar o Hathor Wallet Headless usando o Docker.

## Devs

[acaf02](https://github.com/acaf02), [Pquar](https://github.com/username3), [Pquar](https://github.com/Pquar), [Bscanto](https://github.com/Bscanto), mentor: [@gabrielmissio](https://github.com/gabrielmissio).
