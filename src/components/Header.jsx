import logo from "../../public/game-logo.png";
export default function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="/" />

                <h1>React Tic-Tac-Toe</h1>    
            </header >
            
        </>

    );
}