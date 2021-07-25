import BasicChild from './BasicChild';

function Basics() {

    const onSomeBtnClick = () => { 
        console.log('btn clicked');
    };

    const user = {
        name: 'Foo',
        age: 50
    };

    const config = {
        a: 'a',
        b: 'b'
    }


    return (
        <div>
            <h2>Basics</h2>
            <BasicChild user={user} config={config} />
        </div>
    );
}

export default Basics;
