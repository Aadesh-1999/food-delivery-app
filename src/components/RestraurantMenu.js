import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router";
import useGetMenuList from "../utils/useGetMenuList";
import RestraurantCategory from "./RestraurantCategory";
import { useState } from "react";

const RestraurantMenu = () => {

    //For using in controlled component
    [showIndex, setShowIndex]=useState(null);

    const params=useParams();

    const restMenu = useGetMenuList(params.resId);

    if(restMenu===null) return(<ShimmerCards/>);

    const {cards}=restMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const itemCategoryCards = cards.filter((x)=>{
        return x?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });
    const nestedItemCategoryCards = cards.filter((x)=>{
        return x?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    });
    
    const {name}=restMenu?.data?.cards[0]?.card.card.info;
    return(
        <div className="rest-menu-container" style={{"margin":"50px"}}>
            <div className="rest-menu-heading">
                <h1 className="font-extrabold font-serif text-lg bg-gray-200 my-5">{name}</h1>
            </div>
            <div className="rest-menu">
                <div className="nestedItemCategoryCards">
                    {
                        nestedItemCategoryCards.map(
                            (nestedItemCategory,index)=>{
                                return(
                                    <div className="border border-black mx-1 my-5 px-2 rounded-lg bg-orange-300 shadow-lg hover:bg-orange-400 "
                                        key={index} >
                                        <NestedItemCategoryCard 
                                        nestedItemCategory={nestedItemCategory} 
                                        showItems={index===showIndex ? true : false} 
                                        setShowIndex={()=>setShowIndex((prev)=>prev===index?null:index)}
                                        />
                                    </div>
                                )
                            }
                        )
                    }
                </div>   
            </div>
        </div>
    );
}

//nestedCategoryMapCard
const NestedItemCategoryCard = ({nestedItemCategory, showItems, setShowIndex}) => {
    const handleClick = () =>{
        setShowIndex();
    }
    return (
        <div>
            <button className="font-mono my-1 text-center font-extrabold flex justify-between w-full" 
                onClick={handleClick}
            >
                <h3>{nestedItemCategory?.card?.card?.title}</h3>
                <h3>{showItems ? "⬆" : "⬇"}</h3>
            </button>
            {
                nestedItemCategory?.card?.card?.categories.map(
                    (category, index)=>{
                        return(
                            showItems &&
                            <div key={index} className="border border-black mx-1 my-5 px-2 rounded-lg bg-white shadow-lg hover:bg-gray-200 ">
                                <RestraurantCategory category={category}/>
                            </div>
                            
                        );
                    }
                )
            }
        </div>
    )
}

export default RestraurantMenu;