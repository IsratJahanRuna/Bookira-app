import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data, e) => {
        e.target.reset();
        const bookData = {
            name: data.name,
            writer: data.writer,
            price: data.price,
            imageURL: imageURL
        };
        const URL = `http://localhost:4200/addBook`
        console.log(data);
        fetch(URL,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => console.log('server side response'))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '771a6ac4373eeb1b8dcab5ecd9660ff9');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)} class="row g-3 shadow mt-5 p-5 rounded">
                <div className="col-md-6">
                    <label for="inputEmail4" class="form-label ">Book Name</label>
                    <input type="text" name="name" class="form-control" id="inputEmail4" placeholder="Enter Name" ref={register} />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" class="form-label ">Writer</label>
                    <input type="text" name="writer" class="form-control" id="inputPassword4" placeholder="Enter Writer Name" ref={register} />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" class="form-label ">Add Price</label>
                    <input type="number" name="price" class="form-control" id="inputEmail4" placeholder="Enter Price" ref={register} />
                </div>

                <div className="col-md-6">
                    <label for="formFileMultiple" class="form-label ">Add Photo</label>
                    <input class="form-control" type="file" id="formFileMultiple" onChange={handleImageUpload} />
                </div>

                <div >
                    <input type="submit" className="mt-3 ml-3 btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;