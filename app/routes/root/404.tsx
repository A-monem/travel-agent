import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex-center min-h-screen bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary-100 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-dark-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-100 mb-8 max-w-md">
          The page you're looking for doesn't exist. Let's get you back to
          exploring amazing destinations!
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary-100 text-white px-6 py-3 rounded-lg hover:bg-primary-200 transition-colors"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-gray-300 text-dark-100 px-6 py-3 rounded-lg hover:border-primary-100 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
