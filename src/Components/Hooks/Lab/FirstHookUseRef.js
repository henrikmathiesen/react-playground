import DivChangeColor from '../../Shared/DivChangeColor';

function FirstHookUseRef() {

    /* 
    
        Primarily used to allow access directly to an element in the DOM.
    
    */

    return(
        <div className="row">
            <div className="col-md-8 col-lg-6">
                <DivChangeColor colorOne="navy" colorTwo="olive" />
            </div>
        </div>
    );

}

export default FirstHookUseRef;
