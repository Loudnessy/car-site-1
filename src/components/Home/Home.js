import { StyledBtn, StyledCities, StyledContainer, StyledHeader, StyledP, StyledParag, StyledParagraph, StyledUl } from "./Home.styled"

const Home = () => {
return <main>
    <section>
        <StyledContainer>
                    <StyledHeader>Car Rent Service</StyledHeader>
                    <StyledParagraph>We work to make it easier and faster for people to rent cars</StyledParagraph>
                    <StyledCities>Kyiv, Lviv, Odessa, Dnipro, Rivne</StyledCities>
                    <StyledP>Why you should rent cars in our service</StyledP>
                    <StyledUl>
                        <li><StyledParag>Quick feedback</StyledParag></li>
                        <li><StyledParag>Fair and reasoned prices</StyledParag></li>
                        <li><StyledParag>Rent in just one click</StyledParag></li>
                    </StyledUl>
                    <StyledBtn to="/catalog">Search cars</StyledBtn>
        </StyledContainer>
    </section>
</main>
}
export default Home