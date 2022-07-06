import { NextPage } from "next/types";
import DiscordIcon from "../DiscordIcon";
import SectionHeader from "../SectionHeader";
import SignatureButton from "../SignatureButton";
import LeftWires from "./LeftWires";
import RightWires from "./RightWires";
import {
  DiscordCTAContainer,
  DiscordCTAWrapper,
  FaqItem,
  GlobalFAQContainer,
  GlobalFAQContentWrapper,
} from "./styles";
import { FaqData } from "./types";

const GlobalFAQ: NextPage = () => {
  const FAQ_DATA: FaqData[] = [
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
    {
      question: "Lorem Ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    },
  ];

  return (
    <GlobalFAQContainer>
      <LeftWires />
      <RightWires />
      <SectionHeader title="QUESTIONS? LOOK HERE." />
      <GlobalFAQContentWrapper>
        {FAQ_DATA.map((item, index) => (
          <FaqItem key={index}>
            <div >
            <h1>{item.question}</h1>
             <p>{item.answer}</p>
           </div>
          </FaqItem>
        ))}
      </GlobalFAQContentWrapper>
      <DiscordCTAContainer>
        <DiscordCTAWrapper>
          <main>
            <h1>STILL WONDERING AROUND?</h1>
            <p>check out our discord server and let us know whats boggling your mind</p>
          </main>
          <main>
            <SignatureButton isContrast onClick={() => {window.location.href = "https://discord.gg/cyberapeage";}} accent="#5865F2">
              <DiscordIcon />
              JOIN DISCORD
            </SignatureButton>
          </main>
        </DiscordCTAWrapper>
      </DiscordCTAContainer>
    </GlobalFAQContainer>
  );
};

export default GlobalFAQ;
