// Formatea el precio del producto como una string e inserta puntos (.) cada 3 dígitos para seguir el formato de precios argentinos.
export function formatNumberWithDots (number) {
  // Convierte el número a una string.
  const numStr = number.toString()

  // Usar un Regex para instertar 3 puntos (.) cada 3 dígitos empezando de la derecha.
  const formattedNumber = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return formattedNumber
}