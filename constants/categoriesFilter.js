const filters = [
  {
    id: 'category',
    name: 'Sous Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Producteur',
    options: [
      { value: 'Copérative X', label: 'coopérative X', checked: false },
      { value: 'Copérative Y', label: 'coopérative Y', checked: false },
      { value: 'Copérative Z', label: 'coopérative Z', checked: false },
    ],
  },
  {
    id: 'prix',
    name: 'Price',
    options: [
      { value: '0 MAD - 100 Mad', label: '0 MAD - 100 Mad', checked: false },
      {
        value: '100 MAD - 500 MAD',
        label: '100 MAD - 500 MAD',
        checked: false,
      },
      { value: '+500 MAD', label: '+500 MAD', checked: true },
    ],
  },
]

export { filters }
