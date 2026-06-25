export const seedState = {
  ui: {
    currentRoute: 'home',
  },

  settings: {
    usefulCashRate: 0.75,
    gasolinePrice: 6.49,
    averageConsumption: 16,
    averageGainPerKm: 1.60,
    averageGainPerHourMin: 40,
    averageGainPerHourMax: 45,
  },

  cash: {
    uber: 187.70,
    ninetyNine: 67.73,
    nubank: 45.58,
    cash: 140.00,
  },

  productionToday: {
    uber: 0,
    ninetyNine: 0,
    target: 600,
  },

  uberLoan: {
    currentBalance: 528.12,
    possibleRefinance: 749,
    description:
      'Possível refinanciamento: junta com empréstimo atual, volta para parcela 1/12 e pode pausar o desconto de 30%. Usar somente como ponte para Kovi, combustível e proteção de caixa.',
  },

  bills: [
    { id: 'unicesumar', name: 'Unicesumar', amount: 409.01, dueLabel: 'Dia 01', recurrence: 'monthly', status: 'pending', category: 'parcelamento', endsAt: 'nov/2026' },
    { id: 'internet', name: 'Internet', amount: 99.90, dueLabel: 'Dia 05', recurrence: 'monthly', status: 'pending', category: 'fixa' },
    { id: 'telefone', name: 'Telefone', amount: 409.00, dueLabel: 'Dia 05', recurrence: 'monthly', status: 'pending', category: 'fixa' },
    { id: 'transporte', name: 'Transporte escolar', amount: 400.00, dueLabel: 'Dia 10', recurrence: 'monthly', status: 'pending', category: 'fixa' },
    { id: 'pensao', name: 'Pensão', amount: 400.00, dueLabel: 'Dia 10', recurrence: 'monthly', status: 'pending', category: 'fixa' },
    { id: 'vivo', name: 'Vivo', amount: 150.00, dueLabel: 'Dia 10', recurrence: 'monthly', status: 'pending', category: 'fixa' },
    { id: 'claro', name: 'Claro', amount: 60.00, dueLabel: 'Dia 10', recurrence: 'monthly', status: 'pending', category: 'fixa' },
    { id: 'agua', name: 'Água', amount: 280.00, dueLabel: 'Dia 15', recurrence: 'monthly', status: 'pending', category: 'fixa' },
    { id: 'arc4', name: 'ARC4', amount: 39.10, dueLabel: 'Dia 23', recurrence: 'monthly', status: 'pending', category: 'parcelamento', endsAt: 'fev/2027' },
    { id: 'boticario', name: 'Boticário', amount: 109.52, dueLabel: 'Dia 26', recurrence: 'monthly', status: 'pending', category: 'parcelamento', endsAt: 'set/2026' },
    { id: 'mercado', name: 'Mercado', amount: 500.00, dueLabel: 'Dia 30', recurrence: 'monthly', status: 'pending', category: 'casa' },
    { id: 'kovi-2706', name: 'Kovi excepcional', amount: 1035.00, dueLabel: '27/06', recurrence: 'once', status: 'pending', category: 'kovi', priority: 'alta' },
    { id: 'kovi-2906', name: 'Kovi excepcional', amount: 995.00, dueLabel: '29/06', recurrence: 'once', status: 'pending', category: 'kovi', priority: 'alta' },
    { id: 'kovi-0307', name: 'Kovi', amount: 903.00, dueLabel: '03/07', recurrence: 'weekly', status: 'pending', category: 'kovi', priority: 'alta' },
    { id: 'ingles', name: 'Inglês', amount: 710.00, dueLabel: 'Pendente', recurrence: 'once', status: 'pending', category: 'nome limpo', priority: 'media' },
    { id: 'cartorio', name: 'Cartório / Protestos', amount: 1040.00, dueLabel: 'Pendente', recurrence: 'once', status: 'pending', category: 'nome limpo', priority: 'media' },
    { id: 'faccio', name: 'Faccio', amount: 250.00, dueLabel: 'Pendente', recurrence: 'once', status: 'pending', category: 'pendência', notes: 'Gera cerca de R$ 10 de juros a cada 3 dias.' },
    { id: 'cunhada', name: 'Cunhada', amount: 250.00, dueLabel: 'Pendente', recurrence: 'once', status: 'pending', category: 'pendência' },
  ],

  incomeSources: [
    { id: 'uber-99', name: 'Uber + 99', weakDay: 500, normalDay: 600, goodDayMin: 650, goodDayMax: 700, exceptionalDay: 800 },
    { id: 'processo', name: 'Processo / Restaurante', amount: 800, recurrence: 'monthly', until: 'novembro/2026' },
    { id: 'mae', name: 'Ajuda / empréstimo da mãe', amountMin: 500, amountMax: 700, recurrence: 'possible' },
    { id: 'refinanciamento-uber', name: 'Possível refinanciamento Uber', amount: 749, recurrence: 'possible' },
  ],

  projects: [
    { id: 'caixa-livre', name: 'Caixa livre', current: 0, target: 500, deadline: '31/07', description: 'Primeira meta para sair do modo emergência.' },
    { id: 'nome-limpo', name: 'Nome limpo', current: 0, target: 1750, deadline: 'Pendente', description: 'Inglês + Cartório/Protestos. Agora como pendência, não urgência máxima.' },
    { id: 'carro-proprio', name: 'Carro próprio', current: 0, target: 12000, deadline: 'Plano futuro', description: 'Entrada para sair da Kovi com segurança.' },
    { id: 'reserva', name: 'Reserva financeira', current: 0, target: 5000, deadline: '31/12', description: 'Reserva para segurança familiar.' },
  ],

  history: [
    {
      date: '22/06/2026',
      gross: 569,
      uber: 400,
      ninetyNine: 169,
      kilometers: 362.3,
      consumption: 15.9,
      panelTime: '13h49',
      fuel: 100,
      personalExpenses: 84,
      realNet: 341.57,
      usefulNetWithoutPersonalExpenses: 425.57,
    },
    {
      date: '23/06/2026',
      gross: 0,
      note: 'Dia zerado por precisar ficar com o filho. Não usar como referência de produtividade.',
    },
  ],
};
