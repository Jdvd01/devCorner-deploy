import styles from './Categories.module.css'
import { Chip } from '@common/components/Chip'
import { categories } from './Categories.utils'
import { Category } from '../Category/Category'

const CategoryBackground = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1727'
      height='1006'
      viewBox='0 0 1727 1006'
      fill='none'
    >
      <g clipPath='url(#clip0_268_1298)'>
        <rect width='1727' height='1006' fill='#F7F8F9' />
        <g opacity='0.4'>
          <rect width='1727' height='1008' fill='#F7F8F9' />
          <line x1='1464' y1='672.5' x2='-24' y2='672.5' stroke='#D5DAE1' />
          <line x1='1464' y1='696.5' x2='-24' y2='696.5' stroke='#D5DAE1' />
          <line x1='1464' y1='720.5' x2='-24' y2='720.5' stroke='#D5DAE1' />
          <line x1='1464' y1='744.5' x2='-24' y2='744.5' stroke='#D5DAE1' />
          <line x1='1464' y1='768.5' x2='-24' y2='768.5' stroke='#D5DAE1' />
          <line x1='1464' y1='792.5' x2='-24' y2='792.5' stroke='#D5DAE1' />
          <line x1='1464' y1='816.5' x2='-24' y2='816.5' stroke='#D5DAE1' />
          <line x1='1464' y1='840.5' x2='-24' y2='840.5' stroke='#D5DAE1' />
          <line x1='1464' y1='864.5' x2='-24' y2='864.5' stroke='#D5DAE1' />
          <line x1='1464' y1='888.5' x2='-24' y2='888.5' stroke='#D5DAE1' />
          <line x1='1464' y1='912.5' x2='-24' y2='912.5' stroke='#D5DAE1' />
          <line x1='1464' y1='936.5' x2='-24' y2='936.5' stroke='#D5DAE1' />
          <line x1='1464' y1='960.5' x2='-24' y2='960.5' stroke='#D5DAE1' />
          <line x1='1464' y1='984.5' x2='-24' y2='984.5' stroke='#D5DAE1' />
          <line x1='24.5' y1='648' x2='24.5' y2='1368' stroke='#D5DAE1' />
          <line x1='24.5' y1='648' x2='24.5' y2='1368' stroke='#D5DAE1' />
          <line x1='48.5' y1='648' x2='48.5' y2='1368' stroke='#D5DAE1' />
          <line x1='72.5' y1='648' x2='72.5' y2='1368' stroke='#D5DAE1' />
          <line x1='96.5' y1='648' x2='96.5' y2='1368' stroke='#D5DAE1' />
          <line x1='120.5' y1='648' x2='120.5' y2='1368' stroke='#D5DAE1' />
          <line x1='144.5' y1='648' x2='144.5' y2='1368' stroke='#D5DAE1' />
          <line x1='168.5' y1='648' x2='168.5' y2='1368' stroke='#D5DAE1' />
          <line x1='192.5' y1='648' x2='192.5' y2='1368' stroke='#D5DAE1' />
          <line x1='216.5' y1='648' x2='216.5' y2='1368' stroke='#D5DAE1' />
          <line x1='240.5' y1='648' x2='240.5' y2='1368' stroke='#D5DAE1' />
          <line x1='264.5' y1='648' x2='264.5' y2='1368' stroke='#D5DAE1' />
          <line x1='288.5' y1='648' x2='288.5' y2='1368' stroke='#D5DAE1' />
          <line x1='312.5' y1='648' x2='312.5' y2='1368' stroke='#D5DAE1' />
          <line x1='336.5' y1='648' x2='336.5' y2='1368' stroke='#D5DAE1' />
          <line x1='360.5' y1='648' x2='360.5' y2='1368' stroke='#D5DAE1' />
          <line x1='384.5' y1='648' x2='384.5' y2='1368' stroke='#D5DAE1' />
          <line x1='408.5' y1='648' x2='408.5' y2='1368' stroke='#D5DAE1' />
          <line x1='432.5' y1='648' x2='432.5' y2='1368' stroke='#D5DAE1' />
          <line x1='456.5' y1='648' x2='456.5' y2='1368' stroke='#D5DAE1' />
          <line x1='480.5' y1='648' x2='480.5' y2='1368' stroke='#D5DAE1' />
          <line x1='504.5' y1='648' x2='504.5' y2='1368' stroke='#D5DAE1' />
          <line x1='528.5' y1='648' x2='528.5' y2='1368' stroke='#D5DAE1' />
          <line x1='552.5' y1='648' x2='552.5' y2='1368' stroke='#D5DAE1' />
          <line x1='576.5' y1='648' x2='576.5' y2='1368' stroke='#D5DAE1' />
          <line x1='600.5' y1='648' x2='600.5' y2='1368' stroke='#D5DAE1' />
          <line x1='624.5' y1='648' x2='624.5' y2='1368' stroke='#D5DAE1' />
          <line x1='648.5' y1='648' x2='648.5' y2='1368' stroke='#D5DAE1' />
          <line x1='672.5' y1='648' x2='672.5' y2='1368' stroke='#D5DAE1' />
          <line x1='696.5' y1='648' x2='696.5' y2='1368' stroke='#D5DAE1' />
          <line x1='720.5' y1='648' x2='720.5' y2='1368' stroke='#D5DAE1' />
          <line x1='744.5' y1='648' x2='744.5' y2='1368' stroke='#D5DAE1' />
          <line x1='768.5' y1='648' x2='768.5' y2='1368' stroke='#D5DAE1' />
          <line x1='792.5' y1='648' x2='792.5' y2='1368' stroke='#D5DAE1' />
          <line x1='816.5' y1='648' x2='816.5' y2='1368' stroke='#D5DAE1' />
          <line x1='840.5' y1='648' x2='840.5' y2='1368' stroke='#D5DAE1' />
          <line x1='864.5' y1='648' x2='864.5' y2='1368' stroke='#D5DAE1' />
          <line x1='888.5' y1='648' x2='888.5' y2='1368' stroke='#D5DAE1' />
          <line x1='912.5' y1='648' x2='912.5' y2='1368' stroke='#D5DAE1' />
          <line x1='936.5' y1='648' x2='936.5' y2='1368' stroke='#D5DAE1' />
          <line x1='960.5' y1='648' x2='960.5' y2='1368' stroke='#D5DAE1' />
          <line x1='984.5' y1='648' x2='984.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1008.5' y1='648' x2='1008.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1032.5' y1='648' x2='1032.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1056.5' y1='648' x2='1056.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1080.5' y1='648' x2='1080.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1104.5' y1='648' x2='1104.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1128.5' y1='648' x2='1128.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1152.5' y1='648' x2='1152.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1176.5' y1='648' x2='1176.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1200.5' y1='648' x2='1200.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1224.5' y1='648' x2='1224.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1248.5' y1='648' x2='1248.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1272.5' y1='648' x2='1272.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1296.5' y1='648' x2='1296.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1320.5' y1='648' x2='1320.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1344.5' y1='648' x2='1344.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1368.5' y1='648' x2='1368.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1392.5' y1='648' x2='1392.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1416.5' y1='648' x2='1416.5' y2='1368' stroke='#D5DAE1' />
          <line x1='1440.5' y1='648' x2='1440.5' y2='1368' stroke='#D5DAE1' />
          <line x1='0.5' y1='-48' x2='0.499969' y2='672' stroke='#D5DAE1' />
          <line x1='1464' y1='0.5' x2='-24' y2='0.5' stroke='#D5DAE1' />
          <line x1='1464' y1='24.5' x2='-24' y2='24.5' stroke='#D5DAE1' />
          <line x1='1464' y1='48.5' x2='-24' y2='48.5' stroke='#D5DAE1' />
          <line x1='1464' y1='72.5' x2='-24' y2='72.5' stroke='#D5DAE1' />
          <line x1='1464' y1='96.5' x2='-24' y2='96.5' stroke='#D5DAE1' />
          <line x1='1464' y1='120.5' x2='-24' y2='120.5' stroke='#D5DAE1' />
          <line x1='1464' y1='144.5' x2='-24' y2='144.5' stroke='#D5DAE1' />
          <line x1='1464' y1='168.5' x2='-24' y2='168.5' stroke='#D5DAE1' />
          <line x1='1464' y1='192.5' x2='-24' y2='192.5' stroke='#D5DAE1' />
          <line x1='1464' y1='216.5' x2='-24' y2='216.5' stroke='#D5DAE1' />
          <line x1='1464' y1='240.5' x2='-24' y2='240.5' stroke='#D5DAE1' />
          <line x1='1464' y1='264.5' x2='-24' y2='264.5' stroke='#D5DAE1' />
          <line x1='1464' y1='288.5' x2='-24' y2='288.5' stroke='#D5DAE1' />
          <line x1='1464' y1='312.5' x2='-24' y2='312.5' stroke='#D5DAE1' />
          <line x1='1464' y1='336.5' x2='-24' y2='336.5' stroke='#D5DAE1' />
          <line x1='1464' y1='360.5' x2='-24' y2='360.5' stroke='#D5DAE1' />
          <line x1='1464' y1='384.5' x2='-24' y2='384.5' stroke='#D5DAE1' />
          <line x1='1464' y1='408.5' x2='-24' y2='408.5' stroke='#D5DAE1' />
          <line x1='1464' y1='432.5' x2='-24' y2='432.5' stroke='#D5DAE1' />
          <line x1='1464' y1='456.5' x2='-24' y2='456.5' stroke='#D5DAE1' />
          <line x1='1464' y1='480.5' x2='-24' y2='480.5' stroke='#D5DAE1' />
          <line x1='1464' y1='504.5' x2='-24' y2='504.5' stroke='#D5DAE1' />
          <line x1='1464' y1='528.5' x2='-24' y2='528.5' stroke='#D5DAE1' />
          <line x1='1464' y1='552.5' x2='-24' y2='552.5' stroke='#D5DAE1' />
          <line x1='1464' y1='576.5' x2='-24' y2='576.5' stroke='#D5DAE1' />
          <line x1='1464' y1='600.5' x2='-24' y2='600.5' stroke='#D5DAE1' />
          <line x1='1464' y1='624.5' x2='-24' y2='624.5' stroke='#D5DAE1' />
          <line x1='1464' y1='648.5' x2='-24' y2='648.5' stroke='#D5DAE1' />
          <line x1='24.5' y1='-48' x2='24.5' y2='672' stroke='#D5DAE1' />
          <line x1='24.5' y1='-48' x2='24.5' y2='672' stroke='#D5DAE1' />
          <line x1='48.5' y1='-48' x2='48.5' y2='672' stroke='#D5DAE1' />
          <line x1='72.5' y1='-48' x2='72.5' y2='672' stroke='#D5DAE1' />
          <line x1='96.5' y1='-48' x2='96.5' y2='672' stroke='#D5DAE1' />
          <line x1='120.5' y1='-48' x2='120.5' y2='672' stroke='#D5DAE1' />
          <line x1='144.5' y1='-48' x2='144.5' y2='672' stroke='#D5DAE1' />
          <line x1='168.5' y1='-48' x2='168.5' y2='672' stroke='#D5DAE1' />
          <line x1='192.5' y1='-48' x2='192.5' y2='672' stroke='#D5DAE1' />
          <line x1='216.5' y1='-48' x2='216.5' y2='672' stroke='#D5DAE1' />
          <line x1='240.5' y1='-48' x2='240.5' y2='672' stroke='#D5DAE1' />
          <line x1='264.5' y1='-48' x2='264.5' y2='672' stroke='#D5DAE1' />
          <line x1='288.5' y1='-48' x2='288.5' y2='672' stroke='#D5DAE1' />
          <line x1='312.5' y1='-48' x2='312.5' y2='672' stroke='#D5DAE1' />
          <line x1='336.5' y1='-48' x2='336.5' y2='672' stroke='#D5DAE1' />
          <line x1='360.5' y1='-48' x2='360.5' y2='672' stroke='#D5DAE1' />
          <line x1='384.5' y1='-48' x2='384.5' y2='672' stroke='#D5DAE1' />
          <line x1='408.5' y1='-48' x2='408.5' y2='672' stroke='#D5DAE1' />
          <line x1='432.5' y1='-48' x2='432.5' y2='672' stroke='#D5DAE1' />
          <line x1='456.5' y1='-48' x2='456.5' y2='672' stroke='#D5DAE1' />
          <line x1='480.5' y1='-48' x2='480.5' y2='672' stroke='#D5DAE1' />
          <line x1='504.5' y1='-48' x2='504.5' y2='672' stroke='#D5DAE1' />
          <line x1='528.5' y1='-48' x2='528.5' y2='672' stroke='#D5DAE1' />
          <line x1='552.5' y1='-48' x2='552.5' y2='672' stroke='#D5DAE1' />
          <line x1='576.5' y1='-48' x2='576.5' y2='672' stroke='#D5DAE1' />
          <line x1='600.5' y1='-48' x2='600.5' y2='672' stroke='#D5DAE1' />
          <line x1='624.5' y1='-48' x2='624.5' y2='672' stroke='#D5DAE1' />
          <line x1='648.5' y1='-48' x2='648.5' y2='672' stroke='#D5DAE1' />
          <line x1='672.5' y1='-48' x2='672.5' y2='672' stroke='#D5DAE1' />
          <line x1='696.5' y1='-48' x2='696.5' y2='672' stroke='#D5DAE1' />
          <line x1='720.5' y1='-48' x2='720.5' y2='672' stroke='#D5DAE1' />
          <line x1='744.5' y1='-48' x2='744.5' y2='672' stroke='#D5DAE1' />
          <line x1='768.5' y1='-48' x2='768.5' y2='672' stroke='#D5DAE1' />
          <line x1='792.5' y1='-48' x2='792.5' y2='672' stroke='#D5DAE1' />
          <line x1='816.5' y1='-48' x2='816.5' y2='672' stroke='#D5DAE1' />
          <line x1='840.5' y1='-48' x2='840.5' y2='672' stroke='#D5DAE1' />
          <line x1='864.5' y1='-48' x2='864.5' y2='672' stroke='#D5DAE1' />
          <line x1='888.5' y1='-48' x2='888.5' y2='672' stroke='#D5DAE1' />
          <line x1='912.5' y1='-48' x2='912.5' y2='672' stroke='#D5DAE1' />
          <line x1='936.5' y1='-48' x2='936.5' y2='672' stroke='#D5DAE1' />
          <line x1='960.5' y1='-48' x2='960.5' y2='672' stroke='#D5DAE1' />
          <line x1='984.5' y1='-48' x2='984.5' y2='672' stroke='#D5DAE1' />
          <line x1='1008.5' y1='-48' x2='1008.5' y2='672' stroke='#D5DAE1' />
          <line x1='1032.5' y1='-48' x2='1032.5' y2='672' stroke='#D5DAE1' />
          <line x1='1056.5' y1='-48' x2='1056.5' y2='672' stroke='#D5DAE1' />
          <line x1='1080.5' y1='-48' x2='1080.5' y2='672' stroke='#D5DAE1' />
          <line x1='1104.5' y1='-48' x2='1104.5' y2='672' stroke='#D5DAE1' />
          <line x1='1128.5' y1='-48' x2='1128.5' y2='672' stroke='#D5DAE1' />
          <line x1='1152.5' y1='-48' x2='1152.5' y2='672' stroke='#D5DAE1' />
          <line x1='1176.5' y1='-48' x2='1176.5' y2='672' stroke='#D5DAE1' />
          <line x1='1200.5' y1='-48' x2='1200.5' y2='672' stroke='#D5DAE1' />
          <line x1='1224.5' y1='-48' x2='1224.5' y2='672' stroke='#D5DAE1' />
          <line x1='1248.5' y1='-48' x2='1248.5' y2='672' stroke='#D5DAE1' />
          <line x1='1272.5' y1='-48' x2='1272.5' y2='672' stroke='#D5DAE1' />
          <line x1='1296.5' y1='-48' x2='1296.5' y2='672' stroke='#D5DAE1' />
          <line x1='1320.5' y1='-48' x2='1320.5' y2='672' stroke='#D5DAE1' />
          <line x1='1344.5' y1='-48' x2='1344.5' y2='672' stroke='#D5DAE1' />
          <line x1='1368.5' y1='-48' x2='1368.5' y2='672' stroke='#D5DAE1' />
          <line x1='1392.5' y1='-48' x2='1392.5' y2='672' stroke='#D5DAE1' />
          <line x1='1416.5' y1='-48' x2='1416.5' y2='672' stroke='#D5DAE1' />
          <line x1='1440.5' y1='-48' x2='1440.5' y2='672' stroke='#D5DAE1' />
        </g>
        <rect
          y='2'
          width='1727'
          height='1006'
          fill='url(#paint0_radial_268_1298)'
        />
      </g>
      <defs>
        <radialGradient
          id='paint0_radial_268_1298'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(863.5 505) rotate(90) scale(503 863.5)'
        >
          <stop stopColor='#F7F8F9' stopOpacity='0' />
          <stop offset='1' stop-color='#F7F8F9' />
        </radialGradient>
        <clipPath id='clip0_268_1298'>
          <rect width='1727' height='1006' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

