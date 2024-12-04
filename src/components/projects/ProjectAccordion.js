import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function ProjectAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Games
        </AccordionSummary>
        <AccordionDetails>
          Ruled Out
          Penguin Rally
          What's My Name
          FSX Pro
          Wiz Royale
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
          Macarena & syrup animation.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}