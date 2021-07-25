// Can have props as argument in function
// But have to write props.user.name on jsx
// So use destructuring in function arguments
// Then we can destruct again inside the function to simplify more

import PropTypes from 'prop-types';
import SuccessButton from '../Shared/Buttons/SuccessButton';

function BasicChild({ user, config, onSomeBtnClick }) { 

    const { name, age } = user;
    const { a, b } = config;

    return(
        <div>
            <div>
                {name} {age}
            </div>
            <div>
                {a} {b}
            </div>
            <div>
                <SuccessButton text="Okey" onClickFn={onSomeBtnClick} />
            </div>
        </div>
    );

}

// Some typechecking here, can also append isRequired
BasicChild.propTypes = {
    user: PropTypes.object,
    config: PropTypes.object,
    onSomeBtnClick: PropTypes.func
}

export default BasicChild;
