import { useState, useEffect } from 'react';
import { afterPseudo } from '@styles';

const Paginated = ({ thisPage, totalPages, pageChange }) => {
    const [pages, setPages] = useState([]);

    const buttonClass = `hover:bg-gray-200 relative bg-transparent after:w-full after:h-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2`;
    const currentButtonClass = 'bg-primaryClear text-primaryVisible';
    const buttonBaseClass = 'size-[3rem] mx-[.25rem] rounded-lg font-bold';

    useEffect(() => {
        const renderPageNumbers = () => {
            const pagesArray = [];
            const startPage = Math.max(1, thisPage - 1);
            const endPage = Math.min(totalPages, thisPage + 1);

            if (startPage > 1) {
                pagesArray.push(
                    <li key={1}>
                        <button
                            className={`${buttonBaseClass} ${thisPage === 1 ? currentButtonClass : `${afterPseudo} ${buttonClass}`}`}
                            onClick={() => pageChange(1)}
                            disabled={thisPage === 1}
                        >
                            1
                        </button>
                    </li>
                );
                if (startPage > 2) {
                    pagesArray.push(
                        <li key="ellipsis-start">
                            <div className="flex items-center justify-center h-[3rem] w-auto mx-[.25rem]">
                                <span className="mb-[.45em]">...</span>
                            </div>
                        </li>
                    );
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pagesArray.push(
                    <li key={i}>
                        <button
                            className={`${buttonBaseClass} ${thisPage === i ? currentButtonClass : `${afterPseudo} ${buttonClass}`}`}
                            onClick={() => pageChange(i)}
                            disabled={thisPage === i}
                        >
                            {i}
                        </button>
                    </li>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pagesArray.push(
                        <li key="ellipsis-end">
                            <div className="flex items-center justify-center h-[3rem] w-auto mx-[.25rem]">
                                <span className="mb-[.45em]">...</span>
                            </div>
                        </li>
                    );
                }
                pagesArray.push(
                    <li key={totalPages}>
                        <button
                            className={`${buttonBaseClass} ${thisPage === totalPages ? currentButtonClass : `${afterPseudo} ${buttonClass}`}`}
                            onClick={() => pageChange(totalPages)}
                            disabled={thisPage === totalPages}
                        >
                            {totalPages}
                        </button>
                    </li>
                );
            }
            return pagesArray;
        };

        setPages(renderPageNumbers());
    }, [thisPage, totalPages]);

    return (
        <div className="flex items-center justify-center my-11">
            <nav aria-label="Page navigation example">
                <ol className="flex items-center text-base">
                    <li>
                        <button
                            className={`${buttonBaseClass} ${thisPage === 1 ? currentButtonClass : ` ${buttonClass}`}`}
                            onClick={() => pageChange(thisPage - 1)}
                            disabled={thisPage === 1}
                        >
                            &lt;
                        </button>
                    </li>
                    {pages}
                    <li>
                        <button
                            className={`${buttonBaseClass} ${thisPage === totalPages ? currentButtonClass : `${buttonClass}`}`}
                            onClick={() => pageChange(thisPage + 1)}
                            disabled={thisPage === totalPages}
                        >
                            &gt;
                        </button>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Paginated;
