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

    const data = [
        {
            id: 1,
            text: 'Item 1'
        },
        {
            id: 2,
            text: 'Item 2'
        },
        {
            id: 3,
            text: 'Item 3'
        }
    ];


    return (
        <div>
            <h2>Basics</h2>
            <BasicChild user={user} config={config} onSomeBtnClick={onSomeBtnClick} />

            <div className="mt-2">
                <ul>
                    {
                        data.map(v => <li key={v.id}>{v.text}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Basics;
