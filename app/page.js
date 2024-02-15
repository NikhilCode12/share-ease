export default function Home() {
  return (
    <section className="bg-gray-900 text-white h-full">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
        <div className="mx-auto max-w-3xl md:max-w-6xl text-center">
          <h1 className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Sharing Files Made Easier
            <span className="sm:block"> Faster and Secured Uploads. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl md:max-w-3xl sm:text-lg/relaxed">
            Share your files with anyone, anywhere, and at any time. Our
            platform is built for speed and security. Get started today and
            experience the difference.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-md border border-blue-700 bg-blue-700 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring ring-gray-200 active:text-opacity-75 sm:w-auto"
              href="/upload"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded-md border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-900 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
