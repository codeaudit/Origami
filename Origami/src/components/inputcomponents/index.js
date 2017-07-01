import React, { PropTypes } from "react";
import TextInput from "./TextInput/TextInput";
import TextInputShowcaseCard from "./TextInput/TextInputShowcaseCard";
import TextImageInput from "./TextImageInput/TextImageInput";
import TextImageInputShowcaseCard
  from "./TextImageInput/TextImageInputShowcaseCard";
import ImageInput from "./ImageInput/ImageInput";
import ImageInputShowcaseCard from "./ImageInput/ImageInputShowcaseCard";

export function getInputComponentById(
  id,
  props,
  calling_context,
  socketId,
  sendAddr
) {
  let labels = [];
  props.map((label, index) => {
    if (typeof label === "object") {
      label = "";
    }
    labels[index] = label;
  });
  switch (id) {
    case 1:
      return (
        <TextInput
          labels={labels}
          calling_context={calling_context}
          socketId={socketId}
          sendAddr={sendAddr}
        />
      );
    case 2:
      return (
        <TextImageInput
          labels={labels}
          calling_context={calling_context}
          socketId={socketId}
          sendAddr={sendAddr}
        />
      );
    case 3:
      return (
        <ImageInput
          labels={labels}
          calling_context={calling_context}
          socketId={socketId}
          sendAddr={sendAddr}
        />
      );
    default:
      return <div>Null</div>;
  }
}

export function getAllInputComponentsForShowcase(data) {
  return [
    <TextInputShowcaseCard key={Math.random()} demoProps={data} />,
    <TextImageInputShowcaseCard key={Math.random()} demoProps={data} />,
    <ImageInputShowcaseCard key={Math.random()} demoProps={data} />
  ];
}
