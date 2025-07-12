function LogoListe({elements}) {
    return (
        <ul className="flex flex-row  items-center">
        {elements.map((element)=>(
            <li>
                <img src={element.url} alt="" className="w-70 p-15"/>
            </li>
        ))}
        </ul>
    )
}
export default LogoListe