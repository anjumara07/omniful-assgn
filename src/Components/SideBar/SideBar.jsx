import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PolicyIcon from '@mui/icons-material/Policy';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DevicesIcon from '@mui/icons-material/Devices';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const SideBar = () =>{
    return (
        <div className="sideBar" >
            <img className="omniful" src="https://media.licdn.com/dms/image/C4D0BAQFBw1kM9lSGTQ/company-logo_200_200/0/1602138010036?e=2147483647&v=beta&t=EKiXbPJBi-rZKcwya3jb8wCvKA-EEhU2Lz_1D6AoOt0" alt="" />
            <HomeIcon className="icon"/>
            <CurrencyExchangeIcon className="icon"/>
            <AutoGraphIcon className="icon"/>
            <Inventory2Icon className="icon"/>
            <DevicesIcon className="icon"/>
            <WorkspacesIcon className="icon"/>
            <AccountBalanceWalletIcon className="icon"/>
            <SettingsIcon className="icon"/>
            <PeopleAltIcon className="icon"/>
            <PolicyIcon className="icon"/>
            <ContactSupportIcon className="icon"/>
            <LogoutIcon className="icon"/>
        </div>
    )
}