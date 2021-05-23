import React from 'react';
import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
function Description() {
	return (
		<motion.div
			style={{
				backgroundColor: '#624b6f',
				width: '50%',
				borderRadius: '1rem',
			}}
			drag
			dragConstraints={{
				top: -50,
				left: -50,
				right: 50,
				bottom: 50,
			}}
		>
			<Text
				fontSize='3xl'
				textAlign='justify'
				color='#ccd2e1'
				fontStyle='oblique'
			>
				Hey!, my name is Joaquin Niembro Bueno Gómez, i am 21 years old and i
				currently work as a React Developer in @DefinityFirst. I´ve always liked
				React JS but i enjoy programming in Elixir and Typescript as well.
				Something else is that i have always worked remotely and would like to
				keep it that way.
			</Text>
			<Image
				src='/images/elixir.png'
				alt='Picture of the author'
				width={100}
				height={100}
			/>
		</motion.div>
	);
}

export default Description;
