import './Landing.scss'
import React from 'react'
import { Image } from 'react-bootstrap'
import BackgroundImage from '../images/lines.png'
import Croco from '../images/croco2.png'
import FoundersImage from '../images/founders.svg'
import BelieversImage from '../images/believers.svg'
import ClaimersImage from '../images/claimers.svg'
import { Link } from 'react-router-dom'

function LandingPage (props) {
  var background = { backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'absolute', opacity: 0.4 }
  var backgroundCroco = { backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'absolute', opacity: 0.4, width: '25%', left: '20%', top: '33%' }
  var image = { width: '64px' }
  var qq = '//'
  return (
    <div
      className='container my-auto'
    >
      <Image
        style={background} fluid
        src={BackgroundImage}
      />
      <Image
        style={backgroundCroco} fluid
        src={Croco}
      />
      <div style={{ margin: '5%' }} />
      <div className='container content'>
        <div className='row justify-content-evenly'>
          <div className='col-2' />

          <div className='col-6'>
            <div className='huge'>{qq} The easiest way to get a cool account name :)</div>
            <div style={{ margin: '15%' }} />
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h3>
                           For whom NEAR Accounts Marketplace has been built?
        </h3>
      </div>
      <div style={{ margin: '5%' }} />
      <section className='features-icons text-center det-ails'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3'>
                <div className='position-relative py-5'>
                  <div className='top-50 start-50  py-3 px-3 translate-middle' style={{ borderRadius: '50%', position: 'absolute', backgroundColor: '#616E5C' }}>
                    <Image
                      class='position-absolute'
                      fluid
                      src={FoundersImage}
                      style={image}
                    />
                  </div>
                </div>
                <h3 className='py-3'>Founders</h3>
                <h2 className='gray'>Find brilliant account names and place them onto the market for rewards</h2>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3'>
                <div className='position-relative py-5'>
                  <div className='top-50 start-50  py-3 px-3 translate-middle' style={{ borderRadius: '50%', position: 'absolute', backgroundColor: '#616E5C' }}>
                    <Image
                      class='position-absolute'
                      fluid
                      src={BelieversImage}
                      style={image}
                    />
                  </div>
                </div>
                <h3 className='py-3'>Believers</h3>
                <h2 className='gray'>Participate in finding fair price, earn for your faithful evaluation and wisdom</h2>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='features-icons-item mx-auto mb-0 mb-lg-3'>
                <div className='position-relative py-5'>
                  <div className='top-50 start-50  py-3 px-3 translate-middle' style={{ borderRadius: '50%', position: 'absolute', backgroundColor: '#616E5C' }}>
                    <Image
                      class='position-absolute'
                      fluid
                      src={ClaimersImage}
                      style={image}
                    />
                  </div>
                </div>
                <h3 className='py-3'>Claimers</h3>
                <h2 className='gray'>Obtain perfect account names for inner usage, personal collection or further resale</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row'>
          <div className='col-1' />
          <div className='col-lg-4'>
            <h1 className='pt-3'>{qq} There are two basic operations you can do at the Marketplace </h1>
            <div className='text-center'>
              <Link className='btn btn-lg btn-secondary mt-3' to='/rules'>Dive into rules</Link>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='row align-items-center my-5'>
              <div className='col-3'>
                <h3>Bet:</h3>
              </div>
              <div className='col py-3'>
                <h5 className='gray'>if you're sure the account name is undervalued and will be claimed later for higher price &mdash; grab up to 50% profit </h5>
              </div>
            </div>
            <div className='row align-items-center'>
              <div className='col-3'>
                <h3>Claim:</h3>
              </div>
              <div className='col py-3'>
                <h5 className='gray'>if you want to obtain the account name for yourself and no one will overbid you in the next 72 hours </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: '15%' }} />
      <div className='container text-center'>
        <h1>{qq} Interested?</h1>
        <Link className='btn btn-lg btn-success mt-3' to='/market'>Jump to the market!</Link>
      </div>
      <div className='huge' />
    </div>
  )
}

export default LandingPage
