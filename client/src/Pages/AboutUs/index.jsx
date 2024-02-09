import React from 'react'
import { Container, Div, Image, Text, Title3 } from '../../Global/Global'
import AnimationWrapper from '../../utils/animationWrapper'

const index = () => {

  return (
    <AnimationWrapper initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 0.8}} exit={{opacity : 0}}>

    <Container  $display='flex' $jc='center' $ai='center' $width='100%' $height='100vh'   $margin='auto' $bg='#fff' $color='#000'>

      <Div $display='flex'  $fd='column' $LG_fd='row' $width='90%' $margin='auto' $padding='8rem 0' $gap='2rem' >

         <Div $flex='.5' $display='flex' $jc='center' $ai='center' $width='100%' $height='100%' > 
        
            <Image $width='350px' $height='70%' src='/aboutus.jpg' $of='cover' />

         </Div>

          <Div  $flex='1' $display='flex' $fd='column' $jc='center' >
            <Title3 $padding='1rem 0'> About Us</Title3>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus alias sequi tempora! Blanditiis natus labore aperiam. Eius ipsa, cum laborum animi cupiditate inventore aliquid consequatur suscipit perspiciatis omnis distinctio!
            Incidunt, cumque. Ducimus dolorem sapiente quos possimus quia quidem autem non, assumenda adipisci eos atque provident nostrum omnis, aliquid, officiis eligendi. Eligendi voluptas aut sed quibusdam repellendus impedit ratione nihil.
            Debitis, laborum, corporis, possimus eaque ut tempora quod dolores illum itaque maiores vero magni delectus veniam esse fuga a velit fugit. Autem, distinctio aperiam provident officiis beatae adipisci blanditiis iste!
            Error voluptatum eos possimus in officiis iure at, quae optio ut sequi, facilis repudiandae aperiam rem vitae molestias sed voluptas nihil et sunt tenetur magni quis commodi? Cumque, possimus expedita.
            Nobis atque dolore cumque vero facere rerum magni consequatur perspiciatis. Pariatur provident, magni numquam esse  </Text>
          </Div> 

   
         </Div>


    </Container>
    </AnimationWrapper>
  )
}

export default index