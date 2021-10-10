import { useState } from 'react';

function FirstHookUseState() {

    /*

        const results = useState('');               // Set the initial value of the state. It returns an array, and the 2 first indexes is of interest to us
        const inputText = results[0];               // A reference to state itself (the data model), readonly
        const setInputText = results[1]             // The setter function we call to update the state

        This can be refactored to:

    */

    const [isClicked, setIsClicked] = useState(false);
    const [inputText, setInputText] = useState('');
    const [historyList, setHistoryList] = useState([]);

    function onInputChange(e) {
        setInputText(e.target.value);
        setHistoryList([...historyList, e.target.value]);
    }

    // This will have no effect, since we are not setting state
    // let isClicked = false;
    // const onBtnClick = () => {
    //     isClicked = !isClicked;
    // }

    // Do it like this instead (with useState above)
    const onBtnClick = () => setIsClicked(!isClicked);

    return (
        <div className="row">
            <div className="col-md-8 col-lg-6">
                <div>
                    <button className={`btn btn-secondary ${isClicked && 'toggle-clicked'}`} onClick={onBtnClick}>Click me</button>
                </div>
                <div className="mt-2">
                    <input className="form-control" onChange={onInputChange} />
                </div>
                <div className="mt-2">
                    {inputText}
                </div>
                <div className="mt-2">
                    <ol>
                        {historyList.map((hl, i) => <li key={i}>{hl}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    );

}

export default FirstHookUseState;
