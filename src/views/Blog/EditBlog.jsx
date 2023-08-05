import React from "react";
import Swal from 'sweetalert2';

const EditBlog = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const idUser = user?.id;
    const userName = (user?.name + " " + user?.lastName)
    const [inputs, setinputs] = useState({
        title: '',
        image: '',
        description: ''
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if (event.target.type === 'file') {
            setinputs({
                ...inputs,
                image: event.target.files[0]
            })
        }
        else {
            setinputs({
                ...inputs,
                [property]: value
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const blog = new FormData();
        blog.append("title", inputs.title);
        blog.append("description", inputs.description);
        blog.append("image", inputs.image)

        const data = {
            blog,
            idUser
        }
        console.log('blog a enviar', blog)
        await postPost(blog)(dispatch).then(response => {
            console.log('respuesta en el submit', response)
            if (response.status === 201) {
                Swal.fire('Blog creado');
            } else {
                Swal.fire('Hubo un error al crear el post')
            }
        });
    }


    return (
        <div>
            <div className="flex flex-col justify-start">
                <div className="flex justify-around">
                    <form className="blog-dash flex flex-col border border-solid border-primary rounded-xl mt-2 mb-2" onSubmit={handleSubmit}
                        encType="multipart/form-data">
                        <h1 className="flex justify-center font-extrabold text-3xl text-primary py-8">Crea una entrada de Blog!</h1>
                        <div className=" flex m-8 mb-0">
                            <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Título</label>
                            <input className="bg-formBg rounded-r-lg w-72 h-8" type='text' name='title' onChange={handleChange} />
                        </div>
                        <div className=" flex m-8 mb-0">
                            <label className="bg-quaternary rounded-l-xl w-40 h-8  flex items-center justify-center">Imágen</label>
                            <input
                                onChange={handleChange} className="bg-formBg rounded-r-lg w-72 h-8" type='file' accept='image/*' name='image' />
                        </div>
                        <div className=" flex m-8 mb-0 h-40">
                            <label htmlFor="" className="bg-quaternary rounded-l-xl w-40 h-40  flex items-center justify-center">Cuerpo</label>
                            <input className="bg-formBg rounded-r-lg w-72 h-50" type='textarea' name='description' onChange={handleChange} />
                        </div>
                        <button
                            className="rounded-xl w-4/5 h-12 hover:translate-y-1.5 bg-primary text-tertiary border border-solid border-black m-5 font-bold flex items-center justify-center"
                            type="submit"
                        >
                            <h2
                                className="text-primary uppercase font-bold flex items-center justify-center"
                                style={{ color: "white", fontWeight: "bold" }}
                            >
                                MODIFICAR POST
                            </h2>
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default EditBlog;