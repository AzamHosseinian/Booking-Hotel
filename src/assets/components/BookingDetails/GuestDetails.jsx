import React from "react";

const GuestDetails = () => {
  const trackingCode = "0326464956";
  const personalInfo = [
    { label: "نام:", value: "پرهام" },
    { label: "نام خانوادگی:", value: "رحیمی" },
    { label: "کد ملی:", value: "0024665232" },
    { label: "شماره موبایل:", value: "09912365230" },
  ];

  const rooms = [
    {
      roomName: "مسافران - اتاق 1",
      guests: [
        { name: "محمد حسین رسولی", status: "0024773321" },
        { name: "ساشا آذرخش آلوچه", status: "وارد نشده" },
      ],
    },
    {
      roomName: "مسافران - اتاق 2",
      guests: [
        { name: "محمد حسین رسولی", status: "0024773321" },
        { name: "ساشا آذرخش آلوچه", status: "وارد نشده" },
      ],
    },
  ];

  const additionalGuests = {
    sectionName: "مسافران اضافه",
    guests: [
      {
        name: "محمد حسین لطفی پور",
        status: "0024332652",
        color: "bg-alert/20 text-alert",
      },
    ],
  };

  return (
    <div className="flex flex-col text-right rtl font-vazir">
      {/* Tracking Code Section */}
      <div className="flex items-center justify-between bg-white pl-[15px] py-[15px] sm:pl-[30px] sm:py-[29px] rounded-[10px] md:rounded-[20px] mb-4 rtl">
        <div className="flex items-center">
          <div
            className="hidden sm:block"
            style={{
              backgroundColor: "#2B2B2B",
              width: "6px",
              height: "52px",
              borderRadius: "15px",
            }}
          ></div>
          <p className="text-[#2B2B2B] font-bold text-[12px] md:text-[24px] pr-[15px] md:pr-[40px]">
            کد پیگیری:
          </p>
        </div>
        <div className="flex items-center">
          {/* Copy Button Container */}
          <div className="bg-primary text-white rounded-[6px] md:rounded-[10px] flex justify-center items-center md:p-[12px]">
            <button className="p-[8px] h-[35px] sm:h-[55px] w-full flex items-center justify-center">
              <img
                src="/public/assets/images/info/copy.svg"
                alt="Copy Icon"
                className="w-5 h-5 md:w-10 md:h-10"
              />
            </button>
          </div>
          {/* Tracking Code Button */}
          <button className="h-[35px] md:h-[55px] flex items-center justify-center">
            <span className="py-[10px] px-[27px] md:py-[25px] md:px-[73px] bg-alert/20 text-alert rounded-[6px] md:rounded-[12px] text-[12px] md:text-[20px] font-bold mr-3">
              {trackingCode}
            </span>
          </button>
        </div>
      </div>

      <div className="bg-white pl-[15px] md:pl-[30px] py-[29px] rounded-[10px] md:rounded-[20px] rtl">
        {/* Personal Information Section */}
        <div className="mb-6">
          <div className="flex items-center mb-6">
            <div className="bg-[#FF1632] w-[3px] md:w-[6px] h-[45px] md:h-[70px] rounded-[15px]"></div>
            <p className="text-white bg-danger py-[15px] px-[22px] md:py-[22px] md:px-[35px] rounded-[12px] font-bold md:text-[24px] text-[12px] mr-[15px] md:mr-[40px]">
              اطلاعات رزرو کننده
            </p>
          </div>

          {/* Personal Info Grid for md and larger screens */}
          <div className="hidden md:grid gap-y-5 pr-[46px] text-right">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-bodyInputBg rounded-[12px]"
              >
                {/* Label: Hidden on md and smaller screens */}
                <p className="text-[#2B2B2B] font-bold text-[20px] py-[25px] px-[25px] hidden md:block">
                  {info.label}
                </p>
                {/* Value: Always visible */}
                <p className="bg-primary text-white text-[20px] w-full md:w-[346px] h-[75px] rounded-[12px] flex items-center justify-center">
                  {info.value}
                </p>
              </div>
            ))}
          </div>

          {/* Personal Info Values Only for md and smaller screens */}
          <div className="md:hidden pr-[15px] text-right">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-bodyInputBg rounded-[12px] mb-2 p-4"
              >
                {/* Value: Takes full width on small screens */}
                <p className="bg-bodyInputBg text-primary text-[12px] font-bold w-full rounded-[12px] flex items-center justify-start">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rooms Section */}
        {rooms.map((room, roomIndex) => (
          <div key={roomIndex} className="mb-6">
            <div className="flex items-center mb-6">
              <div className="bg-[#262630] w-[3px] md:w-[6px] h-[45px] md:h-[70px] rounded-[15px]"></div>
              <p className="text-white bg-primary md:py-[22px] px-[22px] py-[15px] md:px-[35px] rounded-[12px] font-bold text-[12px] md:text-[24px] mr-[15px] md:mr-[40px]">
                {room.roomName}
              </p>
            </div>

            {/* Layout for md and larger screens */}
            <div className="hidden md:grid md:grid-cols-2 gap-x-[63px] gap-y-5 pr-[46px] text-right">
              {/* Header Row */}
              <div className="bg-bodyInputBg rounded-[12px] flex items-center justify-center h-[75px] text-[20px] font-bold text-[#2B2B2B]">
                نام مسافران اصلی
              </div>
              <div className="bg-bodyInputBg rounded-[12px] flex items-center justify-center h-[75px] text-[20px] font-bold text-[#2B2B2B]">
                کد ملی مسافر
              </div>

              {/* Guest Rows */}
              {room.guests.map((guest, guestIndex) => (
                <React.Fragment key={guestIndex}>
                  {/* For md and larger screens */}
                  <div className="bg-primary rounded-[12px] flex items-center justify-center h-[75px] text-[12px] md:text-[20px] text-white font-bold font-vazir">
                    {guest.name}
                  </div>
                  <div
                    className={`rounded-[12px] flex items-center justify-center h-[75px] font-bold text-[12px] md:text-[20px] ${
                      guest.status === "وارد نشده"
                        ? "bg-danger text-white"
                        : "bg-primary text-white"
                    }`}
                  >
                    {guest.status}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Layout for smaller screens */}
            <div className="md:hidden pr-[15px] text-right text-[12px]">
              {room.guests.map((guest, guestIndex) => (
                <div key={guestIndex} className="mb-4">
                  <div className="flex flex-col bg-primary rounded-[12px] p-4 mb-2">
                    <span className="text-white font-bold font-vazir">
                      {guest.name}
                    </span>
                  </div>
                  <div
                    className={`flex flex-col rounded-[12px] p-4 ${
                      guest.status === "وارد نشده"
                        ? "bg-danger text-white"
                        : "bg-primary text-white"
                    } mb-2`}
                  >
                    <span className="font-bold">{guest.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Guests Section */}
        <div className="mb-6">
          <div className="flex items-center mb-6">
            <div className="md:bg-primary bg-alert w-[3px] md:w-[6px] h-[45px] md:h-[70px] rounded-[15px]"></div>
            <p className="text-white md:bg-primary bg-alert py-[15px] px-[22px] md:py-[22px] md:px-[35px] rounded-[12px] font-bold md:text-[24px] text-[12px] mr-[15px] md:mr-[40px]">
              {additionalGuests.sectionName}
            </p>
          </div>

          {/* Layout for md and larger screens */}
          <div className="hidden md:grid md:grid-cols-2 gap-x-[63px] gap-y-5 pr-[46px] text-right">
            {/* Header Row */}
            <div className="bg-bodyInputBg rounded-[12px] flex items-center justify-center h-[75px] text-[20px] font-bold text-[#2B2B2B]">
              نام مسافران اضافه
            </div>
            <div className="bg-bodyInputBg rounded-[12px] flex items-center justify-center h-[75px] text-[20px] font-bold text-[#2B2B2B]">
              کد ملی مسافر
            </div>

            {/* Guest Rows */}
            {additionalGuests.guests.map((guest, index) => (
              <React.Fragment key={index}>
                <div className="rounded-[12px] flex items-center justify-center h-[75px] bg-alert/20 text-alert font-bold font-vazir">
                  {guest.name}
                </div>
                <div className="rounded-[12px] flex items-center justify-center h-[75px] bg-alert/20 text-alert font-bold">
                  {guest.status}
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Layout for smaller screens */}
          <div className="md:hidden pr-[15px] text-right text-[12px]">
            {additionalGuests.guests.map((guest, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col bg-alert/20 rounded-[12px] p-4 mb-2">
                  <span className="text-alert font-bold font-vazir ">
                    {guest.name}
                  </span>
                </div>
                <div className="flex flex-col bg-alert/20 rounded-[12px] p-4 mb-2">
                  <span className="font-bold text-alert">{guest.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestDetails;
