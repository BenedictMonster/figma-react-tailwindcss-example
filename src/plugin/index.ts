figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case "selected":
      console.log("option selected.");
      console.log(msg);

      await figma.clientStorage
        .setAsync("option", msg.option)
        .catch(() => {
          console.log("An error occurred while storing the option.");
        })
        .finally(() => {
          figma.ui.postMessage({ type: "optionStored" });
        });
  }
};
