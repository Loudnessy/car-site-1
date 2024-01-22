import {
  StyledBtn,
  StyledCard,
  StyledCardBtn,
  StyledCardNameDiv,
  StyledDivTgsBtn,
  StyledImg,
  StyledTags,
  StyledTagsList,
} from 'components/Catalog/Catalog.styled';
import sprite from '../../images/svg/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteCar,
  changeChoosenCar,
  deleteFavoriteCar,
} from 'redux/slices/carsSlice';
export const CarCard = ({ car, modal }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    img,
    id,
    address,
    type,
    fuelConsumption,
    engineSize,
  } = car;
  const favorite = useSelector(state => state.cars.favorite);
  const isFavorite = favorite.find(fav => fav === id) ? true : false;
  const dispatch = useDispatch();
  return (
    <li>
      <StyledCard>
        <StyledBtn
          onClick={e => {
            isFavorite
              ? dispatch(deleteFavoriteCar(id))
              : dispatch(addFavoriteCar(id));
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

        <StyledDivTgsBtn>
          <StyledTagsList>
            <li>
              <StyledTags>
                {address.split(' ').slice(-1).join(' ').replace(',', '')}
              </StyledTags>
              <svg width="2" height="16">
                <use href={sprite + '#stick'}></use>
              </svg>
            </li>
            <li>
              <StyledTags>
                {address.split(' ').slice(3, 4).join(' ').replace(',', '')}
              </StyledTags>
              <svg width="2" height="16">
                <use href={sprite + '#stick'}></use>
              </svg>
            </li>
            <li>
              <StyledTags>Id: {id}</StyledTags>
              <svg width="2" height="16">
                <use href={sprite + '#stick'}></use>
              </svg>
            </li>
            <li>
              {' '}
              <StyledTags>Year: {year}</StyledTags>
              <svg width="2" height="16">
                <use href={sprite + '#stick'}></use>
              </svg>
            </li>
            <li>
              {' '}
              <StyledTags>Type: {type}</StyledTags>
              <svg width="2" height="16">
                <use href={sprite + '#stick'}></use>
              </svg>
            </li>
            <li>
              {' '}
              <StyledTags>Fuel Consumption: {fuelConsumption}</StyledTags>
              <svg width="2" height="16">
                <use href={sprite + '#stick'}></use>
              </svg>
            </li>
            <li>
              {' '}
              <StyledTags>Engine Size: {engineSize}</StyledTags>
            </li>
          </StyledTagsList>
          <StyledCardBtn
            onClick={e => {
              modal(true);
              dispatch(changeChoosenCar(e.target.id));
            }}
            id={id}
          >
            Learn more
          </StyledCardBtn>
        </StyledDivTgsBtn>
      </StyledCard>
    </li>
  );
};
