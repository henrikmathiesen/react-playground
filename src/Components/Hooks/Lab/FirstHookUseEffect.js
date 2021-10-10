import { useEffect } from 'react';

function FirstHookUseEffect() {

    /* 
    
        We can think about the hook UseEffect as being very similiar to componentDidMount, componentDidUpdate, componentWillUnmount in React class component


        REACT CLASS COMPONENT               REACT FUNCTIONAL COMPONENT
        
        componentDidMount                   useEffect(() => { ... })
        componentDidUpdate                  useEffect(() => { ... })                                // Some conditions do apply
        componentWillUnmount                useEffect(() => { ... return () => { ... } })           // The return function gets called
    
    */

    useEffect(() => {
        console.log('in use effect');

        return () => { 
            console.log('in use effect cleanup');
        };
    }, []);
    // [] , a dependecy array (useState variables) (optional, could be empty, could contain dependencies), for re render the component if those dependecies changes (and useEffect is called again)

    return (
        <div className="row">
            <div className="col-md-8 col-lg-6">
                Hi
            </div>
        </div>
    );

}

export default FirstHookUseEffect;
