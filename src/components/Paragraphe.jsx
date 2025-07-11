function Pargraphe({elements}) {
    return (
        <>
            {elements.map((element) => (
                <div>
                    <h2 className="font-bold text-2xl text-blue-950">{element.titre}</h2>
                    <p>{element.texte}</p>
                </div>
            )) }
        </>
    )
}
export default Pargraphe;