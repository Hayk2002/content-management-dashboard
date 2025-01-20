import SearchIcon from '../assets/search-icon.svg'
import {Link} from "@tanstack/react-router";

interface ISearchBoxProps {
    setInputValue: (value: string) => void
}

const SearchBox = ({ setInputValue } : ISearchBoxProps) => {

    return (
        <div className="pl-8 pr-8 pt-3 pb-3 border-b-2 grid gap-2 grid-cols-search-box">
            <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <div className="w-5 h-5 text-gray-500">
                        <img src={SearchIcon} alt="search"/>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-700 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg"
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <Link to='/contacts/create' className="pl-4 pr-4 py-2 rounded-md bg-white text-blue-500 shadow-md hover:bg-blue-500 hover:text-white transition-all duration-200">
                New
            </Link>
        </div>
    )
}

export default SearchBox
