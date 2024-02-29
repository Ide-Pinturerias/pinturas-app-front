import React from "react";
import BookmarksList from "../../components/BookmarksList/BookmarksList";

export default function Bookmarks() {
    return (
        <main className="flex flex-col w-full h-full p-whiteSpaceTop bg-bg">
            <section className="flex items-center justify-center w-full mt-[50px] bg-bg">
                <div className="flex flex-col justify-center m-sides max-w-maxSc w-maxIn">
                    <h1 className="text-[50px] font-bold text-left uppercase">Productos guardados</h1>
                    <BookmarksList />
                </div>
            </section>
        </main>
    )
}