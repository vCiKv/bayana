import { useBoolean } from "@chakra-ui/react"
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
export default function NavigationMenu(){
    const [navActive,setNavActive ] = useBoolean()  
    return(
        <header>
            <span className="isBurger" onClick={setNavActive.toggle}> 
                {navActive ? <CloseIcon boxSize="24px"/>:<HamburgerIcon boxSize="32px"/>}

            </span>
            <nav className={navActive ? 'active':''}>
                <li><a href="#">music</a></li>
                <li><a href="#">videos</a></li>
                <li><a href="#">event</a></li>
                <li><a href="#">join</a></li>
            </nav>
        </header>
    )
} 