export function AdmissionEtapes({elements}) {
    return (
        <div className="flex justify-center h-1/2">
            {elements.map((element)=>(
                <div className={element.couleur}>
                    <h1 className="font-bold text-white py-2 text-5xl">{element.index}</h1>
                    <p className="text-blue-950"><span className="font-bold">{element.titre}</span>{element.texte}</p>
                </div>
            ))}
        </div>
    )
}