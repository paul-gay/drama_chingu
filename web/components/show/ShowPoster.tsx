import React from 'react'
import { urlFor } from '../../lib/client';

export default function ShowPoster({thumbnail, title}) {
  return (
		<img
			src={urlFor(thumbnail)}
			alt={title}
			className="h-[400px] lg:h-[475px] w-full object-cover rounded-lg"
		/>
  );
}
