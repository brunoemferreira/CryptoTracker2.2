import React from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <main>
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <p className="text-center">
            <Link
              to="/"
              className="d-flex align-items-center justify-content-center"
            >
              <svg
                className="icon icon-xs me-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Back to homepage
            </Link>
          </p>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center">
                <img
                  src="/img/favicon/mstile-150x150.png"
                  alt="Beholder"
                  width={64}
                />
              </div>
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h1 className="mb-0 h3">Sign in to our platform</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
