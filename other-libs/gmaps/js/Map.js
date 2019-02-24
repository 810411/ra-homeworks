class Map extends React.Component {
  constructor(props) {
    super(props);
    this.offices = [];
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.node, {
      center: {lat: 30, lng: 0},
      zoom: 2
    });
    this.getMapPoints(this.props.points);
  }

  componentDidUpdate(prevProps) {
    if (this.props.points !== prevProps.points) {
      this.removeMapPoints(this.offices);
      this.getMapPoints(this.props.points);
    }
  }

  render() {
    return (
      <div className="mapContainer" ref={el => (this.node = el)}>
        Карта
      </div>
    );
  }

  getMapPoints = points => {
    points.map(office => {
      const marker = new google.maps.Marker({
        position: {lat: office.lat, lng: office.lon},
        map: this.map
      });
      this.offices.push(marker);
    });
  };

  removeMapPoints = points => {
    points.forEach(office => {
      office.setMap(null);
      this.offices = [];
    });
  };
}
