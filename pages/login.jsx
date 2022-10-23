import Image from 'next/image'

export default function login (){
    return (
        <div id='loginContainer'>
            <main id='LoginMain'>
            <h1 id='h1login'>Faça seu login</h1>
            <div id='FormDiv'>
            <form action="/">
                <label htmlFor="email" id='email'>Email</label>
                <section className='inputLogin'>
                    <input type="text" id='email'/>
                </section>

            </div>
            <div id='form'>
                <label htmlFor="password">Senha</label>
                <input type="password" id='password'/>
            </div>
            </main>
        </form>
        </div>
    )

}