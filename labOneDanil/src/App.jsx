import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",

          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            columnGap: 10,
          }}
        >
          <Button variant="primary">Нажми на меня</Button>
          <Button variant="success">Не нажимай на меня</Button>
          <Button variant="info">Жми!</Button>
        </div>
      </div>
    </>
  );
}

export default App;
