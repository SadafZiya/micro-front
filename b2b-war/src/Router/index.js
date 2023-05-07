import React, {lazy} from 'react'

const path = ""
export default [
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/Home")),
        path: `${path}`,
    },
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/Home")),
        path: `${path}home`,
    },
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/About")),
        path: `${path}about`,
    },
    {
        isPrivate: false,
        Component: lazy(() => import("../Components/Dashboard")),
        path: `${path}dashboard`,
    }
]