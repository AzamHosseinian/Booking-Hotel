const ConfirmationMessage = () => {
  return (
    <div className="w-full flex items-center bg-secondary/10 rounded-[10px] mt-[30px] py-[20px] px-[15px] sm:py-[40px] sm:px-[30px] sm:bg-white sm:rounded-[24px]">
      {/* Icon (Hidden in Mobile) */}
      <div className="hidden sm:flex flex-shrink-0 ml-4">
        <img
          src="/public/assets/images/notif/accepted.svg"
          alt="Confirmation Icon"
          className="w-[89px] h-[81px]"
        />
      </div>
      {/* Text */}
      <span className="flex-grow text-secondary sm:text-[#2D2D2D] text-[12px] sm:text-[30px] font-bold font-vazir text-right">
        درخواست شما با موفقیت تایید شد.
      </span>
    </div>
  );
};

export default ConfirmationMessage;
