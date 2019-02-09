class ProgressBar extends React.Component {

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
      outerCircleColor = '#4ca89a',
      outerCircleRadius = 52,
      innerCircleColor = '#96d6f4',
      innerCircleRadius = 45,
      innerCircleDone = completed/total;

    const
      canvas = document.getElementById('progressCanvas'),
      ctx = canvas.getContext('2d');

    canvas.width = 150;
    canvas.height = 100;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 7;

    const
      canvasCenterX = canvas.width / 2,
      canvasCenterY = canvas.height / 2;

    const circle = (color, radius, done = 1) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.arc(canvasCenterX, canvasCenterY,radius - ctx.lineWidth,0,2 * Math.PI * done);
      ctx.stroke();
    };

    circle(outerCircleColor, outerCircleRadius);
    circle(innerCircleColor, innerCircleRadius, innerCircleDone);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '18px sans-serif';

    ctx.beginPath();
    ctx.fillText(`${Math.round((innerCircleDone) * 100)}%`, canvasCenterX, canvasCenterY);
  }
}
