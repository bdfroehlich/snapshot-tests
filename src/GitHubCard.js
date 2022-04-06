import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function GitHubCard() {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Card bg="secondary" style={{ width: '25rem' }}>
                <Card.Img style={{ width: '25rem' }} variant="top" src="https://avatars.githubusercontent.com/u/89557567?v=4" />
                <Card.Body style={{ position: "relative" }}>
                    <Card.Title style={{
                        textAlign:"center", 
                        fontSize:"30px", 
                        color:"blanchedalmond", 
                        fontFamily:"arial"}}>
                        Benjamin Froehlich
                    </Card.Title>
                    <Card.Text style={{
                        textAlign:"center", 
                        fontSize:"15px", 
                        color:"blanchedalmond", 
                        fontWeight:"normal",
                        fontFamily:"arial"}}>
                    I am currently a student in the KSU Full Stack Web Development Program and I am excited
                    to get to the deployment phase of my new career.
                    </Card.Text>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button href="https://github.com/bdfroehlich" variant="info">Visit my GitHub</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard