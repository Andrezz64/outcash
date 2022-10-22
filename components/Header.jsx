import Image from "next/image"

export default function Header(){
    return(
        <div>
            <header>
                <Image
                src="/logo.svg"
                alt="logo"
                width={200}
                height={170}
                
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

