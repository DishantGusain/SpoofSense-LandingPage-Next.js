import Link from "next/link";
import Image from 'next/image';

export default function ButtonWithIcon ({ Title, className, ...props }) {
    return (
      <Link href="#" className={`${className} group inline-flex items-center p-[14px] font-semibold sm:text-base text-sm cursor-pointer  rounded-[40px] text-white bg-[#5FA2F7] transition duration-300 no-underline`}
        {...props}>
          {Title}
          <Image src="/images/arrowIcon.png" alt="" className="ml-3 group-hover:scale-[1.15] group-hover:rotate-[270deg] duration-700" width={24} height={24}/>
        </Link>
    );
}