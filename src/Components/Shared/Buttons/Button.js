import PropTypes from 'prop-types';

function Button({ children, btnTypeClass }) { 

    return(
        <button className={`Button btn ${btnTypeClass}`}>{children}</button>
    );

}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    btnTypeClass: PropTypes.string.isRequired
}

export default Button;
