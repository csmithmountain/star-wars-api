import React from "react";

import Buttons from ".components/buttons";

export default class Starships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/starships%22")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.results,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="Info">
            <table>
              {items.map((item) => (
                <tbody>
                  <tr key={item.id}>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Cost in credits</th>
                    <th>Max atmosphering speed</th>
                    <th>Crew</th>
                    <th>Passengers</th>
                    <th>Cargo capacity</th>
                    <th>Consumables</th>
                    <th>Hyper rating</th>
                    <th>MGLT</th>
                    <th>Starships class</th>
                    <th>Pilots</th>
                    <th>Films</th>
                  </tr>
                  <tr>
                    <td> {item.name} </td>
                    <td> {item.model} </td>
                    <td> {item.manufacturer} </td>
                    <td> {item.cost_in_credits} </td>
                    <td> {item.max_atmosphering_speed} </td>
                    <td> {item.crew} </td>
                    <td> {item.passengers} </td>
                    <td> {item.cargo_capacity} </td>
                    <td> {item.consumables} </td>
                    <td> {item.hyper_rating} </td>
                    <td> {item.mglt} </td>
                    <td> {item.starships_class} </td>
                    <td> {item.pilots} </td>
                    <td> {item.films} </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      );
    }
  }
}
