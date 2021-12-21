import "./styles.css"
import { FaUser } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const tokenUser = JSON.parse(localStorage.getItem("token"));
  const username = JSON.parse(localStorage.getItem("username"));
  const navigate = useNavigate();

  const logout = () => {
      localStorage.clear();
      navigate("/Login", { replace: true});
  }

return ( 
        <div className="layout">
            {(tokenUser && tokenUser !== "") &&
                    <div className="header" >
                        <div className="header-user">
                            <FaUser />
                            {username}
                        </div>
                        <div className="header-logout" onClick={logout}>
                            Log Out
                        </div>
                    </div>
            }
            <div className="content">{children}</div>
        </div>
     );
}
 
export default Layout;