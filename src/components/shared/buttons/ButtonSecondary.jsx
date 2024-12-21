import Link from "next/link";

export default function ButtonSecondary ({ Title, className, ...props }) {
    return (
      <Link className={`${className} pb-1 sm:text-base text-sm cursor-pointer`}
        {...props}>
          {Title}
        </Link>
    );
}