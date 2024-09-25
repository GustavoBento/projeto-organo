import './Banner.css'

interface BannerProps {
    CaminhoImagem: string
    TextoAlternativo: string
}

export const Banner = ({CaminhoImagem, TextoAlternativo}:BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={CaminhoImagem} alt={TextoAlternativo}/>
        </header>
    )
}

export default Banner