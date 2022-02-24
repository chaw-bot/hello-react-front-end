import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingFromServer } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state) => state.greetings);
  const [state, setState] = useState(false);

  const newGreeting = () => {
    setState(() => false);
    dispatch(getGreetingFromServer());
  };

  useEffect(() => {
    dispatch(getGreetingFromServer());
  }, [dispatch]);

  useEffect(() => {
    setState(() => greetings);
  }, [greetings]);

  return (
    <div className="container">
      <button type="button" className="getBtn" onClick={newGreeting}>Click Me!</button>
      <h3 className="msg"> to say &apos;Hello&apos; to Otto</h3>
      <h1 className="greeting">{state ? greetings.greeting : 'just a minute...'}</h1>
    </div>
  );
};

export default Greeting;
