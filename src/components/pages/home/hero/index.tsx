import { ContainerCard, HeroContainer, HeroContainerCard, Image, ImageWrapper, Overlay } from './styles';
import { TiHeartFullOutline } from "react-icons/ti";


export const Hero = () => {

    const firstDate = new Date("2026-02-21");
    const today = new Date();

    const diffTime =
        today.getTime() - firstDate.getTime();

    const days =
        Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return (
        <>
            <HeroContainer>
                <div className='container_title'>
                    <h1>Olá, <span>Amor</span></h1>
                    <p>
                        Uma pequena coleção dos momentos
                        mais especiais da nossa história.
                    </p>
                </div>
                <ImageWrapper>
                    <Image src={"/images/hero.jpg"} alt={'d'} />
                    <Overlay />
                </ImageWrapper>
            </HeroContainer>
            <HeroContainerCard>
                <ContainerCard>
                    <div className='icon'>
                        <TiHeartFullOutline color='#fff' size={48} />
                    </div>
                    <div className='days'>
                        <h3>{days} dias</h3>
                        <p>criando memórias ao seu lado</p>
                    </div>
                    <div className='frases'>
                        <p>"Desde o nosso primeiro olhar..."</p>
                        <p>"Desde o nosso primeiro encontro..."</p>
                        <p>"Desde o nosso primeiro beijo..."</p>
                    </div>
                </ContainerCard>
            </HeroContainerCard>
        </>
    )
}