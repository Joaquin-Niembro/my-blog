import React from 'react';
import { Text, Avatar } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Description from './Description';
import Image from 'next/image';
function Header() {
	return (
		<div
			style={{
				backgroundColor: '#624b6f',
				height: '60%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '2rem',
			}}
		>
			<Text
				fontSize='6xl'
				color='white'
				align='center'
				fontFamily='monospace'
				color='#ccd2e1'
				fontStyle='oblique'
			>
				Welcome to my blog!
			</Text>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					margin: '2rem',
				}}
			>
				<div style={{ padding: '1rem' }}>
					<Text
						fontSize='4xl'
						color='white'
						align='center'
						fontFamily='monospace'
						color='#ccd2e1'
						fontStyle='oblique'
					>
						Joaquin Niembro
					</Text>
					<Text
						fontSize='3xl'
						color='white'
						align='center'
						fontFamily='monospace'
						color='#ccd2e1'
						fontStyle='oblique'
					>
						Software Engineer
					</Text>
				</div>

				<Avatar
					size='4xl'
					name='Joaquin Niembro Bueno'
					src='https://media-exp1.licdn.com/dms/image/C5603AQFhdllLgUrvvg/profile-displayphoto-shrink_200_200/0/1610929643910?e=1626307200&v=beta&t=Qg_jeR-3kX8ovLq2_lUs4BIgRiEV9I_GQWest9Wanwg'
				/>
			</div>
			<Description />
			
		</div>
	);
}

export default Header;
