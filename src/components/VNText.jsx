import styled from 'styled-components';
import { Link } from 'gatsby';

const VNText = styled(Link)`
font-family: 'Merriweather', serif;
`;
const HoverText = styled.a`
	color: #FFF;
	:hover {
		color: yellow;
		cursor: pointer;
	}
`
const HoverTextUK = styled.a`
	color: #FFF;
	:hover {
		color: blue;
		cursor: pointer;
	}
`
const VText = styled.p`
font-family: 'Merriweather', serif;
`
const shadow = styled.img`
border: 1px solid red;
outline: 5px dotted green;
`

export  {VNText,HoverText,HoverTextUK,shadow,VText};