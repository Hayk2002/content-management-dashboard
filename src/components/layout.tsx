import React, { FunctionComponent } from "react";

interface LayoutProps extends React.PropsWithChildren {
    children: React.ReactNode | React.ReactNode[]
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
    <div className='grid grid-cols-layout h-full'>
        {children}
    </div>
)

export default Layout
