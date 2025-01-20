import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Layout from "../components/Layout.tsx";
import Sidebar from "../components/Sidebar.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Layout>
                <Sidebar/>
                <main className='p-2'>
                    <Outlet/>
                </main>
            </Layout>
            <TanStackRouterDevtools/>
            <ReactQueryDevtools/>
        </>
    )
})
