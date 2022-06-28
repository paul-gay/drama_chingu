import React from 'react'
import { client } from '../../lib/client';
import Shows from './Shows';


export default function WhatToWatch({ shows }) {
  // console.log(shows)

  return (
		<div className="max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
			<Shows shows={shows} />
		</div>
  );
}

