import React from 'react'
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accardation = () => {
  return (
    <div>
       <div className="asked_top">
       <h2 >Frequently Asked Questions</h2>
        <p>
          Got questions? We've got answers! Check out Faq section to find
          answers to the most commont questions about Movies.
        </p>
       </div>
     <div className="accardation_card">
     <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h4> How can I send you my questions?</h4>
          </AccordionSummary>
          <AccordionDetails>
            You can contact us through the “Contact” section on our website.
            We’re always happy to help!
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h4>Are there movies for all age groups on this site?</h4>
          </AccordionSummary>
          <AccordionDetails>
            Yes, we have movies suitable for all ages — from kids and teens to
            adults. Use filters to find age-appropriate content easily.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h4>Can I only use your site on my phone?</h4>
          </AccordionSummary>
          <AccordionDetails>
            No, you can access our site from any device — smartphone, tablet, or
            computer. It works perfectly on all modern web browsers.
          </AccordionDetails>
        </Accordion>
     </div>
      </div>
  )
}

export default Accardation