# DynamicOpacityScroll

## Description
화면 중앙에 오는 tag를 하이라이팅하는 로직

```javascript

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
  ```
위 부분에서 progress를 계산하고 

```javascript
  const blockOpacity = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo;
    if (progress >= 0 && progress < 1) return 1;
    return 0.2;
  };
```
위치에 맞는 blockOpacity를 계산하여 적용한다.