import SuccessButton from '../Shared/Buttons/SuccessButton';
import DangerButton from '../Shared/Buttons/DangerButton';

function Transclusion() {
    return (
        <div>
            <h2>Transclusion</h2>

            <div className="row">
                <div className="col-auto">
                    <SuccessButton />
                </div>
                <div className="col">
                    <DangerButton />
                </div>
            </div>
        </div>
    );
}

export default Transclusion;
