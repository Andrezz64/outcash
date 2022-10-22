import Image from "next/image"

export default function Header(){
    return(
        <div>
            <header>
                <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                
                />
                <ul id="Hlist">
                    <li>
                        Home
                    </li>
                    <li>
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </header>
        </div>
    )
}

