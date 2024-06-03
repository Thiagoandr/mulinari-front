import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CadastroServico = () => {

  return (
     <main className="w-2/4 mx-auto space-y-6">
      <section className="space-y-6">
        <div className="font-medium">
          <label>Rua</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>Bairro</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>Data</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>Valor do serviço</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>Campo Ajudantes</label>
          <Input/>
        </div>
      </section>
      <Button>Cadastrar</Button>
    </main>
  );
}

export default CadastroServico;