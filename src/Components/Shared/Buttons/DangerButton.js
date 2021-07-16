import PropTypes from 'prop-types';
import { ImCross } from "react-icons/im";
import Button from './Button';
import { iconStyle, btnType } from './button-utils';

function DangerButton({ text }) { 

    return (
        <Button btnTypeClass={btnType.DANGER}>
            <ImCross style={ iconStyle } />
            {text || 'CANCEL'}
        </Button>
    );

}

DangerButton.propTypes = {
    text: PropTypes.string
};

export default DangerButton;
