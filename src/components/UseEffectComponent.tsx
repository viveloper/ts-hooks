import { useEffect, useState } from 'react';

function UseEffectComponent() {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setVal((v) => v + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{val}</div>;
}

export default UseEffectComponent;
