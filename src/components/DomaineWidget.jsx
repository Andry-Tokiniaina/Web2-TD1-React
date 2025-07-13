function DomaineWidget({elements}) {
    return (
        <div className="flex justify-center">
        {
            elements.map((element)=>(
            <div className="w-1/4 bg-white rounded-2xl p-5 m-5 flex flex-col items-center text-center">
                <img src={element.image} alt="" className="w-3/4"/>
                <h1 className="text-amber-400 text-2xl font-bold p-5">{element.titre}</h1>
                <p className="text-blue-950">{element.description}</p>
            </div>
            ))
        }
        </div>
    )
}
export default DomaineWidget