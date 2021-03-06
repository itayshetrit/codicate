import React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

const StyledSlider = styled(ReactSlider)`
    width: 300px;
	height: 8px;
	color: orange;
	font-size: 14px;
	margin: 35px 0px 20px 0px;
`;

const StyledThumb = styled.div`
    height: 22px;
	width: 22px;
	text-align: center;
	border: 2px solid rgba(255, 166, 0, 0.5);
    background-color: white;
	border-radius: 50%;
	cursor: grab;
	margin-top: -7px;
	outline: none;
	position: relative;
	&:active {
		outline: none;
	}
`;

const ThumbText = styled.div`
    color: black;
	position: absolute;
	bottom: 20px;
	left: 0px;
	font-size:0.8rem;
`;

const Thumb = (props, state, text) => <StyledThumb {...props}><ThumbText>{state.valueNow + text}</ThumbText></StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: orange;
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export const MySlider = ({ onChange, value, defaultValue, max, step, minDistance, thumbText }) => {
	return <StyledSlider
		defaultValue={defaultValue}
		renderTrack={Track}
		renderThumb={(props, state) => Thumb(props, state, thumbText)}
		minDistance={minDistance}
		step={step}
		max={max}
		value={value}
		onChange={onChange}
	/>
}

