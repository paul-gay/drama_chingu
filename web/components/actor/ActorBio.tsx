import React from 'react'
import { PortableText } from '@portabletext/react'
import { client } from '../../lib/client'

export default function ActorBio({ bio }) {
  return (
		<div className="max-w-md">
			<PortableText value={bio} />
		</div>
  );
}
