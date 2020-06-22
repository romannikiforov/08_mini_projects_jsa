import React, { Component } from "react";

export class Planets extends Component {
  state = {
    planets: [],
  };

  async componentDidMount() {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    this.setState({ planets: data.results });
  }

  render() {
    const { planets } = this.state;
    return (
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            {planet.name} - {planet.films.length}
          </li>
        ))}
      </ul>
    );
  }
}

export default Planets;
