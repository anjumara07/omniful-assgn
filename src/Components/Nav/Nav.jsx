import './Nav.css'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export const Nav = () =>{
    
    return (
        <div className="nav" >
            <div className="navbox">
                <NotificationsNoneIcon className="navIcon"/>
                <HelpOutlineIcon className="navIcon" />
            </div>
        </div>
    )
}