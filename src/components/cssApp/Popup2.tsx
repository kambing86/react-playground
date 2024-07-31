import Button from '../buttons/Button';
import './Popup2.scss';

const Popup2 = () => {
  return (
    <div className="popup2">
      <div>Popup2</div>
      <Button type="button" variant="primary">
        Submit
      </Button>
      <Button type="button" variant="secondary">
        Cancel
      </Button>
    </div>
  );
};

export default Popup2;