const PatternCircle = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='129'
      height='129'
      viewBox='0 0 129 129'
      fill='none'
    >
      <mask
        id='mask0_268_1508'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='129'
        height='129'
      >
        <circle
          cx='64.5'
          cy='64.5'
          r='63.6103'
          fill='#C4C4C4'
          stroke='#F8BB54'
          strokeWidth='1.77931'
        />
      </mask>
      <g mask='url(#mask0_268_1508)'>
        <path
          d='M-37.4844 27.0501C-37.4844 27.0501 -7.44941 21.4863 0.299994 2.01352C7.71125 -16.6533 38.2404 -21.6709 38.2404 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 36.4093C-37.4844 36.4093 -0.636166 29.9878 8.85543 6.48526C17.905 -15.9514 55.3252 -21.6709 55.3252 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 45.7948C-37.4844 45.7948 6.15098 38.4893 17.3849 11.009C28.0987 -15.2753 72.4102 -21.6709 72.4102 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 55.1542C-37.4844 55.1542 12.9641 46.9908 25.9403 15.4808C38.2924 -14.5733 89.4951 -21.6709 89.4951 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 64.5136C-37.4844 64.5136 19.7773 55.4923 34.4958 19.9784C48.486 -13.8714 106.554 -21.6709 106.554 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 73.899C-37.4844 73.899 26.5644 64.0196 43.0252 24.476C58.7058 -13.1955 123.639 -21.6709 123.639 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 83.2584C-37.4844 83.2584 33.3776 72.495 51.5807 28.9739C68.8996 -12.4935 140.724 -21.6709 140.724 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 92.6178C-37.4844 92.6178 40.1908 80.9965 60.11 33.4456C79.0932 -11.7916 157.809 -21.6709 157.809 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 102.003C-37.4844 102.003 46.9778 89.5241 68.6655 37.9692C89.2871 -11.1157 174.868 -21.6709 174.868 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 111.362C-37.4844 111.362 53.7911 98.0256 77.195 42.467C99.4807 -10.4137 191.952 -21.6709 191.952 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 120.747C-37.4844 120.747 60.6041 106.527 85.7505 46.9647C109.674 -9.71177 209.037 -21.6709 209.037 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 130.108C-37.4844 130.108 67.3913 115.029 94.2799 51.4625C119.868 -9.0357 226.122 -21.6709 226.122 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 139.466C-37.4844 139.466 74.2044 123.53 102.835 55.9341C130.062 -8.33373 243.206 -21.6709 243.206 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 148.851C-37.4844 148.851 81.0177 132.032 111.391 60.4578C140.256 -7.63176 260.266 -21.6709 260.266 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 158.212C-37.4844 158.212 87.8047 140.533 119.92 64.9296C150.449 -6.95589 277.351 -21.6709 277.351 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 167.572C-37.4844 167.572 94.618 149.034 128.476 69.4272C160.643 -6.25392 294.436 -21.6709 294.436 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 176.957C-37.4844 176.957 101.431 157.561 137.005 73.9251C170.837 -5.55195 311.52 -21.6709 311.52 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
        <path
          d='M-37.4844 186.316C-37.4844 186.316 108.218 166.037 145.56 78.4227C181.031 -4.87609 328.58 -21.6709 328.58 -21.6709'
          stroke='#8971FE'
          strokeWidth='2'
          strokeMiterlimit='10'
        />
      </g>
    </svg>
  )
}

