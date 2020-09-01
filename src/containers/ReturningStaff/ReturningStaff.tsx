import React from 'react'
import './ReturningStaff.scss'
import RedirectLink from '../../components/RedirectLink/redirectLink'

export default function ReturningStaff() {
    return (<div className='container retStaffPage'>
        <a href='/'>{'< '} Home</a>
       
        <h1>Returning Staff</h1>
        <p>Our Secretariat are working to develop our conference plan. </p>
        <p>Please contact <strong>'info@richmun.ca'</strong> for more information or await contact from the Secretariat.</p>
    </div>)
}