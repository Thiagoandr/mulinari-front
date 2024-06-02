import { Button } from "./ui/button";
import { Input } from "./ui/input"

const CadastroAjudante = () => {
//adicionar checkbox de motorista
  return (
    <main className="w-2/4 mx-auto space-y-6">
      <section className="space-y-6">
        <div className="font-medium">
          <label>Nome</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>Apelido</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>Data de nascimento</label>
          <Input/>
        </div>
        <div className="font-medium">
          <label>Telefone</label>
          <Input/>
        </div>
      </section>
      <Button>Cadastrar</Button>
    </main>
  )
}

export default CadastroAjudante;