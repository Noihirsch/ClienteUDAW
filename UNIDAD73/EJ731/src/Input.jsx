import React, { useState, useCallback } from "react";

export default function Input({ addTarea }) {
  const [tareaValue, setTareaValue] = useState("");

  const vaciarInput = useCallback(() => {
    setTareaValue("");
  }, []);

  return (
    <div id="barra" style={{ backgroundColor: "white", color: "pink", padding: "60px", borderRadius: "45px" }}>
      <h2>Añadir tarea</h2>
      <div className="row justify-content-center">
        <div className="col-6 mt-3 align-self-end">
          <div className="input-group">
            <input
              id="textTarea"
              type="text"
              value={tareaValue}
              onChange={(e) => setTareaValue(e.target.value)}
              style={{ backgroundColor: "white", borderColor: "pink", color: "pink"}} 
            ></input>
            <div className="borrartexto">
              <button
                className="borrar"
                onClick={() => {
                  addTarea(tareaValue);
                  vaciarInput();
                }}
                type="button"
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
