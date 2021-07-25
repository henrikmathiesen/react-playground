import PropTypes from 'prop-types';

function Button({ children, btnTypeClass, onClickFn }) {

    return (
        <button className={`Button btn ${btnTypeClass}`} onClick={onClickFn}>{children}</button>
    );

}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    btnTypeClass: PropTypes.string.isRequired,
    onClickFn: PropTypes.func
}

export default Button;
