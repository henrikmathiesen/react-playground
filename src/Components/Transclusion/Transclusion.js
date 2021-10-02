import { SuccessButton, DangerButton } from '../Shared';

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
