import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router";
import useGetMenuList from "../utils/useGetMenuList";

const RestraurantMenu = () => {

    const params=useParams();

    const restMenu = useGetMenuList(params.resId);

    if(restMenu===null) return(<ShimmerCards/>);

    const {itemCards}=restMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {name}=restMenu?.data?.cards[0]?.card.card.info;
    
    return(
        <div className="rest-menu-container" style={{"margin":"50px"}}>
            <div className="rest-menu-heading">
                <h1>{name}</h1>
            </div>
            <div className="rest-menu">
                {
                    itemCards?.map(
                        (menu)=>{
                            return (
                                <li key={menu?.card?.info?.id}>
                                    {menu?.card?.info?.name} - Rs. {menu?.card?.info?.price/100}
                                </li>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}

export default RestraurantMenu;