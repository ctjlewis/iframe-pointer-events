import { FC } from "react";

export const TestPanel: FC = ({ children }) => {
  return (
    <div className="w-full h-24">
      <div className="absolute h-12 w-12 bg-blue-400 hover:bg-green-400" />
      <div className="absolute w-full h-24 center bg-opacity-30 bg-red-300 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export const TestButtonContents = () => (
  <div className="w-full h-full center">
    <button
      onClick={() => alert("hello")}
      className="pointer-events-auto text-sm"
    >
      Click Me
    </button>
  </div>
);

interface TestProps {
  mode: "iframe" | "document";
}

export const Test = ({ mode }: TestProps) => {
  return (
    <div className="w-full">
      <h3>{mode}</h3>
      <TestPanel>
        {
          mode === "iframe"
            ? <iframe src="/iframe" className="expanded" />
            : <TestButtonContents />
        }
      </TestPanel>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <p className="text-sm">
        It is not possible to disable pointer events for an absolutely
        positioned <code>iframe</code> and then selectively re-enable them (with
        respect to the parent layout flow) for child elements.
      </p>

      <div className="flex flex-row space-x-8">
        <p>
          When the boxes share the same document, this is achievable. Pointer
          events for the blue box are not blocked by the layout in front of it.
        </p>

        <p>
          With the absolutely positioned <code>iframe</code>, disabling pointer
          events allows them to pass to the blue box, but the button cannot
          capture its own and cannot be interacted with.
        </p>
      </div>

      <Test mode="document" />
      <Test mode="iframe" />
    </main>
  );
}
