const NewsLetter = () => {
  return (
    <div className="w-fit mb-8">
      <div className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow bg-gray-100  ">
        <h5 className="mb-2 text-2xl font-bold  text-gray-900 ">
          NEWSLETTER SIGN UP
        </h5>
        <p className="font-normal text-gray-700 ">
          Stay updated with our latest deals & offers by receiving notifications
          on email.
        </p>

        <div className="flex flex-col sm:flex-row pt-10">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            className="flex-1 px-4 py-2 placeholder-gray-600 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 bg-white text-sm text-black"
          />
          <button
            type="submit"
            className="w-fit px-6 py-4 mt-5 text-white text-lg bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap md:font-bold hover:bg-amber-300 hover:text-cyan-700 transition-all duration-200 "
          >
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
