import React from 'react';
import StyledRegisterImages from './style';
import image1Register from '../../../assets/Gruta-da-Lagoa-Azul.png';
import image2Register from '../../../assets/Monte-Roraima.png';
import image3Register from '../../../assets/Jardim-Botânico.png';

const RegisterImages = () => {
    return (
        <StyledRegisterImages>
            <div className='container-1'>
                <img src={image1Register} />
                <img src={image2Register} />
            </div>
            <img className='image-3' src={image3Register} />
        </StyledRegisterImages>
    );
};

export default RegisterImages;