import { useState, useEffect } from "react";
import Filter from "./Filter";
import NameFilter from "./NameFilter";
import TeamFilter from "./TeamFilter";
import Table from "./Table";
import Page from "./Page";
import "./App.css";

function App() {

  const [pilotosOriginal, setPilotosOriginal] = useState([]);
  const [pilotos, setPilotos] = useState([]);
  const [pilotoDestacado, setPilotoDestacado] = useState(null);
  const [pilotosPaginados, setPilotosPaginados] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [elementosPorPagina, setElementosPorPagina] = useState(3); 

  useEffect(() => {
    cargaDatos();
  }, []);

  useEffect(() => {
    const startIndex = (paginaActual - 1) * elementosPorPagina;
    const endIndex = startIndex + elementosPorPagina;
    const paginados = pilotos.slice(startIndex, endIndex);

    setPilotosPaginados(paginados);
  }, [paginaActual, elementosPorPagina, pilotos]);

  const cargaDatos = async () => {
    try {
      const response = await fetch("pilotos.json");
      const data = await response.json();

      setPilotos(data.pilotos);
      setPilotosOriginal(data.pilotos);
    } catch (error) {
      console.error("Ha ocurrido un error con la conexión a la API:", error);
    }
  };

  const filtrarPorNacionalidad = (nacionalidad) => {
    if (nacionalidad === "") {
      setPilotos([...pilotosOriginal]);
    } else {
      const filtrados = pilotosOriginal.filter(
        (piloto) =>
          piloto.nacionalidad.toLowerCase() === nacionalidad.toLowerCase()
      );

      setPilotos(filtrados);
    }
    setPaginaActual(1);
  };

  const ordenarSegunNombre = () => {
    const ordenados = [...pilotos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );

    setPilotos(ordenados);
  };

  const ordenarSegunEquipo = () => {
    const ordenados = [...pilotos].sort((a, b) =>
      a.equipo.localeCompare(b.equipo)
    );

    setPilotos(ordenados);
  };

  const verTodos = () => {
    setPaginaActual(1); 
    setElementosPorPagina(pilotos.length);
  };

  const destacarPiloto = (indice) => {
    setPilotoDestacado(indice);
  };

  const paginar = () => {
    setPaginaActual(1);
    setElementosPorPagina(3);
  };

  return (
    <main className="App">
      <Filter onFilter={filtrarPorNacionalidad} />

      <NameFilter onSort={ordenarSegunNombre} />

      <TeamFilter onSort={ordenarSegunEquipo} />

      <Table
        pilotos={pilotosPaginados}
        pilotoADestacar={pilotoDestacado}
        destacar={destacarPiloto}
      />

      <Page
        pilotos={pilotos}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        elementosPorPagina={elementosPorPagina}
      />

      <button onClick={verTodos}>Ver Todos los Pilotos</button>
      <button onClick={paginar}>Paginar de 3 en 3 Pilotos</button>
    </main>
  );
}

export default App;