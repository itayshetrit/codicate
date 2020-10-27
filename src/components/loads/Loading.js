import React from 'react'
import styled from 'styled-components';
import spinner from './beer_animate.gif'
const AnimationContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background:black;
`;

const Loading = (props) => {
	setTimeout(() => { props.history.push('/browse') }, 2200)
	return (
		<AnimationContainer>
			<img src={spinner} width="500" alt="spinner" />
		</AnimationContainer>
	)
}

export default Loading