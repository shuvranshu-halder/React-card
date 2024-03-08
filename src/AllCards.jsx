import React from 'react'
import Card from './Card'

import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';

function AllCards() {
  return (
    <div>
        <Card imageNaam={p1} altTag="p1" title="Problem-1"/>
        <Card imageNaam={p2} altTag="p2" title="Problem-2"/>
        <Card imageNaam={p3} altTag="p3" title="Problem-3"/>
        <Card imageNaam={p4} altTag="p4" title="Problem-4"/>
    </div>
  )
}

export default AllCards