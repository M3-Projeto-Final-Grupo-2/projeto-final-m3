import { useContext } from "react";
import CitiesList from "../../components/CitiesBox";
import Header from "../../components/Header";
import { ModalCreatePost } from "../../components/Modal/ModalCreatePost";
import PostsList from "../../components/Posts";
import { CitiesContext } from "../../providers/citiesContext";
import StyledHome from "./style";



const HomePage = () => {
    const {modalPost } = useContext(CitiesContext)

    
    
    
    return(
        <main>

        <Header/>
          
        <StyledHome>
                <PostsList/>
              
           
                <CitiesList/>

            
            {modalPost ? <ModalCreatePost /> : null}

        </StyledHome>
        </main>
        
        )
}

export default HomePage;