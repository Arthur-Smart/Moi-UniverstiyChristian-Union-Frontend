import React from 'react'
import Tab from '../tab/Tab'
import './eventsfacts.css'

function EventsFacts() {
  return (
    <div className='eventsfacts flex flex-col items-center justify-center py-10'>
        <p className='font-bold text-2xl text-center text-gray-600' >What do some of our events be like</p>
        <p>Learn about our chastity week and prayer and fasting week</p>
        <Tab/>
        <div className='container flex flex-col items-center justify-center mt-10'>
            <div className='single-event-desc rounded-md p-2 mb-4 '>
                <p className='font-medium text-xl text-slate-500' >Chastity Week</p>
                <p>This can be translated to mean purity. Chastity being the state of refraining from extramarital and sexual intercourse as a Christian Union we have always tried to engage this campaign so that we may all be educated on the same. Sexual immorality being the greatest challenge of most youths today. We try to overcome this by handling topics on Chastity and with the help of Focus staff find a very resourceful person who can address us on the same. We have had chastity campaings, chastity awarenessto bring people to the knoeledge of the importance of purity while not married</p>
            </div>
            <div className='single-event-desc rounded-md p-2 mb-4 '>
                <p className='font-medium text-xl text-slate-500' >Prayer and fasting week</p>
                <p>As a church and a union, we are deeply rooted and grounded with roots of prayer. It has been a good discipline that has been cultivated and we thamk the Almighty that our members are still growing in it. Not to forget the prayer and fasting weeks that we always have on every First week of every month. Is is good that the members have embraced this and we are playing for deeper Dimensions in the spirit. Weekly prayer are also a good platform for our members to grow. Corporate prayers have assisted us alot in this just as the sword of the Spirit says that iron sharpens iron so do persons sharpen each other. The powerful morning glories have been an encouragement when we really command our day in the morning and indeed we have witnessed of the Lord's doing. We are looking to a time that we shall have vigilant intercessors in the church and that each and every person shall be found Vigilant seeking God.</p>
            </div>

            <div className='single-event-desc rounded-md p-2 mb-4 '>
                <p className='font-medium text-xl text-slate-500' >Anza fiti program</p>
                <p>This is program that can be loosely translated to mean beginning well. It is designed for the fresh men and women in campus. It initiate them to campus life. It covers the salvation, academic and social life. It is therefore fundamental and foundation to their way of life in the university.</p>
            </div>

            <div className='single-event-desc rounded-md p-2 mb-4 '>
                <p className='font-medium text-xl text-slate-500' >Vuka fiti program</p>
                <p>This is yet another program which can as well be translated to mean transiting from campus well. It is targeted for the finalists who are on their way out of the university. Having been taken through anza fyt to guide them in campus, they are again give post campus life skills and incites that will help them navigate out there. It also touches on christian life, employment, social life and many others.</p>
            </div>

            <div className='single-event-desc rounded-md p-2 mb-4 '>
                <p className='font-medium text-xl text-slate-500' >Anual General Metting</p>
                <p>According to MUACCU constitution, the AGM is done on the second Sunday of October every year. The major reason for this meeting is to bring all the stakeholders of the Moi University Annex Campus Christian Union together. It is also the time that we have the transition in the church. The out going leadershiphands over to the Incoming leadership to lead the church to the next step.</p>
            </div>

            <div className='single-event-desc rounded-md p-2 mb-4 '>
                <p className='font-medium text-xl text-slate-500' >African sunday</p>
                <p>This is a day where we come together to celebrate our different cultures in a christian way. People wear African attires and almost everything includding songs are done in an African way.</p>
            </div>

            <div className='single-event-desc rounded-md p-2 mb-4 '>
                <p className='font-medium text-xl text-slate-500' >Food bank sunday</p>
                <p>This is the day that is dedicated we may assist those in need amongst us. People give food stuffs , money, clothings and any tangible item that could be of help to the congregation. These things are not all given out on that day, but some are kept with the directives of the vice chair(now this becomes Food Bank) for any need that may arise</p>
            </div>
            
        </div>
    </div>
  )
}

export default EventsFacts