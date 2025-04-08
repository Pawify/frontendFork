import theme from "../../../constants/themes";

//descomentar onClick

export default function Button({
  children,
  onClick = () => {},
  className = "",
}) {
  const { goldenYellow } = theme.colors;

  return (
    <>
      <button
        // onClick={{ onClick }}
        className={`${className} border-none rounded-[20px] px-5 py-1 mt-4 mb-2 bg-amber-300 hover:bg-amber-400 transition-colors cursor-pointer`}
        style={{ fontSize: "12px" }}
      >
        {children}
      </button>
    </>
  );
}
