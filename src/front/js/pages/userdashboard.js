import React from "react";
import "../../styles/userdashboard.scss";

export const User_Dashboard = () => {
	return (
		<div className="container">
			<div className="main row">
				<div className="col md-9">
					<div className="row gutters-sm">
						<div className="col-md-4 mb-3">
							<div className="card">
								<div className="card-body">
									<div className="d-flex flex-column align-items-center text-center">
										<img
											src="https://bootdey.com/img/Content/avatar/avatar7.png"
											alt="Admin"
											className="rounded-circle"
											width="150"
										/>
										<div className="mt-3">
											<button className="btn btn-outline-primary">Change Picture</button>
											<p className="text-secondary mb-1">The Bookmark Keeper</p>
											<p className="text-muted font-size-sm">Change Password</p>
											<button className="btn btn-outline-primary">Logout</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="card mb-3">
						<div className="card-body">
							<div className="row">
								<div className="col-sm-5">
									<p className="mb">My Carrer Path</p>
									<button className="btn btn-card">⭐Front-end Developer</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};