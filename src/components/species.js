import React from "react";

import Buttons from ".components/buttons";

export default class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/species%22")
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
                    <th>Classification</th>
                    <th>Designation</th>
                    <th>Average height</th>
                    <th>Skin Colors</th>
                    <th>Hair colors</th>
                    <th>Eye colors</th>
                    <th>Average lifespan</th>
                    <th>Homeworld</th>
                    <th>Language</th>
                    <th>People</th>
                  </tr>
                  <tr>
                    <td> {item.name} </td>
                    <td> {item.classification} </td>
                    <td> {item.designation} </td>
                    <td> {item.average_height} </td>
                    <td> {item.skin_colors} </td>
                    <td> {item.hair_colors} </td>
                    <td> {item.eye_colors} </td>
                    <td> {item.average_lifespan} </td>
                    <td> {item.homeworld} </td>
                    <td> {item.language} </td>
                    <td> {item.people} </td>
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
