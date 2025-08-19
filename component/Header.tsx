

export default function Header() {
  return (
    <header className="bg-white/60 backdrop-blur-lg h-[50px] sticky top-0 z-50 flex justify-center items-center">
      <div className="w-[90%] sm:w-[70%] text-[#333333] justify-end flex text-sm tracking-normal font-light">
        <div className="flex gap-5">
          <a href="" rel="noopener noreferrer">
            About
          </a>
          <a href="mailto:adlaon.joshuaradz@gmail.com?subject=Inquiry from Portfolio" target="_blank" rel="noopener noreferrer">
            Contact
          </a>

        </div>
      </div>
    </header>
  );
}
