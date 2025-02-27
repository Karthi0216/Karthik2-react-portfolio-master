import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg';
import Image4 from '../../assets/avatar-4.svg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
	const data = [
		{
			id: 1,
			image: Image4,
			title: "John Doe",
			subtitle: "CEO @ TechCorp",
			comment: "Karthik is a highly skilled developer with a keen eye for detail. His ability to create responsive and visually appealing designs is truly impressive!",
		},
		{
			id: 2,
			image: Image3,
			title: "Sarah Smith",
			subtitle: "Project Manager @ WebSolutions",
			comment: "Working with Karthik was a great experience! His expertise in React and frontend development helped us deliver an outstanding project on time.",
		},
	];

	return (
		<section className="testimonials container section">
			<h2 className="section__title">Testimonials</h2>

			<Swiper
				className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}
			>
				{data.map(({ id, image, title, subtitle, comment }) => (
					<SwiperSlide className="testimonial__item" key={id}>
						<div className="thumb">
							<img src={image} alt={title} />
						</div>
						<h3 className="testimonial__title">{title}</h3>
						<span className="subtitle">{subtitle}</span>
						<div className="comment">{comment}</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Testimonials;
