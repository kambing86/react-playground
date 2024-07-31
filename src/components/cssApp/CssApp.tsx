import { useState } from 'react';
import Popup1 from './Popup1';
import Popup2 from './Popup2';

const CssApp = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setShow1((prev) => !prev)}>
        Popup 1
      </button>
      <button type="button" onClick={() => setShow2((prev) => !prev)}>
        Popup 2
      </button>
      {show1 && <Popup1 />}
      {show2 && <Popup2 />}
    </div>
  );
};

export default CssApp;
