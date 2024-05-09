import { PropsWithChildren, useState } from "react";

export default function HiddenMessage({ children }: PropsWithChildren) {
  const [showMessage, setShowMessage] = useState(false);

  function toggleMessage() {
    setShowMessage((prev) => !prev);
  }

  return (
    <section className="flex flex-col gap-2">
      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage ? <h2 className="text-4xl">{children}</h2> : "X"}
    </section>
  );
}
