import React, { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Defaultlayout from './defaultlayout/defaultlayout';
import Home from '../component/home';
import Giftcard from '../component/gift/giftCard';
import Order from '../component/order';
import StoreCards from '../component/store/storeCards';
import Store from '../component/store';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Defaultlayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/gift',
                element: <Giftcard/>
            },
            {
                path: '/order',
                element: <Order/>
            },
            {
                path: '/store',
                element: <Store/>
            },
        ]
    },
    {
        path: '*',
        element: <h1>404 Error!</h1>,
    },
])

export default router;