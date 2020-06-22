import React, { Component } from "react";

export class Planets extends Component {
  state = {
    planets: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const response = await fetch("https://swapi.dev/api/planets");
      const data = await response.json();
      this.setState({ planets: data.results });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { planets, loading } = this.state;
    if (loading) {
      return <h1>Loading ...</h1>;
    }
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
