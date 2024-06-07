import { appleImg } from "@/utils";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
        <nav>
            <Image src={appleImg} width={100} height={100}></Image>
        </nav>
    </header>
  )
}
