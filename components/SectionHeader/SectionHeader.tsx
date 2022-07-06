import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import { SectionHeaderContainer, Description, Title } from "./styles";
import { SectionHeaderProps, SpecialWordsMap } from "./types";

const SectionHeader: NextPage<SectionHeaderProps> = ({ isBigTitle, title, description = "" }) => {
  const SPECIAL_WORDS: SpecialWordsMap = {
    discord: {
      link: "https://discord.gg/CYbzZjy",
    },
    twitter: {
      link: "https://twitter.com/CyberApeAge",
    },
  };

  const [descriptionHTML, setDescriptionHTML] = useState<string>(description);

  useEffect(() => {
    if (description) {
      let finalHTML: string = description;

      Object.keys(SPECIAL_WORDS).forEach((word) => {
        if (description.includes(word)) {
          finalHTML = finalHTML.replace(
            word,
            `<a href="${SPECIAL_WORDS[word].link}" target="_blank" rel="noreferrer">${word}</a>`
          );
        }
      });

      setDescriptionHTML(finalHTML);
    }
  }, []);

  return (
    <SectionHeaderContainer>
      <Title isBigTitle={isBigTitle}>{title}</Title>
      {description && <Description dangerouslySetInnerHTML={{ __html: descriptionHTML }} />}
    </SectionHeaderContainer>
  );
};

export default SectionHeader;
