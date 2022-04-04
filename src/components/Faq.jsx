const Faq = () => {
  return (
    <div className='bg-gray-800'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
          <div>
            <h2 className='text-3xl font-extrabold text-white'>Frequently asked questions</h2>
            <p className='mt-4 text-lg text-gray-400'>
              A collection of frequently asked questions regarding the calculation and meaning of
              the Body Mass Index or BMI for short.
            </p>
          </div>
          <div className='mt-12 lg:mt-0 lg:col-span-2'>
            <dl className='space-y-12'>
              <div>
                <dt className='text-lg leading-6 font-medium text-white'>
                  What does the BMI mean?
                </dt>
                <dd className='mt-2 text-base text-gray-400'>
                  The BMI or Body Mass Index is the relation between your height and your weight. It
                  describes whether your weight is in the normal range for your height.{' '}
                </dd>
              </div>
              <div>
                <dt className='text-lg leading-6 font-medium text-white'>
                  What BMI categories are there?
                </dt>
                <dd className='mt-2 text-base text-gray-400'>
                  The WHO categorizes the BMI-values of adults into the following categories: <br />
                  <ul className='list-disc ml-7'>
                    <li>Underweight (BMI of 18.5 and below)</li>
                    <li>Normal Weight (BMI of 18.5 - 24.9)</li>
                    <li>Overweight (BMI of 25 - 29.9)</li>
                    <li>Obesity Class I (BMI of 30 - 34.9)</li>
                    <li>Obesity Class II (BMI of 35 - 39.9)</li>
                    <li>Obesity Class III (BMI of 40 and above)</li>
                  </ul>
                </dd>
              </div>
              <div>
                <dt className='text-lg leading-6 font-medium text-white'>
                  If the BMI requires the height and weight, why is the age relevant?
                </dt>
                <dd className='mt-2 text-base text-gray-400'>
                  The question of "ideal weight" is certainly not easy to answer. In the 70's, large
                  studies have shown that BMI values correlating with the lowest mortality rate rise
                  with age. This correlation derives from a table published by the National Research
                  Council in 1989.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
