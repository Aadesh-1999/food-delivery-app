import { useEffect, useState } from "react";
import { swiggyResMenuURL } from "./constants";

const useGetMenuList =(resId)=>{
    const [restMenu, setRestMenu]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        console.log(swiggyResMenuURL+resId);
        const res = await fetch(swiggyResMenuURL+resId);
        const resJson = await res.json();
        setRestMenu(resJson);
    }
    return restMenu;
}

export default useGetMenuList;