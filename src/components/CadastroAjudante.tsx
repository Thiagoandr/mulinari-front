import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { ptBR } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(1, {
    message: "Nome não pode estar vazio",
  }),
  apelido: z.string().max(20, {
    message: "Apelido muito grande",
  }),
  motorista: z.boolean(),
  dataNascimento: z.date(),
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
      dataNascimento: undefined,
      telefone: "",
    },
  });

  const cadastrarAjudante = (ajudante: z.infer<typeof formSchema>) => {
    console.log(ajudante.dataNascimento.toLocaleDateString("pt-BR"));
  };

  return (
    <main className="w-2/4 mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(cadastrarAjudante)}
          className="space-y-4"
        >
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
          <FormField
          control={form.control}
          name="dataNascimento"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data de nascimento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={
                        `w-[240px] pl-3 text-left font-normal
                        ${!field.value && "text-muted-foreground"}`
                      }
                    >
                      {field.value ? (
                        format(field.value, "dd/MM/yyyy")
                      ) : ( 
                        <span>Escolha uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    captionLayout="dropdown-buttons"
                    selected={field.value}
                    onSelect={field.onChange}
                    fromYear={1960}
                    toYear={2030}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    } 
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
