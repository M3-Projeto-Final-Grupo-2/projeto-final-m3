import CitiesList from "../../components/CitiesBox";
import Header from "../../components/Header";
import PostsList from "../../components/Posts";



const HomePage = () => {

    
    return(
        <main>
            <Header/>
            <section>
                <div>
                    <div>
                <h3>Posts</h3>
                <button>Criar um post</button>
                    </div>
                <PostsList/>
                </div>
            </section>
            <section>
                <div>
                <h3>Cities</h3>
                <CitiesList/>

                </div>
            </section>
        </main>
        )
}

export default HomePage;