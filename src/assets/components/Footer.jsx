import locationIcon from "/assets/images/footer/icons/location.svg";
import callIcon from "/assets/images/footer/icons/call.svg";
import emailIcon from "/assets/images/footer/icons/email.svg";
import upIcon from "/assets/images/footer/icons/up.svg";
import instagramIcon from "/assets/images/footer/icons/socials/instagram.svg";
import linkedInIcon from "/assets/images/footer/icons/socials/linkedIn.svg";
import telegramIcon from "/assets/images/footer/icons/socials/telegram.svg";
import whatsAppIcon from "/assets/images/footer/icons/socials/whatsApp.svg";
import enamadIcon from "/assets/images/footer/icons/Enamad.svg";
import logo from "/assets/images/footer/icons/logo.svg";

// Quick links data
const quickLinksData = [
  {
    title: "دسترسی سریع",
    links: ["صفحه اصلی", "خدمات ما", "تماس با ما", "درباره ما"],
  },
  {
    title: "خدمات شرکت",
    links: ["صفحه اصلی", "خدمات ما", "تماس با ما", "درباره ما"],
  },
  {
    title: "شرکت زروان تریپ",
    links: ["صفحه اصلی", "خدمات ما", "تماس با ما", "درباره ما"],
  },
];

// Contact information data
const contactInfoData = [
  {
    icon: locationIcon,
    text: "آدرس : جردن، خیابان تاج محل، کوچه سوم غربی",
  },
  {
    icon: callIcon,
    text: " شماره همراه : 021- 7738938 ",
  },
  {
    icon: emailIcon,
    text: "پشتیبانی : Zarvantrip@gmail.com",
  },
];

// Social icons data
const socialIcons = [
  { icon: instagramIcon, alt: "Instagram" },
  { icon: telegramIcon, alt: "Telegram" },
  { icon: linkedInIcon, alt: "LinkedIn" },
  { icon: whatsAppIcon, alt: "WhatsApp" },
];

// Icons data (Enamad)
const enamadIconsData = Array(4).fill(enamadIcon);

