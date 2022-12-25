import './SideBar.css'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { useNavigate } from 'react-router-dom'; 

export const SideBar2 = () =>{

    const navigate = useNavigate();

    return (
        <div className='flex'>
            <div className="sideBar2" >
                <p className='settings'>Settings</p>
                <div className="class1">
                    <p className='flex apps' onClick={()=>{navigate('/')}}>
                        <div><AirportShuttleIcon/></div>
                        <div>Apps And Integration</div>
                    </p>
                    <p className='flex apps' onClick={()=>{navigate('/hubsManagement')}}>
                        <div><AirportShuttleIcon/></div>
                        <div>Hub Management</div>
                    </p>
                </div>
            </div>
        </div>
    )
}