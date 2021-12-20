// Must have data specific to the user
// Will have the user component passed to it
import React, { useEffect, useState } from 'react';
// import auth from '../services/authService';

// class Profile extends Component {
export default function UserProfile() {
  const [user, setUser] = useState();

  useEffect(() => {
    // setUser(auth.getCurrentUser());
  }, [user]);

  return (
    <div className='container'>
      <h1>
        <strong>My Profile: {user}</strong>
      </h1>
    </div>
  );
}
