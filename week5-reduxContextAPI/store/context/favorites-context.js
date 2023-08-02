import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorites: (id) => {},
    removeFavorites: (id) => {}
}); // context 생성, 초기값 설정

const FavoritesContextProvider = ({children}) => {
    // context관리에 필요한 로직 

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorites = (id) => {
            setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]); 
    }

    const removeFavorites = (id) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !=id ))

    }

    const value = {
        ids: favoriteMealIds,
        addFavorites: addFavorites,
        removeFavorites: removeFavorites
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}



export default FavoritesContextProvider;