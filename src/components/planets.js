import React from "react";

import Buttons from ".components/buttons";

export default class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/planets%22")
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
                    <th>Rotation period</th>
                    <th>Orbital period</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    <th>Terrain</th>
                    <th>Surface water</th>
                    <th>Population</th>
                    <th>Residents</th>
                  </tr>
                  <tr>
                    <td> {item.name} </td>
                    <td> {item.rotation_period} </td>
                    <td> {item.orbital_period} </td>
                    <td> {item.climate} </td>
                    <td> {item.gravity} </td>
                    <td> {item.terrain} </td>
                    <td> {item.surface_water} </td>
                    <td> {item.population} </td>
                    <td> {item.residents} </td>
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
