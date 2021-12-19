import React, { useState } from 'react';

function Users() {
  return (
    <div>
      <nav>
        <Link to='me'>My Profile</Link>
      </nav>

      <Routes>
        <Route path=':id' element={<UserProfile />} />
        <Route path='me' element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}
