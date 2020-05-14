import React, { useState } from 'react';

import { Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from './styles';

export default function Carousell({ images = [] }) {
	const [activeSlide, setActiveSlide] = useState(0);

	const _renderItem = ({ item }) => {
		return <Image source={item} style={styles.image} />;
	};

	return (
		<>
			<Carousel
				data={images}
				sliderWidth={500}
				itemWidth={500}
				renderItem={_renderItem}
				onSnapToItem={(index) => setActiveSlide(index)}
			/>

			<Pagination
				dotsLength={images.length}
				activeDotIndex={activeSlide}
				containerStyle={styles.containerPagination}
				dotStyle={styles.activeDot}
				inactiveDotStyle={styles.inactiveDot}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		</>
	);
}
