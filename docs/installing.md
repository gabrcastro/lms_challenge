# Instalação

Para rodar o projeto na sua máquina precisa seguir o passo a passo abaixo

#### Clone o projeto

Fazer o download desse projeto. Pode rodar o comando abaixo

> git clone https://github.com/gabrcastro/lms_challenge.git

#### Instale as dependências

Aqui você pode utilizar o gerenciador de pacotes da sua preferência.

> pnpm i

#### Adicione as variaveis de ambiente

Se você tem acesso a este repositório, provavelmente tem acesso as variáveis de ambiente que vão lhe dar permissões para autenticação e requisições.

Basta adicionar um arquivo chamado <strong>.env</strong> no projeto juntamente com os valores e os nomes corretamente. Segue abaixo um exemplo. No arquivo existe um arquivo <strong>.env.example</strong> com o código abaixo para facilitar.

> VITE_FIREBASE_API_KEY = "firebase_apikey" <br>
> VITE_YT_API_KEY = "yt_apikey" <br>
> VITE_YT_API_URL = "url" <br>
> VITE_YT_CHANNEL_ID = "channel_id" <br>

#### Rodar o projeto

Após configurar tudo corretamente, basta executar o comando abaixo e poderá testar a aplicação. Lembre que o comando pode utilizar de acordo com o gerenciador de pacote que está utilizando.

> pnpm dev

A url da aplicação onde a aplicação estará rodando é

> localhost:5173

#### Conclusão

Se tudo correu bem, você poderá ver a tela de login da aplicação, fazer login com sua conta do Google ou com email e senha de teste, caso tenha.
