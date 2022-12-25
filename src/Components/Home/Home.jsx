import './Home.css'
import {CardBox} from '../Card/Card'

export const Home = () =>{
    return (
        <div className='box'>
            <div className='head'>Sales Channel Apps</div>
            <div className="headings">
                <span className='clicked'>Integrated <span className='num'>12</span></span> 
                <span>All Channel <span className='num1'>118</span></span> 
                <span>Comming Soon <span className='num1'>9</span></span>
            </div>
            <CardBox/>
        </div>
    )
}