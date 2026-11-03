import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

  function App() {
    const recetas = [
      {
        id: 1,
        nombre: 'Doenjang-jjigae con bistec',
        imagen: '/doenjang-jjigae.png',
        descripcion:
          'Un guiso coreano reconfortante hecho con pasta de soya fermentada, verduras, tofu y trozos de bistec.',
        ingredientes: [
          '200 g de bistec en cubos pequeños',
          '2 cucharadas de doenjang (pasta de soya fermentada)',
          '1 papa mediana',
          '1 calabacín',
          '1/2 cebolla',
          '1/2 bloque de tofu',
          '2 dientes de ajo picados',
          '1 chile verde (opcional)',
          '3 tazas de agua o caldo',
          '1 cebollín',
        ],
        pasos: [
          'Pon el agua o caldo en una olla y disuelve el doenjang.',
          'Agrega el bistec y la papa, y cocina a fuego medio por 10 minutos.',
          'Añade la cebolla, el calabacín y el ajo.',
          'Agrega el tofu en cubos y el chile, y cocina 5 minutos más.',
          'Termina con el cebollín picado y sirve caliente con arroz.',
        ],
      },
      {
        id: 2,
        nombre: 'Yangnyeom Chicken',
        imagen: '/yangnyeom-chicken.png',
        descripcion:
          'Pollo frito coreano muy crujiente, cubierto con una salsa dulce, picante y pegajosa.',
        ingredientes: [
          '500 g de piezas de pollo',
          '1/2 taza de almidón de maíz o papa',
          'Sal y pimienta al gusto',
          'Aceite para freír',
          '2 cucharadas de gochujang',
          '2 cucharadas de salsa de soya',
          '2 cucharadas de azúcar o miel',
          '3 cucharadas de cátsup',
          '3 dientes de ajo picados',
          'Semillas de ajonjolí',
        ],
        pasos: [
          'Sazona el pollo con sal y pimienta, y cúbrelo con el almidón.',
          'Fríe el pollo en aceite caliente hasta que esté dorado y crujiente.',
          'En una sartén mezcla el gochujang, la salsa de soya, el azúcar, la cátsup y el ajo.',
          'Calienta la salsa unos minutos hasta que burbujee.',
          'Agrega el pollo frito, mezcla bien y decora con ajonjolí.',
        ],
      },
      {
        id: 3,
        nombre: 'Dakbokkeumtang',
        imagen: '/dakbokkeumtang.png',
        descripcion:
          'Estofado de pollo coreano picante con papa y zanahoria en una salsa espesa y llena de sabor.',
        ingredientes: [
          '600 g de pollo en trozos',
          '2 papas medianas',
          '1 zanahoria',
          '1 cebolla',
          '2 cucharadas de gochujang',
          '1 cucharada de hojuelas de chile (gochugaru)',
          '3 cucharadas de salsa de soya',
          '1 cucharada de azúcar',
          '4 dientes de ajo picados',
          '1 trozo pequeño de jengibre',
          '2 tazas de agua',
          '1 cebollín',
        ],
        pasos: [
          'Mezcla el gochujang, el gochugaru, la salsa de soya, el azúcar, el ajo y el jengibre.',
          'Coloca el pollo en una olla, agrega la mezcla y el agua.',
          'Cocina a fuego medio por 15 minutos.',
          'Añade las papas, la zanahoria y la cebolla.',
          'Cocina 20 minutos más hasta que todo esté suave y la salsa espese.',
          'Decora con cebollín y sirve con arroz.',
        ],
      },
    ]

    return (
      <div className="pagina">
        <h1>Las recetas de MomHwa</h1>

        <div className="lista-recetas">
          {recetas.map((receta) => (
            <div className="receta" key={receta.id}>
              <img src={receta.imagen} alt={receta.nombre} />
              <h2>{receta.nombre}</h2>
              <p>{receta.descripcion}</p>

              <h3>Ingredientes</h3>
              <ul>
                {receta.ingredientes.map((ingrediente, i) => (
                  <li key={i}>{ingrediente}</li>
                ))}
              </ul>

              <h3>Preparación</h3>
              <ol>
                {receta.pasos.map((paso, i) => (
                  <li key={i}>{paso}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default App