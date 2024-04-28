import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../item/MenuItem";
import { useEffect } from "react";
import { callGetMenusAPI } from "../../apis/MenuAPICalls";
import "../../App.css";



function MenuList() {

    const { menus } = useSelector(state => state.menuReducer);

      

  

    const dispatch = useDispatch();

   

    useEffect(
        () => {
            dispatch(callGetMenusAPI());
           
        },[]
    );

    return(
        
           
        <div className="menuBox"> 
        {menus.map(menu => (
            <div className="menuItem"> 
                <MenuItem key={menu.id} menu={menu} />
            </div>
        ))}
    </div>
            
      
    );

}

export default MenuList;