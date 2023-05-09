import Link from "next/link";
import Image from "next/image";
import searchIcon from "../public/search.svg";
import cartIcon from "../public/cart.svg";

const Header = () => {
  return (
    <div class="w-full">
      <div class="bg-pencil-green">
        <p class="w-fit m-auto py-2">🚚 Delivery in 2 working days</p>
      </div>
      <div class="flex justify-between items-center bg-header-purple py-6 px-6">
        <img src="https://a.storyblok.com/f/88751/251x53/0d3909fe96/storyblok-primary.png" />
        <div class="flex gap-5">
          <Link href="/">Products</Link>
          <Link href="/">Collections</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        <div class="flex gap-5">
          <Image src={searchIcon} width={24} height={24} />
          <Image src={cartIcon} width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
