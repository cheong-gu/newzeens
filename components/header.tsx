import { useRouter } from "next/navigation";
import { BtnStyle, DivStyle } from "./styles/Header.styles";
import Image from "next/image";

export interface MyComponentProps {
  onClickLogo: Function;
}

export default function Header({ onClickLogo }: MyComponentProps) {
  const router = useRouter();
  const href =
    "https://docs.google.com/forms/d/e/1FAIpQLSf5gEtP8r11YsyVg06XZqYjFxnN5bduu6KE-9KBI1wVBcBJ8Q/viewform?pli=1";
  const feed = () => {
    window.open(href);
  };

  return (
    <DivStyle>
      <div
        className="title"
        onClick={() => {
          onClickLogo();
          router.push("/");
        }}
      >
        NEWZEENS
      </div>
      <BtnStyle>
        <Image src="/feedIcon.png" alt="feedback" width={16} height={16} />
        <span id="feed" onClick={feed}>
          피드백 보내기
        </span>
      </BtnStyle>
    </DivStyle>
  );
}
