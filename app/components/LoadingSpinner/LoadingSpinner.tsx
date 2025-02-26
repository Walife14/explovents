type Props = {};

function LoadingSpinner({}: Props) {
  return (
    <div className="flex flex-col items-center gap-y-2 my-10">
      <span className="font-bold text-dark-gray">Loading</span>
      <div className="flex gap-x-4">
        <svg
          className="size-6 animate-spin bg-dark-gray rounded-md"
          viewBox="0 0 24 24"
        ></svg>
        <svg
          className="size-6 animate-spin bg-dark-gray rounded-md"
          viewBox="0 0 24 24"
        ></svg>
        <svg
          className="size-6 animate-spin bg-dark-gray rounded-md"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </div>
  );
}

export default LoadingSpinner;