const PatternSquare = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='149'
      height='91'
      viewBox='0 0 149 91'
      fill='none'
    >
      <g clip-path='url(#clip0_268_1529)'>
        <path
          d='M146.249 90.9099C147.707 90.9099 148.889 89.7279 148.889 88.2699C148.889 86.8119 147.707 85.6299 146.249 85.6299C144.791 85.6299 143.609 86.8119 143.609 88.2699C143.609 89.7279 144.791 90.9099 146.249 90.9099Z'
          fill='#2AD167'
        />
        <path
          d='M122.31 90.9099C123.768 90.9099 124.95 89.7279 124.95 88.2699C124.95 86.8119 123.768 85.6299 122.31 85.6299C120.852 85.6299 119.67 86.8119 119.67 88.2699C119.67 89.7279 120.852 90.9099 122.31 90.9099Z'
          fill='#2AD167'
        />
        <path
          d='M98.3802 90.9104C98.9048 90.9123 99.4181 90.7586 99.8552 90.4686C100.292 90.1787 100.634 89.7654 100.836 89.2814C101.038 88.7973 101.092 88.2642 100.991 87.7495C100.889 87.2348 100.638 86.7617 100.268 86.3901C99.8975 86.0185 99.4253 85.7651 98.911 85.662C98.3967 85.5589 97.8633 85.6108 97.3785 85.8111C96.8937 86.0114 96.4793 86.3511 96.1876 86.7871C95.896 87.2231 95.7402 87.7358 95.7402 88.2603C95.7402 88.9614 96.0181 89.6339 96.5129 90.1306C97.0078 90.6273 97.6792 90.9077 98.3802 90.9104V90.9104Z'
          fill='#2AD167'
        />
        <path
          d='M74.4498 90.9104C74.9739 90.9104 75.4863 90.7549 75.9221 90.4638C76.3579 90.1726 76.6975 89.7587 76.8981 89.2745C77.0986 88.7903 77.1511 88.2574 77.0488 87.7434C76.9466 87.2293 76.6942 86.7572 76.3236 86.3865C75.953 86.0159 75.4808 85.7635 74.9668 85.6613C74.4527 85.559 73.9199 85.6115 73.4357 85.8121C72.9514 86.0127 72.5376 86.3523 72.2465 86.7881C71.9553 87.2239 71.7998 87.7362 71.7998 88.2603C71.7998 88.6083 71.8683 88.953 72.0015 89.2745C72.1346 89.596 72.3299 89.8881 72.5759 90.1342C72.822 90.3802 73.1142 90.5755 73.4357 90.7087C73.7572 90.8419 74.1018 90.9104 74.4498 90.9104V90.9104Z'
          fill='#2AD167'
        />
        <path
          d='M50.5101 90.9099C51.9681 90.9099 53.1501 89.7279 53.1501 88.2699C53.1501 86.8119 51.9681 85.6299 50.5101 85.6299C49.0521 85.6299 47.8701 86.8119 47.8701 88.2699C47.8701 89.7279 49.0521 90.9099 50.5101 90.9099Z'
          fill='#2AD167'
        />
        <path
          d='M27.5901 90.5952C28.9386 90.0408 29.5823 88.4982 29.0279 87.1497C28.4735 85.8012 26.9308 85.1575 25.5823 85.7119C24.2338 86.2664 23.5901 87.809 24.1445 89.1575C24.6989 90.506 26.2416 91.1497 27.5901 90.5952Z'
          fill='#2AD167'
        />
        <path
          d='M2.65017 85.6602C2.1252 85.6582 1.61153 85.8122 1.17421 86.1026C0.736895 86.393 0.395678 86.8068 0.193868 87.2915C-0.00794293 87.7761 -0.0612624 88.3097 0.0406694 88.8247C0.142601 89.3397 0.395167 89.8128 0.766377 90.184C1.13759 90.5552 1.61065 90.8078 2.12563 90.9097C2.64061 91.0116 3.17433 90.9583 3.65896 90.7565C4.14359 90.5547 4.55737 90.2135 4.8478 89.7762C5.13822 89.3389 5.29216 88.8252 5.29018 88.3002C5.28755 87.6008 5.00858 86.9308 4.51406 86.4363C4.01953 85.9418 3.34953 85.6628 2.65017 85.6602V85.6602Z'
          fill='#2AD167'
        />
        <path
          d='M146.249 69.4997C147.707 69.4997 148.889 68.3178 148.889 66.8597C148.889 65.4017 147.707 64.2197 146.249 64.2197C144.791 64.2197 143.609 65.4017 143.609 66.8597C143.609 68.3178 144.791 69.4997 146.249 69.4997Z'
          fill='#2AD167'
        />
        <path
          d='M122.31 69.4997C123.768 69.4997 124.95 68.3178 124.95 66.8597C124.95 65.4017 123.768 64.2197 122.31 64.2197C120.852 64.2197 119.67 65.4017 119.67 66.8597C119.67 68.3178 120.852 69.4997 122.31 69.4997Z'
          fill='#2AD167'
        />
        <path
          d='M98.3803 69.5002C98.9052 69.5022 99.419 69.3482 99.8563 69.0578C100.294 68.7673 100.635 68.3535 100.837 67.8689C101.038 67.3843 101.092 66.8506 100.99 66.3357C100.888 65.8207 100.635 65.3475 100.264 64.9763C99.893 64.6051 99.4198 64.3526 98.9048 64.2506C98.3898 64.1487 97.8562 64.202 97.3716 64.4038C96.887 64.6056 96.4732 64.9469 96.1828 65.3842C95.8923 65.8215 95.7383 66.3352 95.7403 66.8602C95.7429 67.5595 96.022 68.2295 96.5165 68.724C97.011 69.2185 97.6809 69.4976 98.3803 69.5002V69.5002Z'
          fill='#2AD167'
        />
        <path
          d='M74.4498 69.5002C74.9744 69.5002 75.4871 69.3445 75.9231 69.0529C76.3591 68.7612 76.6988 68.3468 76.8991 67.862C77.0993 67.3772 77.1512 66.8438 77.0481 66.3295C76.9451 65.8152 76.6917 65.343 76.3201 64.9728C75.9485 64.6026 75.4753 64.351 74.9606 64.2499C74.4459 64.1488 73.9128 64.2027 73.4287 64.4048C72.9447 64.6069 72.5316 64.9481 72.2416 65.3852C71.9516 65.8223 71.7978 66.3356 71.7998 66.8602C71.7998 67.2077 71.8684 67.5518 72.0017 67.8728C72.135 68.1937 72.3304 68.4852 72.5766 68.7305C72.8228 68.9758 73.115 69.17 73.4364 69.3021C73.7579 69.4342 74.1023 69.5015 74.4498 69.5002V69.5002Z'
          fill='#2AD167'
        />
        <path
          d='M50.5101 69.4997C51.9681 69.4997 53.1501 68.3178 53.1501 66.8597C53.1501 65.4017 51.9681 64.2197 50.5101 64.2197C49.0521 64.2197 47.8701 65.4017 47.8701 66.8597C47.8701 68.3178 49.0521 69.4997 50.5101 69.4997Z'
          fill='#2AD167'
        />
        <path
          d='M27.5921 69.193C28.9406 68.6385 29.5843 67.0959 29.0299 65.7474C28.4754 64.3989 26.9328 63.7551 25.5843 64.3096C24.2358 64.864 23.592 66.4067 24.1465 67.7552C24.7009 69.1037 26.2436 69.7474 27.5921 69.193Z'
          fill='#2AD167'
        />
        <path
          d='M2.65004 69.5002C3.17459 69.5002 3.68731 69.3445 4.12331 69.0529C4.55931 68.7612 4.89899 68.3468 5.09926 67.862C5.29954 67.3772 5.3515 66.8438 5.24843 66.3295C5.14537 65.8152 4.89189 65.343 4.52028 64.9728C4.14867 64.6026 3.67561 64.351 3.16091 64.2499C2.6462 64.1488 2.11309 64.2027 1.62905 64.4048C1.145 64.6069 0.731771 64.9481 0.441791 65.3852C0.151812 65.8223 -0.00196055 66.3356 1.88721e-05 66.8602C1.63788e-05 67.2077 0.0686259 67.5518 0.201923 67.8728C0.33522 68.1937 0.530667 68.4852 0.776874 68.7305C1.02308 68.9758 1.31528 69.17 1.63674 69.3021C1.95819 69.4342 2.30251 69.5015 2.65004 69.5002Z'
          fill='#2AD167'
        />
        <path
          d='M146.249 48.0896C147.707 48.0896 148.889 46.9076 148.889 45.4496C148.889 43.9915 147.707 42.8096 146.249 42.8096C144.791 42.8096 143.609 43.9915 143.609 45.4496C143.609 46.9076 144.791 48.0896 146.249 48.0896Z'
          fill='#2AD167'
        />
        <path
          d='M122.31 48.0896C123.768 48.0896 124.95 46.9076 124.95 45.4496C124.95 43.9915 123.768 42.8096 122.31 42.8096C120.852 42.8096 119.67 43.9915 119.67 45.4496C119.67 46.9076 120.852 48.0896 122.31 48.0896Z'
          fill='#2AD167'
        />
        <path
          d='M98.3802 48.0998C98.9048 48.1018 99.4181 47.9481 99.8552 47.6581C100.292 47.3681 100.634 46.9549 100.836 46.4708C101.038 45.9868 101.092 45.4537 100.991 44.939C100.889 44.4243 100.638 43.9512 100.268 43.5795C99.8975 43.2079 99.4253 42.9545 98.911 42.8515C98.3967 42.7484 97.8633 42.8003 97.3785 43.0006C96.8937 43.2008 96.4793 43.5405 96.1876 43.9765C95.896 44.4125 95.7402 44.9252 95.7402 45.4498C95.7402 46.1509 96.0181 46.8234 96.5129 47.3201C97.0078 47.8168 97.6792 48.0972 98.3802 48.0998V48.0998Z'
          fill='#2AD167'
        />
        <path
          d='M74.4498 48.0998C74.9739 48.0998 75.4863 47.9444 75.9221 47.6532C76.3579 47.362 76.6975 46.9482 76.8981 46.4639C77.0986 45.9797 77.1511 45.4469 77.0488 44.9328C76.9466 44.4188 76.6942 43.9465 76.3236 43.5759C75.953 43.2053 75.4808 42.953 74.9668 42.8507C74.4527 42.7485 73.9199 42.801 73.4357 43.0015C72.9514 43.2021 72.5376 43.5418 72.2465 43.9776C71.9553 44.4133 71.7998 44.9257 71.7998 45.4498C71.7998 45.7978 71.8683 46.1424 72.0015 46.4639C72.1346 46.7855 72.3299 47.0775 72.5759 47.3236C72.822 47.5697 73.1142 47.7649 73.4357 47.8981C73.7572 48.0313 74.1018 48.0998 74.4498 48.0998V48.0998Z'
          fill='#2AD167'
        />
        <path
          d='M50.5101 48.0896C51.9681 48.0896 53.1501 46.9076 53.1501 45.4496C53.1501 43.9915 51.9681 42.8096 50.5101 42.8096C49.0521 42.8096 47.8701 43.9915 47.8701 45.4496C47.8701 46.9076 49.0521 48.0896 50.5101 48.0896Z'
          fill='#2AD167'
        />
        <path
          d='M27.5911 47.7915C28.9396 47.237 29.5833 45.6944 29.0289 44.3459C28.4744 42.9974 26.9318 42.3537 25.5833 42.9081C24.2348 43.4626 23.591 45.0052 24.1455 46.3537C24.6999 47.7022 26.2426 48.3459 27.5911 47.7915Z'
          fill='#2AD167'
        />
        <path
          d='M2.65002 48.0998C3.17414 48.0998 3.68652 47.9444 4.12231 47.6532C4.5581 47.362 4.89769 46.9482 5.09827 46.4639C5.29884 45.9797 5.3514 45.4469 5.24915 44.9328C5.14689 44.4188 4.89453 43.9465 4.52393 43.5759C4.15332 43.2053 3.68104 42.953 3.16699 42.8507C2.65294 42.7485 2.12021 42.801 1.63599 43.0015C1.15176 43.2021 0.737841 43.5418 0.446655 43.9776C0.15547 44.4133 0 44.9257 0 45.4498C0 46.1526 0.279274 46.8266 0.776245 47.3236C1.27322 47.8206 1.9472 48.0998 2.65002 48.0998V48.0998Z'
          fill='#2AD167'
        />
        <path
          d='M146.249 26.6902C147.707 26.6902 148.889 25.5082 148.889 24.0502C148.889 22.5921 147.707 21.4102 146.249 21.4102C144.791 21.4102 143.609 22.5921 143.609 24.0502C143.609 25.5082 144.791 26.6902 146.249 26.6902Z'
          fill='#2AD167'
        />
        <path
          d='M122.31 26.6902C123.768 26.6902 124.95 25.5082 124.95 24.0502C124.95 22.5921 123.768 21.4102 122.31 21.4102C120.852 21.4102 119.67 22.5921 119.67 24.0502C119.67 25.5082 120.852 26.6902 122.31 26.6902Z'
          fill='#2AD167'
        />
        <path
          d='M98.3803 26.6604C98.9052 26.6623 99.419 26.5083 99.8563 26.2179C100.294 25.9275 100.635 25.5137 100.837 25.0291C101.038 24.5444 101.092 24.0108 100.99 23.4958C100.888 22.9808 100.635 22.5078 100.264 22.1366C99.893 21.7653 99.4198 21.5127 98.9048 21.4108C98.3898 21.3089 97.8562 21.3622 97.3716 21.564C96.887 21.7658 96.4732 22.107 96.1828 22.5443C95.8923 22.9817 95.7383 23.4954 95.7403 24.0203C95.7429 24.7197 96.022 25.3897 96.5165 25.8842C97.011 26.3788 97.6809 26.6577 98.3803 26.6604V26.6604Z'
          fill='#2AD167'
        />
        <path
          d='M74.4498 26.6604C74.9744 26.6604 75.4871 26.5047 75.9231 26.213C76.3591 25.9214 76.6988 25.507 76.8991 25.0222C77.0993 24.5374 77.1512 24.004 77.0481 23.4897C76.9451 22.9754 76.6917 22.5032 76.3201 22.133C75.9485 21.7628 75.4753 21.5112 74.9606 21.4101C74.4459 21.3089 73.9128 21.3629 73.4287 21.565C72.9447 21.7671 72.5316 22.1083 72.2416 22.5454C71.9516 22.9825 71.7978 23.4958 71.7998 24.0203C71.7998 24.3679 71.8684 24.712 72.0017 25.033C72.135 25.3539 72.3304 25.6454 72.5766 25.8906C72.8228 26.1359 73.115 26.3302 73.4364 26.4623C73.7579 26.5944 74.1023 26.6617 74.4498 26.6604V26.6604Z'
          fill='#2AD167'
        />
        <path
          d='M50.5101 26.6902C51.9681 26.6902 53.1501 25.5082 53.1501 24.0502C53.1501 22.5921 51.9681 21.4102 50.5101 21.4102C49.0521 21.4102 47.8701 22.5921 47.8701 24.0502C47.8701 25.5082 49.0521 26.6902 50.5101 26.6902Z'
          fill='#2AD167'
        />
        <path
          d='M27.594 26.3892C28.9425 25.8348 29.5863 24.2922 29.0318 22.9437C28.4774 21.5952 26.9347 20.9514 25.5862 21.5059C24.2377 22.0603 23.594 23.603 24.1484 24.9515C24.7029 26.3 26.2455 26.9437 27.594 26.3892Z'
          fill='#2AD167'
        />
        <path
          d='M2.65004 26.6604C3.17459 26.6604 3.68731 26.5047 4.12331 26.213C4.55931 25.9214 4.89899 25.507 5.09926 25.0222C5.29954 24.5374 5.3515 24.004 5.24843 23.4897C5.14537 22.9754 4.89189 22.5032 4.52028 22.133C4.14867 21.7628 3.67561 21.5112 3.16091 21.4101C2.6462 21.3089 2.11309 21.3629 1.62905 21.565C1.145 21.7671 0.731771 22.1083 0.441791 22.5454C0.151812 22.9825 -0.00196055 23.4958 1.88721e-05 24.0203C1.63788e-05 24.3679 0.0686259 24.712 0.201923 25.033C0.33522 25.3539 0.530667 25.6454 0.776874 25.8906C1.02308 26.1359 1.31528 26.3302 1.63674 26.4623C1.95819 26.5944 2.30251 26.6617 2.65004 26.6604V26.6604Z'
          fill='#2AD167'
        />
        <path
          d='M146.249 5.28C147.707 5.28 148.889 4.09803 148.889 2.64C148.889 1.18197 147.707 0 146.249 0C144.791 0 143.609 1.18197 143.609 2.64C143.609 4.09803 144.791 5.28 146.249 5.28Z'
          fill='#2AD167'
        />
        <path
          d='M122.31 5.28C123.768 5.28 124.95 4.09803 124.95 2.64C124.95 1.18197 123.768 0 122.31 0C120.852 0 119.67 1.18197 119.67 2.64C119.67 4.09803 120.852 5.28 122.31 5.28Z'
          fill='#2AD167'
        />
        <path
          d='M98.3802 5.29024C98.9048 5.29222 99.4181 5.13851 99.8552 4.84853C100.292 4.55855 100.634 4.14532 100.836 3.66127C101.038 3.17723 101.092 2.64412 100.991 2.12941C100.889 1.61471 100.638 1.14159 100.268 0.769978C99.8975 0.398368 99.4253 0.144953 98.911 0.0418894C98.3967 -0.0611745 97.8633 -0.00927669 97.3785 0.190998C96.8937 0.391273 96.4793 0.730946 96.1876 1.16695C95.896 1.60295 95.7402 2.11567 95.7402 2.64022C95.7402 3.34131 96.0181 4.01383 96.5129 4.51052C97.0078 5.0072 97.6792 5.2876 98.3802 5.29024V5.29024Z'
          fill='#2AD167'
        />
        <path
          d='M74.4498 5.29023C74.9739 5.29023 75.4863 5.13483 75.9221 4.84364C76.3579 4.55245 76.6975 4.13859 76.8981 3.65437C77.0986 3.17015 77.1511 2.63729 77.0488 2.12324C76.9466 1.60919 76.6942 1.13698 76.3236 0.76637C75.953 0.395761 75.4808 0.143401 74.9668 0.04115C74.4527 -0.0611008 73.9199 -0.00860433 73.4357 0.191968C72.9514 0.39254 72.5376 0.732191 72.2465 1.16798C71.9553 1.60377 71.7998 2.11609 71.7998 2.64021C71.7998 2.98821 71.8683 3.33286 72.0015 3.65437C72.1346 3.97588 72.3299 4.26798 72.5759 4.51405C72.822 4.76013 73.1142 4.95534 73.4357 5.08851C73.7572 5.22169 74.1018 5.29023 74.4498 5.29023V5.29023Z'
          fill='#2AD167'
        />
        <path
          d='M50.5101 5.28C51.9681 5.28 53.1501 4.09803 53.1501 2.64C53.1501 1.18197 51.9681 0 50.5101 0C49.0521 0 47.8701 1.18197 47.8701 2.64C47.8701 4.09803 49.0521 5.28 50.5101 5.28Z'
          fill='#2AD167'
        />
        <path
          d='M27.592 4.97708C28.9406 4.42265 29.5843 2.87999 29.0298 1.53149C28.4754 0.182988 26.9328 -0.460681 25.5843 0.0937553C24.2358 0.648191 23.592 2.19079 24.1465 3.53929C24.7009 4.88779 26.2435 5.53152 27.592 4.97708Z'
          fill='#2AD167'
        />
        <path
          d='M2.65002 5.29023C3.17414 5.29023 3.68652 5.13483 4.12231 4.84364C4.5581 4.55245 4.89769 4.13859 5.09827 3.65437C5.29884 3.17015 5.3514 2.63729 5.24915 2.12324C5.14689 1.60919 4.89453 1.13698 4.52393 0.76637C4.15332 0.395761 3.68104 0.143401 3.16699 0.04115C2.65294 -0.0611008 2.12021 -0.00860433 1.63599 0.191968C1.15176 0.39254 0.737841 0.732191 0.446655 1.16798C0.15547 1.60377 0 2.11609 0 2.64021C0 3.34303 0.279274 4.01708 0.776245 4.51405C1.27322 5.01102 1.9472 5.29023 2.65002 5.29023V5.29023Z'
          fill='#2AD167'
        />
      </g>
      <defs>
        <clipPath id='clip0_268_1529'>
          <rect width='148.89' height='90.91' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

