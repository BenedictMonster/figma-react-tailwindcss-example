figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "selected") {
    console.log("option selected.");
    console.log(msg);

    await figma.clientStorage.setAsync("option", msg.option);

    figma.ui.postMessage({ type: "optionStored" });
  }
};
