import React from 'react'
import './MyForm.css'

import { useState } from 'react'

function MyForm() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    };
    console.log(name);
    console.log(email);

    // 5 - envio de formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);

        // validação
        //envio

        setName("");
        setEmail("");
        setBio("");
        setRole("")
    };

    return (
        <div>
            {/* Criação de Form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name || ""}
                        />
                </div>
                {/* 2 - label envolvendo input */}
                <label>
                    <span>Email:</span>
                    <input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e) => { setEmail(e.target.value) }} value={email || ""}/>
                </label>

                {/* 8 - textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea 
                    name="bio" 
                    placeholder='Descrição do usuário' 
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    ></textarea>
                </label>
                {/* 9 - select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm