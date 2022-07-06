import { RerollIconSVG } from "./styles";

const RerollIcon = () => {
  return (
    <RerollIconSVG width={21} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        data-name="top-arrow"
        d="M14.5 0h-2v2h2v2h-12v2h-2v5h2V6h12v2h-2v2h2V8h2V6h2V4h-2V2h-2V0zm0 0h-2v2h2v2h-12v2h-2v5h2V6h12v2h-2v2h2V8h2V6h2V4h-2V2h-2V0z"
        fill="#fff"
      />
      <path
        data-name="bottom-arrow"
        d="M6.5 18h-2v-2h-2v-2h2v-2h2v-2h2v2h-2v2h12V9h2v5h-2v2h-12v2h2v2h-2v-2z"
        fill="#fff"
      />
    </RerollIconSVG>
  );
};

export default RerollIcon;
