import { useRef } from 'react';
import PropTypes from 'prop-types';

function DivChangeColorOnScroll({ colorOne, colorTwo }) {

    return (
        <div className="p-4">
            <p>
                TODO ...
            </p>
        </div>
    );

}

DivChangeColorOnScroll.propTypes = {
    colorOne: PropTypes.string.isRequired,
    colorTwo: PropTypes.string.isRequired
};

export default DivChangeColorOnScroll;
