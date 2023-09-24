// Write your code here
import './index.css'

const DestinationItem = props => {
    const {destinationDetails} = props 
    const {imgurl, name} = destinationDetails

    return (
        <li className="destination-items">
         <img src={imgurl} alt={name} className="destination-image" />
         <p className="name">{name}</p>
        </li>
    )
}

export default DestinationItem 
