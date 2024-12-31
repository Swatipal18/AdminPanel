import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

function Taskedit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({
        Protecttile: '',
        Description: '',
        subtitle: '',
        img: '',
    });

    const { register, handleSubmit, setValue } = useForm();
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/Environment/${id}`);
                const taskData = response.data;
                setTask(taskData);
                setValue('Protecttile', taskData.Protecttile);
                setValue('Description', taskData.Description);
                setValue('subtitle', taskData.subtitle);
                setValue('img', taskData.img);
            } catch (error) {
                console.error('Error fetching task data:', error);
            }
        };

        fetchTask();
    }, [id, setValue]);
    const handleSubmitEdit = async (data) => {
        try {

            await axios.put(`http://localhost:5000/Environment/${id}`, data);
            navigate('/showdata');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div className="container my-5 w-50">
            <h2 className="title">Updated form</h2>
            <form onSubmit={handleSubmit(handleSubmitEdit)}>
                <div className="mb-3">
                    <label className="form-label fs-5">Protect Title</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('Protecttile')}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description" className="fs-5">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        {...register('Description')}
                    ></textarea>
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

                <div className="d-flex justify-content-between w-50">
                    <button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={() => navigate('/dashboard')}
                    >
                        Show List
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Taskedit