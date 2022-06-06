import styled from '@emotion/styled';

const MenuImage = styled.div(
  {
    margin: '50px auto 30px auto',
    borderRadius: '50%',
    width: '300px',
    height: '300px',
  },
  (props) => ({
    background: `url("https://coffee-and-taste.kro.kr/${props.url}") center/100% no-repeat`,
  }),
);

const MenuName = styled.h1({
  fontSize: '1.7rem',
  paddingBottom: '.5rem',
});

const MenuEnglishName = styled.h2({
  fontSize: '1.5rem',
  paddingBottom: '.5rem',
});

const MenuDescription = styled.p({
  fontSize: '1.2rem',
  paddingTop: '.5rem',
  lineHeight: '1.6rem',
});

const MenuPrice = styled.h3({
  fontSize: '1.3rem',
  padding: '1rem 0',
});

const OrderButton = styled.button({
  fontSize: '1.1rem',
  borderRadius: '10%',
  color: 'white',
  backgroundColor: '#006633',
  padding: '0.5rem',
});

function convertDescription(description) {
  if (description !== undefined) {
    return description.split('\\n').map((line) => (
      (
        <span>
          {line}
          <br />
        </span>
      )
    ));
  }

  return description;
}

export default function MenuDetail({ menu }) {
  const menuDescription = convertDescription(menu.description);

  return (
    <>
      <MenuImage url={menu.imagePath} />
      <MenuName>{menu.name}</MenuName>
      <MenuEnglishName>{menu.englishName}</MenuEnglishName>
      <hr />
      <MenuDescription>
        {/* {menu.description} */}
        {menuDescription}
      </MenuDescription>
      {/* // ! 왜 아래처럼 직접 split 하려고 하면 menu.description 을 undefined 라고 인식할까? */}
      {/* <MenuDescription> */}
      {/*  {menu.description.split('\\n').map((line) => ( */}
      {/*    <span> */}
      {/*      {line} */}
      {/*      <br /> */}
      {/*    </span> */}
      {/*  ))} */}
      {/* </MenuDescription> */}
      <MenuPrice>
        {menu.price}
        원
      </MenuPrice>
      <OrderButton>주문하기</OrderButton>
    </>
  );
}
