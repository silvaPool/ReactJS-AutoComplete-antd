import { useState } from "react";
import "./App.css";
import { AutoComplete } from "antd";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const options = [
    { label: "Beatles", value: "Beatles" },
    { label: "Nirvana", value: "Nirvana" },
    { label: "Zepellin", value: "Zepellin" },
    { label: "Chorão", value: "Chorão" },
    { label: "Mozart", value: "Mozart" },
  ];

  return (
      <div style={{display: 'block', width: 700, padding: 30}}>
        <h4>ReactJS Ant-Design AutoComplete Component</h4>
        <AutoComplete
          options={options}
          style={{width: 200}}
          onSelect={(value) => {
            setCurrentValue(value)
          }}
          placeholder="Digite uma banda"
        /> <br />
        <p>Banda Selecionada: {`${currentValue}`}</p>
      </div>
    )
}

export default App;
