import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <>
      <div className="h-auto bg-gray-100 py-6 flex flex-col justify-center sm:py-12 m-0">
        <div className="sm:max-w-xl sm:mx-auto">
          <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-4">
            <div className="h-48 overflow-visible w-1/2 flex justify-center align-center">
              <img
                className="rounded-3xl shadow-lg w-32 h-48"
                src={data.poster}
                alt=""
              ></img>
            </div>
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold">{data.title}</h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">5</div>
              </div>
              <div>
                <div className="text-lg text-gray-800">{data.year}</div>
              </div>
              <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                {data.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
