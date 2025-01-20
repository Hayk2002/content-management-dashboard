import UsersList from "./UsersList.tsx";

const Sidebar = () => {

    return (
        <aside className='w-full border-r-2 bg-gray-100 overflow-y-auto'>
            <UsersList/>
        </aside>
    )
}

export default Sidebar
