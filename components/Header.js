import Image from "next/image";
import AirbnbLogo from "../assets/AirbnbLogo.webp";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
function Header() {
  const [searchInput, setSearchInput] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const resetInput = () => {
    setSearchInput("");
  };
  return (
    <>
      <header className="sticky h-20 top-0 z-50 grid grid-cols-3 bg-white shadow-md px-7 lg:px-20 py-3 sm:px-20 md:px-10 ">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src={AirbnbLogo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            type="text"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Start your search"
            className="pl-5 bg-transparent outline-none  flex-grow text-sm text-gray-600 placeholder-gray-400"
          />
          <SearchIcon className="hidden md:inline-flex h-10 bg-red-500 rounded-full p-2 text-white cursor-pointer mx-4" />
        </div>
        <div className="flex space-x-4 items-center justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
        {searchInput && (
          <>
            <div className="flex flex-col col-span-3 mx-auto items-center bg-white mt-4 rounded-2xl">
              <DateRangePicker
                className="mt-2 p-4"
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
              <div className="flex space-x-60 border-b mb-4">
                <h2 className="text-2xl flex-grow font-semibold">
                  Number of Guests
                </h2>
                <div className="flex items-center">
                  <UsersIcon className="h-5" />
                  <input
                    type="number"
                    value={noOfGuests}
                    onChange={(e) => setNoOfGuests(e.target.value)}
                    min={1}
                    className="w-12 pl-4 text-lg outline-none text-red-400"
                  />
                </div>
              </div>
              <div className="flex space-x-40 text-xl mb-5 ">
                <button
                  className="flex-grow text-gray-500"
                  onClick={resetInput}
                >
                  Cancel
                </button>
                <button className="flex-grow text-red-400">Search</button>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
