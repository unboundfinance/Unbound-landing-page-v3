import Image from "next/image";
import Link from "next/link";

const StackedItems = ({
  items,
}: {
  items: {
    name: string;
    href: string;
    image: any;
  }[];
}) => {
  return (
    <>
      {items.map((item, idx) => (
        <div className="relative group" key={idx}>
          <Link href={item.href} target="_blank" rel="noreferrer">
            <Image
              height={20}
              width={20}
              src={item.image}
              alt={item.name}
              className="object-cover !m-0 !p-0 object-top rounded-full border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </Link>
        </div>
      ))}
    </>
  );
};

export default StackedItems;
