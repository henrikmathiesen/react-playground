import { useRef } from 'react';
import PropTypes from 'prop-types';

function DivChangeColor({ colorOne, colorTwo }) {

    const divRef = useRef(null);

    const divStyle = {
        cursor: 'pointer',
        color: '#FFF',
        backgroundColor: colorOne
    };

    const onMouseOver = () => {
        divRef.current.style.backgroundColor = colorTwo;
    };

    const onMouseOut = () => {
        divRef.current.style.backgroundColor = colorOne;
    }

    // The events onMouseOver and onMouseOut are added when this component mounts and removed when unmounts
    // This is built in. But for native listeners, we need to clean up:
    // https://app.pluralsight.com/guides/how-to-cleanup-event-listeners-react

    return (
        <div className="p-4" style={divStyle} onMouseOver={onMouseOver} onMouseOut={onMouseOut} ref={divRef}>
            <p>
                Iam a div that changes color
            </p>
        </div>
    );

}

DivChangeColor.propTypes = {
    colorOne: PropTypes.string.isRequired,
    colorTwo: PropTypes.string.isRequired
};

export default DivChangeColor;
