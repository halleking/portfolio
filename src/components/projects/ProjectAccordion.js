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

const PortfolioTags = ["ReactJs", "CSS"];
const RuledOutTags = ["Unity", "C#", "WebGL", "iOS", "Android"];
const PenguinRallyTags = ["Unity", "C#", "WebGL", "iOS", "Android"];
const WhatsMyNameTags = ["Unity", "C#", "WebGL", "iOS", "Android"];
const FSXProTags = ["Unity", "C#", "Windows", "Mac", "iOS", "Android"];
const WizTags = ["Unity", "C#", "Windows", "Mac", "WebGL", "Unity Networking"];
const PancakeTags = ["Maya", "Photorealism", "Fluid Animation"];
const MacarenaTags = ["Maya", "Character Rigging", "Keyframe Animation"];
const HulkTags = ["Maya", "Character Rigging", "Wave Animation"];


export default function ProjectAccordion() {
  return (
    <div>
      <h3></h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{fontSize:20}}
        >
          Web Development
        </AccordionSummary>
        <AccordionDetails>
          <ProjectComponent title='My Portfolio' tags={PortfolioTags} text="You're here! Thanks for visiting."/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{fontSize:20}}
        >
          Games
        </AccordionSummary>
        <AccordionDetails>
          <ProjectComponent title='Ruled Out' tags={RuledOutTags} text="An inductive reasioning brain game.An inductive reasioning brain game.An inductive reasioning brain game.An inductive reasioning brain game.An inductive reasioning brain game.An inductive reasioning brain game.An inductive reasioning brain game." img={RuledOutGif}/>
          <ProjectComponent title='Penguin Rally' tags={PenguinRallyTags} text="A spatial orientation racing game." img={PenguinRallyGif}/>
          <ProjectComponent title="What's My Name?" tags={WhatsMyNameTags} text="A memory brain game." img={WhatsMyNameGif}/>
          <ProjectComponent title='FSX Pro' tags={FSXProTags} text="A golf fitting and coaching application." img={FsxProGif}/>
          <ProjectComponent title='Wiz Royale' tags={WizTags} text="A multiplayer battle royale."/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{fontSize:20}}
        >
          3D Modeling and Animation
        </AccordionSummary>
        <AccordionDetails>
        <ProjectComponent title='Pancakes' tags={PancakeTags} text="" img={PancakesGif}/>
        <ProjectComponent title='The Macarena' tags={MacarenaTags} text="" img={MacarenaGif}/>
        <ProjectComponent title='Hulk Smash!' tags={HulkTags} text="" img={HulkGif}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}