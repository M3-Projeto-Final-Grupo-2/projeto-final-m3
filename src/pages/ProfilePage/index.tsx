import { CardProfile } from "../../components/CardProfile";
import backgrounHeader from "../../assets/backgrounHeader.png"

export const ProfilePage = () =>(
    <>
    <header>
    <div>
        <span>Home</span>
        <span>Sair</span>
    </div>
        <img src={backgrounHeader} alt="Imagem de fundo" />
        <h2>U</h2>
        <h1>User name</h1>
    </header>
    <div>
    <main>
        <div>
        <h2>Suas viagens:</h2>
        <ul>
            <CardProfile/>
        </ul>
        </div>
    </main>
    <aside>
        <h2>Outros usuários precisam de você!</h2>
        <p>Nos escreva suas experiências vividas em viagens, para que os outros usuários possam se basear nelas !</p>
        <p>Para fazer isso é simples basta clicar no botão a baixo.</p>
        <button>Adicionar viagem</button>
    </aside>
    </div>
    </>
)