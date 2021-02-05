import { useContext, useState } from 'react';
import UserContext, { UserState } from '../store';

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: 'jane',
    last: 'smith',
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            first: 'Josie',
            last: 'Walse',
          })
        }
      >
        Change context
      </button>
    </UserContext.Provider>
  );
}

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Lst: {user.last}</div>
    </div>
  );
}

export default UseContextComponent;
