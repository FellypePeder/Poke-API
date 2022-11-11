import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from "react-bootstrap/Popover";

import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";

function ToolTipPoke() {
  return (
    <OverlayTrigger
      placement="auto"
      delay={{ show: 5, hide: 5 }}
      overlay={
        <Popover id="popover-basic">
          <Popover.Body>
            {letraMaiscula(pokeInfo.stats[1].stat.name)}
          </Popover.Body>
        </Popover>
      }
    >
      <ProgressBar
        className="poke-progress-bar"
        variant="success"
        max={255}
        now={pokeInfo.stats[1].base_stat}
        label={pokeInfo.stats[1].base_stat}
      />
    </OverlayTrigger>
  );
}

export default ToolTipPoke;
