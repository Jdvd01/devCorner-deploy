import { useState } from 'react'
import styles from './Hero.module.css'
import { Button } from '@common/components/Button'

const Hero = () => {
  const [data, setData] = useState({ email: '' })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (data.email.trim() === '') {
      return
    }
    //Aqui la funcion para el submit
    setData({ email: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <div id='hero-cta' className={`${styles.hero_container}`}>
      <img
        src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
        className={`${styles.hero_bg_image}`}
      />
      <div className={`${styles.hero_content}`}>
        <div className={`${styles.hero_top}`}>
          <div className={`${styles.hero_left}`}>
            <div className={`${styles.hero_text}`}>
              <h1 className={`${styles.hero_text__title}`}>
                Explore the dynamics of software development
              </h1>
              <p className={`${styles.hero_text__subtitle}`}>
                Subscribe now to explore, learn and grow with each post
              </p>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.form}`}>
              <input
                className={`${styles.form_input}`}
                type='email'
                name='email'
                id='email'
                value={data.email}
                placeholder='Email'
                onChange={handleChange}
              />
              <Button
                type={'submit'}
                variant='primary'
                proportion={'md'}
                customClasses={`${styles.form_button}`}
              >
                Subscribe
              </Button>
            </form>
          </div>

          <div className={`${styles.hero_right}`}>
            <div className={`${styles.images_container}`}>
              <img
                src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
                className={`${styles.left_image}`}
              />
              <img
                src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
                className={`${styles.middle_image}`}
              />
              <img
                src='https://res.cloudinary.com/bryancloudinary/image/upload/v1701837965/hero_wwa4xm.webp'
                className={`${styles.right_image}`}
              />
            </div>
          </div>

          <div className={`${styles.hero_bottom}`}>
            <i className={`fa-solid fa-down-long ${styles.arrow}`}></i>
            <h5>Explore Categories</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
