import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Charts = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    try {
      const response = await
        axios.post("http://localhost:5000/Environment", data)
      console.log(response.data);
      reset();
    }
    catch (error) {
      console.log("Error:", error);
    };
  };


  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-12   ">
          <h1 className="text-center">Protect Environment </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="taskTitle" className="form-label">
                Protect Title
              </label>
              <input
                type="text"
                className="form-control"
                id="taskTitle"
                {...register("Protecttile")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskTitle" className="form-label">
                Sub Title
              </label>
              <input
                type="text"
                className="form-control"
                id="taskTitle"
                {...register("subtitle")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                {...register("Description")}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taskTitle" className="form-label">
                Image
              </label>
              <input
                type="url"
                className="form-control"
                id="taskTitle"
                {...register("img")}
                required
              />
            </div>

            <div className='d-flex justify-content-evenly'>
              <button type="submit" className="btn btn-primary mt-3">
                Save Task
              </button>
              <button type="button" className="btn btn-primary mt-3" onClick={() => navigate('/showdata')}>
                show list
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Charts
