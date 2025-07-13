function PargrapheTitre({elements}) {
    return (
        <>
            {elements.map((element) => (
                <div>
                    <h1 className="text-5xl text-blue-950 font-serif py-5 font-medium">{element.titre}</h1>
                    <p className="py-10 text-blue-950">{element.texte}</p>
                </div>
            )) }
        </>
    )
}
export default PargrapheTitre;