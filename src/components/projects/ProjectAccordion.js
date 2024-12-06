import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ProjectComponent from './ProjectComponent';


import RuledOutGif from '../../assets/ruled-out.gif';
import PenguinRallyGif from '../../assets/penguin-rally.gif';
import WhatsMyNameGif from '../../assets/whats-my-name.gif';
import FsxProGif from '../../assets/fsx-pro.gif';
import PancakesGif from '../../assets/pancakes.gif';
import MacarenaGif from '../../assets/macarena.gif';
import HulkGif from '../../assets/hulk.gif';


export default function ProjectAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Web Development
        </AccordionSummary>
        <AccordionDetails>
          <ProjectComponent title='Portfolio' text="You're here! Check it out!"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Games
        </AccordionSummary>
        <AccordionDetails>
          <ProjectComponent title='Ruled Out' text="An inductive reasioning brain game." img={RuledOutGif}/>
          <ProjectComponent title='Penguin Rally' text="A spatial orientation racing game." img={PenguinRallyGif}/>
          <ProjectComponent title="What's My Name" text="A memory brain game." img={WhatsMyNameGif}/>
          <ProjectComponent title='FSX Pro' text="A golf fitting and coaching application." img={FsxProGif}/>
          <ProjectComponent title='Wiz Royale' text="A multiplayer battle royale."/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          3D Modeling and Animation
        </AccordionSummary>
        <AccordionDetails>
        <ProjectComponent title='Pancakes' text="" img={PancakesGif}/>
        <ProjectComponent title='The Macarena' text="" img={MacarenaGif}/>
        <ProjectComponent title='Hulk Smash!' text="" img={HulkGif}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}