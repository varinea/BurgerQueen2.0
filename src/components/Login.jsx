import React from 'react';
import '../assets/css/login.css';

const Login = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim() || !pass.trim()){
            // console.log('Ingrese email')
            setError('Ingrese email')
            return
        }
        if(!pass.trim()){
            // console.log('Ingrese contraseña')
            setError('Ingrese contraseña')
            return
        }
        if(pass.length < 6){
            // console.log('Debe ingresar seis o más carácteres')
            setError('Debe ingresar seis o más carácteres')
            return
        }
        // console.log('correcto...')
        setError(null)

    }

    return (
        <div className="mt-5">
            <h3 className="text-center">
    {
        esRegistro ? 'Registro' : 'Login'
    }
</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) 
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange={ e => setEmail(e.target.value) }
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                            onChange={ e => setPass(e.target.value) }
                            value={pass}
                        />
                        <button 
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                        >
                            Ingresar
                        </button>
                        <button 
                            className="btn btn-sm btn-info btn-block"
                            type="button"
                        >
                            ¿Ya tienes cuenta?
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login