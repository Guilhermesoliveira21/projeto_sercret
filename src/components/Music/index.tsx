import AudioPlayer from "react-h5-audio-player";
import styled from "styled-components";

type MusicProps = {
  title: string;
  music: string;
  img: string;
};

export const Music = ({ title, music, img }: MusicProps) => {
  return (
    <>
      <MusicContainer img={img}>
        <AudioPlayer
          autoPlay={false}
          loop
          src={music}
          showSkipControls={false}
          showJumpControls={false}
        />
      </MusicContainer>
    </>
  );
};

export const MusicContainer = styled.div`
  .rhap_container {
    position: relative;

    background-image: ${({ img }) => `url(${img})`};

    background-size: cover;
    background-position: center;

    border-radius: 1.5rem;

    overflow: hidden;

    color: #ffffff;
    font-weight: 500;

    box-shadow: 0 0 20px rgba(255, 105, 180, 0.15);
  }
  .rhap_container::before {
    content: "";

    position: absolute;
    inset: 0;

    background: rgba(0, 0, 0, 0.45);

    backdrop-filter: blur(1px);

    z-index: 0;
  }

  /* .rhap_container * {
    position: relative;
    z-index: 1;
  } */

  .rhap_stacked {
    /* background-color: aqua; */

    height: 300px;
    padding: 1rem;

    display: flex;
    justify-content: space-between;
  }

  .rhap_progress-section {
    /* background-color: beige; */
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: space-between;

    z-index: 999;
  }

  .rhap_progress-container {
    background-color: aquamarine;
  }

  .rhap_main-controls {
    position: absolute;
    left: 0%;
    bottom: 0%;
    height: 100%;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999999;
    /* background-color: aqua; */

    button {
      font-size: 3rem;
    }
  }
`;
