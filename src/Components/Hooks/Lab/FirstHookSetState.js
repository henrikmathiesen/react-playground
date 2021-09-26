function FirstHookSetState() { 

    return (
        <div className="row">
            <div className="col-md-8 col-lg-6">
                <input className="form-control" onChange={ (e) => console.log('works') } />
            </div>
        </div>
    );

}

export default FirstHookSetState;
