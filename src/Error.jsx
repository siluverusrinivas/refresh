import { ErrorBoundary } from "react-error-boundary";

export function ErrorFallback({error,resetErrorBoundary}){
      return (
    <div>
        <h1>"💥 Something exploded!"</h1>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function Buggy() {
  throw new Error("💥 Something exploded!");
}
