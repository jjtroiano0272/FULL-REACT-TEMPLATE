/**
 * Challenge:
 *
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components
 *   to look like they do in the slide
 */

import React, { useState } from 'react';

export default function Die({ value }) {
  const [num, setNum] = useState(value);

  return value;
}
