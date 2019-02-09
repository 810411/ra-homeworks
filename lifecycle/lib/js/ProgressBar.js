class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.outerCircle = {
      color: '#4ca89a',
      radius: 52
    };
    this.innerCircle = {
      color: '#96d6f4',
      radius: 45
    };
    this.lineWeight = 7;
  }

  componentDidMount() {
    const {completed, total} = this.props;

    this.drawProgressBar(completed, total);
  }

  componentDidUpdate(prevProps) {
    const {completed, total} = this.props;

    if (completed !== prevProps.completed || total !== prevProps.total) {
      this.drawProgressBar(completed, total);
    }
  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress"/>
    );
  }

  drawProgressBar(completed, total) {
    const
      canvas = document.getElementById('progressCanvas'),
      ctx = canvas.getContext('2d');

    canvas.width = 150;
    canvas.height = 100;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = this.lineWeight;

    const
      canvasCenterX = canvas.width / 2,
      canvasCenterY = canvas.height / 2,
      innerCircleDone = completed/total;

    const circle = (color, radius, done = 1) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.arc(canvasCenterX, canvasCenterY,radius - this.lineWeight, 0, 2 * Math.PI * done);
      ctx.stroke();
    };

    circle(this.outerCircle.color, this.outerCircle.radius);
    circle(this.innerCircle.color, this.innerCircle.radius, innerCircleDone);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '18px sans-serif';

    ctx.beginPath();
    ctx.fillText(`${Math.round((innerCircleDone) * 100)}%`, canvasCenterX, canvasCenterY);
  }
}
