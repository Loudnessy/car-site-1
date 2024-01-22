import {
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
} from 'components/Catalog/Catalog.styled';
import sprite from '../../images/svg/sprite.svg';
import { useSelector } from 'react-redux';
export const Modal = ({ modalIsOpen, closeModal }) => {
  const selectedCar = useSelector(state => state.cars.choosenModalCar);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(18, 20, 23, 0.50)',
    },
  };
  return (
    <StyledModal
      isOpen={modalIsOpen}
      contentLabel="Example Modal"
      shouldCloseOnEsc={true}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <StyledModalButton onClick={closeModal}>
        <svg width="24" height="24">
          <use href={sprite + '#x'}></use>
        </svg>
      </StyledModalButton>
      <StyledModalContainer>
        <StyledModalImage src={selectedCar?.img} />
        <StyledModalHeader>
          {selectedCar?.make} <span>{selectedCar?.model}</span>,{' '}
          {selectedCar?.year}
        </StyledModalHeader>
        {/* <p>
        {selectedCar?.address.split(' ').slice(-2).join(' ')} | Id: {selectedCar?.id.toString()} | Year: {selectedCar?.year} | Type: {selectedCar?.type} | Fuel Consumption: {selectedCar?.fuelConsumption} | Engine Size: {selectedCar?.engineSize}
      </p> */}
        <StyledModalTagsList>
          <StyledModalTagsListItem>
            <StyledModalTag>
              {selectedCar?.address
                .split(' ')
                .slice(-1)
                .join(' ')
                .replace(',', '')}
            </StyledModalTag>
            <svg width="2" height="16">
              <use href={sprite + '#stick'} />
            </svg>
          </StyledModalTagsListItem>
          <StyledModalTagsListItem>
            <StyledModalTag>
              {selectedCar?.address
                .split(' ')
                .slice(3, 4)
                .join(' ')
                .replace(',', '')}
            </StyledModalTag>
            <svg width="2" height="16">
              <use href={sprite + '#stick'} />
            </svg>
          </StyledModalTagsListItem>

          <StyledModalTagsListItem>
            <StyledModalTag>Id: {selectedCar?.id.toString()}</StyledModalTag>
            <svg width="2" height="16">
              <use href={sprite + '#stick'} />
            </svg>
          </StyledModalTagsListItem>
          <StyledModalTagsListItem>
            <StyledModalTag>Year: {selectedCar?.year}</StyledModalTag>
            <svg width="2" height="16">
              <use href={sprite + '#stick'} />
            </svg>
          </StyledModalTagsListItem>
          <StyledModalTagsListItem>
            <StyledModalTag>Type: {selectedCar?.type}</StyledModalTag>
            <svg width="2" height="16">
              <use href={sprite + '#stick'} />
            </svg>
          </StyledModalTagsListItem>
          <StyledModalTagsListItem>
            <StyledModalTag>
              Fuel Consumption: {selectedCar?.fuelConsumption}
            </StyledModalTag>
            <svg width="2" height="16">
              <use href={sprite + '#stick'} />
            </svg>
          </StyledModalTagsListItem>
          <StyledModalTagsListItem>
            <StyledModalTag>
              Engine Size: {selectedCar?.engineSize}
            </StyledModalTag>
          </StyledModalTagsListItem>
        </StyledModalTagsList>
        <StyledModalCarDesc>{selectedCar?.description}</StyledModalCarDesc>
        <StyledModalParagraph>
          Accessories and functionalities:
        </StyledModalParagraph>
        <StyledModalTagsList>
          {selectedCar?.functionalities.map((value, index, array) => (
            <StyledModalTagsListItem>
              <StyledModalTag>{value}</StyledModalTag>
              {index !== array.length - 1 && (
                <svg width="2" height="16">
                  <use href={sprite + '#stick'} />
                </svg>
              )}
            </StyledModalTagsListItem>
          ))}
        </StyledModalTagsList>
        <StyledModalParagraph>Rental Conditions:</StyledModalParagraph>
        <div>
          <StyledModalCondList>
            {selectedCar?.rentalConditions
              .split(/(?=[A-Z])/)
              .map((rentCond, index) => (
                <StyledModalCondListItem>
                  {index === 0 ? (
                    <StyledModalCondParagr>
                      {rentCond.replace(/\d+/g, '')}
                      <span>{rentCond.replace(/[^0-9]/g, '')}</span>
                    </StyledModalCondParagr>
                  ) : (
                    <StyledModalCondParagr>{rentCond}</StyledModalCondParagr>
                  )}
                </StyledModalCondListItem>
              ))}
            <StyledModalCondListItem>
              <StyledModalCondParagr>
                Mileage: <span>{selectedCar?.mileage}</span>
              </StyledModalCondParagr>
            </StyledModalCondListItem>
            <StyledModalCondListItem>
              <StyledModalCondParagr>
                Price: <span>{selectedCar?.rentalPrice}</span>
              </StyledModalCondParagr>
            </StyledModalCondListItem>
          </StyledModalCondList>
          <StyledModalBtn href="tel:+380730000000">Rental car</StyledModalBtn>
        </div>
      </StyledModalContainer>
    </StyledModal>
  );
};
