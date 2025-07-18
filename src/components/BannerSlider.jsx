import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/BannerSlider.css";

function BannerSlider({ movies }) {
  // Filter movies that have a backdrop_path before slicing and mapping
  const moviesWithBackdrop = movies.filter((movie) => movie.backdrop_path);

  return (
    <div className="banner-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }} // enable dots pagination
        navigation={false}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
      >
        {moviesWithBackdrop.slice(0, 5).map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="banner-slide"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="banner-content">
                <h2>{movie.title}</h2>
                <p>{movie.overview?.slice(0, 150)}...</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

BannerSlider.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string,
    })
  ).isRequired,
};

export default BannerSlider;
