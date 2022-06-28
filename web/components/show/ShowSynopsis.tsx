import React from 'react'
import { PortableText } from '@portabletext/react';
import { client } from '../../lib/client'

export default function ShowSynopsis({ synopsis }) {
  // console.log(synopsis)
  const SynopsisComponent = {
	
  };

  return (
		<div className="mt-4 max-w-xl">
			<PortableText
				value={synopsis}
				components={SynopsisComponent}
			/>
		</div>
  );
}
