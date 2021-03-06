import React from 'react';
import LoginForm from '../../molecules/LoginForm'
import { Link } from 'react-router-dom'
import NoteAppTemplate from '../../templates/NoteAppTemplate'


const LoginCard: React.FC = () => {
    return (
        <NoteAppTemplate title="Login">
            <LoginForm btnName="Login" />
            <span>Não tem Conta? <Link to="/register">registre-se</Link></span>
        </NoteAppTemplate>



    );
}

export default LoginCard;


