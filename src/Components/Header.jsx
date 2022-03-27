import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

function Header() {
    return(
        <div className="header pt-5 pb-5">
            <div className="container">
                <div className="row row-cols-lg-3 row-cols-1 gy-3">
                    <div className="col">
                        <h1 className="fs-3 fw-bolder">ONE-STOP NEWS</h1>
                        <span className="text-secondary fs-6">All roung news aggregator</span>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">
                        <span className="fs-6 text-secondary float-lg-end">Built as course project by:</span>
                        <br />
                        <div className="float-lg-end d-inline pt-2 me-0">
                            <CircularProgress
                                variant="determinate"
                                size={30}
                                thickness={4}
                                value={100}
                                color="secondary"
                            />
                        </div>
                        <div className="float-lg-end d-inline pt-2 me-0">
                            <CircularProgress
                                variant="determinate"
                                size={30}
                                thickness={4}
                                value={100}
                                color="secondary"
                            />
                        </div>
                        <div className="float-lg-end d-inline pt-2 me-0">
                            <CircularProgress
                                variant="determinate"
                                size={30}
                                thickness={4}
                                value={100}
                                color="secondary"
                            />
                        </div>
                        <div className="float-lg-end d-inline pt-2 me-0">
                            <CircularProgress
                                variant="determinate"
                                size={30}
                                thickness={4}
                                value={100}
                                color="secondary"
                            />
                        </div>
                        <div className="float-lg-end d-inline pt-2 me-0">
                            <CircularProgress
                                variant="determinate"
                                size={30}
                                thickness={4}
                                value={100}
                                color="secondary"
                            />
                        </div>
                        <div className="float-lg-end d-inline pt-2 me-0">
                            <CircularProgress
                                variant="determinate"
                                size={30}
                                thickness={4}
                                value={100}
                                color="secondary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;