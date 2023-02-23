
import React from 'react';
import Link from 'next/link'
import './style.scss'
type indexProps = {

};

const index:React.FC<indexProps> = () => {

    return (
        <ul>
		<li>
			<Link href="#">home</Link>
		</li>
		<li>
			<Link href="#">about</Link>
		</li>
		<li>
			<Link href="#">services</Link>
		</li>
		<li>
			<Link href="#">team</Link>
		</li>
		<li>
			<Link href="#">contact</Link>
		</li>
	</ul>
    )
}
export default index;