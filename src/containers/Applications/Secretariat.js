import React from "react";
import "./applications.scss";
import RedirectLink from "../../components/RedirectLink/redirectLink";

export default function Secretariat() {
	return (
		<div className="applicationsPage container">
			<div className="title">
				<h1>Secretariat Applications</h1>
				<p>
					<strong>Hired Term:</strong> 2020 - 2021 Academic year
				</p>

				<p>
					<strong>Deadline for SG:</strong> June 28, 2020
				</p>
				<p>
					<strong>for all other positions:</strong> July, 12, 2020
				</p>
			</div>

			<div className="topSpacing" />
			<h2>About RichMUN</h2>
			<p>
				Founded in the 2014-2015 school year, we have always valued the social
				and community-driven aspects of Model UN. After the cancellation of
				April 2020's conference due to Covid 19, this upcoming year's RichMUN
				will be inviting previous staff to carry on their position and topics.
				With these changes, come new benefits and challenges, as well as the
				opportunity for a new Secretariat team to guide the conference into
				something new.
			</p>

			<div className="topSpacing" />
			<h2>Secretariat Expectations</h2>
			<p>
				We define professionalism as being both respectful and practical; and
				that neither should come at the cost of the other. All Secretariat are
				expected to treat staff and delegates with respect and strive towards
				effective collaboration.
			</p>

			<div className="topSpacing" />
			<h2>Application Information</h2>
			<p>
				1. You will be allowed to save and edit your application at any point
				within the form. However, if your application is not "complete" by the
				deadline, it will not be considered.
			</p>
			<p>
				2. You will also be allowed to apply for multiple positions at once -
				please review the available positions below.
			</p>
			<p>
				3. Your appeal as an potential secretariat is measured by what you are
				capable of and how you can benefit your team (similarly, harmful
				leadership practices will reduce your appeal).
			</p>
			<p>
				4. We are ultimately an educational organization and care about
				providing opportunities. If two applicants are deemed to be equally
				viable candidates, we give slight preference to applicants with less
				experience. To keep your application competitive, try to emphasize the
				skills and growth from past experiences.
			</p>
			<p>
				5. While we do our best to evaluate you fairly and reasonably, we’re
				generally cautious when hiring, and it is your responsibility to put
				your best foot forward and help us evaluate you.
			</p>

			<div className="topSpacing" />
			<h2>Available Positions</h2>
			<ul className="nav nav-tabs">
				<li className="active">
					<a className="pill-title link" data-toggle="tab" href="#sg">
						Secretary General
					</a>
				</li>
				<li>
					<a className="pill-title link" data-toggle="tab" href="#cos">
						Chief of Staff
					</a>
				</li>
				<li>
					<a className="pill-title link" data-toggle="tab" href="#usg-c">
						USG Conference
					</a>
				</li>
				<li>
					<a className="pill-title link" data-toggle="tab" href="#usg-m">
						USG Marketing and Media
					</a>
				</li>
			</ul>

			<div className="tab-content">
				<div id="sg" className="tab-pane fade in active">
					<p>
						<strong>Responsibilities Include:</strong>
					</p>
					<p>- Creating a Secretariat plan</p>
					<p>- Preparing progress reports</p>
					<p>- Assisting with all other Secretariat work as needed </p>
					<p>
						<br />
						<strong>Applicants should be:</strong>
					</p>
					<p>- capable of project organization</p>
					<p>- capable of most (if not all) work involved in the conference</p>
				</div>
				<div id="cos" className="tab-pane fade">
					<p>
						<strong>Responsibilities Include:</strong>
					</p>
					<p>- Hiring and reviewing staff applications</p>
					<p>- Designing a staff training curriculum</p>
					<p>- Designing a Backgrounder quality assurance strategy</p>
					<p>
						<br />
						<strong>Applicants should be:</strong>
					</p>
					<p>- patient and encouraging</p>
					<p>- reasonably capable of writing and research</p>
					<p>- well organized</p>
				</div>
				<div id="usg-c" className="tab-pane fade">
					<p>
						<strong>Responsibilities Include:</strong>
					</p>
					<p>- Event scheduling and planning</p>
					<p>- Organizating event catering</p>
					<p>- Administrating delegate registration </p>
					<p>
						<br />
						<strong>Applicants should be:</strong>
					</p>
					<p>- capable of event organization</p>
					<p>- capable of effectively coordinating event plans</p>
				</div>
				<div id="usg-m" className="tab-pane fade">
					<p>
						<strong>Responsibilities Include:</strong>
					</p>
					<p>- Coordinating marketing campaigns</p>
					<p>- setting up a website (through squarespace or other means)</p>
					<p>- social media, emails, and website maintenance</p>
					<p>
						<br />
						<strong>Applicants should be:</strong>
					</p>
					<p>- comfortable designing a basic website</p>
					<p>- experience conducting social media promotions</p>
					<br />
					<p className="miniText spacing">
						<i>
							** This role my be divided into USG Marketing and USG IT. If you
							are a stronger applicant for one over the other, please make
							mention in a cover letter or follow-up email.
						</i>
					</p>
				</div>
				<div className="d-flex flex-row-reverse">
					<div className="applyBox">
						<RedirectLink
							link="https://forms.gle/9Kkv2VukkVNY2HrW6"
							externalLink={true}
							delay={100}
						>
							<div>
								<p>Apply now</p>
							</div>
						</RedirectLink>
					</div>
				</div>
			</div>
			<div className="footerLink d-flex flex-row-reverse">
				<div className="applyBox">
					<RedirectLink
						link="https://forms.gle/9Kkv2VukkVNY2HrW6"
						externalLink={true}
						delay={100}
					>
						<div>
							<p>Apply now</p>
						</div>
					</RedirectLink>
				</div>
			</div>
		</div>
	);
}
