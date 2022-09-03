import React, { useState } from "react";

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")


export default function Item({ item, sumarCantidad}) {

  return (
    <div className='producto'>
        <h1>{item.producto.nombre}</h1>
        <p>{item.producto.descripcion}</p>
        <p style={{textAlign: "center", fontSize: ".8em"}}>
            <b>en stock: {item.stock || <span  style={{background: "salmon", color: "#8a0f0f", borderRadius: "3px", fontWeight: "normal", padding: "2px"}}>agotado</span>}</b></p>
        <button onClick={() => sumarCantidad(item.id)} disabled={!item.stock}>
            {item.stock ? "Comprar" : "Sin stock"}
        </button>
    </div>
  )
}
