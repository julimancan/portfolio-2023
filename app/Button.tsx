import localFont from "@next/font/local";

const astroFont = localFont({
  src: "./fonts/astro-regular.ttf",
  display: "swap",
});

type GlowingButtonProps = {
  children: React.ReactNode;
};


const GlowingButton = ({children}: GlowingButtonProps) => {
  return (
    <button
      className={`${astroFont.className} hover:animate-heartBeat text-lg relative z-40 text-center bg-primary px-4 py-2 w-fit mx-auto mt-10 rounded-sm shadow-md shadow-gray-800`}
    >
      {children}
    </button>
  );
};

export default GlowingButton;
