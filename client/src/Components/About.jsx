import React from 'react'
import { Div, Section, Text , Image, Container, Title2 } from '../Global/Global'

const About = ({order,title,imageSrc , start}) => {
  return (
    <Section  $height='100%' $bg='#fff' $color='#fff' $display='flex' $jc='center' $ai='center' $padding='2rem 0' >

       <Container  $bg='#fff' $width='80%' $display='flex'  $margin='auto'  $gap='1rem' $fd='row' $LG_fd='row' $MD_fd='column' $SM_fd='column' $XS_fd='column'  >

          <Div $flex='3' $display='flex' $fd='column' $jc='center'  $padding='1rem'  $bg='#fff' $color='#000' $order={order ? order : '0'}>
                <Title2 $padding='1rem 0' $bg='#fff' $color='#000'>{title}</Title2>
                <Text $color='#000' $fw='500' $bg='#fff'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident aliquid sit maxime consequatur debitis repellendus aperiam, quas omnis asperiores similique, praesentium enim minus quia vero! Dolorum illum voluptas adipisci, reiciendis voluptatem veniam accusantium deserunt eaque? Quidem nobis, commodi est assumenda ex, cumque eius aperiam delectus corrupti consequuntur mollitia? Odit, non! A iure minus dicta soluta expedita ducimus nisi fugit blanditiis similique commodi doloremque ad velit corrupti error laudantium molestiae esse animi quibusdam, nesciunt tempore? Nemo eaque reprehenderit sed nam.
              </Text>
          </Div>

          <Div $flex='1' $display='flex' $jc='center' $ai='center' $bg='#fff' >
              <Image $width='60%' $height='80%' $LG_width='400px'  src={imageSrc ? imageSrc : '/aboutus.jpg'} $of='cover' $br='5px' />
          </Div>

       </Container>

    </Section>
  )
}

export default About