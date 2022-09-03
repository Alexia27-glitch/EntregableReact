import React, { useState } from "react";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

import Item from "./Item";
const itemsData = require("./data.json");

export default function Listado({ agregarACarrito }) {
  const [items, setItems] = useState(itemsData);

  const sumarCantidad = (itemId) => {
    setItems(
      items.map((item) => {
        if (item.id == itemId && item.stock > 0) {
          agregarACarrito();
          return {
            ...item,
            stock: item.stock - 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="container">
      {items.map((item) => (
        <Item key={item.id} item={item} sumarCantidad={sumarCantidad} />
      ))}
    </div>
  );
}
