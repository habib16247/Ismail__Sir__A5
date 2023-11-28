import React, { useState } from "react";
import "./Todo.css";

const Todos = ({ item, handle, index, getTodo}) => {
    const [isChecked, setIsChecked] = useState(false)
    
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="id">
              <input type="checkbox" onClick={() => setIsChecked(!isChecked)}/>
            </td>
            <td
            style={{textDecoration: isChecked && "line-through"}}
              className="item">
              {item}
            </td>
            <td className="cell">
              <button onClick={() => getTodo(index)}>update</button>
            </td>
            <td className="cell">
              <button onClick={() => handle(index)}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Todos;
