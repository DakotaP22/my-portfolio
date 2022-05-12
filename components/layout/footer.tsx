import { NextPage } from "next"

interface props {

}

const Footer: NextPage<props> = ({}) => {
  return (
    <div className="flex justify-end bg-dark_blue text-white gap-5 pr-5 h-4 col-span-2">
      <p className="text-[.6rem]">Next.js</p>
      <p className="text-[.6rem]">Vercel</p>
    </div>
  );
}

export default Footer