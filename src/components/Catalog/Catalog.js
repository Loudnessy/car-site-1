import { useEffect, useState } from 'react';
import {
  StyledBrandInput,
  StyledBtn,
  StyledCard,
  StyledCardBtn,
  StyledCardNameDiv,
  StyledContainer,
  StyledForm,
  StyledImg,
  StyledInputFrom,
  StyledInputTo,
  StyledMileageDiv,
  StyledModal,
  StyledModalBtn,
  StyledModalButton,
  StyledModalCarDesc,
  StyledModalCondList,
  StyledModalCondListItem,
  StyledModalCondParagr,
  StyledModalContainer,
  StyledModalHeader,
  StyledModalImage,
  StyledModalParagraph,
  StyledModalTag,
  StyledModalTagsList,
  StyledModalTagsListItem,
  StyledSelect,
  StyledTags,
  StyledUl,
} from './Catalog.styled';
import sprite from '../../images/svg/sprite.svg';
import ReactModal from 'react-modal';
import marks from '../../car-marks/makes.json';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, getFilteredCars, getTotalFilteredCars, loadMore } from 'api/api';
import { CarCard } from 'components/CarCard/CarCard';
import { changeFilter } from 'redux/slices/filterSlice';
import { changeChoosenCar } from 'redux/slices/carsSlice';
import { Modal } from 'components/Modal/Modal';
const Catalog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const cars = useSelector(state => state.cars.items);
  const selectedCar = useSelector(state => state.cars.choosenModalCar);
  const total = useSelector(state => state.cars.total);

  useEffect(() => {
    ReactModal.setAppElement('#main');
    dispatch(getFilteredCars(filter))
  }, [filter]);
  const closeModal = () => {
    setModalIsOpen(false);
    dispatch(changeChoosenCar(''));
  };
  return (
    <main>
      <section>
        <StyledContainer id="main">
          <Formik
            initialValues={{ brand: '', price: '', mileage: '' }}
            onSubmit={e => dispatch(changeFilter(e))}
          >
            <StyledForm>
                <label>
                  Car brand
                  <StyledBrandInput
                    name="brand"
                    type="text"
                    list="brands"
                    placeholder="Enter the text"
                  />
                  <datalist id="brands">
                    {marks.map(mark => {
                      return (
                        <option value={mark} key={nanoid()}>
                          {mark}
                        </option>
                      );
                    })}
                  </datalist>
                </label>
                <label>
                  Price/ 1 hour
                  <StyledSelect as="select" name="price">
                    <option value="">To $</option>
                  </StyledSelect>
                </label>
              <label>
                Car mileage / km
                <StyledMileageDiv>
                  <StyledInputFrom
                    name="mileageFrom"
                    type="number"
                    placeholder="From"
                  />
                  <StyledInputTo
                    placeholder="To"
                    name="mileageTo"
                    type="number"
                  />
                </StyledMileageDiv>
              </label>

              <button type="submit">Submit</button>
            </StyledForm>
          </Formik>
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
{total? <button onClick={() => dispatch(loadMore(filter))}>Load more</button> : <div></div>}
          <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </StyledContainer>
      </section>
    </main>
  );
};
export default Catalog;

// фільрація в вс коді в апішці з респонс датою
// лоад мор кнопка
// стилі в модалці
// стилі в картках
// стилі для мобілок
// стилі в планшета
// хоумпейдж
// фейворіт
// додая айді феворіт машин в локалсторедж
// в фейворіт при монтуванні загружаю всі машини з локал сторадж
