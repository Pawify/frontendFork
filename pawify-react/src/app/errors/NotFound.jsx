import catdog404 from '/catdog404.png'

export  default function  NotFound () {
    return (
      <section className="max-w-md mx-auto my-44 text-lg">
        <div className="flex justify-center">
          <img src={catdog404} alt="cat-dog-404" className="max-w-[80%] relative top-14 sm:top-10" />
        </div>
        <div className="flex flex-col items-center text-center justify-evenly p-20 bg-gray-100 rounded-2xl shadow-[5px_20px_20px_10px_rgba(0,0,0,0.25)]">
          <h1 className="text-6xl text-gray-500 font-bold">404</h1>
          <h2 className="text-2xl font-bold mt-3 mb-3">Page not found</h2>
          <p className="text-gray-600">
            The page you are looking for no longer exists. Perhaps you can return
            back to the site's homepage and see if you can find what you are
            looking for.
          </p>
          <div className="flex items-center gap-8 mt-5">
            <a
              href="/"
              className="bg-yellow-400 text-black py-2 px-5 mt-5 rounded-2xl font-semibold transition-colors hover:bg-yellow-500"
            >
              Back home
            </a>
          </div>
        </div>
      </section>
    );
  };