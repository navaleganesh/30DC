import React, { useMemo, useState } from 'react'

const BmiCalculator = () => {
 const [weight, setWeight]  = useState(40)
 const [height, setHeight ] = useState(150)

  const onWeightChange = (e) => {
    setWeight(e.target.value)
  } 
  const onHeightChange = (e) => {
    setHeight(e.target.value)
  } 

  const output = useMemo(()=>{

    const calculateHeight =  height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1)

  }, [weight, height])

  
  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-white text-2xl/9 font-bold tracking-tight  ">BMI Calculator</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label>Weight {weight}kg</label>
                <div className="mt-2">
                  <input type="range" onChange={onWeightChange} min="40" max="100" />
                </div>
              </div>

              <div>
                <label>Height {height}cm</label>
                <div className="mt-2">
                  <input type="range" onChange={onHeightChange} min="150" max="190" />
                </div>
              </div>

              <div>
                <h3>Your BMI is {output}</h3>
              </div>
            </form>

          </div>
        </div>
      </div>

  )
}

export default BmiCalculator