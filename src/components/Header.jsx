import logo from "../assets/image/logo.svg"
import Container from "./Container"

function Header() {
    return (
        <header className="bg-(--color-primary) pt-3 pb-3.25">
            <Container>
                <div className="flex justify-between">
                    <img src={logo} alt="logo" className="block"></img>
                    <button>Профиль</button> 
                </div>
            </Container>
        </header>
    )
}

export default Header