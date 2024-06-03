import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";

const formSchema = z.object({
  nome: z.string().min(1, {
    message: "Nome não pode estar vazio",
  }),
  apelido: z.string().max(20, {
    message: "Apelido muito grande",
  }),
  motorista: z.boolean(),
  dataNascimento: z.string().min(1, {
    message: "Preencha a data de nascimento",
  }),
  telefone: z.string().min(1, {
    message: "Telefone não pode estar vazio",
  }),
});

const CadastroAjudante = () => {
  //adicionar checkbox de motorista

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      apelido: "",
      motorista: false,
      dataNascimento: "",
      telefone: "",
    },
  });

  const cadastrarAjudante = (ajudante: z.infer<typeof formSchema>) => {
    console.log(ajudante);
  }

  return (
    <main className="w-2/4 mx-auto">
      <Form {...form}>  
        <form onSubmit={form.handleSubmit(cadastrarAjudante)} className="space-y-4">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="apelido"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apelido</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dataNascimento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de nascimento</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </Form>
    </main>
  );
};

export default CadastroAjudante;
