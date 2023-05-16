import { usePathname, useRouter } from "next/navigation";
import { BtnStyle, DivStyle } from "./styles/Header.styles";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DivStyle>
      <div className="title" onClick={() => router.push("/")}>
        NEWZEENS
      </div>
      <BtnStyle>
        <Image src="/feedback.svg" alt="feedback" width={14} height={14} />
        <span>피드백 보내기</span>
      </BtnStyle>
    </DivStyle>
  );
}
