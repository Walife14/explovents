type Props = {};

function LoadingSpinner({}: Props) {
  return (
    <svg
      className="my-8 text-triary mx-auto"
      width="190"
      height="150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="50"
        width="50"
        height="50"
        className="fill-current animate-bounce"
      />
      <rect
        x="70"
        y="50"
        width="50"
        height="50"
        className="fill-current animate-[bounce_1s_infinite_100ms]"
      />
      <rect
        x="140"
        y="50"
        width="50"
        height="50"
        className="fill-current animate-bounce"
      />
    </svg>
  );
}

export default LoadingSpinner;
