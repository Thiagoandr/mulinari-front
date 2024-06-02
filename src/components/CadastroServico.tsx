import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CadastroServico = () => {


  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const labelStyle = {
    margin: "10px 0 5px",
    fontSize: "14px",
    fontWeight: "bold",  
  };

  const inputStyle = {
    margin: "0 0 20px",
    padding: "10px 5px", 
    fontSize: "14px",
    width: "250px",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px", 
    fontSize: "14px",
    fontWeight: "bold",  
  };

  return (
     <main className="w-2/4 mx-auto space-y-6">
      <section className="space-y-6">
        <div className="font-medium">
          <label>RUA</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>BAIRRO</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>DATA</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>VALOR DO SERVIÇO</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>CAMPO AJUDANTES</label>
          <Input/>
        </div>
      </section>
      <Button>Cadastrar</Button>
    </main>
  );
}

export default CadastroServico;