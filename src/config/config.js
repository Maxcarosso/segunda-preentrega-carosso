export const config = {
  shopName: 'Zapatillas Importadas',
  currency: '$',
  taxRate: 0.21, // IVA
  shipping: {
    free: 10000, // Envío gratis a partir de este monto
    standard: 1500 // Costo de envío estándar
  },
  appName: import.meta.env.VITE_APP_TITLE || 'Zapatillas Importadas',
  categories: ['Nike', 'Adidas', 'Vans', 'Puma'],
  pagination: {
    itemsPerPage: 12
  },
  contact: {
    email: 'contacto@zapatillas.com',
    phone: '+1234567890',
    address: 'Calle Principal 123'
  },
  socialMedia: {
    instagram: 'https://instagram.com/tutienda',
    facebook: 'https://facebook.com/tutienda',
    twitter: 'https://twitter.com/tutienda'
  }
}; 