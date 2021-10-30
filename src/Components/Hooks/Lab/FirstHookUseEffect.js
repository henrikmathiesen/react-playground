import { useEffect } from 'react';
import { useState } from 'react';

function FirstHookUseEffect() {

    /* 
    
        We can think about the hook UseEffect as being very similiar to componentDidMount, componentDidUpdate, componentWillUnmount in React class component


        REACT CLASS COMPONENT               REACT FUNCTIONAL COMPONENT
        
        componentDidMount                   useEffect(() => { ... })
        componentDidUpdate                  useEffect(() => { ... })                                // Some conditions do apply
        componentWillUnmount                useEffect(() => { ... return () => { ... } })           // The return function gets called
    
    */

    const [isClicked, setIsClicked] = useState(false);

    const onBtnClick = () => setIsClicked(!isClicked);

    useEffect(() => {
        console.log('in use effect');

        return () => { 
            console.log('in use effect cleanup');
        };
    }, [isClicked]);
    // [] , a dependecy array (useState variables)
    // If left out, useEffect, and return function, is called when this component is rendered and on all uppdates
    // If left empty, useEffect (first function) is called only once when this component is first rendered
    // If populated with values, useEffect, and return function, is called when those values changes
    // The return function is always called when this component unmounts

    return (
        <div className="row">
            <div className="col-md-8 col-lg-6">
                Hi from FirstHookUseEffect

                <div className="mt-4">
                    <button className={`btn btn-secondary ${isClicked && 'toggle-clicked'}`} onClick={onBtnClick}>Click me</button>
                </div>
            </div>
        </div>
    );

}

export default FirstHookUseEffect;
