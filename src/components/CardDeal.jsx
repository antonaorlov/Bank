import React from 'react'
import { card } from '../../assetss'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}> 
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>
       in few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-w[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam ea, expedita reprehenderit ipsam quod ducimus? Labore dicta maiores voluptatibus porro temporibus quod id explicabo quibusdam. Rem aperiam ducimus quidem!</p>


      <Button styles="mt-5 pt-5 tl-4"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )


export default CardDeal