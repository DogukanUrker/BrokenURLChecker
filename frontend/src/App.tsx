import { useState } from "react";
import axios from "axios";
import { API } from "./dependencies";

function App() {
  const [url, setURL] = useState("");
  const [code, setCode] = useState(0);
  const check = () => {
    if (url == "") {
      return;
    } else {
      axios
        .post(`${API}checkURL`, {
          url: `https://${url}`,
        })
        .then(function(response) {
          setCode(response.data.responseCode);
        });
    }
  };

  const status = () => {
    if (code == 0) {
      return;
    } else if (code != 404) {
      return (
        <>
          <div>Status:</div>
          <div className="text-green-500">Working</div>
        </>
      );
    } else if (code == 404) {
      return (
        <>
          <div>Status:</div>
          <div className="text-red-500">Broken</div>
        </>
      );
    }
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="p-6 bg-zinc-900 rounded-md">
          <div className="mb-4 w-72 flex justify-between text-white mx-auto text-xl font-bold select-none">
            {status()}
          </div>
          <input
            type="text"
            placeholder="dogukanurker.com"
            onChange={(e) => setURL(e.target.value)}
            className=" w-80 h-12 rounded-md p-2 text-center outline-indigo-700 bg-zinc-800/50 text-white focus:outline-none focus:ring focus:ring-indigo-400 duration-150"
          />
          <button
            onClick={check}
            className="block mx-auto mt-4 bg-indigo-500 p-2 text-base font-medium hover:bg-indigo-600 transition duration-150 rounded-md text-slate-50"
          >
            Check
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
