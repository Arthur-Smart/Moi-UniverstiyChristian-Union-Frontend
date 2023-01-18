import React from 'react'
import Tab from '../tab/Tab'
import './membership.css'

function Membership() {
  return (
    <div className='membership flex flex-col items-center justify-between py-7'>
        <p className='font-bold text-2xl text-center text-gray-600 text-center px-4'>Our membership statement</p>
        <p className='text-center px-4'>Learn how you can become a Moi University Annex Campus Christian Union Member</p>
        <Tab/>
        <div className='container flex flex-col items-center justify-center mt-10'>
            <div className='membership-text-container rounded-md mb-3 p-3' >
                <p className='font-bold text-lg text-gray-600' >ARTICLE 5: MEMBERSHIP</p>
                <p>Membership of the Union shall be composed of full, special and associate members.</p>
            </div>
            <div className='membership-text-container rounded-md mb-3 p-3' >
                <p className='font-bold text-lg text-gray-600' >ARTICLE 6: FULL MEMBERSHIP</p>
                <p>Full membership of the Union shall be open to all bona fide registered undergraduate students of Moi University (Town campus) who ascribe to the doctrinal basis in Article 4 of this constitution and who conscientiously sign the following declaration as contained in FORM A in the schedule: ‘In joining the Union, I declare my faith in Jesus Christ as my savior, my Lord and my God and it is my desire by the grace of God to live a life consistent with this declaration. I am also determined to give support to the union as it seeks to fulfill its aims.” Membership shall be renewed every academic year by signing declaration in (I) above as provided in FORM A in the schedule or otherwise as the Executive Committee deems it necessary or entering of names into the associate members register as the case may be.</p>
            </div>
            <div className='membership-text-container rounded-md mb-3 p-3' >
                <p className='font-bold text-lg text-gray-600' >ARTICLE 7: SPECIAL MEMBERSHIP</p>
                <p>Special membership of the Union shall be open to all bona fide registered students of Moi University Annex Campus Christian Union who conscientiously sign the declaration form in Article 6(I) and subject to renewal as under Article 6 (II).</p>
            </div>
        </div>
    </div>
  )
}

export default Membership