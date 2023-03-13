import { useContext } from "react";
import CitiesList from "../../components/CitiesBox";
import Header from "../../components/Header";
import { ModalCreatePost } from "../../components/Modal/ModalCreatePost";
import PostsList from "../../components/Posts";
import { CitiesContext } from "../../providers/CitiesContext";
import StyledHome from "./style";



const HomePage = () => {
    const {modalPost } = useContext(CitiesContext)

    
    
    
    return(
        <main>

        <Header/>
          
        <StyledHome>
      
        <div className="homeContainer">

                <PostsList/>
              
            
                <CitiesList/>
      
        </div>

            
            {modalPost ? <ModalCreatePost /> : null}

        </StyledHome>

        </main>
        
        )
}

export default HomePage;