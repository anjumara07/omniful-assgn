import './Hubs.css'
import {Card2} from '../Card2/Card2'

export const Hubs = ()=>{
    return (
        <div>
            <div className='flexbox'>
                <div>
                    <div className='head'>Hubs</div>
                    <div className="headings">
                        <span className='clicked'>All Hubs<span className='num'>3</span></span> 
                    </div>
                </div>
                <div className='new'>+ Create New</div>
            </div>
            <Card2/>
        </div>
    )
}