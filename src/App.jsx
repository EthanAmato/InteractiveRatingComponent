import { useState } from 'react'
import "./styles/index.scss"
import ThankYouLogo from "./assets/images/illustration-thank-you.svg"

const numOptions = 5;


function App() {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    setHasSubmitted(() => true)
  }


  return (
    <>
      <main>

        {
          !hasSubmitted ?
            <form onSubmit={handleSubmit}>
              <div className='container'>
                <div className='star'>&#9733;</div>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                  to help us improve our offering!</p>
                <div className='button-wrapper'>

                  {[...Array(numOptions).keys()].map((num) => {
                    return (
                      <>
                        <input
                          name='buttonGroup'
                          key={`${num}input`}
                          type={"radio"}
                          id={`input${num + 1}`}
                          value={num + 1}
                          onChange={(e) => setSelectedRating(() => e.target.value)}
                        />
                        <label
                          key={`${num}label`}
                          className={"button"}
                          htmlFor={`input${num + 1}`}
                        >{num + 1}
                        </label>
                      </>
                    );
                  })}
                </div>
                <input type={"submit"} className="submit" value={"SUBMIT"} />
              </div>
            </form>
            :
            <div className='container feedback'>
              <img src={ThankYouLogo} alt="Thank You for Rating Us" />
              <p className='selectionFeedback'>You selected {selectedRating} out of {numOptions}</p>
              <h1>Thank You!</h1>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>

        }

        {/* You selected Add rating here  out of 5 */}
        {/* 
        <div className='container'>

          Thank you!

          We appreciate you taking the time to give a rating. If you ever need more support,
          don't hesitate to get in touch!
        </div> */}

        {/* <!-- Thank you state end --> */}



      </main>
      <footer className="attribution">
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.linkedin.com/in/ethan-amato/">Ethan Amato</a>.
        </p>
      </footer>
    </>
  )
}

export default App
