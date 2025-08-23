

export default function Header() {
  return (
    <header className="bg-white/60 backdrop-blur-lg h-[50px] sticky top-0 z-50 flex justify-center items-center">
      <div className="w-[90%] min-[1440px]:w-[70%] text-[#333333] justify-end flex text-sm tracking-normal font-light">
        <div className="flex gap-5">
          <a href="" rel="noopener noreferrer">
            About
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adlaon.joshuaradz@gmail.com&su=Inquiry%20from%20Portfolio" target="_blank" rel="noopener noreferrer">
            Contact
          </a>

        </div>
      </div>
    </header>
  );
}
