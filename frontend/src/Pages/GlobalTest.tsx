import { useContext } from "react";
import { AccountCredentialsContext } from "./AccountProvider"

function GlobalTest() {
    const globalContext = useContext(AccountCredentialsContext);
    
    const handleClick = () => {
        const loginDetails = {
            username: "TestUsername",
            password: "TestPassword"
        };
        globalContext?.setAccountCredentials(loginDetails);
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    )
}

export default GlobalTest;
