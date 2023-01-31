import React from "react";

import Buttons from ".components/buttons";

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people%22")
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
                    <th>Mass</th>
                    <th>Height</th>
                    <th>Hair color</th>
                    <th>Skin color</th>
                    <th>Birth year</th>
                    <th>Homeworld</th>
                    <th>Gender</th>
                    <th>Eye color</th>
                  </tr>
                  <tr>
                    <td> {item.name} </td>
                    <td> {item.mass} </td>
                    <td> {item.height} </td>
                    <td> {item.hair_color} </td>
                    <td> {item.skin_color} </td>
                    <td> {item.birth_year} </td>
                    <td> {item.homeworld} </td>
                    <td> {item.gender} </td>
                    <td> {item.eye_color} </td>
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
