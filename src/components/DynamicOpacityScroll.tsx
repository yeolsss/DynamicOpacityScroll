import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";

const DynamicOpacityScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const blockOpacity = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo;
    if (progress >= 0 && progress < 1) return 1;
    return 0.2;
  };

  const refContainer = useRef<HTMLDivElement>(null);

  let progress = 0;
  const numOfPages = 3;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages, Math.max(0.5, percentY * numOfPages));
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <StAnimationContainer ref={refContainer}>
        <StText $blockOpacity={blockOpacity(progress, 0)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
          excepturi, facere illum itaque magni nam quam sint totam! Animi aut
          beatae deserunt et, excepturi facere harum maxime neque quos tenetur?
        </StText>
        <StText $blockOpacity={blockOpacity(progress, 1)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          dolor eaque expedita itaque nemo omnis, perferendis qui repellendus
          temporibus? Alias commodi error excepturi laudantium nobis quo, rem
          totam ut veniam.
        </StText>
        <StText $blockOpacity={blockOpacity(progress, 2)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          incidunt, odio. Blanditiis cumque cupiditate dolore ex fuga harum illo
          iusto minima neque nobis, quas saepe sed similique temporibus
          veritatis? Eligendi.
        </StText>
      </StAnimationContainer>
      <StSpacer></StSpacer>
    </>
  );
};
const StSpacer = styled.div`
  height: 1000px;
  background-color: black;
`;
const StAnimationContainer = styled.section`
  height: auto;
  max-width: 50%;
  margin: auto;
`;

const StText = styled.h2<{ $blockOpacity: 1 | 0.2 }>`
  font-size: 60px;
  font-weight: 700;
  opacity: ${({ $blockOpacity }) => $blockOpacity};
`;
export default DynamicOpacityScroll;
