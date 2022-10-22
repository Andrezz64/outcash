import Image from 'next/image'

export default function login (){
    return (
        <div id='loginContainer'>
            <Image
            src='/tunel.png'
            layout='fill'
            />
            
            <Image id='loginLogo'
            src='/logo.png'
            width={200}
            height={200}
            
            />

            <div id='loginBox'>
                <form action="/" method='post'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' />
                </div>
                </form>
            </div>
        </div>
    )

}