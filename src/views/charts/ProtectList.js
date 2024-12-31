import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ProtectList() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    const showapi = async () => {
        try {
            const response = await axios.get("http://localhost:5000/Environment");
            console.log(response.data);
            if (Array.isArray(response.data)) {
                setTasks(response.data);
            } else {
                console.error("Received data is not an array:", response.data);
            }
        } catch (error) {
            console.log("Error fetching tasks:", error);
        }
    };

    const apidelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/Environment/${id}`);
            showapi();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id) => {
        console.log(id);
        navigate(`/taskedit/${id}`);
    };

    useEffect(() => {
        showapi();
    }, []);

    return (
        <div className="container-fluid causes py-5">
            <h1 className="text-center">Protect Environment</h1>

            <div className="container py-5">
                <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
                    <h1 className="mb-4">The environment needs our protection</h1>
                    <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className="row g-4">
                    {Array.isArray(tasks) && tasks.length > 0 ? (
                        tasks.map((task) => (
                            <div className="col-lg-6 col-xl-3" key={task.id}>
                                <div className="card">
                                    <div className="causes-item">
                                        <div className="causes-img">
                                            <img src={task.img || task.imageUrl} className="img-fluid w-100 imgs" alt="Image" />
                                            <div className="causes-link pb-2 px-3">
                                                <p className="text-white"><i className="fas fa-chart-bar text-primary me-2"></i>Goal: $3600</p>
                                                <p className="text-white"><i className="fa fa-thumbs-up text-primary me-2"></i>Raised: $4000</p>
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                <span>65%</span>
                                            </div>
                                        </div>
                                        <div className="causes-content p-4">
                                            <h4 className="mb-3 ">{task.Protecttile}</h4>
                                            <p className="mb-4">{task.subtitle}</p>
                                            <p className="mb-4">{task.Description}</p>

                                            <div className="card__actions">
                                                <button className="btn btn-primary" onClick={() => handleEdit(task.id)}>
                                                    Edit
                                                </button>
                                                <button className="btn btn-danger ms-3 text-white" onClick={() => apidelete(task.id)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-tasks">
                            <p>No tasks available</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


export default ProtectList