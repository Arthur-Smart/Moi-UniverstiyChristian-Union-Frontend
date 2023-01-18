import React from 'react'
import Tab from '../tab/Tab'
import './ministrydata.css'

function MinistryData() {
  return (
    <div className='ministry-data flex flex-col items-center justify-center py-10'>
        <p className='font-bold text-2xl text-center text-gray-600 text-center px-4'>Our different Minisrty</p>
        <p className='text-center px-4'>Learn about our ministries. It will be nice having you in one</p>
        <Tab/>
        <div className='container flex flex-col items-center justify-between mt-10'>
            <div className='single-ministry flex'>
                <div className='ministry-left flex justify-center'>
                    <img className='rounded-md' src={require('../../assets/boniface.jpg')} alt=''/>
                </div>
                <div className='ministry-right'>
                    <p className='font-bold text-slate-600'>PRAYER DOCKET</p>
                    <p>The prayer docket is a key ministry in the Christian union. Everything in the Christian union and in the life of salvation is premised on prayer. The docket is headed by a prayer secretary who derives their roles from article 20 of the MUACCU Constitution and is in charge of handling all prayer correspondences in the Union. There is also a larger team including the intercessory Ministry leader, the intercessors and the various prayer secretaries for the subcommittees in the Christian union. Our vision is to empower every member of the union to know how to pray for the scriptures say many pray and receive not for they pray amiss (James 4:3).After people have known how to pray they will be able to walk in answered prayers and their joy will be made complete (John 16:24).We believe in the working of the Holy Spirit who helps us in our infirmities even where we don’t know how to pray. For as the scriptures say it is only God who works in us both to will and to do according to his purposes (Philippians 2:13). God bless the prayer docket and MUACCU at large! In Christ’s service Danson Ndunda 17th Prayer Secretary MUACCU</p>
                </div>
            </div>

            <div className='single-ministry flex'>
                <div className='ministry-left flex justify-center'>
                    <img className='rounded-md' src={require('../../assets/discipleship..jpg')} alt=''/>
                </div>
                <div className='ministry-right'>
                    <p className='font-bold text-slate-600'>DISCIPLISHIP SUBCOMMITTEE</p>
                    <p>The subcommittee consist of the following ministries; 1. Mentorship and baptism. This is responsible for mentoring the union members and facilitation of the baptism class which climax with the attendees being baptized & given certificate. 2. First years coordination ministry, this is responsible for absorption and embedding of the first years in the union. The first years are taken through guidance and counseling on the campus life and salvation through the ANZA FIT program. Retreat and other fellowship for first years are organized under this ministry. 3. Follow up ministry. Here the new converts sourced during missions and evangelism are keenly folloed up on their progress. Visitation to theirs homes encompassed with prayers, preaching, motivation and encouragement are done through this ministry. 4.Sunday school ministry. All the children in the union are being taught and trained the word of God. It is also responsible for training and recruitment of Sunday school teachers. 5. Best P ministry. This ministry is responsible for spiritual growth of the member through equipping them with sound biblical topics and doctrines. It facilitate classes where they are trained on variety of topics. It also facilitate the members to engage in bible exposition .</p>
                </div>
            </div>

            <div className='single-ministry flex'>
                <div className='ministry-left flex justify-center'>
                    <img className='rounded-md' src={require('../../assets/richard.jpg')} alt=''/>
                </div>
                <div className='ministry-right'>
                    <p className='font-bold text-slate-600'>THE SERVICE SUB-COMMITTEE</p>
                    <p>The service sub-committee is the Christian Union sub-committee responsible for organising all Union services and all gatherings under the five ministries that make up the sub-committee. These ministries are: The Ushering ministry, the Choir Ministry, the Praise and Worship Ministry, the Technicians Ministry and the Hospitality Ministry. All of the aforementioned ministries are headed by ministry coordinators who in turn make the service sub-committee. In addition to the ministry leaders, the sub-committee has four more members. There is the sub-committee chairperson who is the sub-committee chair and repsentative of the sub-committee in the Union executive council, the secretary, the prayer secretary and the treasurer. The last three are nominated by the chair together with the ministry coordinators and thereafter appointed by the executive council upon assumption of office.</p>
                </div>
            </div>

            <div className='single-ministry flex'>
                <div className='ministry-left flex justify-center'>
                    <img className='rounded-md' src={require('../../assets/team.jpg')} alt=''/>
                </div>
                <div className='ministry-right'>
                    <p className='font-bold text-slate-600'>TREASURY DOCKET</p>
                    <p>This is a docket under MUACCU which is responsible for handling and keeping all the funds of the church with high integrity. This docket ensures that all the church activities are well prioritized in funding for them to run smoothly. The docket gets it's funds from the CU's tithes and offerings, donations and projects carried out in the different ministries in the church. It is headed by the church treasurer who is a member of the Executive. Under the docket we have the outreach treasurer and the service sub-com treasurer who work hand in hand with the church treasurer</p>
                </div>
            </div>

            <div className='single-ministry flex'>
                <div className='ministry-left flex justify-center'>
                    <img className='rounded-md' src={require('../../assets/biblestudy.jpg')} alt=''/>
                </div>
                <div className='ministry-right'>
                    <p className='font-bold text-slate-600'>BIBLE STUDY DOCKET</p>
                    <p>The Bible Study Docket Coordinates MUACCU’S Bible Study through the study of various guides instrumental for the member’s spiritual growth to enhance a culture of reading GOD’s WORD. This Docket works in hand with various area coordinators for Its efficiency:Bible Study Sub-committee.The zones include:Sugunanga,Acacia,Thika Road,Center A,Center B,Jamboni,Miami and Outspan The members converge for the Fellowship on Fridays at their various venues within their locality from 5:00-7:00pm At the end of the semester we organize a Bible Trivia which evaluates the member’s In-depth study and understanding of the WORD to which the winners are awarded for their resilience in the Study.</p>
                </div>
            </div>

            <div className='single-ministry flex'>
                <div className='ministry-left flex justify-center'>
                    <img className='rounded-md' src={require('../../assets/instrumentalist.jpg')} alt=''/>
                </div>
                <div className='ministry-right'>
                    <p className='font-bold text-slate-600'>ASSETS SUB-COMMITTEE</p>
                    <p>It comprises of the Assets Manager(Chairperson of the sub commitee and executive) and members of other ministries i.e Technician, Hospitality, Media, Library and even ushering. The subcommitee aids in duties such as keeping inventory, purchase of new assets, handling loss, repair and disposal of church items and also leasing or renting.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MinistryData