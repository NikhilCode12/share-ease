import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="lg:grid h-full lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1621414305251-cb7a288e7b15?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-70 blur-sm"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Great, you are back
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Share your files with ease. Just few secured clicks and you are
              done.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="0ptTM7js1LRNIAHonm3lla_qZ1FibjKOsRJ_gr1"
                    x1="14.242"
                    x2="30.172"
                    y1="8.358"
                    y2="38.695"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#2aa4f4"></stop>
                    <stop offset="1" stopColor="blue"></stop>
                  </linearGradient>
                  <path
                    fill="url(#0ptTM7js1LRNIAHonm3lla_qZ1FibjKOsRJ_gr1)"
                    d="M48,26c0,6.63-5.37,12-12,12c-1.8,0-24.66,0-26.5,0C4.25,38,0,33.75,0,28.5	c0-4.54,3.18-8.34,7.45-9.28C9.15,12.21,15.46,7,23,7c5.51,0,10.36,2.78,13.24,7.01C42.76,14.13,48,19.45,48,26z"
                  ></path>
                  <path
                    d="M21,24.441v7c0,1.105,0.895,2,2,2h2c1.105,0,2-0.895,2-2v-7h2.648c1.336,0,2.006-1.616,1.061-2.561	l-5.295-5.295c-0.781-0.781-2.047-0.781-2.828,0l-5.295,5.295c-0.945,0.945-0.276,2.561,1.061,2.561H21z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M21.5,23.941v7.5c0,0.828,0.672,1.5,1.5,1.5h2c0.828,0,1.5-0.672,1.5-1.5v-7.5h3.021	c0.938,0,1.408-1.134,0.745-1.798l-5.129-5.13c-0.627-0.627-1.644-0.627-2.271,0l-5.129,5.13c-0.663,0.663-0.194,1.798,0.745,1.798	H21.5z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#fff"
                    d="M18.607,23.441H22v8c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8h3.393	c0.54,0,0.81-0.653,0.428-1.034l-4.964-4.964c-0.473-0.473-1.241-0.473-1.714,0l-4.964,4.964	C17.797,22.788,18.067,23.441,18.607,23.441z"
                  ></path>
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                Welcome back
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Share your files with ease. Just few secured clicks and you are
                done.
              </p>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
