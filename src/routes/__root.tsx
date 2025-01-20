import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Layout from "../components/layout.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Layout>
                <div>sidebar</div>
                <Outlet/>
            </Layout>
            <TanStackRouterDevtools/>
        </>
    )
})
