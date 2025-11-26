const Challenge = () => {
    
    const n1 = 4;
    const n2 = 5;
    
    return (
        <div>
            <div>
                <p>n1: {n1}</p>
                <p>n2: {n2}</p>
            </div>
            <div>
                <button onClick={() => console.log(n1 + n2)}>
                    Clique para somar!
                </button>
            </div>
        </div>
    );
};

export default Challenge;