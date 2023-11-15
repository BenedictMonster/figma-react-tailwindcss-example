import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "./navigation";

function Page1({}) {
  const [option, setOption] = useState("");

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    if (option) {
      window.parent.postMessage(
        {
          pluginMessage: {
            type: "selected",
            option: option,
          },
        },
        "*"
      );
    }

    window.onmessage = (event) => {
      const msg = event.data.pluginMessage;
      switch (msg.type) {
        case "optionStored":
          console.log("optionStored");
          console.log(msg);
      }
    };
  }, [option]);

  return (
    <div>
      <Navigation />
      <h1 className="text-xl font-bold">Page 1</h1>
      <label className="block">
        <span className="text-gray-700">Select</span>
        <select
          name="reference-language"
          id="reference-language"
          onChange={handleOptionChange}
          className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </label>
    </div>
  );
}

export default Page1;
