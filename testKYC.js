import 'dotenv/config'

const API_URL = process.env.N8N_API_URL;
const API_TOKEN = process.env.N8N_API_TOKEN;
const API_URL_PROD = process.env.N8N_API_URL_PROD;

await fetch(API_URL_PROD, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`
  },
  body: JSON.stringify(
    { 
      business_owners: [
        {
        nome: 'Marisa Cruz',
        data_nascimento: '1995-01-01',
        fonte_patrimonio: 'O patrimônio é conjunto com seu marido (Accountant E - Elton). Marisa dedica-se a causas filantrópicas que não contribuem para o patrimônio. Elton se formou em engenharia mecânica em pelo Instituto Tecnológico de Aeronáutica - ITA em 1969. Trabalhou no Citigroup de fevereiro de 1982 até março de 2007. Durante estes 25 anos desempenhou diversas funções técnicas, gerenciais e de direção no segmento Corporativo, no segmento de Pessoas Físicas e no Private Bank do Citibank Brasil. Em 1990 juntou-se ao grupo que há pouco tempo iniciara o desenvolvimento do Private Bank no Brasil, primeiro como Gerente de Produtos de Investimento, depois como Diretor de Marketing e mais adiante como Diretor de Infraestrutura. Finalmente, a partir de Junho de 2001 até março de 2007 dedicou-se integralmente ao estudo e desenvolvimento de soluções aplicáveis ao planejamento patrimonial e financeiro dos clientes do Private Bank no Brasil, respondendo pelos serviços fiduciários prestados aos clientes brasileiros. A partir de julho de 2007 estabeleceu-se como Consultor para assuntos relativos ao planejamento patrimonial e sucessório de famílias com elevado patrimônio, atuando via a Cunha Cruz Consulting.',
        atividade_profissional: 'atua em causas filantrópicas',
        composicao_patrimonio: 'Fundos de investimento e previdência privada',
        total_patrimonio: '121000000',
        situacao_familiar: 'Casada com o cliente Accountant E - Elton Guimarães da Cunha Cruz - CPF: 19366175872. Juntos, tem duas filhas: Andrea da Cunha Cruz, Flavia da Cunha Cruz',
        finalidade_conta: 'Planejamento financeiro a longo prazo',
        controle_moeda: 'BRL'
      },
    ],
    }
  )
});