import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookmarksList from "@components/BookmarksList/BookmarksList";
import { getFavorites } from "@redux/actions/Favorites/getFavorites";

export default function Bookmarks() {

    // GLOBAL STATES:
    const user = useSelector((state) => state.user);
    const favorites = useSelector((state) => state.allFavorites);

    // CONST:
    const dispatch = useDispatch();

    // LIFE CYCLES:
    useEffect(() => {
        user.id && dispatch(getFavorites(user.id));
    }, [user, dispatch])

    // COMPONENT:
    return (
        <main className="flex flex-col w-full h-full p-whiteSpaceTop bg-bg">
            <section className="flex items-center justify-center w-full mt-[50px] bg-bg">
                <div className="flex flex-col justify-center m-sides max-w-maxSc w-maxIn">
                    <h1 className="text-[50px] font-bold text-left uppercase">Productos guardados</h1>
                    <BookmarksList favorites={favorites} />
                </div>
            </section>
        </main>
    )
}