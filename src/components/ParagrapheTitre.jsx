function PargrapheTitre({elements}) {
    return (
        <>
            {elements.map((element) => (
                <div>
                    <h1 className="text-5xl text-blue-950 font-serif py-5">{element.titre}</h1>
                    <p>{element.texte}</p>
                </div>
            )) }
        </>
    )
}
export default PargrapheTitre;