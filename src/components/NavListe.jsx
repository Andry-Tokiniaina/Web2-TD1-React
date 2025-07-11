function NavListe({elements}) {
    return(
        <ul className="flex flex-row ">
            {elements.map((element,index)=>(
                <li className="m-5 text-blue-50 text-lg font-bold font-sans">
                    {element.texte}
                </li>
            ))}
        </ul>
    )
}
export default NavListe