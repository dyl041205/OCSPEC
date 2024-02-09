import { useContext } from "react";
import { AccountCredentialsContext } from "./AccountProvider";
import { Col } from "react-bootstrap";
import "./All.css";
 
 
function Accounts(){
    const accountCredentialsContext = useContext(AccountCredentialsContext)
   
    return(
        <>
            <div className="Account">
                <h1 className="Account Info">Account Info</h1>
                <Col className="rounded-corners"> <p>Username: {accountCredentialsContext?.accountCredentials?.username}</p> </Col>
 
                <Col className="rounded-corners"> <p>Password: {accountCredentialsContext?.accountCredentials?.password}</p>  </Col>
                           
            </div>    
        </>
    )
}
 
export default Accounts;