const Categories = () => {
  return (
    <div className={styles['categories-box']}>
      <div className={styles.categories}>
        <div className={styles.categories__desc}>
          <Chip variant='primary' proportion='md' bold={true}>
            CATEGORIES
          </Chip>
          <h2>Explore the World of Development</h2>
          <p>
            Whether you're diving into new frameworks, refining your coding
            skills, or exploring trends in tech, this space is designed for
            developers at every level. Discover topics, gain insights, and keep
            your projects sharp and future-ready!
          </p>
        </div>
        <div className={styles['categories__items']}>
          {categories.map((category) => (
            <Category
              key={crypto.randomUUID()}
              title={category.title}
              description={category.description}
              Icon={category.Icon}
            />
          ))}
        </div>
        <div className={styles['categories__img']}>
          <div className={styles['categories__img--pattern']}>
            <PatternCircle />
          </div>
          <picture>
            <source width='380' height='380' media='(min-width: 520px)' />
            <img
              width='320'
              height='320'
              src='https://picsum.photos/320'
              alt=''
              className={styles['categories__img--pic']}
            />
          </picture>
          <div className={styles['categories__img--pattern']}>
            <PatternSquare />
          </div>
        </div>
      </div>
      <div className={styles['categories-background']}>
        <CategoryBackground />
      </div>
    </div>
  )
}

export default Categories;
