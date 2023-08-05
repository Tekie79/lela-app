import "./button.css"
import { Link } from "react-router-dom"
export const Button = ({btnName, linkAddress})=>{
    return <Link to={linkAddress}><button className="btn_main">{btnName}</button></Link>
}