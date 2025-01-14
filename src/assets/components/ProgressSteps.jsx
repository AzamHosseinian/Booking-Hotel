const ProgressSteps = () => {
  const steps = [
    {
      step: "گام اول",
      description: "مشخصات فرد",
      icon: "/assets/images/progress/verify.svg",
      textColor: "text-secondary",
      dividerColor: "#1E8E29",
      iconBg: "bg-secondary/20",
    },
    {
      step: "گام دوم",
      description: "بررسی ظرفیت",
      icon: "/assets/images/progress/verify.svg",
      textColor: "text-secondary",
      dividerColor: "#1E8E29",
      iconBg: "bg-secondary/20",
    },
    {
      step: "گام سوم",
      description: "پرداخت وجه",
      icon: "/assets/images/progress/verify.svg",
      textColor: "text-secondary",
      dividerColor: "#1E8E29",
      iconBg: "bg-secondary/20",
    },
    {
      step: "گام چهارم",
      description: "صدور واچر",
      icon: "/assets/images/progress/close.svg",
      textColor: "text-[#5B5B6D]",
      dividerColor: "#A8A8A8",
      iconBg: "bg-[#5B5B6D]/20",
    },
  ];

  return (
    <div className="flex-col justify-center items-center mt-10 rtl font-vazir">
      {/* Main Container */}
      <div className="w-full sm:h-[163px] bg-white rounded-[8px] sm:rounded-[18px] p-2 sm:p-4 flex sm:flex-row-reverse justify-between items-center gap-6">
        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-4 w-full justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-end gap-[30px] w-full"
            >
              {/* Icon */}
              <div
                className={`w-[45px] h-[45px] ${step.iconBg} flex items-center justify-center rounded-[6px]`}
              >
                <img
                  src={step.icon}
                  alt={`${step.step} Icon`}
                  className="w-[29px] h-[29px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-start text-right w-full">
                <span
                  className={`${step.textColor} text-[12px] md:text-[18px] font-bold`}
                >
                  {step.step}
                </span>
                <span
                  className={`${step.textColor} text-[18] md:text-[24px] font-bold pb-4`}
                >
                  {step.description}
                </span>
              </div>

              {/* Row 3: Divider */}

              <div className="absolute bottom-0 left-0 right-16">
                <div
                  style={{
                    height: "2px",
                    width: "90%",
                    background: `repeating-linear-gradient(
          to right,
          ${step.dividerColor} 0,
          ${step.dividerColor} 12px,
          transparent 12px,
          transparent 24px
        )`,
                    borderRadius: "1px",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden w-full text-center">
          <div className="flex flex-col items-center w-full">
            {/* Icon and Step Info */}
            <div className="flex items-center justify-between w-full gap-[10px]">
              {/* Icon */}
              <div className="bg-secondary/20 p-2 rounded-lg flex-shrink-0">
                <img
                  src="/assets/images/progress/verify.svg"
                  alt="Verify Icon"
                  className="w-6 h-6"
                />
              </div>
              {/* Right Content */}
              <div className="flex-1 text-right font-bold font-vazir">
                <span className="text-secondary text-[10px]">گام سوم</span>
                <br />
                <span className="text-secondary text-[12px]">پرداخت وجه</span>
              </div>

              {/* Left Content */}
              <div className="bg-secondary/20 text-secondary text-[10px] text-center px-4 py-2 rounded-[5px] flex-shrink-0 font-vazir">
                تکمیل شد
              </div>
            </div>

            {/* Progress Bar */}
          </div>
        </div>
      </div>
      <div className="sm:hidden flex justify-center items-center mt-4">
        <div className="w-5 h-1 bg-secondary rounded mx-1"></div>
        <div className="w-5 h-1 bg-secondary rounded mx-1"></div>
        <div className="w-5 h-1 bg-[#CBCBCB] rounded mx-1"></div>
        <div className="w-5 h-1 bg-[#CBCBCB] rounded mx-1"></div>
      </div>
    </div>
  );
};

export default ProgressSteps;
