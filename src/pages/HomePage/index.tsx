import { useContext } from "react";
import CitiesList from "../../components/CitiesBox";
import Header from "../../components/Header";
import { ModalCreatePost } from "../../components/Modal/ModalCreatePost";
import PostsList from "../../components/Posts";
import { CitiesContext } from "../../providers/citiesContext";



const HomePage = () => {
    const {modalPost ,setModalPost} = useContext(CitiesContext)

    
    
    
    return(
        <main>
            <Header/>
            <section>
                <div>
                    <div>
                <h3>Posts</h3>
                <button onClick={() => setModalPost(true)}>Criar um post</button>
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
            {modalPost ? <ModalCreatePost /> : null}
        </main>
        )
}

export default HomePage;