import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './App.css';

const Setmode = () => {
  const [modes, setModes] = useState('3');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const gamemode = { modes };

    setIsPending(true);
    fetch('http://localhost:8000/gamemode', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gamemode),
    }).then(() => {
      console.log('game mode selected as ' + gamemode.modes + ' players');
      setIsPending(false);
      history.push('/assignplayernumber');
    });
  };

  return (
    <div className="setMode">
      <form onSubmit={handleSubmit}>
        <p>Select player number</p>
        <select value={modes} onChange={(e) => setModes(e.target.value)}>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        {!isPending && <button>Select Player</button>}
      </form>
      <Link to={`/`}>
        <h2>home</h2>
      </Link>
    </div>
  );
};

export const AssignPlayerNumber = () => {
  const [playernumber, setPlayerNumber] = useState('1');
  // const [isChoosing, setIsChoosing] = useState('0');

  const handleSubmitChoosing = (e) => {};
  const [modeNum, setmodeNum] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8000/gamemode?id=1')
      .then((response) => response.json())
      .then((data) => {
        setmodeNum(data[0].modes);
        console.log(data[0].modes);
      });

    fetch('http://localhost:8000/gamemode/1', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 1 }),
    });

    // modeNum = data.modes;
    // setmodeNum(parse.modes);
  }, []);

  return (
    <div className="assignPlayerNumber">
      <h2>Select your player number {modeNum} </h2>

      <Link to={`/`}>
        <h2>home</h2>
      </Link>
    </div>
  );
};

export default Setmode;
