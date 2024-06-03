import React, { useState, useEffect } from 'react'

const Paginated = ({ thisPage, totalPages, pageChange }) => {
  const totalPagesToShow = 7
  const [startPage, setStartPage] = useState(1)
  const [endPage, setEndPage] = useState(
    Math.min(totalPages, totalPagesToShow)
  )

  useEffect(() => {
    let newStartPage = Math.max(1, thisPage - Math.floor(totalPagesToShow / 2))
    const newEndPage = Math.min(totalPages, newStartPage + totalPagesToShow - 1)

    if (newEndPage - newStartPage < totalPagesToShow - 1) {
      newStartPage = Math.max(1, newEndPage - totalPagesToShow + 1)
    }

    setStartPage(newStartPage)
    setEndPage(newEndPage)
  }, [thisPage, totalPagesToShow, totalPages])

    const renderPageNumbers = () => {
        const pageNumbers = []

        let spacesToShow = 3
        if (thisPage >= 3 && thisPage <= totalPages - 3) {
            spacesToShow = 7
        } else if (thisPage === 2 || thisPage === totalPages - 2) {
            spacesToShow = 6
        }

        let startPageNumber = Math.max(1, thisPage - Math.floor((spacesToShow - 1) / 2))
        let endPageNumber = Math.min(totalPages, startPageNumber + spacesToShow - 1)

        if (startPageNumber > 1) {
            pageNumbers.push(<li key={1}><span className="px-3">1</span></li>)
            if (startPageNumber > 2) {
                pageNumbers.push(<li key="ellipsis-start"><span className="px-3">...</span></li>)
            }
        }

        for (let i = startPageNumber; i <= endPageNumber; i++) {
            pageNumbers.push(
                <li key={i}>
                    <button
                        className={`px-6 py-2 mx-0 font-bold text-white bg-gray-700 ${thisPage === i
                                ? 'bg-gray-900'
                                : 'bg-gray-700 hover:bg-purple-700 transform transition-transform hover:scale-110'
                            }`}
                        onClick={() => pageChange(i)}
                        disabled={thisPage === i}
                    >
                        {i}
                    </button>
                </li>
            )
        }

        if (endPageNumber < totalPages) {
            if (endPageNumber < totalPages - 1) {
                pageNumbers.push(<li key="ellipsis-end"><span className="px-3">...</span></li>)
            }
            pageNumbers.push(<li key={totalPages}><span className="px-3">{totalPages}</span></li>)
        }

        return pageNumbers
    }

  const pageNumbers = renderPageNumbers()

  return (
    <div className="my-11">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 mx-2.5 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transform transition-transform hover:scale-110 ${
                thisPage === 1
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-100 transform transition-transform hover:scale-110'
              } `}
              onClick={() => pageChange(1)}
              disabled={thisPage === 1}
            >
              Primera página</button>
          </li>
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transform transition-transform hover:scale-110 ${
                thisPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-100'
              }`}
              onClick={() => { pageChange(thisPage - 1); console.log('no deberia funcionar!') }}
              disabled={thisPage === 1}
            >
              Previous
            </button>
          </li>
          {pageNumbers}
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transform transition-transform hover:scale-110 ${
                thisPage === totalPages
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-100 transform transition-transform hover:scale-11'
              }`}
              onClick={() => pageChange(thisPage + 1)}
              disabled={thisPage === totalPages}
            >
              Next
            </button>
          </li>
          <li>
            <button
              className={`flex items-center justify-center px-4 h-10 mx-2.5 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transform transition-transform hover:scale-110 ${
                thisPage === totalPages
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-100 transform transition-transform hover:scale-11'
              }`}
              onClick={() => pageChange(totalPages)}
              disabled={thisPage === totalPages}
            >
              Última página
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Paginated
