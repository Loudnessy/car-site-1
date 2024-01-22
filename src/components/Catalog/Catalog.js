import { useEffect, useState } from 'react';
import {
  StyledArrowSvg,
  StyledBrandInput,
  StyledBrandsList,
  StyledBtnLoadMore,
  StyledContainer,
  StyledDivBrandInput,
  StyledForm,
  StyledInputFrom,
  StyledInputTo,
  StyledLoadMoreDiv,
  StyledMileageDiv,
  StyledPriceInput,
  StyledPriceList,
  StyledSection,
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
import sprite from '../../images/svg/sprite.svg';
const Catalog = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [brandInputFocus, setBrandInputFocus] = useState(false);
  const [priceSelectFocus, setPriceSelectFocus] = useState(false);

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const cars = useSelector(state => state.cars.items);
  const total = useSelector(state => state.cars.total);
  const carRentPrices = [
    '0',
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
    '110',
    '120',
    '130',
    '140',
    '150',
  ];

  useEffect(() => {
    ReactModal.setAppElement('#main');
    dispatch(getFilteredCars(filter));
  }, [filter, dispatch]);
  const closeModal = () => {
    setModalIsOpen(false);
    dispatch(changeChoosenCar(''));
  };
  return (
    <main>
      <StyledSection>
        <StyledContainer id="main">
          <Formik
            initialValues={{ brand: '', price: '', mileage: '' }}
            onSubmit={e => dispatch(changeFilter(e))}
          >
            {props => (
              <StyledForm>
                <label>
                  Car brand
                  <StyledDivBrandInput>
                    <StyledBrandInput
                      value={props.values.brand}
                      name="brand"
                      type="text"
                      list="brands"
                      placeholder="Enter the text"
                      onClick={e => setBrandInputFocus(true)}
                      onBlur={() => setBrandInputFocus(false)}
                      autoComplete="off"
                    />
                    <StyledArrowSvg width="20" height="20">
                      {brandInputFocus ? (
                        <use href={sprite + '#arrowup'}></use>
                      ) : (
                        <use href={sprite + '#arrowdown'}></use>
                      )}
                    </StyledArrowSvg>
                    {brandInputFocus ? (
                      <StyledBrandsList
                        onMouseDown={e => {
                          e.preventDefault();
                          setBrandInputFocus(false);
                          props.setFieldValue('brand', e.target.textContent);
                        }}
                      >
                        {marks.map(mark => {
                          if (props.values.brand === '') {
                            return <li key={nanoid()}>{mark}</li>;
                          } else if (
                            !mark
                              .toUpperCase()
                              .includes(props.values.brand.toUpperCase())
                          ) {
                            return null;
                          } else if (
                            mark
                              .toUpperCase()
                              .includes(props.values.brand.toUpperCase())
                          ) {
                            return <li key={nanoid()}>{mark}</li>;
                          }
                        })}
                      </StyledBrandsList>
                    ) : (
                      <></>
                    )}
                  </StyledDivBrandInput>
                </label>
                <label>
                  Price/ 1 hour
                  <StyledDivBrandInput>
                    <StyledPriceInput
                      type="number"
                      name="price"
                      placeholder="To $"
                      value={props.values.price}
                      onClick={() => setPriceSelectFocus(true)}
                      onBlur={() => setPriceSelectFocus(false)}
                    />
                    {priceSelectFocus ? (
                      <StyledPriceList
                        onMouseDown={e => {
                          e.preventDefault();
                          setPriceSelectFocus(false);
                          props.setFieldValue('price', e.target.textContent);
                        }}
                      >
                        {carRentPrices.map(price => {
                          if (props.values.price === '') {
                            return (
                              <li name={price} key={nanoid()}>
                                {price}
                              </li>
                            );
                          } else if (!price.includes(props.values.price)) {
                            return null;
                          } else if (price.includes(props.values.price)) {
                            return (
                              <li name={price} key={nanoid()}>
                                {price}
                              </li>
                            );
                          }
                        })}
                      </StyledPriceList>
                    ) : (
                      <></>
                    )}
                  </StyledDivBrandInput>
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
            )}
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
          <StyledLoadMoreDiv>
            {total ? (
              <StyledBtnLoadMore onClick={() => dispatch(loadMore(filter))}>
                Load more
              </StyledBtnLoadMore>
            ) : (
              <div></div>
            )}
          </StyledLoadMoreDiv>
          <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </StyledContainer>
      </StyledSection>
    </main>
  );
};
export default Catalog;
