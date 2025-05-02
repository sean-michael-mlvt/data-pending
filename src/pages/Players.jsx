import PendingNav from "../components/PendingNav/PendingNav";
import { Container } from "react-bootstrap";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

function Players() {

    return (
        <>
            {/* Navbar */}
            <PendingNav></PendingNav>

            {/* Main Body */}
            <Container fluid="xxl">
                <Breadcrumbs crumbs={[
                    { name: "Players", path: "/players"}
                ]}></Breadcrumbs>

                TO-DO: Implement Players Page
                
            </Container>  
        </>  

    );

}

export default Players