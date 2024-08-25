import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <main className="p-10 flex flex-col items-center">
      <Card className="flex flex-col gap-3 w-full md:w-3/4 h-min p-2 md:p-10 mb-20">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-medium text-neutral-900">
            Configurações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col">
              <span className="text-lg font-medium text-neutral-900">
                Conta
              </span>
              <form>
                <fieldset className="flex flex-col md:flex-row w-full gap-2 mt-5">
                  <div className="flex flex-col w-full gap-2">
                    <Label htmlFor="fullname">Nome Completo</Label>
                    <Input id="fullname" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" />
                  </div>
                </fieldset>
              </form>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-medium text-neutral-900">
                Notificações por e-mail
              </span>
              <p className="text-sm font-light text-neutral-900 my-5">
                Você pode selecionar o tipo de notificação por e-mail que deseja
                receber ou não enviada
              </p>
              <form>
                <fieldset className="flex gap-2 items-center">
                  <Checkbox id="notification" />
                  <Label htmlFor="notification">
                    Cancelar o recebimento de notificações
                  </Label>
                </fieldset>
              </form>
              <Button variant={"default"} className="mt-16 w-max px-10">
                Salvar
              </Button>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-medium text-neutral-900">
                Excluir conta
              </span>
              <p className="text-sm font-light text-neutral-900 my-5">
                Se você excluir sua conta, suas informações pessoais serão
                apagadas dos nossos servidores, toda a sua atividade em cursos
                será removida, e os certificados recebidos serão excluídos. A
                ação é irreversível. Cancele todas as assinaturas ativas antes
                de excluir sua conta.
              </p>
              <Button variant={"destructive"} className="w-max px-10">
                Excluir
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
