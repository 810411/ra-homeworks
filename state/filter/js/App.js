'use strict';

class App extends React.Component {
  state = {
    selected: 'All'
  };

  handleSelectFilter = filter => {
    this.setState({
      selected: filter
    })
  };

  filtrate(projects, selected) {
    if (selected === 'All') {
      return projects;
    }

    return projects.filter(project => project.category === selected);
  };

  render() {
    const
      {projects, filters} = this.props,
      {selected} = this.state;

    return (
      <div>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter} />
        <Portfolio projects={this.filtrate(projects, selected)} />
      </div>
    )
  }
}
