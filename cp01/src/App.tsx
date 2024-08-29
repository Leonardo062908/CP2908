import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {
  const titulo = "Minha página";

  return (
    <div>
      <h1>elementos Prop</h1>
      <Cabecalho tituloProps={titulo} />
    </div>
  );
}
