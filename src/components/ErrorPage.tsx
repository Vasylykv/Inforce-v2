import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <>
      <div className="text-center p-5 text-xl mt-10">
        <h1 className="text-3xl text-slate-900 font-semibold">
          Sorry, an error has occured. Please try again later
        </h1>

        <Link to="/products">
          <button className="h-10 mt-8 mx-auto px-6 font-semibold bg-black text-white block">
            Go to main Page
          </button>
        </Link>
      </div>
    </>
  );
}
