import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PendingNav from './PendingNav/PendingNav';
import IconTextButton from './IconTextButton/IconTextButton';
import athensSmashLogo from './assets/img/athensSmashLogo.png'
import discordSVG from './assets/img/icons8-discord.svg'
import xSVG from './assets/img/icons8-x.svg'

import './index.css';
import './App.css'

function App() {

  return (
    <>
    {/* Navbar */}
    <PendingNav></PendingNav>

    {/* Main Body */}
    <Container fluid="xxl">

      {/* Hero Section */}
      <Row className='p-1 p-lg-5'>

        {/* Athens Smash Logo */}
        <Col lg="auto">
          <div className='logoHolder px-5 py-lg-3 py-5'>
            <img 
              src={athensSmashLogo} 
              alt="UGA Arch logo over the Super Smash Bros. Logo, the symbol of Athens Smash"
              id='athensLogo'
            />
          </div>
        </Col>

        {/* Title, Socials, and About */}
        <Col lg>
          <span className='d-flex align-items-center justify-content-between'>
            <h1 className='d-inline-block mb-0 oswald-font'>ATHENS SMASH</h1>
            {/* Socials Holder */}
            <span>
              <a href="https://discord.gg/yBQyMa6Y5h" className='p-1' target="_blank">
                <img src={discordSVG} className="social-icon" alt="Social Media Icon"/>
              </a>
              <a href="https://x.com/ugasmash?lang=en" className='p-1' target="_blank">
                <img src={xSVG} className="social-icon" alt="Social Media Icon"/>
              </a>      
            </span>
          </span>
          <hr style={{ height: "2px", backgroundColor: "#ffffff", opacity: "1"}}/>
          <p className='fs-5 body-fonts'>Athens Smash, operating under UGA Esports, hosts weekly fighting game tournaments with a focus on Super Smash Bros. Ultimate. As the biggest Smash weekly in Georgia, we are an amazing place to find community and competition in the fighting game scene. Interested in attending a tournament? Join our discord for announcements!</p>
        </Col>
      </Row>

      <IconTextButton icon="NR" label="Name Realized"></IconTextButton>
      <IconTextButton icon="smash-bros" label="Characters"></IconTextButton>


    </Container>
    </>
    
  )
}

export default App
