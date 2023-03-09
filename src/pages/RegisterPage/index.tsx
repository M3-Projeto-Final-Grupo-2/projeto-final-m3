import React from 'react';
import StyledRegisterPage from './style';
import RegisterForm from './RegisterForm';
import Logo from '../../assets/Logo-Destinos-Kenzie.png';
import RegisterImages from './RegisterImages';

const RegisterPage = () => {
    return (
        <StyledRegisterPage>
            <main>
                <section className="page-description">
                    <img src={Logo} />
                    <h2>Conhecer e se aventurar em <span>novos horizontes</span> por meio de outras experiências</h2>
                    <p>Nosso cadastro é rápido e seguro</p>
                    <RegisterImages />
                </section>
                <aside>
                    <h2>Cadastro</h2>
                    <RegisterForm />
                </aside>
            </main>
        </StyledRegisterPage>
    );
};

export default RegisterPage;