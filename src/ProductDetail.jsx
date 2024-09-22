import React, { useState } from 'react';

const ProductDetail = () => {
  // Estado para manejar la compra y mostrar el mensaje.
  const [purchased, setPurchased] = useState(false);

  // Simulación de datos de producto (estos normalmente vendrían de una API).
  const product = {
    name: "Smartphone XYZ",
    description: "Un teléfono inteligente con características avanzadas.",
    price: 500,
    availableQuantity: 10,
  };

  // Función para manejar la compra.
  const handlePurchase = () => {
    setPurchased(true);
  };

  return (
    <div style={styles.container}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Cantidad disponible:</strong> {product.availableQuantity}</p>

      <button onClick={handlePurchase} style={styles.button}>Comprar</button>
      
      {purchased && <p style={styles.thanksMessage}>Gracias por su compra</p>}
    </div>
  );
};

// Estilos simples para el diseño
const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  thanksMessage: {
    marginTop: '20px',
    color: '#155724',
    fontWeight: 'bold'
  }
};

export default ProductDetail;
