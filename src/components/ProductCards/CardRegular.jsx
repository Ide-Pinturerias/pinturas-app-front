import { NavLink } from 'react-router-dom'

function CardRegular ({ id, name, image, price, prodpackage }) {
  // FUNCTIONS:
  const preventRedirection = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  // COMPONENT:
  return (
        <NavLink
            to={`/products/${id}`}
            className=" flex flex-col items-center justify-between min-w-full min-h-full overflow-hidden bg-bgFocus rounded-3xl shadow-2xl text-clear transition-all hover:outline-[3.5px] cursor-pointer"
        >
            <div className="w-full p-1">
                <img src={image} alt="image" className="w-full h-[18rem] mx-auto rounded-t-3xl " />
                <div className="px-4 pt-3">
                    <h3 className=" text-xl m-0 white">{name}</h3>
                    <strong className="text-[clamp(.5rem,calc(.75rem+1vw),3rem)]">$ {price}</strong>
                </div>
            </div>
            {/* <p className={`relative z-20 inline-flex items-center justify-center mt-4 p-4 w-full max-h-12 h-12 overflow-hidden text-sm uppercase font-medium focus:ring-4 focus:outline-none after:-z-10 after:absolute after:content[''] after:left-0 after:bg-primaryClear after:h-full after:w-full after:transition-all ${isHovered ? 'after:top-0 text-white' : 'after:top-full text-black'}`}>
                Ver producto
            </p> */}
            <div className="flex justify-center w-full mt-3 px-4 pb-4" onClick={preventRedirection}>
                <button className="bg-primaryClear rounded-3xl p-2 text-sm text-white font-bold">AGREGAR AL CARRO</button>
            </div>
        </NavLink>
  )
};

export default CardRegular
