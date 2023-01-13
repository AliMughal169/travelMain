
import Hotel from './views/Hotel'
import Flight from './views/Flight'
import Contact from './views/ContactUs'
import Login from './views/Login'
import Home from './views/Home'

const allRoutes=[

    {
        path: "/login",
        name: "Login",
        icon: "nc-icon nc-chart-pie-35",
        component: Login,
        showInBar: false,
        layout: "/unauth"
    },
    {
        path:"/home",
        name:"Home",
        icon:"",
        component:Home,
        showInBar:true,
        layout:"/user"
    },
    {
        path:"/flights",
        name:"Flights",
        icon:"",
        component:Flight,
        showInBar:true,
        layout:"/user"
    },
    {
        path:"/hotels",
        name:"Hotels",
        icon:"",
        component:Hotel,
        showInBar:true,
        layout:"/user"
    },
    {
        path:"/contactus",
        name:"Contact Us",
        icon:"",
        component:Contact,
        showInBar:true,
        layout:"/user"
    },
    
    
    

]
export default allRoutes