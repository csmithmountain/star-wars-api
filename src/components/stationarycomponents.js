import React, { memo } from "react";
import People from ".components/people";
import Films from ".components/films";
import Planets from ".components/planets";
import Species from ".components/species";
import Starships from ".components/starships";
import Vehicles from ".components/vehicles";

function StationaryComponents(props) {
  if (props.isLoading) {
    return (
      <div>
        <Top handleSearch={props.handleSearch} />
      </div>
    );
  } else if (props.onSearch) {
    return (
      <div>
        <Top handleSearch={props.handleSearch} />
        <br />
        <ReturnButton backToPage={props.backToPage} />
      </div>
    );
  } else
    return (
      <div>
        <Top handleSearch={props.handleSearch} />
        <br />
        <Buttons changePage={props.changePage} />
      </div>
    );
}
