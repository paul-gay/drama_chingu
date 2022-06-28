import React from 'react'
import { PortableText } from '@portabletext/react';
import { client } from '../../lib/client'

export default function ShowSummary({ summary }) {
  // console.log(synopsis)
  const SummaryComponent = {
	
  };

  return (
		<div className="mt-4 max-w-2xl">
			<PortableText
				value={summary}
				components={SummaryComponent}
			/>
		</div>
  );
}
