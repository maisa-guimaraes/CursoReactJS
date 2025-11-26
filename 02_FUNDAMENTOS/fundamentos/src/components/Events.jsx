const Events = () => {
    const handleMyEvent = (e) => {
        //console.log("Ativou o evento!")
        console.log(e)
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso.</h1>
        } else {
            return <h1>Tb posso renderizar isso.</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
            
        </div>
    );
};

export default Events;