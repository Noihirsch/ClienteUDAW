export default function Lista(tarea) {
  return (
    <div className="container mt-5">
      <ul className="list-group align-items-center">
        {tarea.tasksList.map((element) => {
          return (
            <li className="list-group-item w-50" key={element.id}>
              <div className="row justify-content-around">
                <div className="col-9">
                  {element.strike ? (
                    <p className="vertical-center">
                      <del>{element.text}</del>
                    </p>
                  ) : (
                    <p className="vertical-center">{element.text}</p>
                  )}
                </div>
                <div className="col-3 px-0">
                  <button
                    className="hecho"
                    style={{
                      height: "fit-content",
                      marginRight: "10px",
                      backgroundColor: "orange",
                    }}
                    value={element.id}
                    onClick={(e) => tarea.strikeTaskCallback(element.id)}
                  >
                    Hecho
                  </button>
                  <button
                    className="borrar"
                    style={{
                      height: "fit-content",
                      backgroundColor: "green",
                    }}
                    value={element.id}
                    onClick={(e) => tarea.removeTaskCallback(element.id)}
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}