import ButtonPag from "./ButtonPag";


const Page = ({
  pilotos,
  paginaActual,
  setPaginaActual,
  elementosPorPagina,
}) => {
  const startIndex = (paginaActual - 1) * elementosPorPagina;
  const endIndex = startIndex + elementosPorPagina;
  const pilotosPaginados = pilotos.slice(startIndex, endIndex);

  const numPaginas = Math.ceil(pilotos.length / elementosPorPagina);

  return (
    <div id="paginacion">
      {Array.from({ length: numPaginas }, (_, i) => i + 1).map((pagina) => (
        <BotonPaginacion
          key={pagina}
          numeroPagina={pagina}
          paginaActual={thisPagina}
          setPaginaActual={setPaginaActual}
        />
      ))}
    </div>
  );
};

export default Page;