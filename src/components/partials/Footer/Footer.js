import { NavArray } from "../Nav/Nav"
export const Footer = (props) => {
    return(
        <nav>
<ul>
    {props.data.map(NavArray =>{
        return(
             <li> {NavArray}</li>
        )
    })}
    </ul>
</nav>
    )
}