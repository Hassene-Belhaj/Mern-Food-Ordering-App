import React from 'react'
import { Div, Section, Text , Image, Container, Title2 } from '../Global/Global'

const About = () => {
  return (
    <Section $bg='#fff' $padding='2rem 0' >

       <Container $width='80%' $display='flex'  $margin='auto' $padding='4rem 0' $gap='2rem' $fd='row' $LG_fd='row' $MD_fd='column' $SM_fd='column' $XS_fd='column' >

          <Div $flex='1' $display='flex' $fd='column'   $gap='2rem'>
                <Title2>About Us</Title2>
                <Text $color='#000' $fw='500'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident aliquid sit maxime consequatur debitis repellendus aperiam, quas omnis asperiores similique, praesentium enim minus quia vero! Dolorum illum voluptas adipisci, reiciendis voluptatem veniam accusantium deserunt eaque? Quidem nobis, commodi est assumenda ex, cumque eius aperiam delectus corrupti consequuntur mollitia? Odit, non! A iure minus dicta soluta expedita ducimus nisi fugit blanditiis similique commodi doloremque ad velit corrupti error laudantium molestiae esse animi quibusdam, nesciunt tempore? Nemo eaque reprehenderit sed nam.
              </Text>
          </Div>

          <Div $flex='1' $display='flex' $jc='center'>
              <Image $width='100%' $LG_width='80%' $height='100%' src='/about-image.png' $of='cover' $br='5px' />
          </Div>

       </Container>

    </Section>
  )
}

export default About