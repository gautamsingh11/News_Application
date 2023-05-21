import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <div>
            <div class="fixed-top">
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link class="navbar-brand text-secondary" to="/"><marquee><h3>NewsTime</h3></marquee></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">


                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/Business">Business</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/Entertainment">Entertainment</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/Health">Health</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/Science">Science</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/Sports">Sports</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/Technology">Technology</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
};