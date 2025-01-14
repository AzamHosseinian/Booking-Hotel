import GuestDetails from "./GuestDetails";
import BookingSummary from "./BookingSummary";

const BookingPage = () => {
  return (
    <div className="mx-auto my-6 bg-transparent rounded-[20px] grid gap-6 rtl sm:grid-cols-2">
      {/* Row 1: GuestDetails */}
      <div className="col-span-2 sm:col-span-1">
        <GuestDetails />
      </div>

      {/* Row 2: BookingSummary */}
      <div className="col-span-2 sm:col-span-1">
        <BookingSummary />
      </div>

      {/* Row 3: FinalActionRow */}
      <div className="col-span-2">
        <FinalActionRow />
      </div>
    </div>
  );
};

// FinalActionRow Component
const FinalActionRow = () => {
  return (
    <div className="bg-white p-[20px] rounded-[10px] md:rounded-[15px] rtl font-vazir">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-[#2D2D2D] font-bold text-[12px] md:text-[24px] text-right flex-1 bg-bodyInputBg md:bg-transparent p-4 md:p-0 rounded-[10px] md:rounded-none">
          * مشتری گرامی، با کلیک روی دکمه سبز می‌توانید ادامه فرآیند را دنبال
          کنید.
        </p>

        <div className="flex items-center justify-between bg-secondary/25 md:bg-transparent p-4 md:p-0 rounded-[10px] md:rounded-none w-full md:w-auto">
          <span className="font-bold text-[14px] md:hidden text-secondary">
            قیمت نهایی:
          </span>

          <p className="font-bold text-[14px] md:text-[24px] text-secondary text-left">
            24,500,000 تومان
          </p>
        </div>
        <button className="bg-[#1E8E29] text-white font-bold text-[12px] md:text-[24px] px-[20px] py-[18px] rounded-[10px] w-full md:w-auto">
          تایید شده - پرداخت نهایی
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
