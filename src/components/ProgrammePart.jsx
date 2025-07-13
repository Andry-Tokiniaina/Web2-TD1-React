export function ProgrammePart({elements}) {
    return (
        <>
        {elements.map((element)=>(
            <div className="w-1/6 h-9/10 bg-yellow-100 rounded-2xl p-5 m-5">
                <h1 className="text-amber-300 font-bold text-5xl p-2">25%</h1>
                <p className="text-blue-950 font-bold text-xl">{element}</p>
            </div>
        ))}
        </>
    )
}