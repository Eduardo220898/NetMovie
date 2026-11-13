import Header from "../../components/Header";
import api from "../../services/api";

function Home() {

    async function getMovies() {
        const data = await api.get('/movie/popular')

        console.log(data)

    }

    getMovies()

    return (
        <div>
            <Header />
            <h1>Home</h1>
            <p>Seja bem-vindo à nossa plataforma de streaming!</p>
        </div>
    )
}

export default Home 
