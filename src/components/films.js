import React from "react";

import Buttons from ".components/buttons";

export default class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/films%22")
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
                    <th>Title</th>
                    <th>Episode</th>
                    <th>Opening crawl</th>
                    <th>Director</th>
                    <th>Producer</th>
                    <th>Release date</th>
                    <th>Characters</th>
                  </tr>
                  <tr>
                    <td> {item.title} </td>
                    <td> {item.episode_id} </td>
                    <td> {item.opening_crawl} </td>
                    <td> {item.director} </td>
                    <td> {item.producer} </td>
                    <td> {item.release_date} </td>
                    <td> {item.characters} </td>
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
