import React from 'react'
import { Div, Section, Text , Image, Container, Title2 } from '../Global/Global'
import { InView, useInView } from 'react-intersection-observer'
import { useAnimation , motion } from 'framer-motion'
import { useEffect } from 'react'

const About = ({order,title,imageSrc , start}) => {
  const {ref , inView} = useInView()
  const animation = useAnimation()

  useEffect(()=>{
  if(inView) {
    animation.start('visible')
  } else {
    animation.start('hidden')
  } 
  },[inView])

  const variants = {
     hidden : { opacity : 0.5 } ,
     visible : {opacity : 1  }  ,
  }
  
  return (
    <Section  $height='100%' $bg='#fff' $color='#fff' $display='flex' $jc='center' $ai='center' $padding='2rem 0' >

      <motion.div 
        variants={variants} 
        initial="hidden"
        animate={animation}
        transition={{
            duration : 0.3   ,
            delay : 0.1
        }}

      
      >

       <Container  ref={ref} $bg='#fff' $width='80%' $display='flex'  $margin='auto'  $gap='1rem' $fd='row' $LG_fd='row' $MD_fd='column' $SM_fd='column' $XS_fd='column'  >

          <Div $flex='3' $display='flex' $fd='column' $jc='center'  $padding='1rem'  $bg='#fff' $color='#000' $order={order ? order : '0'}>
                <Title2 $fs='3rem'  $padding='1rem 0' $bg='#fff' $color='#000'>{title}</Title2>
                <Text $color='#000' $fw='500' $bg='#fff'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident aliquid sit maxime consequatur debitis repellendus aperiam, quas omnis asperiores similique, praesentium enim minus quia vero! Dolorum illum voluptas adipisci, reiciendis voluptatem veniam accusantium deserunt eaque? Quidem nobis, commodi est assumenda ex, cumque eius aperiam delectus corrupti consequuntur mollitia? Odit, non! A iure minus dicta soluta expedita ducimus nisi fugit blanditiis similique commodi doloremque ad velit corrupti error laudantium molestiae esse animi quibusdam, nesciunt tempore? Nemo eaque reprehenderit sed nam.
              </Text>
          </Div>

          <Div $flex='1' $display='flex' $jc='center' $ai='center' $bg='#fff' >
              <Image $width='60%' $height='80%' $LG_width='400px'  src={imageSrc ? imageSrc : '/aboutus.jpg'} $of='cover' $br='5px' />
          </Div>

       </Container>

      </motion.div>

    </Section>
  )
}

export default About