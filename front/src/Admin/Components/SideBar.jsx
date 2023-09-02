import React, {useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../usercontext/context';


function SideBar() {

  const location = useLocation()
  const { state, dispatch } = useContext(GlobalContext)
  const NavItems = [
    {
      tab : "Home",
      url : "/"
    },
    {
      tab : "Order",
      url : "/order"
    },
    {
      tab : "AddProduct",
      url : "/addproduct"
    },
    {
      tab : "AddCategory",
      url : "/addcategory"
    }
  ];
  const logOutUser = () => {
    dispatch(
      {
        type: "USER_LOGOUT"
      }
    )
  }

  const [hoveredItem, setHoveredItem] = useState(null);


  return (
   <>
   <div className=' p-3 d-flex text-white justify-content-between align-items-center' style={{backgroundColor: 'rgb(195 152 92)'}}>
    <span>Admin Name</span>
    <button className='btn btn-outline-black'
          onClick={logOutUser}
        >
          Logout
        </button>
   </div>

   
   <ul className='nav flex-column pt-3'>
        {NavItems.map((val, key) => (
          <li
          
            key={key}
            onMouseEnter={() => setHoveredItem(val.url)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`nav-item m-2 ${location.pathname === val.url || hoveredItem === val.url
              ? 'rounded'
              : null
              }` }
          >
            <Link className='nav-link d-flex align-items-center gap-2 text-white' to={val.url}>
              <span>{val.tab}</span>
            </Link>
          </li>
        ))}
      </ul>
   </>
  )

}

export default SideBar