import styled from 'styled-components';

const StyledWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  img {
    width: 36px;
    height: 36px;
  }
`;
const IconTwitter = () => {
  return (
    <StyledWrapper
      title="一款可以下载高清壁纸大图的浏览器插件"
      href="https://chromewebstore.google.com/detail/unsplash-wanderer/jdjjjnfdkhpdppedhjgdcecmmcmklopm?authuser=0&hl=en"
      target="_blank"
    >
      <img src="https://sinqi.tools/tool/icons/unsplash.wallpaper.png" alt="Unsplash Wanderer" />
    </StyledWrapper>
  );
};

export default IconTwitter;
