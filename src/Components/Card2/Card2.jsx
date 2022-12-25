import './Card2.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

export const Card2 = () =>{
    return (
        <div className="container">
            <div className="card2">
                <div className='jeddah'>Jeddah <span className='active'>Active</span></div>
                <div className="flex">
                    <div className='cardIcon'><LocationOnOutlinedIcon/></div>
                    <div>
                        <div>Ansar Hospital, hadiqat Rami,Al Zahra, Jeddah</div>
                        <div className='gray'>Makkah,Saudi Arabia</div>
                    </div>
                </div>
                <div className="flex">
                    <div className='cardIcon'><CalendarTodayOutlinedIcon/></div>
                    <div>
                        <div>Sunday(Today)</div>
                        <div className='gray'>10:00AM to 6:00PM . 01:00PM to 06:00PM</div>
                    </div>
                </div>
                <div className="flex">
                    <div className='cardIcon'><WifiCalling3OutlinedIcon/></div>
                    <div>
                        <div>+966-2777588235</div>
                        <div className='gray'>Jeddahhub.Panda@Hyperpanda.com</div>
                    </div>
                </div>
            </div>
            <div className="card2">
                <div className='jeddah'>Makkah <span className='active'>Active</span></div>
                <div className="flex">
                    <div className='cardIcon'><LocationOnOutlinedIcon/></div>
                    <div>
                        <div>Makkah Mall, King Abdullah road</div>
                        <div className='gray'>Makkah,Saudi Arabia</div>
                    </div>
                </div>
                <div className="flex">
                    <div className='cardIcon'><CalendarTodayOutlinedIcon/></div>
                    <div>
                        <div>Sunday(Today)</div>
                        <div className='gray'>10:00AM to 6:00PM . 01:00PM to 06:00PM</div>
                    </div>
                </div>
                <div className="flex">
                    <div className='cardIcon'><WifiCalling3OutlinedIcon/></div>
                    <div>
                        <div>+966-2777588235</div>
                        <div className='gray'>Jeddahhub.Panda@Hyperpanda.com</div>
                    </div>
                </div>
            </div>
            <div className="card2">
                <div className='jeddah inact'>Riyadh <span className='inactive'>Inctive</span></div>
                <div className="flex">
                    <div className='cardIcon'><LocationOnOutlinedIcon/></div>
                    <div>
                        <div>Ring Road, Plot 18, Riyadh Jeddah Highway</div>
                        <div className='gray'>Makkah,Saudi Arabia</div>
                    </div>
                </div>
                <div className="flex">
                    <div className='cardIcon'><CalendarTodayOutlinedIcon/></div>
                    <div>
                        <div>Sunday(Today)</div>
                        <div className='gray'>10:00AM to 6:00PM . 01:00PM to 06:00PM</div>
                    </div>
                </div>
                <div className="flex">
                    <div className='cardIcon'><WifiCalling3OutlinedIcon/></div>
                    <div>
                        <div>+966-2777588235</div>
                        <div className='gray'>Jeddahhub.Panda@Hyperpanda.com</div>
                    </div>
                </div>
            </div>            
        </div>
    )
}