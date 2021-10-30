import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

function DivChangeColorOnScroll({ children, colorOne, colorTwo, isLast }) {

    const divRef = useRef(null);
    const [inView, setInView] = useState(false);

    const isInView = () => {
        const rect = divRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const onScroll = () => {
        console.log('scrolling');
        setInView(isInView());
    };

    useEffect(() => {
        console.log('div change color on scroll');
        window.addEventListener('scroll', onScroll);
        setInView(isInView());

        return () => {
            console.log('div change color on scroll, cleanup');
            window.removeEventListener('scroll', onScroll);
        }

        // eslint-disable-next-line
    }, []);

    return (
        <div className={`p-4 ${!isLast && 'mb-4'}`} ref={divRef} style={ { backgroundColor: inView ? colorOne : colorTwo } }>
            <p>
                {children}
            </p>
        </div>
    );

}

DivChangeColorOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    colorOne: PropTypes.string.isRequired,
    colorTwo: PropTypes.string.isRequired,
    isLast: PropTypes.bool
};

export default DivChangeColorOnScroll;
