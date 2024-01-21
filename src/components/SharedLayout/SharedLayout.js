import { NavLink, Outlet } from "react-router-dom"
import { StyledContainer, StyledHeader, StyledNavLink } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return <>
    <StyledHeader>
       <StyledContainer>
        <ul>
            <li><StyledNavLink to="/">Home</StyledNavLink> </li>
            <li><StyledNavLink to="/catalog">Catalog</StyledNavLink></li>
            <li><StyledNavLink to="/favorites">Favorites</StyledNavLink></li>
        </ul>
        </StyledContainer>
        </StyledHeader>
    <Outlet/>
    </>
}