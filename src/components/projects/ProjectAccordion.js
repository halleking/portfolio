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
          <ProjectComponent title='Ruled Out' tags={RuledOutTags} text="Players are presented with a row of three unique cards and must identify the card that follows a secret rule. The rules are based on card properties, such as shape, color, or quantity, and players use their inductive reasoning to make informed selections. The trial concludes once the player has correctly chosen enough cards to demonstrate an understanding of the rule, at which point the rule is revealed. The game is designed to be an engaging way to challenge inductive reasoning and problem-solving skills." img={RuledOutGif}/>
          <ProjectComponent title='Penguin Rally' tags={PenguinRallyTags} text="A fast-paced racing game where players nagivate through a maze to reach the fish at the finish line. The maze rotates, which adds a unique challenge and requires the player to quickly adapt to maintain the correct orientation of their directional inputs. The game features two modes, including timed training trials for honing skills and an exhilharating race mode where the player competes against other penguins." img={PenguinRallyGif}/>
          <ProjectComponent title="What's My Name?" tags={WhatsMyNameTags} text="A memory game crafted to challenge and improve users' long-term memory skills. Players are introduced to AI-generated faces, each with a unique name and personality that mirrors real-world scenarios. The objective is to remember and correctly identify each character by name during subsequent encounters. The game rewards players for quick and accurate recall, with intelligent algorithms accommodating acceptable misspellings and variable typing speeds. A fun and engaging way to sharpen memory while interacting with lifelike personalities!" img={WhatsMyNameGif}/>
          <ProjectComponent title='FSX Pro' tags={FSXProTags} text="A comprehensive golf club fitting and coaching application designed to enhance performance through detailed analysis. The app integrates with a hardware device to collect real-time data on each individual golf shot. It offers a range of customizable views, including 3D visualization, top-down perspectives, tabular data display, and specialized club-focused views. Tailored insights allow users to improve their golf game and optimize their equipment for peak performance." img={FsxProGif}/>
          <ProjectComponent title='Wiz Royale' tags={WizTags} text="Players compete in an action-packed, small-scale multiplayer battle royale. Dynamic maps offer pickups that boost health or enhance damage, and provide strategic advantages. Spells can be cast to eliminate opponents, and leveling up unlocks the choice of attack, defense, or utility skills for customizable strategies. Only the last wizard standing wins!"/>
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