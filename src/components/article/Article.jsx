import React from 'react'
import Tab from '../tab/Tab'
import './article.css'

function Article() {
  return (
    <div className='article flex flex-col items-center justify-center pb-10'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L1440,64L1440,0L0,0Z"></path></svg>
        <p className='font-bold text-gray-600 text-2xl article-title text-center px-4' >A blief Christian article</p>
        <Tab/>
        <div className='container article-text flex items-center justify-center mt-6'>
            <p>Salvation is the act of being saved or protected from harm, destruction, or evil. In the Christian faith, salvation refers to the belief that through the death and resurrection of Jesus Christ, believers can be forgiven for their sins and have eternal life with God.
                The Bible teaches that salvation is a gift from God, offered to all people through faith in Jesus Christ. Ephesians 2:8-9 says, "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast."
                Salvation is not earned through good works or personal merit, but is received through faith in Jesus Christ. Romans 10:9 says, "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved."
                Salvation is made possible by the death and resurrection of Jesus, who paid the price for our sins through his death on the cross. Romans 5:8 says, "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."
                Believing in Jesus and confessing him as Lord and Savior is the first step in receiving salvation. Once we accept this gift, we can have a personal relationship with God and experience his love and presence in our lives.
                If you are seeking salvation and want to know more about how to have a relationship with Jesus, I encourage you to pray and ask God to reveal himself to you. You can also talk to a pastor or a Christian friend who can help you understand more about what it means to follow Jesus.</p>
        </div>
    </div>
  )
}

export default Article