const ButtonPag = ({ numPagina, thisPag, setPagActual }) => {
    const handleClick = () => {
      setThisPag(pagina);
    };
  
    return (
      <button
        className={numPagina === thisPag ? 'active' : ''}
        onClick={handleClick}
      >
        {numPagina}
      </button>
    );
  };
  
  export default ButtonPag;