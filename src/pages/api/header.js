export default function handler(req, res) {
  res.status(200).json({ 
    logo: 'https://treeconomy.com.co/wp-content/uploads/2020/08/Logo-Blanco.png',
    opcions: [
      'Como Funcions',
      'Calculadora de inversion',
      'Companies'
    ],
    callToAction: {
      label: 'Como funciona',
      background: 'orange',
      round: '5px'
    },
    country: {
      opc: [
        'us',
        'col'
      ],
      select: 'col'
    }
  })
}