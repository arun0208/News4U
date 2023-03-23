import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.css'


export const Toolbar = () => {
    const router = useRouter();

    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">NEWS4U</a>

                    <ul class="navbar-nav list-group list-group-horizontal">
                        <li class="nav-item list-group-item">
                            <a class="nav-link active" aria-current="page" href="./">Home</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a class="nav-link" href="./business">Business</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a class="nav-link" href="./sports">Sports</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a class="nav-link" href="./technology">Technology</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a class="nav-link" href="./about">About Me</a>
                        </li>
                        
                    </ul>


                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
};