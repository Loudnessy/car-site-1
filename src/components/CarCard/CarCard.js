import {
  StyledBtn,
  StyledCard,
  StyledCardBtn,
  StyledCardNameDiv,
  StyledImg,
  StyledTags,
} from 'components/Catalog/Catalog.styled';
import sprite from '../../images/svg/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, changeChoosenCar, deleteFavoriteCar } from 'redux/slices/carsSlice';
export const CarCard = ({ car, modal }) => {
  const { make, model, year, rentalPrice, img, rentalCompany, address, id, type, fuelConsumption, engineSize } = car;
  const favorite = useSelector(state => state.cars.favorite)
  const isFavorite = favorite.find(fav => fav === id) ? true : false
  const dispatch = useDispatch();
  return (
    <li>
      <StyledCard>
        <StyledBtn onClick={(e) => {
          isFavorite? dispatch(deleteFavoriteCar(id)) : dispatch(addFavoriteCar(id))
        }}
        >
          {isFavorite ? (
            <svg width="18" height="18">
              <use href={sprite + '#favoriteblue'}></use>
            </svg>
          ) : (
            <svg width="18" height="18">
              <use href={sprite + '#favorite'}></use>
            </svg>
          )}
        </StyledBtn>
        <StyledImg src={img} alt={model} />
        <StyledCardNameDiv>
          <p>
            {make} <span>{model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </StyledCardNameDiv>
        <StyledTags>{car?.address.split(' ').slice(-2).join(' ')} | Id: {car?.id.toString()} | Year: {car?.year} | Type: {car?.type} | Fuel Consumption: {car?.fuelConsumption} | Engine Size: {car?.engineSize}</StyledTags>
        <StyledCardBtn
          onClick={e => {
            modal(true);
            dispatch(changeChoosenCar(e.target.id));
          }}
          id={id}
        >
          Learn more
        </StyledCardBtn>
      </StyledCard>
    </li>
  );
};
