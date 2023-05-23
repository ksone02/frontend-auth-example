/* eslint-disable @typescript-eslint/no-empty-function */
import styled from '@emotion/styled';
import InputStepper from './InputStepper';
import type { CartItem as CartType } from './types';
import CheckBox from './CheckBox';
import { Text } from './Text';
import { useState } from 'react';
import getPriceFormat from './getPriceFormat';
// import { useModal } from '../../../hooks/useModal';
// import { useCart } from '../../../hooks/useCart';
import { TrashCanIcon } from './assets';

const CartItem = ({ cart }: { cart: CartType }) => {
  const [count, setCount] = useState(cart.quantity);

  //   const { changeCartQuantityAPI, deleteCartItemAPI } = useCart();

  //   const { openModal } = useModal();

  //   const deleteCartItem = async () => {
  //     deleteCartItemAPI(cart.id);
  //   };

  //   const changeCheckCartList = () => {
  //     const existItemIndex = checkCartList.findIndex((cartId) => cartId === cart.id);
  //     if (check) {
  //       if (existItemIndex !== -1) {
  //         setCheckCartList((prev) => {
  //           const newCartList = [...prev];
  //           newCartList.splice(existItemIndex, 1);
  //           return newCartList;
  //         });
  //       }
  //       setCheck(false);
  //       return;
  //     }
  //     setCheckCartList((prev) => [...prev, cart.id]);
  //     setCheck(true);
  //   };
  const totalPrice = cart.product.price;

  //   useEffect(() => {
  //     const mutateCartItem = async () => {
  //       changeCartQuantityAPI(cart.id, { quantity: count });
  //     };
  //     mutateCartItem();
  //   }, [count]);

  //   useEffect(() => {
  //     const existItemIndex = checkCartList.findIndex((cartId) => cartId === cart.id);

  //     if (existItemIndex === -1) {
  //       setCheck(false);
  //       return;
  //     }
  //     setCheck(true);
  //   }, [checkCartList]);

  return (
    <CartItemWrapper>
      <CartItemInner>
        <CheckBox onClick={() => {}} checked={true} />
        <ProductImage src={cart.product.imageUrl} />
        <CartInfoWrapper>
          <CartInfoHead>
            <Text size="smallest" weight="light">
              {cart.product.name}
            </Text>
            <TrashCanIcon style={{ cursor: 'pointer' }} onClick={() => {}} />
          </CartInfoHead>
          <InputStepper
            size="big"
            quantity={count}
            setQuantity={(value: number) => setCount(value)}
            minNumber={1}
          />
          <CardInfoFoot>
            <Text size="smallest" weight="normal">
              {getPriceFormat(cart.product.price)} 원
            </Text>
          </CardInfoFoot>
        </CartInfoWrapper>
      </CartItemInner>
      <CartItemFoot>
        <Text size="smallest" weight="light">
          {`상품금액 ${getPriceFormat(totalPrice)}원 X ${count}개`}
        </Text>
        &nbsp;=&nbsp;
        <Text size="smallest" weight="normal">
          {`총 ${getPriceFormat(totalPrice * count)}원`}
        </Text>
      </CartItemFoot>
    </CartItemWrapper>
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 23px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
  @media screen and (max-width: 660px) {
    padding: 16px 12px 12px 12px;
  }
`;

const CartItemInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ProductImage = styled.img`
  margin-left: 16px;
  width: 88px;
  height: 88px;
  border-radius: 4px;
  min-width: 88px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.05);
  @media screen and (max-width: 660px) {
    margin-left: 12px;
    width: 66px;
    height: 66px;
    min-width: 66px;
  }
`;

const CartInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  min-width: calc(100% - 148px);
  margin-left: 16px;
  @media screen and (max-width: 660px) {
    margin-left: 12px;
    min-width: calc(100% - 118px);
  }
`;

const CartInfoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const CardInfoFoot = styled.div`
  margin-top: 10px;
`;

const CartItemFoot = styled.div`
  background-color: rgb(243, 245, 247);
  padding: 12px;
  margin-top: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
