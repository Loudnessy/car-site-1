import { useEffect, useState } from 'react';
import {
  StyledBrandInput,
  StyledContainer,
  StyledForm,
  StyledInputFrom,
  StyledInputTo,
  StyledMileageDiv,
  StyledSelect,
  StyledUl,
} from './Catalog.styled';
import ReactModal from 'react-modal';
import marks from '../../car-marks/makes.json';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredCars, loadMore } from 'api/api';
import { CarCard } from 'components/CarCard/CarCard';
import { changeFilter } from 'redux/slices/filterSlice';
import { changeChoosenCar } from 'redux/slices/carsSlice';
import { Modal } from 'components/Modal/Modal';
const Catalog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const cars = useSelector(state => state.cars.items);
  const total = useSelector(state => state.cars.total);

  useEffect(() => {
    ReactModal.setAppElement('#main');
    dispatch(getFilteredCars(filter))
  }, [filter, dispatch]);
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

