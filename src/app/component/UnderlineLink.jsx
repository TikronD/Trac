import Link from "next/link";

const UnderlineLink = ({ href, children, onClick }) => {
  return (
    <Link
      className="group text-black-500 transition-all duration-300 ease-in-out underline-animation"
      href={href}
      onClick={onClick}
    >
      <span className="bg-left-bottom bg-gradient-to-r from-[#EC8400] to-[#dec7a8] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
        {children}
      </span>
    </Link>
  );
};

export default UnderlineLink;
