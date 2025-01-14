const Navbar = () => {
  return (
    <div className="h-[145px] bg-[#262630] flex flex-col items-center px-[25px] sm:h-[101px] sm:bg-white sm:flex-row sm:items-center sm:justify-between">
      {/* Mobile Logotype */}
      <div className="flex items-center justify-center sm:hidden">
        <img
          src="/assets/images/navbar/logotypeMobile.svg"
          alt="Logotype Mobile"
          className="mt-[62px] mb-[20px] w-[200px]"
        />
      </div>

      {/* Desktop Logo and Logotype */}
      <div className="hidden sm:flex sm:items-center sm:space-x-[12px] rtl:sm:space-x-reverse">
        {/* Desktop Logo */}
        <img
          src="/assets/images/navbar/Logo.svg"
          alt="ZarvanTrip Logo"
          className="w-[71px]"
        />
        {/* Desktop Logotype */}
        <img
          src="/assets/images/navbar/logotype.svg"
          alt="Logotype"
          className="w-[137px]"
        />
      </div>

      {/* Action Buttons (Mobile) */}
      <div className="bg-[#FFFFFF] flex items-center justify-between rounded-[10px] px-2 py-[9px] sm:hidden">
        {/* Menu Icon on the Right */}
        <button className="flex items-center justify-center w-[35px] h-[35px] bg-[rgba(148,148,148,0.13)] rounded-[6px] ml-[155px]">
          <img
            src="/assets/images/navbar/menuMobile.svg"
            alt="Menu Icon"
            className="w-[20px] h-[20px]"
          />
        </button>
        {/* Icons on the Left */}
        <div className="flex items-center space-x-[10px] rtl:space-x-reverse">
          {/* Call Button */}
          <button className="flex items-center justify-center w-[35px] h-[35px] bg-[rgba(148,148,148,0.13)] rounded-[6px]">
            <img
              src="/assets/images/navbar/callMobile.svg"
              alt="Call Icon"
              className="w-[20px] h-[20px]"
            />
          </button>
          {/* Favorite Button */}
          <button className="flex items-center justify-center w-[35px] h-[35px] bg-[rgba(148,148,148,0.13)] rounded-[6px]">
            <img
              src="/assets/images/navbar/favoriteMobile.svg"
              alt="Favorite Icon"
              className="w-[20px] h-[20px]"
            />
          </button>
          <div className="w-[1.3px] h-[19px] bg-[rgba(38,38,48,0.3)] rounded-full"></div>
          {/* Profile Button */}
          <button className="flex items-center justify-center w-[35px] h-[35px] bg-[rgba(148,148,148,0.13)] rounded-[6px]">
            <img
              src="/assets/images/navbar/profileMobile.svg"
              alt="Profile Icon"
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
      </div>

      {/* Center Section (Desktop Only) */}
      <div className="hidden sm:flex flex-1 items-center justify-center space-x-[65px] rtl:space-x-reverse">
        <a
          href="#"
          className="text-[#262630] text-[20px] font-[Vazir] font-bold"
        >
          صفحه اصلی
        </a>
        <a
          href="#"
          className="text-[#262630] text-[20px] font-[Vazir] font-bold"
        >
          بهترین هتل ها
        </a>
        <a
          href="#"
          className="text-[#262630] text-[20px] font-[Vazir] font-bold"
        >
          درباره ما
        </a>
        <a
          href="#"
          className="text-[#262630] text-[20px] font-[Vazir] font-bold"
        >
          تماس با ما
        </a>
      </div>

      {/* Action Buttons (Desktop Only) */}
      <div className="hidden sm:flex space-x-4 rtl:space-x-reverse">
        {/* First Button */}
        <button className="w-[55px] h-[55px] bg-primary text-white flex items-center justify-center rounded-[10px]">
          <img
            src="/assets/images/navbar/call.svg"
            alt="Call Icon"
            className="w-[25px] h-[25px]"
          />
        </button>
        {/* Second Button */}
        <button className="w-[55px] h-[55px] bg-primary text-white flex items-center justify-center rounded-[10px]">
          <img
            src="/assets/images/navbar/favorite.svg"
            alt="Favorite Icon"
            className="w-[25px] h-[25px]"
          />
        </button>
        {/* Third Button */}
        <button className="h-[54px] px-4 bg-primary text-white flex items-center space-x-2 rounded-[10px]">
          <img
            src="/assets/images/navbar/profile.svg"
            alt="Profile Icon"
            className="w-[25px] h-[25px]"
          />
          <span className="text-[16px] font-[Vazir] font-bold pr-2">
            ورود به حساب
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
