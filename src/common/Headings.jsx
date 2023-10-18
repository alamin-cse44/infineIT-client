import './Headings.scss'

const Headings = ({heading, blurHeading}) => {
  return (
    <div className='headings text-center'>
      <p className='headings-blur lg:text-6xl sm:text-5xl'>{blurHeading}</p>
      <p className='headings-bold lg:text-5xl sm:text-3xl lg:-mt-12 -mt-16'>{heading}</p>
    </div>
  )
}

export default Headings
