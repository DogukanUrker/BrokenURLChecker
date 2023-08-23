import { useState } from "react";
import axios from "axios";
function App() {
  const [url, setURL] = useState("");
  const [code, setCode] = useState();
  const check = () => {
    if (url == "") {
      return;
    } else {
      axios
        .post(`http://127.0.0.1:8000/checkURL`, {
          url: `https://${url}`,
        })
        .then(function(response) {
          alert(response.data.responseCode);
        });
    }
  };
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="p-6 bg-zinc-900 rounded-md">
          <input
            type="text"
            placeholder="dogukanurker.com"
            onChange={(e) => setURL(e.target.value)}
            className="w-80 h-12 rounded-md p-2 text-center outline-indigo-700 bg-zinc-800/50 text-white focus:outline-none focus:ring focus:ring-indigo-400 duration-150"
          />
          <button
            onClick={check}
            className="block mx-auto mt-4 bg-indigo-500 p-2 text-base font-medium hover:bg-indigo-600 transition duration-200 rounded-md text-slate-50"
          >
            Check
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
