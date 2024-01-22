import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteCars } from 'api/api';
import { CarCard } from 'components/CarCard/CarCard';
import { StyledContainer, StyledUl } from 'components/Catalog/Catalog.styled';
import ReactModal from 'react-modal';
import { Modal } from 'components/Modal/Modal';
import { changeChoosenCar } from 'redux/slices/carsSlice';
import { StyledParagraph } from './Favorite.styled';

const Favorite = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.cars.favorite);
  const cars = useSelector(state => state.cars.items);
  const closeModal = () => {
    setModalIsOpen(false);
    dispatch(changeChoosenCar(''));
  };
  useEffect(() => {
    ReactModal.setAppElement('#main');
    if (favorite.length) {
      dispatch(getFavoriteCars(favorite));
    }
  }, [favorite, dispatch]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <main>
      <section>
        <StyledContainer id="main">
          {favorite.length ? (
            <StyledUl>
              {cars.map(car => {
                return (
                  <CarCard
                    car={car}
                    key={car.id}
                    modal={setModalIsOpen}
                  ></CarCard>
                );
              })}
            </StyledUl>
          ) : (
            <StyledParagraph>You dont have any favorite cars</StyledParagraph>
          )}
          <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </StyledContainer>
      </section>
    </main>
  );
};
export default Favorite;
