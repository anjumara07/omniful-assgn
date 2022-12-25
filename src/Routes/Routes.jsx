import { Routes,Route } from "react-router-dom"
import {Home} from '../Components/Home/Home'
import {Nav} from '../Components/Nav/Nav'
import { SideBar2 } from "../Components/SideBar/SideBar2"
import {SideBar} from "../Components/SideBar/SideBar"
import { Hubs } from "../Components/Hubs/Hubs"

export const AllRoutes = () =>{
    return (
        <>
            <Nav />
            <div className="flex">
                <SideBar />
                <SideBar2 />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/hubsManagement" element={<Hubs/>}/>
                </Routes>
            </div>
        </>
    )
}