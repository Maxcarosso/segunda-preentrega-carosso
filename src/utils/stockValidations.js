export const checkStock = (productId, quantity, currentStock) => {
  if (quantity > currentStock) {
    throw new Error('No hay suficiente stock disponible');
  }
  return true;
}; 