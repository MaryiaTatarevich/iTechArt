import React from 'react'


 const Auth = () => {
    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <h1>Auth Page</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введите email" 
                                id="email" 
                                type="email"
                                name = "email"/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Введите пароль" 
                                id="password" 
                                type="password"
                                name = "password"/>
                                <label htmlFor="password">Пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className='btn darken 4'>Войти</button>
                        <button className='btn darken 4'>Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth