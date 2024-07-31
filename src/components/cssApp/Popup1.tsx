import Button from '../buttons/Button';
import './Popup1.scss';

const Popup1 = () => {
  return (
    <div className="popup1">
      <div>Popup1</div>
      <Button type="button" variant="primary">
        Submit
      </Button>
      <Button type="button" variant="secondary">
        Cancel
      </Button>
    </div>
  );
};

export default Popup1;
