import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ProjectComponent from './ProjectComponent';
import Sudoku from './UnityComponent';

import DaisyDoodlesGif from '../../assets/daisy-doodles.gif';
import SudokuPng from '../../assets/sudoku.png';
import GemMineGif from '../../assets/gem-mine.gif';
import SheepHerdGif from '../../assets/herd-sheep.gif';
import RuledOutGif from '../../assets/ruled-out.gif';
import PenguinRallyGif from '../../assets/penguin-rally.gif';
import WhatsMyNameGif from '../../assets/whats-my-name.gif';
import FsxProGif from '../../assets/fsx-pro.gif';
import WizGif from '../../assets/wiz.gif';
import PancakesGif from '../../assets/pancakes.gif';
import MacarenaGif from '../../assets/macarena.gif';
import HulkGif from '../../assets/hulk.gif';

const PortfolioTags = ["ReactJs", "CSS"];
const PlannerTags = ["Flutter", "Dart","Firebase", "In Progress"];
const DaisyTags = ["Unity", "C#", "In Progess"];
const SudokuTags = ["Unity", "C#", "WebGL"];
const PrototypeTags = ["Unity", "C#", "Prototype"];
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
          <ProjectComponent title='My Portfolio' tags={PortfolioTags} text="You're here! Thanks for visiting." linkToRepo="https://github.com/halleking/portfolio"/>
          <ProjectComponent title='Digital Planner' tags={PlannerTags} text="Coming soon! I'm currently developing an all-in-one planner application designed to boost productivity and reinforce positive daily habits. Set weekly goals and utilize the calendar, lists, and notes features to organize and track your successess." linkToRepo="https://github.com/halleking/assistant"/>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{fontSize:20}}
        >
          Puzzles
        </AccordionSummary>
        <AccordionDetails>
          <Sudoku/>
        </AccordionDetails>
      </Accordion> */}
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
          <ProjectComponent title='Daisy Doodles' tags={DaisyTags} text="A cute garden-themed game to practice drawing skills, designed with my 3-year-old niece in mind. Preferred gameplay is on a tablet, where you would use your finger to trace the presented shapes following the path and planting flower seeds along the way. A fun way for children to start becoming more familiar with basic writing concepts, counting, the alphabet, and more!" linkToRepo="https://github.com/halleking/ShapeTrace" img={DaisyDoodlesGif} />
          <ProjectComponent title='Sudoku Puzzle' tags={SudokuTags} text="A simple Sudoku puzzle game with three levels of difficulty to choose from. Increased difficulty corresponds to an increased number of empty cells to fill at the start of the puzzle. I completed this project in one day (~8hrs)." linkToDemo="https://halleking.github.io/Sudoku" linkToRepo="https://github.com/halleking/Sudoku.git" img={SudokuPng} />
          <ProjectComponent title='Gem Mining' tags={PrototypeTags} text="The objective of the game is to navigate a cart through a mine, strategically collecting gems in the fewest moves possible. Players must carefully plan their route, as certain paths may be blocked and require explosives to clear them. However, using explosives triggers chain reactions, causing rubble to fall on adjacent nodes, potentially creating new blockages. This adds an exciting layer of challenge and strategy, making each move a crucial decision. The gameplay invokes a satisfying blend of planning, problem-solving, and adaptability." img={GemMineGif}/>
          <ProjectComponent title='Sheep Herding' tags={PrototypeTags} text="Players take control of a German Shepherd tasked with herding sheep around the farm. The goal is to guide all the sheep onto their designated patches of grass. The twist? When the shepherd approaches, nearby sheep instinctively turn to face away from it. Clicking on the shepherd to prompts the shepherd to bark, causing the sheep to dash away in the direction they’re facing. Strategic thinking is essential, as careless positioning may leave sheep stuck in tricky spots, making it harder to achieve the objective." img={SheepHerdGif}/>
          <ProjectComponent title='Ruled Out' tags={RuledOutTags} text="Players are presented with a row of three unique cards and must identify the card that follows a secret rule. The rules are based on card properties, such as shape, color, or quantity, and players use their inductive reasoning to make informed selections. The trial concludes once the player has correctly chosen enough cards to demonstrate an understanding of the rule, at which point the rule is revealed. The game is designed to be an engaging way to challenge inductive reasoning and problem-solving skills." img={RuledOutGif}/>
          <ProjectComponent title='Penguin Rally' tags={PenguinRallyTags} text="A fast-paced racing game where players nagivate through a maze to reach the fish at the finish line. The maze rotates, which adds a unique challenge and requires the player to quickly adapt to maintain the correct orientation of their directional inputs. The game features two modes, including timed training trials for honing skills and an exhilharating race mode where the player competes against other penguins." img={PenguinRallyGif}/>
          <ProjectComponent title="What's My Name?" tags={WhatsMyNameTags} text="A memory game crafted to challenge and improve users' long-term memory skills. Players are introduced to AI-generated faces, each with a unique name and personality that mirrors real-world scenarios. The objective is to remember and correctly identify each character by name during subsequent encounters. The game rewards players for quick and accurate recall, with intelligent algorithms accommodating acceptable misspellings and variable typing speeds. A fun and engaging way to sharpen memory while interacting with lifelike personalities!" img={WhatsMyNameGif}/>
          <ProjectComponent title='FSX Pro' tags={FSXProTags} text="A comprehensive golf club fitting and coaching application designed to enhance performance through detailed analysis. The app integrates with a hardware device to collect real-time data on each individual golf shot. It offers a range of customizable views, including 3D visualization, top-down perspectives, tabular data display, and specialized club-focused views. Tailored insights allow users to improve their golf game and optimize their equipment for peak performance." img={FsxProGif}/>
          <ProjectComponent title='Wiz Royale' tags={WizTags} text="Players compete in an action-packed, small-scale multiplayer battle royale. Dynamic maps offer pickups that boost health or enhance damage, and provide strategic advantages. Spells can be cast to eliminate opponents, and leveling up unlocks the choice of attack, defense, or utility skills for customizable strategies. Only the last wizard standing wins!" img={WizGif}/>
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