import React, { useState } from 'react';

export default function Die({ value }) {
  const [num, setNum] = useState(value);

  return value;
}