// Helper functions to keep the code cleaner
const QuickLinksSection = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-bold pb-5">{title}</h3>
      <ul className="space-y-2 text-base">
        {links.map((link, idx) => (
          <li
            key={idx}
            className={`flex items-center gap-2 ${
              ["تماس با ما", "درباره ما"].includes(link) ? "text-alert" : ""
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                ["تماس با ما", "درباره ما"].includes(link)
                  ? "bg-alert"
                  : "bg-white"
              }`}
            />
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactInfoItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-alert p-4 rounded-lg">
        <img src={icon} alt="Contact Icon" className="w-[35px] h-[35px]" />
      </div>
      <p className="bg-footerInputBg w-[460px] py-[22px] px-[21px] rounded-lg">
        {text}
      </p>
    </div>
  );
};

// For the desktop version, we want to display the social icons in two rows, two icons in each row
const socialIconsDesktop = [socialIcons.slice(0, 2), socialIcons.slice(2, 4)];

const DesktopFooter = () => (
  <footer className="bg-primary text-white border-t-[5px] border-alert">
    <div className="mx-auto pt-[86px]">
      <div className="grid grid-cols-1 md:grid-cols-2 pl-[44px]">
        {/* First column: Logo, description, links */}
        <div className="flex flex-col space-y-[30px] font-vazir pr-[16px]">
          {/* Logo and description */}
          <div className="flex items-center space-x-4 rtl">
            <img src={logo} alt="Logo" className="h-20" />
          </div>
          <p className="text-[#D1D1D1] leading-loose text-[20px] pb-16 w-[763px]">
            لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم
            اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم ...
          </p>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickLinksData.map((section, index) => (
              <QuickLinksSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        {/* Second column: Contact info, social networks, go-up button, and icons */}
        <div className="flex flex-col space-y-[99px] pr-[104px]">
          {/* Contact info and social networks */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
            {/* Contact info */}
            <div className="space-y-4 font-vazir text-lg flex-col flex-1 pl-[25px]">
              {contactInfoData.map((item, index) => (
                <ContactInfoItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>

            {/* Social networks */}
            <div className="flex flex-col space-y-[29px]">
              {socialIconsDesktop.map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-[20px] justify-center">
                  {row.map((social, idx) => (
                    <div
                      key={idx}
                      className="bg-footerInputBg p-[32px] rounded-lg flex items-center justify-center"
                    >
                      <img
                        src={social.icon}
                        alt={social.alt}
                        className="w-[45px] h-[45px]"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Go-up button and Enamad (trust) icons */}
          <div className="flex items-center justify-between mt-6 font-vazir gap-11">
            {/* Go-up button */}
            <button className="w-[177px] h-[70px] bg-alert text-white px-[26px] py-[15px] rounded-[10px] flex items-center gap-3">
              <span className="text-[20px]">برو به بالا</span>
              <img src={upIcon} alt="Up" className="w-10 h-10" />
            </button>

            {/* Enamad icons */}
            <div className="flex justify-between gap-5">
              {enamadIconsData.map((icon, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg flex items-center justify-center"
                >
                  <img src={icon} alt="Enamad" className="w-20 h-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="bg-footerInputBg text-white px-8 py-10 mt-8 flex flex-col md:flex-row justify-between items-center font-vazir text-lg">
        <p>
          تمامی حقوق مادی و معنوی این سایت متعلق به شرکت گردشگری و مسافرتی زروان
          تریپ مهر آریا می‌باشد
        </p>
        <p>
          Develop By <span className="text-alert">Azal Hosseinian</span>
        </p>
      </div>
    </div>
  </footer>
);

// Subcomponent for mobile contact items
const MobileContactItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-alert p-4 rounded-[8px]">
        <img src={icon} alt="Contact Icon" className="w-6 h-6" />
      </div>
      <p className="bg-footerInputBg text-[12px] rounded-[8px] p-5 w-full">
        {text}
      </p>
    </div>
  );
};

const MobileFooter = () => (
  <footer className="bg-primary text-white border-t-[5px] border-alert font-vazir">
    <div className="mx-auto pt-8 px-4 flex flex-col space-y-8">
      {/* Row 1: Logo */}
      <div className="flex justify-right">
        <img src={logo} alt="Logo" className="h-14" />
      </div>

      {/* Row 2: Description text */}
      <p className="text-[#D1D1D1] text-base leading-relaxed">
        لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم ...
      </p>

      {/* Row 3: Trust icons (Enamad) */}
      <div className="flex justify-center gap-[14px]">
        {enamadIconsData.map((icon, idx) => (
          <div
            key={idx}
            className="bg-white p-[14px] rounded-[10px] flex items-center justify-center"
          >
            <img src={icon} alt="Enamad" className="w-[51px] h-[61px]" />
          </div>
        ))}
      </div>

      {/* Row 4: Go-up button (icon only) and social icons */}
      <div className="flex justify-center items-center gap-4">
        {/* Go-up button with icon only */}
        <button className="bg-alert p-4 rounded-[8px] flex items-center justify-center">
          <img src={upIcon} alt="Up" className="w-6 h-6" />
        </button>

        {/* Social media icons (all in one row) */}
        <div className="flex gap-[16px] w-full">
          {socialIcons.map((social, index) => (
            <div
              key={index}
              className="bg-footerInputBg p-[18px] rounded-[8px] flex items-center justify-center"
            >
              <img
                src={social.icon}
                alt={social.alt}
                className="w-[25px] h-[25px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 5: Contact info (location, phone, email) */}
      <div className="flex flex-col space-y-4">
        {contactInfoData.map((item, index) => (
          <MobileContactItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>

      {/* Row 6: Links in three columns */}
      <div className="grid grid-cols-3 gap-4">
        {quickLinksData.map((section, index) => (
          <div key={index}>
            <h3 className="text-[14px] font-bold pb-2">{section.title}</h3>
            <ul className="space-y-2 text-[12px]">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-2 ${
                    ["تماس با ما", "درباره ما"].includes(link)
                      ? "text-alert"
                      : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      ["تماس با ما", "درباره ما"].includes(link)
                        ? "bg-alert"
                        : "bg-white"
                    }`}
                  />
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Final row: bottom bar */}
    <div className="bg-footerInputBg text-white px-4 py-5 mt-4 text-sm flex flex-col">
      <p className="text-center pb-[15px]">
        Develop By <span className="text-alert">Azal Hosseinian</span>
      </p>
      <p className="text-center pb-[40px]">
        تمامی حقوق این وبسایت متعلق به زروان تریپ می باشد.
      </p>
      <div className="mx-auto w-[119px] h-[4px] bg-white rounded-full"></div>
    </div>
  </footer>
);

const Footer = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block">
        <DesktopFooter />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;
