import PropTypes from 'prop-types';
import { ImCheckmark } from "react-icons/im";
import Button from './Button';
import { iconStyle, btnType } from './button-utils';

function SuccessButton({ text, onClickFn }) { 

    return (
        <Button btnTypeClass={btnType.SUCCESS} onClickFn={onClickFn}>
            <ImCheckmark style={ iconStyle } />
            {text || 'OK'}
        </Button>
    );

}

SuccessButton.propTypes = {
    text: PropTypes.string,
    onClickFn: PropTypes.func
};

export default SuccessButton;
