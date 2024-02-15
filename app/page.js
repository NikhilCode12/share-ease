"use client";
import { motion } from "framer-motion";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-gray-900 text-white h-[calc(100vh-4rem)]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-full items-center">
          <div className="mx-auto max-w-3xl md:max-w-6xl text-center">
            <motion.h1
              className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Sharing Files Made Easier
              <span className="sm:block"> Faster and Secured Uploads. </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-4 max-w-xl md:max-w-3xl sm:text-lg/relaxed"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Share your files with anyone, anywhere, and at any time. Our
              platform is built for speed and security. Get started today and
              experience the difference.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full rounded-md border border-blue-700 bg-blue-700 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring ring-gray-200 active:text-opacity-75 sm:w-auto"
                href="/files"
              >
                Get Started
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full rounded-md border border-blue-600 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-gray-900 sm:w-auto"
                href="/about"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
