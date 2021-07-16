import PropTypes from 'prop-types';
import { ImCheckmark } from "react-icons/im";
import Button from './Button';
import { iconStyle, btnType } from './button-utils';

function SuccessButton({ text }) { 

    return (
        <Button btnTypeClass={btnType.SUCCESS}>
            <ImCheckmark style={ iconStyle } />
            {text || 'OK'}
        </Button>
    );

}

SuccessButton.propTypes = {
    text: PropTypes.string
};

export default SuccessButton;
