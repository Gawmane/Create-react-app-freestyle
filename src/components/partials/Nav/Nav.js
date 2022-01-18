import style from './Nav.module.scss'
export const NavArray = [
        'Forside',
        'Produkter',
        'Om os',
        'Ledige stillinger',
        'Kontakt os'
    ]
    export const Nav = (props) => {
    return(
        <nav>
<ul>
    {props.data.map(NavArray =>{
        return(
             <li> <a>{NavArray}</a></li>
        )
    })}
    </ul>
</nav>
    )
}


