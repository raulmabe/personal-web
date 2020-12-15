import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { AppActionTypes, CHANGE_THEME, WebState } from "../../state/types";

function ToggleTheme() {
  const isDarkMode: boolean = useSelector<WebState, boolean>(
    (state) => state.darkMode
  );

  const changeTheme = useDispatch<Dispatch<AppActionTypes>>();
  return (
    <div className="fixed left-0 bottom-0 h-16 w-16 shadow-xl px-2 py-4 dark:bg-dark-lighter bg-gray-50 text-3xl rounded-tr-2xl dark:border-opacity-0 border-r-2 border-t-2 border-blue-dark dark:border-transparent grid place-items-center">
      {isDarkMode && (
        <FiSun
          className="inline-block cursor-pointer"
          onClick={() =>
            changeTheme({
              type: CHANGE_THEME,
              darkTheme: false,
            })
          }
        />
      )}
      {!isDarkMode && (
        <FiMoon
          className="inline-block cursor-pointer"
          onClick={() =>
            changeTheme({
              type: CHANGE_THEME,
              darkTheme: true,
            })
          }
        />
      )}
    </div>
  );
}

export default ToggleTheme;
