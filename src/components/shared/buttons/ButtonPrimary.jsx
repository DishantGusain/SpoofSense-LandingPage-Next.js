import Link from "next/link";

export default function ButtonPrimary ({ Title, className, ...props }) {
    return (
      <Link href="#" className={`${className} p-[14px] font-semibold sm:text-base text-sm cursor-pointer rounded-[40px] text-white bg-[#5FA2F7] transition duration-300 no-underline`}
        {...props}>
          {Title}
        </Link>
    );
}