function LogoListe({elements}) {
    return (
        <ul className="flex flex-row  items-center">
        {elements.map((element)=>(
            <li>
                <img src={element.url} alt="" className="w-70 px-15 py-5"/>
            </li>
        ))}
        </ul>
    )
}
export default LogoListe