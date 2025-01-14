const BookingSummary = () => {
  const reservationDetails = [
    { label: "هتل انتخاب شده:", value: "اسپیناس پالاس تهران" },
    { label: "اتاق انتخاب شده:", value: "دو تخته اسپیشال دبل" },
    { label: "نفر اضافه:", value: "1 نفر" },
    { label: "مدت اقامت:", value: "4 شب" },
    { label: "تاریخ ورود:", value: "1402/08/12 ساعت 14:00" },
    { label: "تاریخ خروج:", value: "1402/08/15 ساعت 12:00" },
    { label: "نیم شارژ ورود:", value: "دارد" },
    { label: "نیم شارژ خروج:", value: "ندارد" },
    {
      label: "آدرس هتل:",
      value: "تهران، بلوار فردوس، خیابان تقدیری شرقی، پلاک 6، واحد 7",
    },
  ];

  const fullWidthLabels = ["تاریخ ورود:", "تاریخ خروج:", "آدرس هتل:"];

  return (
    <div className="flex flex-col text-right bg-white rounded-[10px] md:rounded-[20px] rtl py-[20px] px-[15px] md:p-[45px] font-vazir">
      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {reservationDetails.map((detail, index) => {
          const isFullWidth = fullWidthLabels.includes(detail.label);
          const isAddress = detail.label === "آدرس هتل:";
          return (
            <div
              key={index}
              className={`flex flex-col ${
                isFullWidth
                  ? isAddress
                    ? "col-span-2 md:col-span-3"
                    : "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <div className="flex items-center mb-2">
                <div className="bg-[#FF4500] w-[4px] h-[22px] md:w-[6px] md:h-[29px] rounded-full ml-2 mb-2"></div>
                <p className="text-[#2B2B2B] text-[14px] md:text-[24px] font-bold ml-2 text-right break-words">
                  {detail.label}
                </p>
              </div>

              <div className="flex items-center">
                <div className="bg-[#E7E7E7] w-[4px] md:w-[6px] h-[30px] md:h-[44px] rounded-full ml-2"></div>
                <p className="text-[#5F5F5F] text-[14] md:text-[20px] mt-1 text-right break-words">
                  {detail.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <textarea
        className="w-full h-[162px] md:h-[467px] p-3 border rounded-lg text-right bg-bodyInputBg"
        placeholder="توضیحات تکمیلی رزرو"
      ></textarea>
    </div>
  );
};

export default BookingSummary;
