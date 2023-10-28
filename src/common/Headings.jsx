import './Headings.scss'

const Headings = ({heading, blurHeading}) => {
  return (
    <div className='headings text-center'>
      <p className='headings-blur lg:text-[55px] text-xl'>{blurHeading}</p>
      <p className='headings-bold lg:text-5xl text-xl lg:-mt-12 -mt-16'>{heading}</p>
    </div>
  )
}

export default Headings
